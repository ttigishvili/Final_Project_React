import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { addToCart } from "../slices/cartSlice";
import { useGetAllProductsQuery } from "../slices/productsApi";
import ReactStars from "react-rating-stars-component";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Slider } from "@mui/material";

import "../Styles/search.css";

const Home = () => {
  const { items: products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const history = useHistory();
  const { data, error, isLoading } = useGetAllProductsQuery();
  const [newData, setData] = useState([]);

  useEffect(() => {
    setData(data);
  }, [data]);


  const filterResult = (catItem) => {
    const result = products.filter((curData) => {
      return curData.category === catItem;
    });
    setData(result);
  };

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:5000/products/${id}`).then((res) => {
     
    });

  };

  const filterResult2 = (catItem) => {
    const result = products.filter((curData) => {
      return curData.brand.toLowerCase().includes(catItem.toLowerCase())
    });
    setData(result);
  };
  const filterResult3 = (catItem) => {
    const result = products.filter((curData) => {
      return curData.color === catItem;
    });
    setData(result);
  };
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
    const word = e.target.value;
    const result = products.filter((curData) => {
      return curData.name.toLowerCase().includes(word.toLowerCase());
    });
    setData(result);
  };


  const handleAddToCart = (id) => {
    try {
      let user_id = localStorage.getItem("id");
      const item = {
        user_id: user_id,
        product_id: id,
      };
      axios
        .post("http://localhost:5000/cart", item)
        .then((response) => this.setState({ articleId: response.data.id }));
    } catch (error) {
      if (error.response) {
        console.log("Error");
      }
    }
    history.push("/Loading");
  };
  const token = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("isAdmin");
  let hidden = 1;
  if (isAdmin === "true") {
    hidden = 0;
  }

  const element = document.querySelector(".buttons-wrapper");
  const element1 = document.querySelector(".contentButton");
  const element2 = document.querySelector(".contentButton1");
  const element3 = document.querySelector(".buttons-wrapper-1");
  const element4 = document.querySelector(".inactive");
  const element5 = document.querySelector(".inactive1");
  const element6 = document.querySelector(".buttons-wrapper-2");
  const element7 = document.querySelector(".inactive");
  const element8 = document.querySelector(".contentButton2");
  function myFunction() {
    element.classList.toggle("active");
    element1.classList.toggle("activeButton");
    element4.classList.toggle("btnActive");
  }

  function myFunction1() {
    element3.classList.toggle("active1");
    element2.classList.toggle("activeButton1");
    element5.classList.toggle("btnActive1");
  }
  function myFunction2() {
    element6.classList.toggle("active2");
    element8.classList.toggle("activeButton2");
    element5.classList.toggle("btnActive2");
  }

  return (
    <div className="home-container">
      {status === "success" ? (
        <>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          ></link>

          <h2>Expolre The Market</h2>
          <div className="both-divs">
            <div className="search-div">
              <input
                className="search-bar"
                placeholder="Type to Search..."
                type="text"
                id="message"
                name="message"
                onChange={(e) => handleChange(e)}
                value={message}
              />
              <div>
                <div className="buttons-wrapper " id="button-div">
                  <a
                    className="bn13 contentButton"
                    onClick={() => myFunction()}
                  >
                    Categories
                  </a>
                  <a
                    className="bn13 inactive"
                    onClick={() => filterResult("laptop")}
                  >
                    Laptop
                  </a>
                  <a className="bn13 " onClick={() => filterResult("phone")}>
                    Phone
                  </a>
                  <a className="bn13 " onClick={() => filterResult("clothes")}>
                    Clothes
                  </a>
                </div>

                <div className="buttons-wrapper-1  " id="button-div">
                  <a
                    className="bn13 contentButton1"
                    onClick={() => myFunction1()}
                  >
                    Brand
                  </a>
                  <a className="bn13" onClick={() => filterResult2("Asus")}>
                    Asus
                  </a>
                  <a
                    className="bn13 inactive1"
                    onClick={() => filterResult2("Nike")}
                  >
                    Nike
                  </a>
                  <a className="bn13 " onClick={() => filterResult2("Apple")}>
                    Apple
                  </a>
                  <a className="bn13 " onClick={() => filterResult2("Samsung")}>
                    Samsung
                  </a>
                  <a className="bn13 " onClick={() => filterResult2("Xiaomi")}>
                    Xiaomi
                  </a>
                  <a className="bn13 " onClick={() => filterResult2("Acer")}>
                    Acer
                  </a>
                  <a className="bn13 " onClick={() => filterResult2("Hp")}>
                    HP
                  </a>
                </div>

                <div className="buttons-wrapper-2 " id="button-div">
                  <a
                    className="bn13 contentButton2"
                    onClick={() => myFunction2()}
                  >
                    Color
                  </a>
                  <a className="bn13" onClick={() => filterResult3("Black")}>
                    Black
                  </a>
                  <a
                    className="bn13"
                    onClick={() => filterResult3("White")}
                  >
                    White
                  </a>
                  <a className="bn13" onClick={() => filterResult3("Blue")}>
                    Blue
                  </a>
                  
                </div>
              </div>

            </div>
            
            <div className="products">
              {newData &&
                newData?.map((product) => (
                  <div key={product.id} className="product">
                    <h3>{product.name}</h3>
                    <img
                      src={"http://localhost:5000" + product.image}
                      alt={product.name}
                    />
                    <div className="details">
                      <span>{product.description}</span>
                    </div>
                    <span className="price">${product.price}</span>

                    {token ? (
                      <ReactStars
                        value={product.rating}
                        count={5}
                        size={30}
                        activeColor="#ffd700"
                      />
                    ) : (
                      ""
                    )}
                    {token ? (
                      <button onClick={(e) => handleAddToCart(product.id)}>
                        Add To Cart
                      </button>
                    ) : (
                      ""
                    )}

                    <Link to={`details/${product.id}`}>View </Link>

                    {!hidden ? (
                      <>
                        <button onClick={() => deleteProduct(product.id)}>
                          Delete
                        </button>
                        <span>Product id : {product.id}</span>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                ))}
            </div>
          </div>
        </>
      ) : status === "pending" ? (
        <p>Loading...</p>
      ) : (
        <p>Unexpected error occured...</p>
      )}
    </div>
  );
};

export default Home;
