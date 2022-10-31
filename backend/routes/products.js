import express from "express";
import {
  createProduct,
  deleteProduct,
  getMainProducts,
  queryProducts,
  rateProduct,
  updateProduct,
} from "../controllers/products.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { roleMiddleware } from "../middlewares/role.middleware.js";

const router = express.Router();

router.get("/", getMainProducts);

router.get("/search", queryProducts);

router.post("/", createProduct);

router.post("/:productId/users/:userId/rate", authMiddleware, rateProduct);

router.put("/:id", authMiddleware, roleMiddleware, updateProduct);

router.delete("/:id", authMiddleware, roleMiddleware, deleteProduct);

export default router;
