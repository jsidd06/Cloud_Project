import dotenv from "dotenv";
dotenv.config();
import express, { json } from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import pdf from "pdf-creator-node";
import fs from "fs";
import cors from "cors";
import { generateToken, isAuthenticated } from "./auth/jwt.js";
import { nanoid } from "nanoid";
import { formFields } from "./fake-data/data.js";
import { resolveSoa } from "dns";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/reports/pdf", express.static("reports"));

// pdf
var html = fs.readFileSync("template.html", "utf8");

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((req) => {
    console.log("connected to MongoDB");
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
      bcrypt.compare(req.body.password, data.password, function (err, result) {
        if (result) {
          const token = generateToken(data);
          res.status(200).json({
            id: data._id,
            firstName: data.firstName,
            lastName: data.lastName,
            username: data.username,
            token,
          });
        } else {
          res.status(401).json("wrong password");
        }
      });
    } else {
      res.status(404).json("user not found");
    }
  });
});
// save the user data in mongoose to sign in
app.post("/signup", (req, res) => {
  new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 10),
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
  let formid = null;
  fs.readFile("formid.txt", (err, data) => {
    console.log(data);
    if (!data) {
      fs.writeFile("formid.txt", "10000", (err) => {
        if (err) {
          console.log(err);
          return;
        }
        formid = 10000;
      });
    } else {
      const currentIdCounter = parseInt(data);
      const nextIdCounter = currentIdCounter + 1;
      console.log("next counter", nextIdCounter);
      fs.writeFile("formid.txt", String(nextIdCounter), (err) => {
        if (err) {
          console.log(err);
          return;
        }
        formid = nextIdCounter;
      });
    }
  });
  User.findOne({ username: req.user.username }, (err, user) => {
    if (err) {
      res.send(err);
    } else if (user) {
      user.forms.push({ ...req.body, _id: formid });
      user.save((err, doc) => {
        if (err) {
          res.send(err);
        } else {
          res.status(201).json(doc);
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

// get add data in search api
app.post("/search", isAuthenticated, (req, res) => {
  const { search } = req.body;
  User.findOne({ username: req.user.username }, (err, user) => {
    if (err) {
      res.send(err);
    } else if (user) {
      const data = user.forms.filter((form) => {
        return form.gst.toLowerCase().includes(search.toLowerCase());
      });
      res.status(200).json(data);
    } else {
      res.send("user not found");
    }
  });
});
// api pdf report
app.post("/report/generate-pdf", isAuthenticated, (req, res) => {
  const { formid } = req.body;
  const fileName = nanoid();
  var options = {
    format: "A3",
    orientation: "portrait",
    border: "10mm",
    header: {
      height: "45mm",
      contents: `<div >
      <div><b>Form ID</b> :- <span style="margin-left : 10px">${formid}</span></div>
      <div><b>Username</b> :- <span style="margin-left : 10px">${
        req.user.username
      }</span></div>  
      <div><b>Full Name</b> :- <span style="margin-left : 10px">${req.user.firstName.toUpperCase()} ${req.user.lastName.toUpperCase()}</span></div>
      <div><b>Date & Time</b> :- <span style="margin-left : 10px">${new Date()}</span></div>
      </div>`,
    },
    footer: {
      height: "28mm",
      contents: {
        first: ``,
        2: "Second page", // Any page number is working. 1-based index
        default:
          '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
        last: "Last Page",
      },
    },
  };
  User.findOne({ username: req.user.username }, (err, user) => {
    if (err) {
      res.send(err);
    } else if (user) {
      const forms = user.forms;
      const form = forms.find((form) => form._id == formid);
      delete form["_id"];
      if (form) {
        var document = {
          html: html,
          data: {
            data: form,
          },
          path: `./reports/${req.user.username}/${fileName}.pdf`,
          type: "",
        };
        pdf
          .create(document, options)
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
            console.error(error);
          });
        res.status(200).json({
          url:
            req.protocol +
            "://" +
            req.get("host") +
            `/reports/pdf/${req.user.username}/${fileName}.pdf`,
        });
      } else {
        res.status(404).json("form not found");
      }
    } else {
      res.send("user not found");
    }
  });
});

app.listen(5000, () => {
  console.log("connect with Port 5000");
});
