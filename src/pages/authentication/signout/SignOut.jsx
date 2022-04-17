import { Nav } from "../../../components";
import {FaCheck } from "react-icons/fa";
import "../login/Login.css";
import "./SignOut.css"
import { Link } from "react-router-dom";

const SignOut = () => {
    return (
        <div>
            <Nav />
             <main className="form-wrapper">
        <div className="form-login form-signout">
          <span className="check-btn x-lg-text">
                <FaCheck />
          </span>
           
            <div className="signout-msg lg-text text-center">You have succesfully logged out !!</div>
            <Link to="/">
            <div className="text-center lg-text">Back to Home</div>
            </Link>
            
        </div>
    </main>
        </div>
    )
}

export {SignOut}