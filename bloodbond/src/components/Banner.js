import React from "react";
import { Link } from "react-router-dom";
import DonorSearchButton from "./DonorSearchButton";

const Banner=()=>{
return(
    <>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
  <div className="carousel-inner">
    <div className="carousel-item active position-relative">
      <img style={{height:'87vh'}} src="https://static.vecteezy.com/system/resources/previews/008/191/708/non_2x/human-blood-donate-and-heart-rate-on-white-background-free-vector.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-overlay"></div>
  <div className="carousel-text">
    <h2>Donate Blood</h2>
    <p>Save lives with a small act of kindness</p>
    <div className="text-center">
  <DonorSearchButton/>
</div>
  </div>
    </div>
    <div className="carousel-item position-relative">
      <img style={{height:'87vh'}} src="https://www.geetanjalihospital.co.in/images/blood-bank.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-overlay"></div>
      <div className="carousel-text">
    <h2>Be a Hero</h2>
    <p>Join the blood donation movement</p>
    <div className="text-center">
        <Link to={"/donors"} className="btn" style={{backgroundColor:'rgb(192, 57, 57)', color:'white', fontWeight:'bold',marginTop:'3px', marginBottom:'40px'}}>Search Donor by Category</Link>
        {/* <button className="btn" style={{backgroundColor:'rgb(192, 57, 57)', color:'white', fontWeight:'bold',marginTop:'3px', marginBottom:'40px'}}>Become a Donor</button> */}
    </div>
  </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
)
}
export default Banner;