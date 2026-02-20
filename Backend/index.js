import express from "express";

const app = express();

const port =  8000;

app.get("/home", (req, res) => {
  res.json({
    Message: "Welcome to Home page student",
    Name: "saish shaikh from kalyan..........",
    Branch: "Computer science Engineering branch "
  });
});

app.listen(port, () => {
  console.log("Server Running on port " + port);
});
