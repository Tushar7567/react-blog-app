import FirstComp from "./FirstComp";
import SecondComp from './SecondComp'
import ThirdComp from './Third.Comp'
import ForthComp from './ForthComp'
// import { useState,useEffect,} from "react";
// import axios from 'axios';

const Home = ({obj1, num}) => {
 
  
  return (
    <>
      <div>
        {/* <h1>Home Page</h1> */}

        <FirstComp  />
        <SecondComp obj1={obj1} num={num} />
        <ThirdComp obj1={obj1} num={num} />
       <ForthComp obj1={obj1} num={num} />

      </div>
    </>
  );
};

export default Home;
