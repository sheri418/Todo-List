const express =require ("express");   //basically import express framework into your script and require common way in node.js to external import module, you are import express module
const app=express();   //which you store variable app . app will be use config routes and setting for your web application
const cors = require("cors");  //stand for cross-origin resource sharing is used to enable communication between different domain 
const pool=require("./db");
//middleware
app.use(cors());  //cors middleware for all routes in your application
app.use(express.json());



//Routes


//create a todo

app.post("/todos", async (req, res) => {
    try {
       console.log(req.body);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


app.listen(5000, (err) => {
    if (err) {
      console.error("Error starting server:", err);
    } else {
      console.log("Server started on port 5000");
    }
  });
  