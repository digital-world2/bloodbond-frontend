// import React from "react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Donor from "../components/Donor";
import Footer from "../components/Footer";
import Information from "../components/Information";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa"; // Add this at top


const Home=()=>{
    const [showProfileButton, setShowProfileButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
  const fetchUser = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/current-user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (data?.user?.role === "donor") {
        setShowProfileButton(true);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  fetchUser();
}, []);
return(<>
<Header/>
<Banner/>
<Services/>
<Donor/>
<Information/>
<Footer/>

{/* Floating Button for Donors */}
      {showProfileButton && (
        <button
          onClick={() => navigate('/donorprofile')}
          style={{
      position: "fixed",
      bottom: "20px",
      right: "20px",
      backgroundColor: "#ffffff",
      border: "2px solid #c0392b",
      borderRadius: "50%",
      width: "80px",
      height: "80px",
      boxShadow: "0 6px 12px rgba(0,0,0,0.25)",
      cursor: "pointer",
      zIndex: 1000,
      animation: "bounce 2s infinite",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
    title="Go to Profile"
  >
    <FaUserCircle size={55} color="#c0392b" />
  </button>
      )}

</>)
}
export default Home;