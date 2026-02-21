import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { DBconnect } from "./Config/db.js";
import Authrouter from "./Routes/auth.route.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());          
app.use(cookieParser());          
app.use("/api/auth", Authrouter); 

const port = process.env.PORT || 8000;

app.get("/Home", (req, res) => {
  res.send("Home page");
});

app.listen(port, () => {
  DBconnect();
  console.log("SERVER RUNNING on " + port);
});
