import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import router from "./routes/index.js";
import { products } from "./products.js";

dotenv.config();

const app = express();

try {
  await db.authenticate();
  console.log("Database Connected...");
} catch (error) {
  console.error(error);
}

app.use(cors({ credentials: true, origin: "http://localhost:5000" }));
app.use(cookieParser());
app.use(express.json());
app.use("/images", express.static("images"));
app.use(router);

app.get("/", (req, res) => {
  res.send("Welcome our to online shop API...");
});

//app.get("/products", (req, res) => {
//  res.send(products);
// });

app.get("/products/get", (req, res) => {
  const id = parseInt(req.query.id);
  var product = products.find((item) => item.id === id);
  res.send(product);
});

app.listen(5000, () => console.log("Server running at port 5000"));
