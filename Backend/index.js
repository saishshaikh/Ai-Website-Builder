import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { DBconnect } from "./Config/db.js";
import Authrouter from "./Routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cookieParser());

// ✅ CORS must come BEFORE routes
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);

// routes
app.use("/api/auth", Authrouter);

const port = process.env.PORT || 8000;

app.get("/Home", (req, res) => {
  res.send("Home page");
});

app.listen(port, () => {
  DBconnect();
  console.log("SERVER RUNNING on " + port);
});
