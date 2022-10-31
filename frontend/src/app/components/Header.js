import React from "react";
import "../Styles/header.css";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  const token = localStorage.getItem("token")
  const history = useHistory();
  const logOut = () =>{
    localStorage.removeItem("token")
    localStorage.removeItem("isAdmin")
    localStorage.removeItem("name")
    history.push("/loading")
  }
  const isAdmin = localStorage.getItem("isAdmin");
  let hidden = 1;
  if (isAdmin === "true") {
    hidden = 0;
  }
  return (

    <header>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <div className="header">
        <button className="menu-btn" aria-label="Open Menu">
          <svg
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Open Menu"
            role="img"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>
        </button>

        <a href="/">
          <div className="logo">WebShop</div>
        </a>
        <nav className="menu">
          <div className="drawer">
            <button className="close-btn" aria-label="Close Menu">
              <svg
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Close Menu"
                role="img"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </button>
            { token ?
            <a onClick={() => logOut()}>Log out</a>
             : <a href="/login">Login</a>}
          {token ?
              <a href="/profile">Profile</a>
             : "" 
             }
          { token ?
          <div className="cart-div">
            <a href="/cart">
              
            <i class="fa-solid fa-cart-shopping"></i>

            </a>
            </div> :  ""
            }
            {!hidden ?
               <a href="/addproduct">Add Product</a> : ""
            }
          </div>

          <div className="blank"></div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
