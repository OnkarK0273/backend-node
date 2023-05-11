const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const signRoute = require("./routes/sign.route");
const loginRoute = require("./routes/login.route");
const employeesRoute = require("./routes/quiz.route");
const quizRoute = require("./routes/quiz.route");

const app = express();

// global middlewers 
app.use(express.json())
app.use(cors());


// routes

app.use("/signup",signRoute)

app.use("/signin",loginRoute)


app.use("/quiz",quizRoute)




app.listen(4500, async () => {
    try {
      await mongoose.connect("mongodb+srv://onkar:onkaratlas@cluster0.xxociih.mongodb.net/moc13?retryWrites=true&w=majority");
      console.log("connected db");
    } catch (err) {
      console.log("not-connected");
      console.log(err);
    }
    console.log("port 4500 running");
  });