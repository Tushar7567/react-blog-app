import React from 'react'

const SignIn = () => {
  return (
    <>
    <div className="login-container">
        <form method='POST' className="form-login">
            <ul className="login-nav">
                <li className="login-nav__item active">
                    <a href="#">Sign In</a>
                </li>
                <li className="login-nav__item">
                    <a href="/signup">Sign Up</a>
                </li>
            </ul>
            <label htmlFor="login-input-user" className="login__label">
                Username
            </label>
            <input id="login-input-user" className="login__input" type="text" />
            <label htmlFor="login-input-password" className="login__label">
                Password
            </label>
            <input id="login-input-password" className="login__input" type="password" />
          
            <button className="login__submit" disabled>Sign in</button>
        </form>
       
    </div>
      
    </>
  )
}

export default SignIn
