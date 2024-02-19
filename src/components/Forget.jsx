import React from 'react'


const Signup = () => {
  return  <div style={{ justifyContent: "center"}}>

  <div className="signup-form signup" >
    <form action="" method="post">
        <span style={{fontSize:"28px", fontWeight:"bold", marginLeft:"25%"}}>Change Password</span>
        <div className="form-group" style={{marginTop: "15px", marginBottom:"20px"}}>
              <input type="password" className="form-control input-lg" name="currentpassword" placeholder="Current Password" required="required"/>
        </div>
            <div className="form-group" style={{marginTop: "15px", marginBottom:"20px"}}>
              <input type="password" className="form-control input-lg" name="newpassword" placeholder="New Password" required="required"/>
            </div>
                <div className="form-group" style={{marginTop: "15px", marginBottom:"15px"}}>
                    <input type="password" className="form-control input-lg" name="confirm_password" placeholder="Confirm Password" required="required"/>
                </div>  
                     <div className="form-group">
                        <button type="submit" className="btn btn-success btn-lg btn-block signup-btn"><a href="/Login" style={{textDecoration:"none", fontWeight:"bold", color:"white",}}>Save</a> </button>
                    </div>
    </form>
      
      
  </div>
  </div>
}

export default Signup
