import "./UserDetails.css"


const UserDetails = () =>{
    return(
        <div className="user-page">
            <div className="user-details">
                <h3 className=" detail lg-text">Profile Details</h3>
                <div className="user-info md-text">
                    <h4>Name:</h4>
                    <p>Adarsh Balika</p>
                </div>
                <div className="user-info md-text">
                    <h4>Email:</h4>
                    <p>adarshBalika@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export {UserDetails}
