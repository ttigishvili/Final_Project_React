import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./app/Pages/Login";
import Register from "./app/Pages/Register";
import Header from "./app/components/Header";
import Loading from "./app/Pages/Loading";
import Home from "./app/components/Home";
import NotFound from "./app/components/NotFound";
import Cart from "./app/components/Cart";
import ProductPage from "./app/components/Product";
import Profile from "./app/Pages/profile";

import "./app/Styles/App.css";
import { useState } from "react";
import { AddProduct } from "./app/Pages/addproduct";

function App() {
  const token = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("isAdmin");
  let hidden = 1;
  if (isAdmin === "true") {
    hidden = 0;
  }
  const history = useHistory();

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/" exact component={Home} />
        <Route path="/details/:id" component={ProductPage} />
        <Route exact path="/loading" component={Loading} />
        {token ? (
          <div>
            <div className="content-container">
              <Switch>
                <Route path="/cart" component={Cart} />
                <Route path="/not-found" component={NotFound} />
                <Route exact path="/profile">
                  <Profile />
                </Route>
                { !hidden ?
                <Route path="/addproduct" component={AddProduct} /> : <p>not authorised</p>
              } 
              </Switch>
            </div>
          </div>
        ) : (
          <Login />
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
