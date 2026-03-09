import express from "express";
import dotenv from "dotenv";
dotenv.config();

import userrouter from "./routes/user.route.js";
import { DBconnect } from "./Config/db.js";
import Authrouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);

// routes
app.use("/api/auth", Authrouter);
app.use("/api/user", userrouter);

const port = process.env.PORT || 8000;

app.get("/Home", (req, res) => {
  res.send("Home page");
