import express from "express"
import { testusercontroller } from "../Controllers/user.controller.js";

const router = express.Router()


router.post("/login", testusercontroller)








export default router;