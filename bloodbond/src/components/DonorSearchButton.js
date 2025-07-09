import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const DonorSearchButton = () => {
  const handleClick = (e) => {
    const token = localStorage.getItem("token");
    if (!token) {
      e.preventDefault(); // Stop navigation
      toast.warn("Please login first to search donors.");
    }
  };

  return (
    <div className="text-center">
      <Link
        to="/donors"
        onClick={handleClick}
        className="btn"
        style={{
          backgroundColor: "rgb(192, 57, 57)",
          color: "white",
          fontWeight: "bold",
          marginTop: "3px",
          marginBottom: "40px",
        }}
      >
        Search Donor by Category
      </Link>
    </div>
  );
};

export default DonorSearchButton;
