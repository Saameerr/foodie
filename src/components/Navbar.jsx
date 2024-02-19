import React from 'react'
import PropsTypes from "prop-types"
import {Link, useNavigate} from 'react-router-dom'


const Navbar = (props) =>{
  const nav=useNavigate();

  // const handleLogin=()=>{
  //   nav("/login");
  // };
  return <header className="p-3 text-bg-warning">
  <div className="container" style={{ marginBottom:"-4px" }}>
    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"></use></svg>
      </a>
      <div className='date'>
      {new Date().toUTCString().slice(0,16)}
      </div>
      
      <span className='brand'>Foodie</span>
        <img src="logo.png" alt="logo" className='logo'/>
      <form className="col-12 col-lg-auto mb-5 mb-lg-0 me-lg-5 search" role="search" id='form'>
        <input type="search" className="form-control form-control-dark " placeholder="Search Products..." aria-label="Search"/>
      </form>

      <div className="text-end">
        <Link to={"/login"}>
        <button type="button" className="btn btn-primary me-3" >Login</button>
        </Link>
        
        <Link to={"/signup"}> 
        <button type="button" className="btn btn-success" >Sign-up</button>
        </Link>
       
     
      </div>
      <Link to={"/cart "}>
      <img src="cart.png" alt="" style={{ height:"35px", width:"35px",marginLeft:"20px", cursor:"pointer"}} />
      </Link>
     
    </div>
  </div>
  
</header>
}

export default Navbar
