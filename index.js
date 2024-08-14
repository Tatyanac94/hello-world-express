// step 1: Import Express
const express = require("express");

// step 2: Import CORS
const cors = require("cors");

// step 3: Create an express application
const app = express(); // calling

// step 4: Define a port
const PORT = 4000;

// step 5: Define our Middleware & Use CORS Middleware
app.use(cors()); // Enables Cross-Origin Resource Sharing
app.use(express.json()); // Parses JSON bodies

// step 6: Define our Routes
app.get("/", (request, response, next) => {
  response.send({ hello: "World!" });
});

// NOTE: For Postman remember the CRUD app acronym to define the routes you may need.
// Example: Collection - Hello World Express

// Create: POST request
app.post("/hello", (request, response) => {
  response.send("hello route POST request");
});

// Read: GET request
app.get("/hello", (request, response) => {
  response.send("hello route GET request");
});

// Update: PUT request
app.put("/hello", (request, response) => {
  response.send("hello route PUT request");
});

// Delete: DELETE request
app.delete("/hello", (request, response) => {
  response.send("hello route DELETE request");
});

// step 7: Error Handling
// Generic Error Handling
app.use((error, request, response, next) => {
  console.error(error.stack);
  response.status(500).json({
    error: "Something broke!",
    errorStack: error.stack,
    errorMessage: error.message,
  });
});

// step 8: 404 Resource not found Error Handling
app.use((request, response, next) => {
  response.status(404).json({
    error: "Resource not found. Are you sure you're looking in the right place?",
  });
});

// step 9: Make the server listen on our port
app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
