// import React from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// const Contact=()=>{
//     return(
//         <>
//         <Header/>
//         <div className="container mt-5 mb-5">
//         <div className="row align-items-center mb-4">
//           <div className="col-md-6">
//             <h2 className="mb-3 text-danger">Request Blood</h2>
//             <p>
//               If you or someone you know needs blood, please fill out the form below.
//               We will try our best to arrange blood as per your requirement in a timely manner.
//             </p>
//           </div>
//           <div className="col-md-6">
//             <img
//               src="https://www.geetanjalihospital.co.in/images/blood-bank.jpg"
//               alt="Request Blood"
//               className="img-fluid rounded shadow"
//               style={{ maxHeight: '300px' }}
//             />
//           </div>
//         </div>

//         <div className="card p-4 shadow-sm">
//           <h4 className="text-center text-danger mb-4">Blood Request Form</h4>
//           <form>
//             <div className="row g-3">
//               <div className="col-md-6">
//                 <label htmlFor="name" className="form-label">Your Name</label>
//                 <input type="text" className="form-control" id="name" placeholder="Enter your name" />
//               </div>

//               <div className="col-md-6">
//                 <label htmlFor="bloodGroup" className="form-label">Required Blood Group</label>
//                 <input type="text" className="form-control" id="bloodGroup" placeholder="e.g. O+, A-, etc." />
//               </div>

//               <div className="col-md-6">
//                 <label htmlFor="neededTime" className="form-label">Needed Within</label>
//                 <input type="text" className="form-control" id="neededTime" placeholder="e.g. 2 hours, 1 day" />
//               </div>

//               <div className="col-md-6">
//                 <label htmlFor="location" className="form-label">Location</label>
//                 <input type="text" className="form-control" id="location" placeholder="Hospital or Address" />
//               </div>

//               <div className="col-md-6">
//                 <label htmlFor="quantity" className="form-label">Quantity Needed</label>
//                 <input type="text" className="form-control" id="quantity" placeholder="e.g. 2 pints" />
//               </div>

//               <div className="col-md-6">
//                 <label htmlFor="contact" className="form-label">Contact Number</label>
//                 <input type="text" className="form-control" id="contact" placeholder="Phone number" />
//               </div>
//             </div>

//             <div className="text-center mt-4">
//               <button type="submit" className="btn btn-danger px-4">Submit Request</button>
//             </div>
//           </form>
//         </div>
//       </div>
//       <Footer/>
//         </>
//     )
// }
// export default Contact;




import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    bloodGroup: "",
    neededTime: "",
    location: "",
    quantity: "",
    contact: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      for (let key in formData) {
  if (!formData[key]) {
    alert(`Please fill the '${key}' field.`);
    return;
  }
}

      const res = await axios.post("/api/v1/blood/request-blood", formData);
      alert(res.data.message);
       // ✅ Clear the form after successful submission
    setFormData({
      name: "",
      bloodGroup: "",
      neededTime: "",
      location: "",
      quantity: "",
      contact: ""
    });
    } catch (err) {
  console.error("AXIOS ERROR:", err);
  console.error("SERVER RESPONSE:", err.response?.data);
  alert(err.response?.data?.message || "Failed to submit blood request.");
}

  };

const placeholderMap = {
  name: "Enter your full name",
  bloodGroup: "Select blood group",
  neededTime: "e.g. 2 hours, 1 day",
  location: "Enter hospital or address",
  quantity: "e.g. 2 pints",
  contact: "Enter phone number"
};

  return (
    <>
      <Header />
      <div className="container mt-5 mb-5">
        
<div className="row align-items-center mb-4">
          <div className="col-md-6">
             <h2 className="mb-3 text-danger">Request Blood</h2>
            <p>
              If you or someone you know needs blood, please fill out the form below.
              We will try our best to arrange blood as per your requirement in a timely manner.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://www.geetanjalihospital.co.in/images/blood-bank.jpg"
             alt="Request Blood"
              className="img-fluid rounded shadow"
              style={{ maxHeight: '300px' }}
            />
       </div>
        </div>
        {/* ...Heading and Image Code... */}
        <div className="card p-4 shadow-sm">
          <h4 className="text-center text-danger mb-4">Blood Request Form</h4>
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              {["name", "bloodGroup", "neededTime", "location", "quantity", "contact"].map((field, idx) => (
  <div className="col-md-6" key={idx}>
    <label htmlFor={field} className="form-label">
      {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, " $1")}
    </label>

    {field === "bloodGroup" ? (
      <select
        id="bloodGroup"
        className="form-select uniform-border"
        value={formData.bloodGroup}
        onChange={handleChange}
        required
      >
        <option value="">{placeholderMap.bloodGroup}</option>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
      </select>
    ) : (
      <input
        type="text"
        className="form-control uniform-border"
        id={field}
        placeholder={placeholderMap[field]}
        value={formData[field]}
        onChange={handleChange}
        required
      />
    )}
  </div>
))}

            </div>
            <div className="text-center mt-4">
              <button type="submit" className="btn btn-danger px-4">Submit Request</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
