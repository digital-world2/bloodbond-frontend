import React from "react";
import bannerImage from "../assets/image/banner.jpg"
import { Link } from "react-router-dom";
const Donor=()=>{
return(
    <div className="row" style={{marginTop:'20px', marginBottom:'20px'}}>
    <div className="col-sm-6">
        <div style={{marginLeft:'60px'}}>
            <h1 style={{color:'rgb(192, 57, 57)',fontWeight:'bold', marginBottom:'20px', marginTop:'70px'}}>Become a Donor</h1>
        </div>
        <div style={{display:'flex', justifyContent:'center'}}>
        <div style={{width:'80%'}}>
        <p>Donating blood is one of the most selfless and life-saving act a person can do. Every day, hospitals and emergency services rely on blood donations to help patients in need—whether it's for accident victims, surgeries, cancer treatments, or individuals with blood disorders. By becoming a donor, you play a vital role in ensuring a stable and sufficient blood supply for those in need.</p>
        </div>
    </div>
    <div style={{marginLeft:'60px'}}>
        <Link to={"/login"} className="btn" style={{backgroundColor:'rgb(192, 57, 57)', color:'white', fontWeight:'bold',marginTop:'20px'}}>Join US</Link>
    </div>
    </div>
    <div className="col-sm-6">
        <img src={bannerImage} style={{width:'92%', marginTop:'20px' }} alt="banner" />
    </div>
    </div>
)
}
export default Donor;