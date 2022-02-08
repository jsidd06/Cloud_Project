import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { generateToken, isAuthenticated } from "./auth/jwt.js";

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((req) => {
    console.log("f*ck to MongoDB");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

// signup to MongoDB
const newSchema2 = new mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  password: String,
  forms: [],
});

const User = mongoose.model("User", newSchema2);
// login check the data in mongoose
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username }, (err, data) => {
    if (err) {
      res.send(err);
    } else if (data) {
      if (data.password === password) {
        const token = generateToken(data);
        res.status(200).json({
          id: data._id,
          firstName: data.firstName,
          lastName: data.lastName,
          username: data.username,
          token,
        });
      } else {
        res.send("wrong password");
      }
    } else {
      res.send("user not found");
    }
  });
});
// save the user data in mongoose to sign in
app.post("/signup", (req, res) => {
  new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    password: req.body.password,
  }).save(function (err) {
    if (!err) {
      res.send("Successfully signup");
    } else {
      res.send("error signup");
    }
  });
});

// get all forms  data submit with authentication 
app.post("/submit-from", isAuthenticated, (req, res) => {
  User.findOne({ username: req.user.username }, (err, user) => {
    if (err) {
      res.send(err);
    } else if (user) {
      user.forms.push(req.body);
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send("Successfully submit form");
        }
      });
    } else {
      res.send("user not found");
    }
  });
});

// get all forms data with api send to fronted using axios and then render to frontend
app.get("/get_form_data", isAuthenticated, (req, res) => {
  User.findOne({ username: req.user.username }, (err, user) => {
    if (err) {
      res.send(err);
    } else if (user) {
      res.status(200).json(user.forms);
    } else {
      res.send("user not found");
    }
  });
});

app.listen(5000, () => {
  console.log("future f*ck is running on Port 5000");
});
