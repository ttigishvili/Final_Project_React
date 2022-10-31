import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import {
  getMainProducts,
  createProduct,
  deleteProduct,
  getProductById,
} from "../controllers/products.js";
import { addToCart, deleteCart, getCart } from "../controllers/cart.js";

const router = express.Router();

router.get("/users", verifyToken, getUsers);
router.post("/users", Register);
router.get("/products", getMainProducts);
router.get("/products/:id", getProductById);
router.delete("/products/:id", deleteProduct);

router.get("/cart", getCart);
router.post("/cart", addToCart);
router.delete("/cart", deleteCart);

router.post("/products", createProduct);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);

export default router;
