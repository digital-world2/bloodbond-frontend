import React from "react";
import dropImage from "../assets/image/drop.png"
import whoImage from "../assets/image/who.png"
const Information=()=>{
return(
    <>
    <div className="text-center">
    <h2 style={{color:'rgb(192,57,57)', fontWeight:'bold', marginTop:'40px'}}>Donate Blood and Save Lives!!!!</h2>
    </div>
    <div className="row" style={{marginTop:'30px', marginBottom:'20px'}}>
    <div className="col-sm-6">
        <div className="row" style={{marginLeft:'50px'}}>
            <div className="col-sm-1">       
                <img src={dropImage} style={{height:'40px', width:'40px', marginTop:'10px'}} alt="Card cap" />
            </div>
            <div className="col-sm-10">    
                <h2 style={{color:'rgb(192, 57, 57)', marginTop:'10px'}}>Why to donate?</h2>
            </div>
        </div>
        <div style={{display:'flex', justifyContent:'center'}}>
        <div style={{width:'80%', marginLeft:'80px', marginTop:'30px'}}>
        <p>💖 Save Lives Instantly</p>
        <p>🧑 Good for Your Health</p>
        <p>🔄 Quick & Painless Process</p>
        <p>🏆 Gives You a Sense of Purpose</p>
        <p>📉 Reduces Risk of Certain Diseases</p>
        <p>📅 Blood Cannot Be Manufactured</p>
        <p>📍 Blood Banks Always Need Supply</p>
        </div>
    </div>
    </div>
    <div className="col-sm-6">
    <div className="row" style={{marginLeft:'40px'}}>
            <div className="col-sm-1">       
                <img src={whoImage} style={{height:'40px', width:'40px', marginTop:'10px'}} alt="Card cap" />
            </div>
            <div className="col-sm-10">    
                <h2 style={{color:'rgb(192, 57, 57)', marginTop:'10px'}}>Who can donate?</h2>
            </div>
        </div>
        <div style={{display:'flex', justifyContent:'center'}}>
        <div style={{width:'80%', marginLeft:'80px', marginTop:'30px'}}>
        <p>✔️ Healthy individuals aged 18-65 years</p>
        <p>✔️ Minimum weight 50kg</p>
        <p>✔️ Free from serious illnesses or infections</p>
        <p>✔️ No recent tattoos, surgeries, or major medical procedures</p>
        <p>✔️ Normal Blood Pressure</p>
        <p>✔️ No Recent Vaccinations</p>
        <p>✔️ No Recent Alcohol or Drug Use</p>
        </div>
    </div>
    </div>
    </div>
    </>
)
}
export default Information;