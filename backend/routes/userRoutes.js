import express from "express";
import {
	authUser,
	registerUser,
	getUserProfile,
	updateUserProfile,
	getUsers,
} from "../controllers/userController.js";
const router = express.Router();
import { protect } from "../Middleware/authMiddleware.js";

router.route("/").post(registerUser).get(protect, getUsers);
router.post("/login", authUser)
router
	.route("/profile")
	.get(protect, getUserProfile)
	.put(protect, updateUserProfile);

export default router;
