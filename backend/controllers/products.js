import mongoose from "mongoose";
import Products from "../models/ProductModel.js";
import db from "../config/Database.js";

export const queryProducts = async (req, res) => {
  const { name } = req.query;
  try {
    const filtered = await Products.find({
      name: { $regex: name, $options: "i" },
    });
    res.status(200).json({ products: filtered });
  } catch (err) {
    res.status(500).json({ message: "something went wrong", err });
  }
};

export const getMainProducts = async (req, res) => {
  try {
    const mainProducts = await Products.findAll({});
    return res.status(200).json(mainProducts);
  } catch (error) {
    console.log("error in getAllProducts", error);
    return res
      .status(500)
      .json({ message: "Internal server error", products: [] });
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Products.findByPk(id);
    return res.json({ message: "product retrieved successfully", product });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  const { name, brand, desc, price, image, details, color, rating, category } =
    req.body.product;

  try {
    await Products.create({
      name: name,
      brand: brand,
      description: desc,
      price: price,
      image: image,
      details: details,
      color: color,
      rating: rating,
      category: category,
    });
    res.status(200).json({ msg: "Register Successful" });
    console.log(error);
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (req, res) => {
  const { id: _id } = req.params;
  const { product } = req.body;
  console.log("product before update", product);
  try {
    console.log("product from body", product);
    const updatedProduct = await Product.findOneAndUpdate({ _id }, product, {
      new: true,
    });
    console.log("updated product", updatedProduct);
    return res.status(200).json({
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

export const deleteProduct = async (req, res) => {
  var product = { id: req.params.id };
  db.query(
    "DELETE FROM products WHERE id = " + req.params.id,
    product,
    function (err, result) {
      if (err) {
        req.flash("error", err);
        res.redirect("/");
      } else {
        return res.status(200).json({ message: "Item successfully deleted" });
      }
    }
  );
};
