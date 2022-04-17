import { Nav } from "../../../components";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import "../login/Login.css";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../../context";

const SignUp = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(false);
  const [passwordShow, setPasswordShow] = useState(false);
  const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);

  const { authDispatch } = useAuth();
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const checkPassword = (confirmPassword) => {
    if(userData.password === confirmPassword){
         setError('');
    }else {
      setError("Password doesn't Match");
    }
  }

  const signUpHandler = async (e) => {
    e.preventDefault();
    if(userData.firstName !=="" && userData.lastName !=="" && userData.email !=="" && userData.password !== "", userData.confirmPassword !==""){
      try {
        const response = await axios.post("/api/auth/signup", userData);
        console.log("in SIgnupHAndler", response);
        const { encodedToken: token, createdUser } = response.data;
        if (response.status === 201) {
          localStorage.setItem("token", JSON.stringify(token));
          localStorage.setItem("user", JSON.stringify(createdUser));
          authDispatch({
            type: "SIGNUP",
            payload: { user: createdUser, token: token },
          });
          alert("Your Account Is MAde");
          navigate("/login");
        } else if (response.status === 422) {
          throw new Error("This User Already Exist!!");
        } else {
          throw new Error("Can't process request, Try again Later!!");
        }
      } catch (err) {
        console.error(err);
      }
    }else{
      alert("All input fields must be filled!!")
    }
   
  };

  return (
    <div>
      <Nav />
      <main className="form-wrapper">
        <div className="form-login">
          <h2 className="form-title text-center x-lg-text">Signup</h2>
          <form
            className="form-content form-signup md-text"
            onSubmit={signUpHandler}
          >
            <label htmlFor="fname">First Name:</label>
            <input
              type="text"
              id="fname"
              placeholder="First Name"
              name="firstName"
              value={userData.firstName}
              onChange={(e) => onChangeHandler(e)}
            />
            <label htmlFor="lname">Last Name:</label>
            <input
              type="text"
              id="lname"
              placeholder="Last Name"
              name="lastName"
              value={userData.lastName}
              onChange={(e) => onChangeHandler(e)}
            />
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              placeholder="tanaypratap@neog.camp"
              name="email"
              value={userData.email}
              onChange={(e) => onChangeHandler(e)}
            />
            <label htmlFor="pass">Password</label>
            <span className="input-pass">
              <input
                type= {passwordShow ? "text" : "password"}
                id="pass"
                placeholder="*******"
                name="password"
                value={userData.password}
                onChange={(e) => onChangeHandler(e)}
              />
              <span className="eye-icon" onClick={()=>setPasswordShow(!passwordShow)}>
               {passwordShow ?  <FaEye /> : <FaEyeSlash /> } 
              </span>
            </span>
            <label htmlFor="confirm-pass">Confirm Password:</label>
            <span className="input-pass">
              <input
                type= {confirmPasswordShow ? "text" : "password"}
                id="confirm-pass"
                placeholder="*******"
                name="confirmPassword"
                value={userData.confirmPassword}
                onChange={(e) => {
                  onChangeHandler(e);
                  checkPassword(e.target.value);
                }}
              />
              <span className="eye-icon" onClick={()=>setConfirmPasswordShow(!confirmPasswordShow)}>
              {confirmPasswordShow ?  <FaEye /> : <FaEyeSlash /> } 
              </span>
            </span>
            <div className= "passMatch-error">{error}</div>
            <div className="user-control">
              <input type="checkbox" className="input-check" />
              <label>I accept all Terms & Conditions</label>
            </div>
            <button className="btn btn-primary md-text" type="submit">
              CREATE NEW ACCOUNT
            </button>
            <p className="new-account text-center">
              <Link to="/login">
                Already have an account
                <MdOutlineArrowForwardIos className="forward-icon" />
              </Link>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
};

export { SignUp };
