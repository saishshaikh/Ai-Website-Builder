import express from "express"
import { googleAuth, logOut } from "../Controllers/auth.contoller.js"

const Authrouter = express.Router()

Authrouter.post("/google",googleAuth)
Authrouter.get("/LogOut",logOut)

export default Authrouter