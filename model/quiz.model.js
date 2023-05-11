const mongoose = require("mongoose")


const quizScema = mongoose.Schema({
    creator:String,
    title:String,
    Email:String,
    description:String,
    questions:[
        {
            title:String,
            answerOptions:[String],
            correctOptions:[Number]
        }
    ]
})


const QuizModal = mongoose.model("quize",quizScema)

module.exports = QuizModal