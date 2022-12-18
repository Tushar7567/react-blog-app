import React from 'react'
import axios from "axios"
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Adminpage = () => {

    const navigate = useNavigate();

    const callAdminpage = async() =>{
        
        const res = await axios.get("https://quaint-wasp-costume.cyclic.app/signin/admin", {
            withCredentials: true
        })
        
        .then(async(res)=>{

            // const res = await fetch("/admin",{
            //     method: "GET",
            //     headers: {
            //         Accept: "application/json",
            //         "Content-Type": "application/json"
            //     },
            //     credentials: "include"
                
            // })

            
            // const data = await res.send("Evening");
            console.log("Admin page");

            console.log(res.data);

            if(!res.status === 200){
                throw new Error(res.error);
            }
        })
        .catch((err)=>{
            console.log("frontend received error",err);
            navigate("/signin");

        });
    }

    useEffect(() => {

        callAdminpage();
    }, [])

  return (
    <div>
      Hello admin

    </div>
  )
}

export default Adminpage
