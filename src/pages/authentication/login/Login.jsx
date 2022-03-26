import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Nav } from "../../../components";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <Nav />
      <main className="form-wrapper">
        <div className="form-login">
          <h3 className="form-title text-center x-lg-text">Login</h3>
          <form className="form-content md-text">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="tanaypratap@neog.camp"
            />
            <label htmlFor="pass">Password</label>
            <input type="password" id="pass" placeholder="*******" />
            <div className="user-control">
              <input type="checkbox" className="input-check" />
              <label>Remember Me ?</label>
              <a className="forgot-pass">Forgot your Password </a>
            </div>
            <button className="btn btn-primary md-text">LOGIN</button>
            <p className="new-account text-center">
              <a href="/authentication/signup/signup.html">
                Create New Account
                <MdOutlineArrowForwardIos className="forward-icon" />
              </a>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
};

export { Login };
