import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SignIn = () => {

  const [data, setData] = useState({ email: "", password: "" });
  // const [error, setError] = useState("");

  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setData({ ...data, [name]: value });
    console.log(data);
  };

 

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
