import { useAuth } from "../../context"
import "./UserDetails.css"


const UserDetails = () =>{

    const {authState} = useAuth();

   const user = authState.user || JSON.parse(localStorage.getItem("user"))
  
    return(
        <div className="user-page">
            <div className="user-details">
                <h3 className=" detail lg-text">Profile Details</h3>
                <div className="user-info md-text">
                    <h4>Name:</h4>
                    <p>{user.firstName} {user.lastName}</p>
                </div>
                <div className="user-info md-text">
                    <h4>Email:</h4>
                    <p>{user.email}</p>
                </div>
            </div>
        </div>
    )
}

export {UserDetails}
