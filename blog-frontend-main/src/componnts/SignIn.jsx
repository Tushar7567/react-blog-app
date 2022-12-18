import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link,useNavigate} from "react-router-dom";

const SignIn = () => {

  const navigate = useNavigate();

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

  // "proxy": "https://quaint-wasp-costume.cyclic.app",
  // "proxy": "https://quaint-wasp-costume.cyclic.app",
  // "proxy": "https://quaint-wasp-costume.cyclic.app",
  
  const postData = async (e) => {
    e.preventDefault();
    const {email, password } = data;

    const res = await axios
      .post("/signin", {
        email,
        password,
      })
      .then(async () => {
        console.log(email, password);
        // const data = await res.json();
        // console.log(data);
        window.alert("Login Successfull");
        console.log("Successfull Login");


        // if()
        navigate("/");
        // data.reset();
      })
      .catch((err) => {
        window.alert("Invalid Credentials");
        console.log("Invalid Credentials");
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
              Sign In
            </button>
          </form>
        </div>
        <div className="login-right">
          <h1>New Here ?</h1>
          <Link to="/signup">
            <button type="button" className="white_btn">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
