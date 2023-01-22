const express = require("express");
const app = express();

// Parent page
app.get("/", (request, response) => {
  response.send("hello world");
});

// To print the list of todos
app.get("/todos", (request, response) => {
  console.log("Todo list");
});

// route for creating a new todo
app.post("/todos", (request, response) => {
  console.log("Creating a todo", request.body);
});

// To mark as completed
app.put("/todos/:id/markAsCompleted", (request, response) => {
  console.log("We have to update a todo with ID:", request.params.id);
});

// To delete a todo by its id
app.delete("/todos/:id", (request, response) => {
  console.log("Delete a todo by ID: ", request.params.id);
});

app.listen(3000, () => {
  console.log("Started express server at port 3000");
});
