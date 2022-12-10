import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SignIn = () => {
  //   return (
  //     <>

  /* <div className="login-container">
        <form method='POST' className="form-login">
            <ul className="login-nav">
                <li className="login-nav__item active">
                    <a href="#">Sign In</a>
                </li>
                <li className="login-nav__item">
                    <a href="/signup">Sign Up</a>
                </li>
            </ul>
            <label htmlFor="login-input-user" className="login__label">
                Username
            </label>
            <input id="login-input-user" className="login__input" type="text" />
            <label htmlFor="login-input-password" className="login__label">
                Password
            </label>
            <input id="login-input-password" className="login__input" type="password" />
          
            <button className="login__submit" disabled>Sign in</button>
        </form>
       
    </div> */

  //     </>
  //   )

  const [data, setData] = useState({ email: "", password: "" });
  // const [error, setError] = useState("");

  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setData({ ...data, [name]: value });
    console.log(data);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const url = "/signin";
  //     const res  = await axios.post(url, data);
  //     localStorage.setItem("token", res.data);
  //     window.location = "/home";
  //   } catch (error) {
  //     if (
  //       error.response &&
  //       error.response.status >= 400 &&
  //       error.response.status <= 500
  //     ) {
  //       setError(error.response.data.message);
  //     }
  //   }
  // };


  // https://testing-2-x2zd.onrender.com

  const postData = async (e) => {
    e.preventDefault();
    const {email, password } = data;
    const res = await axios
      .post("/signin", {
        email,
        password,
      })
      .then(async () => {
        const data = await res.json();
        console.log(data);
        data.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="login_container">
      <div className="login_form_container">
        <div className="login-left">
          <form className="form_container" onSubmit={postData}>
            <h1>Login to Your Account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className="input"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className="input"
            />
            {/* {error && <div className="error_msg">{error}</div>} */}
            <button type="submit" className="green_btn">
              Sing In
            </button>
          </form>
        </div>
        <div className="login-right">
          <h1>New Here ?</h1>
          <Link to="/signup">
            <button type="button" className="white_btn">
              Sing Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
