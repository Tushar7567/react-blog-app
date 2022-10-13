import React from 'react'
import ThirdComp from './Third.Comp'
import { useState,useEffect,} from "react";



 const Fitness = () => {
  const [obj1, setObj1] = useState([])

  let passed = require("../mock_data.json")
  useEffect(()=>{
    
    setObj1(passed.fitness);
      
  },[passed])
  return (
    <div>
      {/* <h1>fitness Page</h1> */}
      <ThirdComp obj1={obj1} />

      
    </div>
  )
}

export default Fitness