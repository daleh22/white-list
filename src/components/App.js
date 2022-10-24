import React, { useState, useEffect } from "react"
import {Link, Outlet} from "react-router-dom"





const App = () => {
   //const [getter, setGetter] = useState(<initialState/>)
   const[isLoggedIn ,setIsLoggedIn] = useState(false)
    const [info, setInfo] = useState([])

    return(
        <>
        <div>  
            <Link to="/"> <img></img>  </Link>
            <nav className="navigator">
                <Link to="Profile" className="nav"> Profile </Link>
                <Link to="Register" className="nav"  >Register</Link>
                <Link to="Posts" className="nav"  >Posts</Link>
                <Link to="/" className="nav"  >Home</Link>
                <Link to="Login" className="nav"  >Login</Link>
            </nav>
                
                
                    
                {!isLoggedIn && <Link to="Register" className="registerNow"  >Register Now! </Link>}  
                
             <Outlet context={{isLoggedInArr:[isLoggedIn, setIsLoggedIn], infoArr:[info, setInfo]}} />
        </div>
        </>
        
    )
};

export default App