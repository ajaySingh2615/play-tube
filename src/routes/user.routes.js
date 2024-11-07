import { Router } from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multar.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// register a user
router.route("/register").post(
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  registerUser
);

// login user
router.route("/login").post(loginUser);

// secured routes
router.route("/logout").post(verifyJWT, logoutUser);

export default router;
