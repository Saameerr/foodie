import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  return  <div style={{ backgroundColor:"#e1e4e8", height:"100%", display: "flex", flexDirection: "column", justifyContent: "center"}}>

  <div className="signup-form signup" >
      <form action="/examples/actions/confirmation.php" method="post">
      <h2 style={{textAlign:"center"}}>Create an Account</h2>
      
          <div className="form-group"  style={{marginTop: "20px", marginBottom:"20px"}}>
            <input type="text" className="form-control input-lg" name="FullName" placeholder="FullName" required="required"/>
          </div>
      <div className="form-group " style={{marginTop: "15px", marginBottom:"10px"}} >
            <input type="email" className="form-control input-lg" name="email" placeholder="Email Address" required="required"/>
          </div>
      <div className="form-group" style={{marginTop: "15px", marginBottom:"20px"}}>
              <input type="password" className="form-control input-lg" name="password" placeholder="Password" required="required"/>
          </div>
      <div className="form-group" style={{marginTop: "15px", marginBottom:"15px"}}>
              <input type="password" className="form-control input-lg" name="confirm_password" placeholder="Confirm Password" required="required"/>
          </div>  
          <div className="form-group">
              <button type="submit" className="btn btn-success btn-lg btn-block signup-btn" style={{width:"55%", marginLeft:"22%", borderRadius:'15px'}}>Sign Up</button>
          </div>
      </form>
      <br />
      <div className="text-center">Already have an account? <a href="/Login" style={{textDecoration:"none", fontWeight:"bold"}}>Login here</a></div><br />
      <h4 className='hrline' style={{fontSize:"18px"}}> Or Connect us it</h4>
      <span style={{marginLeft:"45%", fontSize:"40px", cursor:"pointer"}}>
              <a href="https://www.facebook.com/"><FaFacebook /></a>
              <a href="https://accounts.google.com/"><FcGoogle style={{marginLeft:"10px"}} /></a>
          </span>
  </div>
  </div>
}

export default Signup
