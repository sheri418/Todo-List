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
      const { description } = req.body;
const newTodo = await pool.query
("INSERT INTO todo (description) VALUES($1) RETURNING *", 
[description]);
res.json(newTodo.rows[0]); 

      } catch (err) {
        console.error(err.message);
        // res.status(500).send('Server Error');
    }
});
// get all todos
app.get("/todos",async(req,res)=>{
   try{
    const allTodos= await pool.query("SELECT * FROM todo");
res.json(allTodos.rows);
   }catch(err){
    console.error(err.messaage)
   }
});

//get a todo
app.get("/todos/:id", async(req,res)=>{
  try{
   const {id}= req.params;
   const todo=await pool.query("SELECT * FROM todo WHERE todo_id=$1",[id])
   res.json(todo.rows[0]);

  }catch(err){
    console.error(err.message)
  }
});

//update a todo

app.put("/todos/:id",async(req,res)=>{
  try{
    const {id}=req.params;
    const {description} = req.body;
    const updateTodo=await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2",[description,id]);
    res.json("Todo was Update")

  }catch(err){
    console.error(err.messaage);
  }
});

// DELETE todos
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
    res.json("Todo deleted");
  } catch (err) {
    console.error(err.message);  // Fix the typo here
  }
});



app.listen(5000, (err) => {
    if (err) {
      console.error("Error starting server:", err);
    } else {
      console.log("Server started on port 5000");
    }
  });
  