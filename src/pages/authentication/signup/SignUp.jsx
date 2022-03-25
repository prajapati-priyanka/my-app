import { Nav } from "../../../components";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { IoIosEyeOff } from "react-icons/io";
import "../login/Login.css";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div>
      <Nav />
      <main class="form-wrapper">
        <div class="form-login">
          <h2 class="form-title text-center x-lg-text">Signup</h2>
          <form class="form-content form-signup md-text">
            <label htmlFor="fname">First Name:</label>
            <input type="text" id="fname" placeholder="First Name" />
            <label htmlFor="lname">Last Name:</label>
            <input type="text" id="lname" placeholder="Last Name" />
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              placeholder="tanaypratap@neog.camp"
            />
            <label htmlFor="pass">Password</label>
            <span class="input-pass">
              <input type="password" id="pass" placeholder="*******" />
              <span class="eye-icon">
                <IoIosEyeOff />
              </span>
            </span>
            <label htmlFor="confirm-pass">Confirm Password:</label>
            <span class="input-pass">
              <input type="password" id="confirm-pass" placeholder="*******" />
              <span class="eye-icon">
                <IoIosEyeOff />
              </span>
            </span>

            <div class="user-control">
              <input type="checkbox" class="input-check" />
              <label>I accept all Terms & Conditions</label>
            </div>
            <button class="btn btn-primary md-text" type="submit">
              CREATE NEW ACCOUNT
            </button>
            <p className="new-account text-center">
              <a href="/authentication/signup/signup.html">
                Already have an account
                <MdOutlineArrowForwardIos className="forward-icon" />
              </a>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
};

export { SignUp };
