import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import banner1Image from "../assets/image/banner1.jpg"
import { Link } from "react-router-dom";
const About=()=>{
    return(
        <>
        <Header/>
    <div className="bg-gray-100 text-gray-800">
      {/* Banner Section */}
      <div className="relative w-full">
        <img src={banner1Image} alt="About Us Banner" className="w-full object-cover" style={{width:'100%', height:'87vh'}}/>
      </div>

      {/* About Section */}
      <div className="text-center">
        <h2 className="who">Who We Are</h2>
        <p className="platform">
          We are a platform dedicated to connecting blood donors with those in
          need. We are a lifesaving platform dedicated to making blood donation efficient, accessible, and impactful.  Our platform bridges the gap between blood donors and recipients, ensuring that no one has to struggle to find a donor in critical situations. We believe that every drop of blood can save a life. We want to create a network of voluntary blood donors and make sure that blood is available whenever and wherever it's needed.
        </p>
      </div>

      {/* Mission Section */}
      {/* <div className="row" style={{marginTop:'20px', marginBottom:'20px'}}>
    <div className="col-sm-6">
        <div className="row" style={{marginLeft:'220px'}}>
                <h2 className="system1" style={{color:'rgb(192, 57, 57)', marginTop:'10px'}}>Our Mission</h2>
        </div>
        <div style={{display:'flex', justifyContent:'center'}}>
        <div style={{width:'50%', marginLeft:'0px', marginTop:'10px'}}>
        <p>"To inspire, facilitate and promote blood donation by leveraging technolgy to create a reliable system that enhances the effectiveness of blood donation, health and hope." 🚑❤️</p>
        </div>
    </div>
    </div>
    <div className="col-sm-6">
    <div className="row" style={{marginLeft:'150px'}}>
                <h2 className="system1" style={{color:'rgb(192, 57, 57)', marginTop:'10px'}}>Our Vision</h2>
        </div>
        <div style={{display:'flex', justifyContent:'center'}}>
        <div style={{width:'50%', marginLeft:'-150px', marginTop:'10px'}}>
        <p>"Our vision is to build a world where safe and timely blood donations are accessible to all, ensuring that no life is lost due to blood shortages." 🩸🌍</p>
        </div>
    </div>
    </div>
    </div> */}

<div className="container my-5">
  <div className="row justify-content-center g-5">
    <div className="col-md-5">
      <div className="card h-100 shadow" style={{ minHeight: '320px' }}>
        <div className="card-body text-center d-flex flex-column justify-content-center">
          <h2 className="card-title system1" style={{ color: 'rgb(192, 57, 57)' }}>Our Mission</h2>
          <p className="card-text mt-3">
            "To inspire, facilitate and promote blood donation by leveraging technology to create a reliable system that enhances the effectiveness of blood donation, health and hope." 🚑❤️
          </p>
        </div>
      </div>
    </div>

    <div className="col-md-5">
      <div className="card h-100 shadow" style={{ minHeight: '320px' }}>
        <div className="card-body text-center d-flex flex-column justify-content-center">
          <h2 className="card-title system1" style={{ color: 'rgb(192, 57, 57)' }}>Our Vision</h2>
          <p className="card-text mt-3">
            "Our vision is to build a world where safe and timely blood donations are accessible to all, ensuring that no life is lost due to blood shortages." 🩸🌍
          </p>
        </div>
      </div>
    </div>
  </div>
</div>





      {/* How It Works Section */}
      <div className=" text-center">
        <h2 className="system" style={{color:'rgb(192,57,57)'}}>How Our System Works</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-red-600">1️⃣ Donors Register</h3>
            <p className="mt-2">Sign up and update your availability for donation.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-red-600">2️⃣ Recipients Search</h3>
            <p className="mt-2">Find compatible donors based on blood type & location.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-red-600">3️⃣ Admins Manage</h3>
            <p className="mt-2">Monitor real-time blood stock levels for donations.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-red-600">4️⃣ Save Lives</h3>
            <p className="mt-2">Every donation counts in emergencies and surgeries.</p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gray-800 text-center py-12">
        <h2 className="text-3xl system1" style={{color:'rgb(192,57,57)', marginTop:'40px'}}>Join Us & Make a Difference!</h2>
        <p className="">
          Be a hero today! Sign up to donate blood and help save lives.
        </p>
        <div className="text-center">
        <Link to={"/login"} className="btn" style={{backgroundColor:'rgb(192, 57, 57)', color:'white', fontWeight:'bold',marginTop:'3px', marginBottom:'40px'}}>Become a Donor</Link>
        {/* <button className="btn" style={{backgroundColor:'rgb(192, 57, 57)', color:'white', fontWeight:'bold',marginTop:'3px', marginBottom:'40px'}}>Become a Donor</button> */}
    </div>
      </div>
    </div>
    <Footer/>
        </>
    )
}
export default About;