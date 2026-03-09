import express from "express";
import { getUser } from "../Controllers/User.controller.js";
import isAuth from "../Middlewares/isAuth.js";

const Userrouter = express.Router();

Userrouter.get("/me", isAuth, getUser);

export default Userrouter;
