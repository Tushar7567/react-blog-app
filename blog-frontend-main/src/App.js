// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componnts/Navbar";
import Home from "./componnts/Home";
import Bollywood from "./componnts/Bollywood";
import Technology from "./componnts/Technology";
import Hollywood from "./componnts/Hollywood";
import Fitness from "./componnts/Fitness";
import Food from "./componnts/Food";
import Article from "./componnts/Article";
import SignUp from "./componnts/SignUp";
import React, { useState, useEffect } from "react";
import SignIn from "./componnts/SignIn";
import Adminpage from "./componnts/Adminpage";
import Logout from "./componnts/Logout";

function App() {
  const [obj1, setObj1] = useState([]);

  // const [succ_login, setSucc_login] = useState(true);

  // const user = localStorage.getItem("token");

  // let passed = require("./mock_data.json")
  useEffect(() => {
    const fetchdata = async () => {
      // fetch("/onlydata.json")
      fetch("/onlydata.json")
        .then((response) => {
          return response.json();
        })
        .then((myjson) => {
          setObj1(myjson);
        });
    };
    fetchdata();
    // axios('./mock_data.json')
    //   .then((myjson) =>{setObj1(myjson.data)});
  }, []);
  // console.log(obj1);

  let bollywood = 0;
  let technology = 13;
  let hollywood = 26;
  let fitness = 39;
  let food = 52;
  let home = 65;


  





  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Home obj1={obj1} num={home} />} />
            <Route
              path="/bollywood"
              element={<Bollywood obj1={obj1} num={bollywood} />}
            />
            <Route
              path="/technology"
              element={<Technology obj1={obj1} num={technology} />}
            />
            <Route
              path="/hollywood"
              element={<Hollywood obj1={obj1} num={hollywood} />}
            />
            <Route
              path="/fitness"
              element={<Fitness obj1={obj1} num={fitness} />}
            />
            <Route path="/food" element={<Food obj1={obj1} num={food} />} />
            <Route path="/signup" exact element={<SignUp />} />
            <Route path="/signin" exact element={<SignIn />} />

            <Route path="/signin/admin" exact element={<Adminpage />} />
            <Route path="/logout"  element={<Logout />} />

            
            {/* <Route path="/" element={<Navigate replace to="/login" />} /> */}
          </Route>
          <Route path="/article" element={<Article />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
