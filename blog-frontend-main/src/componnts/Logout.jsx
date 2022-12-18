import React from 'react'
import axios from "axios"
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {

    const navigate = useNavigate();

    const logout = async() =>{
        const res = await axios.get("https://quaint-wasp-costume.cyclic.app/logout")
        
        .then(async(res)=>{
            console.log("logout page");
            // console.log(res.data);
            window.alert("Logout Successfull");

            navigate("/signin");

            if(!res.status === 200){
                throw new Error(res.error);
            }
        })
        .catch((err)=>{
            console.log("logout btn error",err);
            // navigate("/signin");

        });
    }

    useEffect(() => {

        logout();
    }, [])



  return (
    <div>
        <h1>Logout page</h1>
      
    </div>
  )
}

export default Logout
