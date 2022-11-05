import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../slices/cartSlice";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
  const [count, setCount] = useState(0);
  const [product, setProduct] = useState([]);
  const [cartItems, setCart] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [log, setLog] = useState("");
  const [prevVal, setPrevVal] = useState(0);

  const setLogIfArrowClicked = (e, product) => {
    const currentVal = e.target.value;
    if (currentVal - prevVal === 1) {
      setLog(`${log}+`);
      console.log(product, "product");
      dispatch(addToCart(product));
    } else if (currentVal - prevVal === -1) {
      setLog(`${log}-`);
      console.log(product, "product");
      dispatch(decreaseCart(product));
    }
    setPrevVal(currentVal);
  };

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const userid = localStorage.getItem("id");
  useEffect(() => {
    axios
      .get("http://localhost:5000/cart", { params: { user_id: userid } })
      .then((resp) => {
        const cartItems = resp.data;
        setCart(resp.data);
      });
    axios.get("http://localhost:5000/products").then((resp) => {
      const products = resp.data;
      setProduct(resp.data);
    });
  }, []);
  useEffect(() => {
    mapProducts();
  }, [product, cartItems]);
  let array = [];
  console.log(count);
  const filterProducts = (item) => {
    let filter = product.filter((pro) => array.push(pro.id == item));
    setFilteredItems({ ...filteredItems, filter });
    const rame = { ...filter, filter };
  };
  const mapProducts = () => {
    let mapped = cartItems?.cart?.map((item) => {
      return filterProducts(item);
    });
  };

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product, e) => {
    if (product.id == e.target.name) {
      setCount(count + 1);
    }
    dispatch(addToCart(product));
    console.log(e.target.name);
  };
  const handleDecreaseCart = (product, e) => {
    if (product.id == e.target.name) {
      setCount(count - 1);
    }
    console.log(product.id, "product_ID");
    dispatch(decreaseCart(product));
    console.log(e.target.name, "cartInId");
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleClearCart = () => {
    try {
      let user_id = localStorage.getItem("id");
      const item = {
        user_id: user_id,
      };
      axios
        .delete("http://localhost:5000/cart")
        .then((response) => this.setState({ articleId: response.data.id }));
    } catch (error) {
      if (error.response) {
        console.log("Error");
      }
    }
    alert("Deleted");
  };
  const checkoutProducts = (useEffect) => {
    dispatch(getTotals());
    dispatch(clearCart());
  };
  const inputFunction = (e) => {
    if(e.target.value > count){
      setCount(count + 1)
      console.log("increased");
    } else{
      setCount(count - 1)
      console.log("decreased");
    }
  }
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <div>{cartItems.cartProducts?.map((item) => {})}</div>
      <div>
        <div className="titles">
          <h3 className="product-title">Product</h3>
          <h3 className="price">Price</h3>
          <h3 className="quantity">Quantity</h3>
          <h3 className="total">Total</h3>
        </div>
        <div className="cart-items">
          {cartItems.cartProducts &&
            cartItems.cartProducts.map((cartItem) => (
              <div className="cart-item" key={cartItem.product.id}>
                <div className="cart-product">
                  <img
                    src={"http://localhost:5000" + cartItem.product.image}
                    alt={cartItem.product.name}
                  />
                  <div>
                    <h3>{cartItem.product.name}</h3>
                    <p>{cartItem.product.desc}</p>
                    <button
                      onClick={() => handleRemoveFromCart(cartItem.product)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="cart-product-price">
                  ${cartItem.product.price}
                </div>
                <div className="cart-product-quantity">

                  <input type="number" min={1}  onChange={(e) =>setLogIfArrowClicked(e, cartItem.product)}/>
                </div>
                <div className="cart-product-total-price">
                  ${cartItem.product.price * 1}
                </div>
              </div>
            ))}
        </div>
        <div className="cart-summary">
          <button className="clear-btn" onClick={() => handleClearCart()}>
            Clear Cart
          </button>
          <div className="cart-checkout">
            <div className="subtotal">
              <span>Subtotal</span>
              <span className="amount">${cart.cartTotalAmount}</span>
            </div>
            <p>Taxes and shipping calculated at checkout</p>
            <button onClick={() => handleClearCart()}>Check out</button>

            <div className="continue-shopping">
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>
                <span>Continue Shopping</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
