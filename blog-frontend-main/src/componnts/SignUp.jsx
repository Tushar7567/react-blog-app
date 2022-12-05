import React ,{useState} from 'react';
import {useNavigate} from "react-router-dom"

const SignUp = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        name:"", email:"", phone:"", password:"", cpassword:""
    })

    let name, value;
    const handleInput = (e) =>{
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
    }

    const postData = async(e) =>{
        e.preventDefault();
        const { name, email, phone, password, cpassword} = user;

        const res = await fetch("/signup", {
            method : "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name, email, phone, password, cpassword 
            })
        });

        const data = await res.json();

        if(data.status === 422 || !data){
            window.alert("Invalid registered");
            console.log("Invalid registered");
        }else{
            window.alert("Registration Successfull");
            console.log("Successfull Registration");

            navigate.push("/login");
        }


    }

  return (
    <>
         <div className="login-container">
        <form method='POST' className="form-login">
            <ul className="login-nav">
                <li className="login-nav__item ">
                    <a href="/signin">Sign In</a>
                </li>
                <li className="login-nav__item active ">
                    <a href="#">Sign Up</a>
                </li>
            </ul>
            <label htmlFor="login-input-user" className="login__label"
                value={user.name}
                onChange={handleInput}
            >
                Username
            </label>
            <input id="login-input-user" className="login__input" type="text" />

            <label htmlFor="login-input-cpassword" className="login__label"
                value={user.email}
                onChange={handleInput}
            >
                Email
            </label>
            <input id="login-input-email" className="login__input" type="email" />

            <label htmlFor="login-input-phone" className="login__label"
                value={user.phone}
                onChange={handleInput}
            >
                Phone
            </label>
            <input id="login-input-phone" className="login__input" type="tel" />

            <label htmlFor="login-input-password" className="login__label"
                value={user.password}
                onChange={handleInput}
            >
                Password
            </label>
            <input id="login-input-password" className="login__input" type="password" />

            <label htmlFor="login-input-cpassword" className="login__label"
                value={user.cpassword}
                onChange={handleInput}
            >
               Confirm Password
            </label>
            <input id="login-input-cpassword" className="login__input" type="password" />
          
            <button className="login__submit" disabled onClick={postData}>Sign Up</button>
        </form>
       
    </div> 
    </>
  )
}

export default SignUp
