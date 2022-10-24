import React from "react"
import { Link } from "react-router-dom"



const Error = () => {
    return(
        <div className="404" > 
            <Link to = "/"  className="error"  > 404 </Link>
        </div>
    )
}

export default Error