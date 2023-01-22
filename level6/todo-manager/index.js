const { request, response } = require("express");
const express = require("express");
const app = express();
const { Todo } = require("./models");
const bodyParser = require("body-parser"); // to read data from request.body (to look for todo title and duedate)
app.use(bodyParser.json());

// Parent page
app.get("/", (request, response) => {
  response.send("hello world");
});

// To print the list of todos
app.get("/todos", (request, response) => {
  console.log("Todo list");
});

// route for creating a new todo
app.post("/todos", async (request, response) => {
  console.log("Creating a todo", request.body);
  // Todo

  try {
    // Creating a new method from sequelize
    const todo = await Todo.addTodo({
      title: request.body.title,
      dueDate: request.body.dueDate,
      completed: false,
    });

    // to send the todo object back as a response
    return response.json(todo);
  } catch (error) {
    console.log(error);
    // 422 - unprocessable entity
    return response.status(422).json(error);
  }
});

// To mark as completed
app.put("/todos/:id/markAsCompleted", async (request, response) => {
  console.log("We have to update a todo with ID:", request.params.id);

  // update a todo as markAsCompleted
  const todo = await Todo.findByPk(request.params.id);

  try {
    const updatedTodo = await todo.markAsCompleted();
    return response.json(updatedTodo);
  } catch (error) {
    console.log(error);
    return response.status(422).json(error);
  }
});

// To delete a todo by its id
app.delete("/todos/:id", (request, response) => {
  console.log("Delete a todo by ID: ", request.params.id);
});

app.listen(3000, () => {
  console.log("Started express server at port 3000");
});
