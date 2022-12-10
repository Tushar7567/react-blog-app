import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, phone, password, cpassword } = user;


    // https://testing-2-x2zd.onrender.com

    console.log(user);

    const res = await axios
      .post("/signup", {
        name,
        email,
        phone,
        password,
        cpassword,
      })
      .then(async() => {
        // const data = await res.json();
        window.alert("Registration Successfull");
        console.log("Successfull Registration");

        // console.log(data);
        user.reset();
        navigate.push("/signin");

      })
      .catch(err => {
        window.alert("Invalid registration details");
        console.log("Invalid registered details");
        console.log(err);
      });
    // const data = await res.json();
  };

  
  return (
    <div className="signup_container">
      <div className="signup_form_container">
        <div className="left">
          <h1>Welcome Back</h1>
          <Link to="/signin">
            <button type="button" className="white_btn">
              Sign In
            </button>
          </Link>
        </div>
        <div className="right">
          <form className="form_container" onSubmit={postData}>
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleInput}
              value={user.name}
              required
              className="input"
            />
            <input
              type="number"
              placeholder="Phone "
              name="phone"
              onChange={handleInput}
              value={user.phone}
              required
              className="input"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleInput}
              value={user.email}
              required
              className="input"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInput}
              value={user.password}
              required
              className="input"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="cpassword"
              onChange={handleInput}
              value={user.cpassword}
              required
              className="input"
            />
            <button type="submit" className="green_btn">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
