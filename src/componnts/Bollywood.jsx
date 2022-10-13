import React from 'react';
import ThirdComp from './Third.Comp'
import { useState,useEffect,} from "react";
// import axios from 'axios';


 const Bollywood = () => {

  const [obj1, setObj1] = useState([])

    let passed = require("../mock_data.json")
  useEffect(()=>{
    
    setObj1(passed.bollywood);
      
  },[passed])

  console.log(obj1);


  return (
    <div>

      <ThirdComp obj1={obj1} />

    </div>
  )
}

export default Bollywood