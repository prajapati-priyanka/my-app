import { Nav } from "../../../components";
import {FaCheck } from "react-icons/fa";
import "../login/Login.css";
import "./SignOut.css"

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
            <a href="/authentication/login/login.html" className="text-center md-text">Back to Login</a>
        </div>
    </main>
        </div>
    )
}

export {SignOut}