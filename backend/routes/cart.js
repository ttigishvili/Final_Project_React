import express from "express";
import { addToCart, deleteCart, getCart } from "../controllers/cart";

const router = express.Router();

router.get("/", getCart);
router.post("/", addToCart);
router.delete("/", deleteCart);

export default router;
