import { useState } from "react";
import {
  Nav,
  Footer,
  AddressModal,
  UserDetails,
} from "../../components";
import "./Profile.css";
import {useLocation, useNavigate, Outlet} from "react-router-dom"

const Profile = () => {
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [editAddress, setEditAddress] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {showAddressModal ? (
        <AddressModal
          showAddressModal={showAddressModal}
          setShowAddressModal={setShowAddressModal}
          editAddress={editAddress}
          setEditAddress={setEditAddress}
        />
      ) : null}
      <Nav />
      <main>
        <h3 className="page-title text-center lg-text">Account</h3>
        <section className="profile-page">
          <div className="profile-tabs">
            <button
              className={`tab ${location.pathname=== "/profile" ? "tab-active" : ""} lg-text`}
              onClick={() => navigate("/profile")}
            >
              Profile
            </button>
            <button
              className={`tab ${
                location.pathname === "/profile/address" ? "tab-active" : ""
              } lg-text`}
              onClick={() => navigate("address")}
            >
              My Address
            </button>
            <button
              className={`tab order-tab ${
                location.pathname === "/profile/logout" ? "tab-active" : ""
              } lg-text`}
              onClick={() => navigate("logout")}
            >
              Settings
            </button>
          </div>
          {location.pathname === "/profile" ? <UserDetails /> : null}
          <Outlet />
        </section>
      </main>
      <Footer />
    </>
  );
};

export { Profile };
