const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();
const express = require('express')
const cors = require('cors');
const multer = require('multer');
const bodyParser = require('body-parser');
const fs = require('fs')
const path = require('path');
const app = express()
app.use(bodyParser.json());
const PORT = process.env.PORT || 6000;
const API = process.env.API_KEY;


app.use(cors());


const googleAI = new GoogleGenerativeAI(API);
const geminiModel = googleAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

app.use(express.json());
app.use(bodyParser.json());


var question;


const generate = async(question)=>{

    try {
        const prompt = question;
        const resp = await geminiModel.generateContent(prompt);
        const response = resp.response;
        console.log(response.text());
        return response.text();
    } catch (error) {
        console.log("response error", error);
    }
};


// create own ai api 

app.post("/api/question" , async(req , res)=>{
    let data  = req.body.question;
    var result = await generate(data);
    console.log(data);
    res.json({"AI Response :" : result});
})



app.get('/', (req , res)=>{
    res.json("Hey GOogle")
});


// asked question for ai 





app.listen(PORT, ()=>{
    console.log(`The server running on the Port ${PORT}`);
    
})