import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
  <div style={{ backgroundColor:"#e1e4e8", height:"100%", display: "flex", flexDirection: "column", justifyContent: "center"}}>

    <div className='login' > 
    <form>
      <h2 className="h3 mb-3 fw-normal" style={{ marginTop:"30px", fontSize:"24px", color:"red", fontFamily:"cursive"}} >Welcome to Foodie! Please Login</h2>
  
      <div className="form-floating" style={{marginTop:"30px"}}>
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required="required"/>
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating" style={{marginTop:"30px"}}>
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required="required"/>
        <label htmlFor="floatingPassword">Password</label>
      </div>
  
      <div className="form-check text-start my-3">
        <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Remember me
          <span style={{marginLeft:"300px", color:"blue", fontWeight:'bold', cursor:"pointer"}}><a href="/Forget" style={{textDecoration:"none" }}>Forget password?</a></span>
        </label>
      </div>
      <button className="btn btn-primary w-100 py-2" type="submit" style={{maxWidth:"55%", marginLeft: "22%", borderRadius:"15px"}}>Login</button>
  
      <p style={{marginLeft:"30%", marginTop:"20px"}}>Don't have an account? <a href="/Signup" style={{textDecoration:"none", fontWeight:"bold"}}>Sign up</a></p>
  
      <div>
          <h4 className='hrline' style={{fontSize:"18px"}}> Or Connect us it</h4>
          <span style={{marginLeft:"45%", fontSize:"40px", cursor:"pointer"}}>
              <a href="https://www.facebook.com/"><FaFacebook /></a>
              <a href="https://accounts.google.com/"><FcGoogle style={{marginLeft:"10px"}} /></a>
          </span>
          
      </div>
    </form>
    </div>
    </div>
  )
}

export default Login
