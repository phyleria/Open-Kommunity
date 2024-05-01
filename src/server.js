const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const RegisterModel = require('./model/Register')



const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/Community");

app.post('/login', (req, res) =>{
    const{email, password} = req.body;
    RegisterModel.findOne({email:email})
    .then(user =>{
        if(user){
            if(user.password === password) {
                res.json("Success")
            }
            else{res.json("Password is incorrect")
        }
    }
            else{res.json("No record exists")}
    })
})
app.post('/register', (req,res) => {
        RegisterModel.create(req.body)
        .then(result => res.json("Account Created"))
        .catch(err => res.json(err))

    })



app.listen(3001, () =>{
    console.log("Server is running")
})