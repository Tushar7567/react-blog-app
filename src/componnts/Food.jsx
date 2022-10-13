import React from 'react'
import ThirdComp from './Third.Comp'
import { useState,useEffect,} from "react";



 const Food = () => {
  const [obj1, setObj1] = useState([])

  let passed = require("../mock_data.json")
  useEffect(()=>{
    
    setObj1(passed.food);
      
  },[passed])
  return (
    <div>
      {/* <h1>food Page</h1> */}
      <ThirdComp obj1={obj1} />

      
    </div>
  )
}

export default Food