import "./Logout.css";
import { useAuth } from "../../context";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";

const Logout = () => {
  const { authDispatch } = useAuth();
  const navigate = useNavigate();

  const logOutHandler = () => {
    navigate("/");
    toast.success("You are successfully logged out")
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    authDispatch({ type: "LOGOUT" });
  };

  return (
    <div className="logout-page">
      <h3 className="page-heading lg-text">Account Settings</h3>
      <button className="btn logout-btn lg-text" onClick={logOutHandler}>
        Logout
      </button>
    </div>
  );
};

export { Logout };
