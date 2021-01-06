import express from "express";
import { addOrderItems } from "../controllers/orderController.js";
const router = express.Router();
import { protect } from "../Middleware/authMiddleware.js";

router.route("/").post(protect, addOrderItems);

export default router;
