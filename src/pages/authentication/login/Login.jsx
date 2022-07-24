import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { Nav } from "../../../components";
import { useAuth } from "../../../context";
import axios from "axios";
import "./Login.css";
import { useState } from "react";
import toast from "react-hot-toast";


const Login = () => {
  const navigate = useNavigate();
  const { authDispatch } = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const guestData = {
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  };
  const clickHandler = (e) => {
    e.preventDefault();
    setUser(guestData);
  };

  const loginHandler = async (e) => {
    e.preventDefault();

    if (user.email !== "" && user.password !== "") {
      try {
        const response = await axios.post("/api/auth/login", {
          email: user.email,
          password: user.password,
        });

        const { status } = response;
        const { encodedToken: token, foundUser } = response.data;

        if (status === 200) {
          localStorage.setItem("token", JSON.stringify(token));
          localStorage.setItem("user", JSON.stringify(foundUser));
          authDispatch({
            type: "LOGIN",
            payload: {
              user: foundUser,
              token: token,
              addresses: response.data.foundUser.address,
            },
          });
          toast("You are Succesfully logged in", { icon: "✔" });
          navigate("/product");
        } else {
          throw new Error("Can't process the request, Try Again later");
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      alert("Both email and password fields must be filled!!");
    }
  };

  return (
    <div>
      <Nav />
      <main className="form-wrapper">
        <div className="form-login">
          <h3 className="form-title text-center x-lg-text">Login</h3>
          <form className="form-content md-text" onSubmit={loginHandler}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="tanay@neog.camp"
              name="email"
              value={user.email}
              onChange={(e) => onChangeHandler(e)}
            />
            <label htmlFor="pass">Password</label>
            <input
              type="password"
              id="pass"
              placeholder="*********"
              name="password"
              value={user.password}
              onChange={(e) => onChangeHandler(e)}
            />

            <div className="user-control">
              <input type="checkbox" className="input-check" />
              <label>Remember Me ?</label>
              <Link to="/login" className="forgot-pass">
                Forgot your Password{" "}
              </Link>
            </div>
            <button className="btn-guest md-text" onClick={clickHandler}>
              Add Guest Credentials
            </button>
            <button className="btn btn-primary md-text">LOGIN</button>
            <p className="new-account text-center">
              <Link to="/signup">
                Create New Account
                <MdOutlineArrowForwardIos className="forward-icon" />
              </Link>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
};

export { Login };
