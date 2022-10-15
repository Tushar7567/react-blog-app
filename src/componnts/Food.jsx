import React from 'react'
import ThirdComp from './Third.Comp'
// import { useState,useEffect,} from "react";



 const Food = ({obj1, num}) => {

  return (
    <div>
      {/* <h1>food Page</h1> */}
      <ThirdComp obj1={obj1} num={num} />

      
    </div>
  )
}

export default Food