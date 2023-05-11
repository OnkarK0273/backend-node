const express = require("express");
const QuizModal = require("../model/quiz.model");


const quizRoute = express.Router()

quizRoute.get("/",async(req,res)=>{

    
    try{
        let quiz = await QuizModal.find()

        res.status(201).send({"data":quiz})

    }catch(err){
        res.status(400).json({err:err.message})
    }

})


quizRoute.post("/",async(req,res)=>{

    try{
        let newquiz = new QuizModal(req.body)
        await newquiz.save()
        res.status(201).send({"message":"quiz data Added"})
    }catch(err){
        res.status(400).json({err:err.message})
    }
})




module.exports = quizRoute

