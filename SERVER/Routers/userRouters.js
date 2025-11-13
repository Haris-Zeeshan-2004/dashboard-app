import express from "express";
import {
  getCurrentUser,
  Login,
  Logout,
  Register,
} from "../Controllers/userController.js";

const router = express.Router();

router.post("/register", Register);

router.post("/login", Login);

router.post("/logout", Logout);

router.get("/me", getCurrentUser);

export default router;
