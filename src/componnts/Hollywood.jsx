import React from 'react'
import ThirdComp from './Third.Comp'
import { useState,useEffect,} from "react";



 const Hollywood = () => {
  const [obj1, setObj1] = useState([])

  let passed = require("../mock_data.json")
  useEffect(()=>{
    
    setObj1(passed.Hollywood);
      
  },[passed])
  return (
    <div>
      {/* <h1>hollywood Page</h1> */}
      <ThirdComp obj1={obj1} />

      
    </div>
  )
}

export default Hollywood