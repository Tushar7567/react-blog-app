import React from 'react'
import ThirdComp from './Third.Comp'
import { useState,useEffect,} from "react";
// import axios from 'axios';


 const Technology = () => {
  const [obj1, setObj1] = useState([])

  let passed = require("../mock_data.json")
  useEffect(()=>{
    
    setObj1(passed.technology);
      
  },[passed])
  return (
    <div>
      {/* <h1>technology Page</h1> */}
      <ThirdComp obj1={obj1} />

    </div>
  )
}

export default Technology