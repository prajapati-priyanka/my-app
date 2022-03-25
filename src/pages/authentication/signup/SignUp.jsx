import {Nav} from "../../../components/navbar/Nav.jsx";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { IoIosEyeOff } from "react-icons/io";
import "../login/Login.css";
import "./SignUp.css";

const SignUp =() => {
    return (
        <div>
            <Nav />
             <main class="form-wrapper">
            <div class="form-login">
            <h2 class="form-title text-center x-lg-text">Signup</h2>
            <form class="form-content form-signup md-text">
                <label for="fname">First Name:</label>
                <input type="text" id="fname" placeholder="First Name" />
                <label for="lname">Last Name:</label>
                <input type="text" id="lname" placeholder="Last Name" />
                <label for="email">Email Address:</label>
                <input type="email" id="email" placeholder="tanaypratap@neog.camp" />
                <label for="pass">Password</label>
                <span class="input-pass">
                    <input type="password" id="pass" placeholder="*******" />
                    <span class="eye-icon"><IoIosEyeOff /></span>
                </span>
               <label for="confirm-pass">Confirm Password:</label>
               <span class="input-pass">
                    <input type="password" id="confirm-pass" placeholder="*******" />
                    <span class="eye-icon"><IoIosEyeOff /></span>
               </span>
                
                <div class="user-control">
                    <input type="checkbox" class="input-check" />
                    <label>I accept all Terms & Conditions</label>
                </div>
                <button class="btn btn-primary md-text" type="submit">CREATE NEW ACCOUNT</button>
                <p className="new-account text-center"><a href="/authentication/signup/signup.html">Already have an account
                <MdOutlineArrowForwardIos className="forward-icon" /></a></p>

            </form>
        </div>
    </main>
        </div>
    )
}

export {SignUp}