import React from "react";
import "../Styles/productPage.css";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(0);

  const fetchProduct = async () => {
    const res = await axios.get("http://localhost:5000/products/" + id);
    setProduct(res.data.product);
  };

  fetchProduct();

  return (
    <div className="card-wrapper ">
      <div className="card">
        <div className="product-imgs">
          <div className="img-display">
            <div className="img-showcase">
              <img src={"http://localhost:5000" + product.image} alt="iphone" />
              <img src={"http://localhost:5000" + product.image} alt="iphone" />
              <img src={"http://localhost:5000" + product.image} alt="iphone" />
              <img src={"http://localhost:5000" + product.image} alt="iphone" />
            </div>
          </div>
          <div className="img-select">
            <div className="img-item">
              <a href="#" data-id="1">
                <img
                  src={"http://localhost:5000" + product.image}
                  alt="iphone"
                />
              </a>
            </div>
            <div className="img-item">
              <a href="#" data-id="2">
                <img
                  src={"http://localhost:5000" + product.image}
                  alt="iphone"
                />
              </a>
            </div>
            <div className="img-item">
              <a href="#" data-id="3">
                <img
                  src={"http://localhost:5000" + product.image}
                  alt="iphone"
                />
              </a>
            </div>
            <div className="img-item">
              <a href="#" data-id="4">
                <img
                  src={"http://localhost:5000" + product.image}
                  alt="iphone"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="product-content">
          <h2 className="product-title">{product.name}</h2>
          <ReactStars
            value={product.rating}
            count={5}
            size={30}
            activeColor="#ffd700"
          />

          <div className="product-price">
            <p className="new-price">
              Price: <span>${product.price} </span>
            </p>
          </div>

          <div className="product-detail">
            <h2>about this item: </h2>
            <p>{product.details}</p>

            <ul>
              <li>
                Color: <span>{product.color}</span>
              </li>
              <li>
                Available: <span>in stock</span>
              </li>
              <li>
                Category: <span>{product.category}</span>
              </li>
              <li>
                Shipping Area: <span>All over the world</span>
              </li>
              <li>
                Shipping Fee: <span>Free</span>
              </li>
            </ul>
          </div>

          <div className="purchase-info">
            <input type="number" min="0" value="1" />
            <button type="button" className="btn">
              Add to Cart <i className="fas fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductPage;
