import React from "react"
import {Link} from "react-router-dom"

const Profile = () => {
    function logOut () {
       localStorage.removeItem("token") 
    }
    
    return(
        <>
        <div>Profile</div>
       <div className="create" >  <Link to="/Create"  > Create Post</Link> </div>
        <div>  <button onClick={logOut}  className="logout"> Log Out </button>    
         </div>
        </>
    )
}

export default Profile