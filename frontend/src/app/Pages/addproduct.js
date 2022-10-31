import axios from "axios";
import React, { useState } from "react";
import "../Styles/addproduct.css";

export const AddProduct = () => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [details, setDetails] = useState("");
  const [color, setColor] = useState("");
  const [rating, setRating] = useState("");
  const [category, setCategory] = useState("");

  let newProduct = {
    name,
    brand,
    desc,
    price,
    image,
    details,
    color,
    rating,
    category,
  };

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/products", {
        product: newProduct,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "200px",
        justifyContent: "center",
      }}
    >
      <form onSubmit={(e) => submitForm(e)}>
        <label>add name</label>
        <input
          placeholder="Type to Search..."
          type="text"
          onChange={({ target }) => setName(target.value)}
          value={name}
          required
        />
        <label>add brand</label>
        <input
          placeholder="Type to Search..."
          type="text"
          onChange={({ target }) => setBrand(target.value)}
          value={brand}
          required
        />
        <label>add desc</label>
        <input
          placeholder="Type to Search..."
          type="text"
          onChange={({ target }) => setDesc(target.value)}
          value={desc}
          required
        />
        <label>add price</label>
        <input
          placeholder="Type to Search..."
          type="number"
          onChange={({ target }) => setPrice(target.value)}
          required
          value={price}
        />
        <label>add image</label>
        <input
          placeholder="Type to Search..."
          type="text"
          onChange={({ target }) => setImage(target.value)}
          required
          value={image}
        />
        <label>add details</label>
        <input
          placeholder="Type to Search..."
          type="text"
          onChange={({ target }) => setDetails(target.value)}
          required
          value={details}
        />
        <label>add color</label>
        <input
          placeholder="Type to Search..."
          type="text"
          onChange={({ target }) => setColor(target.value)}
          required
          value={color}
        />
        <label>add rating 1-5</label>
        <input
          placeholder="Type to Search..."
          type="number"
          onChange={({ target }) => setRating(target.value)}
          required
          value={rating}
        />
        <label>add category</label>
        <input
          placeholder="Type to Search..."
          type="text"
          onChange={({ target }) => setCategory(target.value)}
          required
          value={category}
        />
        <button type="submit">addproduct</button>
      </form>
    </div>
    
  );
};
