// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./componnts/Home";
import Bollywood from "./componnts/Bollywood";
import Technology from "./componnts/Technology";
import Hollywood from "./componnts/Hollywood";
import Fitness from "./componnts/Fitness";
import Food from "./componnts/Food";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import FirstComp from './componnts/FirstComp'
// import SecondComp from './componnts/SecondComp'
// import ThirdComp from './componnts/Third.Comp'
// import ForthComp from './componnts/ForthComp'
// import MyContext from './Context';


function App() {
  // const [users, setUsers] = useState([]);

  // useEffect(()=>{
  //   axios.get('/mock_data.json')
  //     .then((res)=>{
  //       setUsers(res.data);
  //     })
  //     .catch((err)=>{
  //       console.log('Error');
  //     })
  // },[])
  // console.log(users);


  return (
    <>
      <div className="heading">
        <span className="heading-the">The</span>
        <span className="heading-siren">Siren</span>
      </div>
      <BrowserRouter>
      <div className='navbar'>
                <ul>
                    <li>
                        <Link  to='/' className='link-text'>Home</Link>
                    </li>
                    <li>
                        <Link  to='/bollywood' className='link-text'>Bollywood</Link>
                    </li>
                    <li>
                        <Link to='/technology' className='link-text'>Technology</Link>
                    </li>
                    <li>
                        <Link  to='/hollywood' className='link-text'>Hollywood</Link>
                    </li>
                    <li>
                        <Link to='/fitness' className='link-text'>Fitness</Link>
                    </li>
                    <li>
                        <Link to='/food' className='link-text'>Food</Link>
                    </li>
                </ul>
            </div>
        <Routes>
            <Route path="/" element={<Home  />} />
            <Route path="bollywood" element={<Bollywood />} />
            <Route path="technology" element={<Technology  />} />
            <Route path="hollywood" element={<Hollywood  />} />
            <Route path="fitness" element={<Fitness  />} />
            <Route path="food" element={<Food  />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
