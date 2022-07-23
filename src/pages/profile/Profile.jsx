import { useState } from "react";
import { Nav, Footer, AddressModal, UserDetails, Address } from "../../components";
import "./Profile.css";



const Profile = () =>{
  const [activeTab, setActiveTab] = useState("profile")
  const [showAddressModal, setShowAddressModal] = useState(false);

    return(
        <>
        {showAddressModal ? <AddressModal showAddressModal={showAddressModal} /> : null}
        <Nav />
        <main>
          <h3 className="page-title text-center lg-text">
           Account
          </h3>
          <section className="profile-page">
            <div className="profile-tabs">
                <button className="tab lg-text" onClick={()=>setActiveTab("profile")}>
                    Profile
                </button>
                <button className="tab lg-text" onClick={()=>setActiveTab("address")}>
                    My Address
                </button>
                <button className="tab lg-text">
                    Settings
                </button>

            </div>
  {activeTab === "profile" ? <UserDetails /> : activeTab === "address" ? <Address  setShowAddressModal={setShowAddressModal} /> : null}
          </section>
        </main>
        <Footer />
      </>
    )
}

export {Profile}