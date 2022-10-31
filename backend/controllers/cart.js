import mongoose from "mongoose";
import Products from "../models/ProductModel.js";
import db from "../config/Database.js";
import CartItem from "../models/CartItem.js";

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

export const addToCart = async (req, res) => {
  const { product_id, user_id } = req.body;

  try {
    await CartItem.create({
      product_id: product_id,
      user_id: user_id,
    });
    res.status(200).json({ msg: "Added successfully" });
    console.log(error);
  } catch (error) {
    console.log(error);
  }
};

export const getCart = async (req, res) => {
  const user_id = req.query.user_id;

  try {
    const cartProducts = await CartItem.findAll({
      where: { user_id: user_id },
      include: Products,
    });

    res.status(200).json({ cartProducts });
  } catch (error) {
    console.log(error);
  }
};

export const deleteCart = async (req, res) => {
  const user_id = req.query.user_id;

  try {
    CartItem.destroy({
      where: { user_id: user_id },
      truncate: true,
    });

    res.status(200).json("Deleted");
  } catch (error) {
    console.log(error);
  }
};
