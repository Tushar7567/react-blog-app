import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  // const navigate = useNavigate();
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

    // const res = await fetch("https://testing-2-x2zd.onrender.com/signup", {
    //     method : "POST",
    //     headers: {
    //         "Content-Type" : "application/json"
    //     },
    //     body: JSON.stringify({
    //         name, email, phone, password, cpassword
    //     })
    // })


    // https://testing-2-x2zd.onrender.com

    const res = await axios
      .post("/signup", {
        name,
        email,
        phone,
        password,
        cpassword,
      })
      .then(async() => {
        const data = await res.json();
        console.log(data);
        user.reset();
      })
      .catch(err => {
        console.log(err);
      });
    // const data = await res.json();

    // if(data.status === 422 || !data){
    //     window.alert("Invalid registered");
    //     console.log("Invalid registered");
    // }else{
    //     window.alert("Registration Successfull");
    //     console.log("Successfull Registration");

    //     // navigate.push("/login");
    // }
  };

  //   return (
  //     <>
  //          <div className="login-container">
  //         <form method='POST' className="form-login">
  //             <ul className="login-nav">
  //                 <li className="login-nav__item ">
  //                     <a href="/signin">Sign In</a>
  //                 </li>
  //                 <li className="login-nav__item active ">
  //                     <a href="#">Sign Up</a>
  //                 </li>
  //             </ul>
  //             <label htmlFor="login-input-user" className="login__label"
  //                 value={user.name}
  //                 onChange={handleInput}
  //             >
  //                 Username
  //             </label>
  //             <input id="login-input-user" className="login__input" type="text" />

  //             <label htmlFor="login-input-cpassword" className="login__label"
  //                 value={user.email}
  //                 onChange={handleInput}
  //             >
  //                 Email
  //             </label>
  //             <input id="login-input-email" className="login__input" type="email" />

  //             <label htmlFor="login-input-phone" className="login__label"
  //                 value={user.phone}
  //                 onChange={handleInput}
  //             >
  //                 Phone
  //             </label>
  //             <input id="login-input-phone" className="login__input" type="tel" />

  //             <label htmlFor="login-input-password" className="login__label"
  //                 value={user.password}
  //                 onChange={handleInput}
  //             >
  //                 Password
  //             </label>
  //             <input id="login-input-password" className="login__input" type="password" />

  //             <label htmlFor="login-input-cpassword" className="login__label"
  //                 value={user.cpassword}
  //                 onChange={handleInput}
  //             >
  //                Confirm Password
  //             </label>
  //             <input id="login-input-cpassword" className="login__input" type="password" />

  //             <button className="login__submit"  onClick={postData}>Sign Up</button>
  //         </form>

  //     </div>
  //     </>
  //   )

  // const [data, setData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  // });
  // const [error, setError] = useState("");
  // const navigate = useNavigate();

  // let name, value;
  // const handleChange = (e) => {
  //   name = e.target.name;
  //   value = e.target.value;
  //   setData({ ...data, [name]: value });
  //   console.log(data);

  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const url = "https://testing-2-x2zd.onrender.com/api/users";
  //     const  res  = await axios.post(url, data);
  //     navigate("/login");
  //     console.log(res.message);
  //   }
  //   }
  // };

  return (
    <div className="signup_container">
      <div className="signup_form_container">
        <div className="left">
          <h1>Welcome Back</h1>
          <Link to="/login">
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
