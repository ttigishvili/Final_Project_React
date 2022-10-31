import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const history = useHistory();

  const Auth = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post("http://localhost:5000/login", {
        email: email,
        password: password,
      });

      localStorage.setItem("token", result.data.accessToken);
      localStorage.setItem("isAdmin", result.data.isAdmin);
      localStorage.setItem("name", result.data.name);
      localStorage.setItem("email", result.data.email);
      localStorage.setItem("time", result.data.createdAt);
      localStorage.setItem("id", result.data.userId);
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
    history.push("/Loading")
  };
  const token = localStorage.getItem("token");
  return (
    
    <>
    {token ? 
      <p>Already Logged In</p> : 
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4-desktop">
              <form onSubmit={Auth} className="box">
                <p className="has-text-centered">{msg}</p>
                <div className="field mt-5">
                  <label className="label">Email or Username</label>
                  <div className="controls">
                    <input
                      type="text"
                      className="input"
                      placeholder="Username"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Password</label>
                  <div className="controls">
                    <input
                      type="password"
                      className="input"
                      placeholder="******"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <button className="button is-success is-fullwidth">
                    Login
                  </button>
                </div>
                <li>
                  <a href="/register">Dont Have an accoount?</a>
                </li>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  }
  </>
  );
};

export default Login;
