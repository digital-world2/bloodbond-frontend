import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import logImage from "../../assets/image/logimage.jpg"
import Form from "../../components/shared/Form/Form";

const Loginpage=()=>{
return(
    <>
    <Header/>
    <div className="row" style={{marginBottom:'20px'}}>
        <div className="col-md-7 form-banner">
            <img src={logImage} alt="banner" />
        </div>
        <div className="col-md-5 log1">
            <Form formTitle={'Login Page'} submitBtn={'Login'} formType={'login'}/>
        </div>
    </div>
    {/* <div className="row" style={{marginBottom:'20px'}}>
      <div className="col-md-7 form-banner">
      <img src={logImage} alt="banner" />
      </div>
      <div className="col-md-5 form-container">
        <div className="row log">

        <Form formTitle={' Login Page '} submitBtn={'Login'} formType={'login'}/>
        </div>
        
      </div>
    </div> */}
    {/* <div style={{background:'rgb(244,244,244)', paddingTop:'20px', paddingBottom:'20px'}}>
    <div className="container">
        <div className="text-center"><h2>Become a Donor</h2></div>
            <div className="card" style={{padding:'20px',margin:'10px'}}>
            <div className="row">
        <div className="col-sm-6">
        <img src={logImage} style={{width:'100%', height:'100%'}} alt="banner" />
        </div>
        <div className="col-sm-6">
            <div className="form-group">
                <label for="name">Name:</label>
                <input type="text" placeholder="Enter you name" className="form-control" />
            </div>
            <div className="form-group mt-2">
                <label for="name">Email:</label>
                <input type="text" placeholder="Enter you email" className="form-control" />
            </div>
            <div className="form-group mt-2">
                <label for="name">Mobile Number:</label>
                <input type="text" placeholder="Enter you mobile number" className="form-control" />
            </div>
            <div className="form-group mt-2">
                <label for="name">Blood Group:</label>
                <input type="text" placeholder="Enter you blood group" className="form-control" />
            </div>
            <div className="form-group mt-2">
                <label for="name">Location:</label>
                <input type="text" placeholder="Enter you Enter you nearabout hospital e.g Services Hospital" className="form-control" />
            </div>
            <div className="form-group mt-2">
                <label for="name">Password:</label>
                <input type="text" placeholder="Enter you password" className="form-control" />
            </div>
            <div className="form-group mt-3 text-center">
                <button className="btn btn-danger">Submit</button>
            </div>
        </div>
            </div>
        </div>
    </div>
    </div> */}
    <Footer/>
    </>
)
}
export default Loginpage;
// import React, { useState } from 'react';

// const Loginpage = () => {
//   const [role, setRole] = useState('');
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     bloodGroup: '',
//     location: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
//   return (
//     <div>
//       <h2>Signup</h2>

//       <select name="role" value={role} onChange={(e) => setRole(e.target.value)}>
//         <option value="">Select Role</option>
//         <option value="donor">Donor</option>
//         <option value="recipient">Recipient</option>
//         <option value="admin">Admin</option>
//       </select>

//       <input
//         type="text"
//         name="name"
//         placeholder="Name"
//         value={formData.name}
//         onChange={handleChange}
//       />

//       <input
//         type="email"
//         name="email"
//         placeholder="Email"
//         value={formData.email}
//         onChange={handleChange}
//       />

//       <input
//         type="password"
//         name="password"
//         placeholder="Password"
//         value={formData.password}
//         onChange={handleChange}
//       />

//       {role === 'donor' && (
//         <>
//           <input
//             type="text"
//             name="bloodGroup"
//             placeholder="Blood Group"
//             value={formData.bloodGroup}
//             onChange={handleChange}
//           />
//           <input
//             type="text"
//             name="location"
//             placeholder="Location"
//             value={formData.location}
//             onChange={handleChange}
//           />
//         </>
//       )}

//       {role === 'recipient' && (
//         <>
//           <input
//             type="text"
//             name="location"
//             placeholder="Location"
//             value={formData.location}
//             onChange={handleChange}
//           />
//         </>
//       )}

//       {/* Admin doesn't need extra fields for now */}

//       {/* <button onClick={() => handleSignup(role, formData)}>Signup</button> */}
//     </div>
//   );
// };

// export default Loginpage;
