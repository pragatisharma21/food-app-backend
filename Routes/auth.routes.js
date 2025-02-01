import express from "express"
import { registerController } from "../Controllers/auth.controller.js";

const router2 = express.Router()

router2.post("/register", registerController)








export default router2;