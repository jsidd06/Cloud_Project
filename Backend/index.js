import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json())

// Connect to MongoDB
mongoose.connect(process.env.MONGODB, { useNewUrlParser: true, useUnifiedTopology: true }).then((req) => {
    console.log('f*ck to MongoDB');
}).catch((err) => {
    console.log('Error: ', err);
})

// set the schema for mongoose
const newSchema = new mongoose.Schema({
    username: String,
    password: String,
})

const loginUser = mongoose.model('loginUser', newSchema);

app.post('/login', (req, res) => {
    new loginUser ({ username: req.body.username, password: req.body.password }).save(function(err){
        if(!err){
            res.send('Successfully login');
        }else{
            res.send("error login");
        }
    })
})


app.listen(5000, () => {
    console.log('future f*ck is running on Port 5000')
})