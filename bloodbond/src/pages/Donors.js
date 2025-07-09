// import React from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// const Donors=()=>{
// return(
//     <>
//     <Header/>
//     <p>Donors</p>
//     <Footer/>
//     </>
// )
// }
// export default Donors;




// import React, { useEffect, useState } from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import axios from "axios";

// const Donors = () => {
//   const [donors, setDonors] = useState([]);

//   useEffect(() => {
//     const fetchDonors = async () => {
//       try {
//         const response = await axios.get("/api/donors");
//         setDonors(response.data);
//       } catch (error) {
//         console.error("Failed to fetch donors", error);
//       }
//     };

//     fetchDonors();
//   }, []);

//   return (
//     <>
//       <Header />
//       <div className="container my-4">
//         <h2 className="text-center mb-4" style={{ color: "rgb(192,57,57)" }}>
//           Available Blood Donors
//         </h2>
//         <div className="row">
//           {donors.length > 0 ? (
//             donors.map((donor) => (
//               <div className="col-md-4 mb-3" key={donor._id}>
//                 <div className="card p-3 shadow-sm">
//                   <h5>Name: {donor.name}</h5>
//                   <p>Blood Group: {donor.bloodGroup}</p>
//                   <p>Phone: {donor.phonenumber}</p>
//                   <p>Location: {donor.address}</p>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <h5 className="text-center">No donors found.</h5>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Donors;



// WORKIND PROPERLY******************************************************************
// import React, { useEffect, useState } from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import axios from "axios";

// const Donors = () => {
//   const [donors, setDonors] = useState([]);

//   useEffect(() => {
//     const fetchDonors = async () => {
//       try {
//         const { data } = await axios.get("http://localhost:8080/api/donors");
//         setDonors(data);
//       } catch (error) {
//         console.error("Failed to fetch donors", error);
//       }
//     };

//     fetchDonors();
//   }, []);

//   return (
//     <>
//       <Header />
//       <div className="container my-5">
//         <h2 className="text-center mb-4" style={{ color: "rgb(192,57,57)", fontWeight: "bold" }}>
//           Blood Donors List
//         </h2>

//         <div className="row">
//           {donors.length > 0 ? (
//             donors.map((donor) => (
//               <div key={donor._id} className="col-md-4 mb-4">
//                 <div className="card shadow-sm h-100">
//                   <div className="card-body d-flex flex-column">
//                     <h5 className="card-title" style={{ color: "rgb(192,57,57)" }}>{donor.name}</h5>
//                     <p className="card-text mb-1"><strong>Blood Group:</strong> {donor.bloodGroup}</p>
//                     <p className="card-text mb-1"><strong>Phone:</strong> {donor.phonenumber}</p>
//                     <p className="card-text mb-1"><strong>Location:</strong> {donor.address}</p>
//                     <p className="card-text mt-2" style={{ fontSize: "0.9rem", color: "gray" }}>
//                       Available for donation ✅
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <h5 className="text-center">No donors available.</h5>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Donors;





// WITH SEARCH AND FILTER
// import React, { useEffect, useState } from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import axios from "axios";

// const Donors = () => {
//   const [donors, setDonors] = useState([]);
//   const [filteredDonors, setFilteredDonors] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const fetchDonors = async () => {
//       try {
//         const { data } = await axios.get("http://localhost:8080/api/donors");
//         setDonors(data);
//         setFilteredDonors(data); // initially show all
//       } catch (error) {
//         console.error("Failed to fetch donors", error);
//       }
//     };

//     fetchDonors();
//   }, []);

//   // Handle search/filter
//   const handleSearch = (e) => {
//     const value = e.target.value.toLowerCase();
//     setSearchTerm(value);

//     const filtered = donors.filter(donor =>
//       donor.bloodGroup.toLowerCase().includes(value) ||
//       donor.address.toLowerCase().includes(value)
//     );

//     setFilteredDonors(filtered);
//   };

//   return (
//     <>
//       <Header />
//       <div className="container my-5">
//         <h2 className="text-center mb-4" style={{ color: "rgb(192,57,57)", fontWeight: "bold" }}>
//           Blood Donors List
//         </h2>

//         {/* Search Bar */}
//         <div className="mb-4 text-center">
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={handleSearch}
//             placeholder="Search by Blood Group or City"
//             className="form-control w-50 mx-auto"
//           />
//         </div>

//         {/* Donors List */}
//         <div className="row">
//           {filteredDonors.length > 0 ? (
//             filteredDonors.map((donor) => (
//               <div key={donor._id} className="col-md-4 mb-4">
//                 <div className="card shadow-sm h-100">
//                   <div className="card-body d-flex flex-column">
//                     <h5 className="card-title" style={{ color: "rgb(192,57,57)" }}>{donor.name}</h5>
//                     <p className="card-text mb-1"><strong>Blood Group:</strong> {donor.bloodGroup}</p>
//                     <p className="card-text mb-1"><strong>Phone:</strong> {donor.phonenumber}</p>
//                     <p className="card-text mb-1"><strong>Location:</strong> {donor.address}</p>
//                     <p className="card-text mt-2" style={{ fontSize: "0.9rem", color: "gray" }}>
//                       Available for donation ✅
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <h5 className="text-center">No donors found.</h5>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Donors;





//WITH DROPDOWN OF SEARCH AND FILTER
//11111111111111111111
// import React, { useEffect, useState } from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import axios from "axios";

// const Donors = () => {
//   const [donors, setDonors] = useState([]);
//   const [filteredDonors, setFilteredDonors] = useState([]);
//   const [selectedBloodGroup, setSelectedBloodGroup] = useState('');
//   const [selectedCity, setSelectedCity] = useState('');

//   useEffect(() => {
//     const fetchDonors = async () => {
//       try {
//         const { data } = await axios.get("http://localhost:8080/api/donors");
//         setDonors(data);
//         setFilteredDonors(data);
//       } catch (error) {
//         console.error("Failed to fetch donors", error);
//       }
//     };

//     fetchDonors();
//   }, []);

//   const handleFilter = (bloodGroup, city) => {
//     let filtered = donors;

//     if (bloodGroup) {
//       filtered = filtered.filter(donor => donor.bloodGroup === bloodGroup);
//     }

//     if (city) {
//       filtered = filtered.filter(donor => donor.address.toLowerCase().includes(city.toLowerCase()));
//     }

//     setFilteredDonors(filtered);
//   };

//   const handleBloodGroupChange = (e) => {
//     const value = e.target.value;
//     setSelectedBloodGroup(value);
//     handleFilter(value, selectedCity);
//   };

//   const handleCityChange = (e) => {
//     const value = e.target.value;
//     setSelectedCity(value);
//     handleFilter(selectedBloodGroup, value);
//   };

//   return (
//     <>
//       <Header />
//       <div className="container my-5">
//         <h2 className="text-center mb-4" style={{ color: "rgb(192,57,57)", fontWeight: "bold" }}>
//           Blood Donors List
//         </h2>

//         {/* Dropdown Filters */}
//         <div className="mb-4 d-flex justify-content-center gap-4">
//           {/* Blood Group Dropdown */}
//           <select
//             value={selectedBloodGroup}
//             onChange={handleBloodGroupChange}
//             className="form-select w-25"
//           >
//             <option value="">Filter by Blood Group</option>
//             <option value="A+">A+</option>
//             <option value="A-">A-</option>
//             <option value="B+">B+</option>
//             <option value="B-">B-</option>
//             <option value="AB+">AB+</option>
//             <option value="AB-">AB-</option>
//             <option value="O+">O+</option>
//             <option value="O-">O-</option>
//           </select>

//           {/* City Dropdown */}
//           <select
//             value={selectedCity}
//             onChange={handleCityChange}
//             className="form-select w-25"
//           >
//             <option value="">Filter by Hospital</option>
//             {/* You can manually add your city options */}
//             <option value="Lahore">Lahore</option>
//             <option value="Karachi">Karachi</option>
//             <option value="Islamabad">Islamabad</option>
//             <option value="Rawalpindi">Rawalpindi</option>
//             <option value="Faisalabad">Faisalabad</option>
//             <option value="Multan">Multan</option>
//           </select>
//         </div>

//         {/* Donors List */}
//         <div className="row">
//           {filteredDonors.length > 0 ? (
//             filteredDonors.map((donor) => (
//               <div key={donor._id} className="col-md-4 mb-4">
//                 <div className="card shadow-sm h-100">
//                   <div className="card-body d-flex flex-column">
//                     <h5 className="card-title" style={{ color: "rgb(192,57,57)" }}>{donor.name}</h5>
//                     <p className="card-text mb-1"><strong>Blood Group:</strong> {donor.bloodGroup}</p>
//                     <p className="card-text mb-1"><strong>Phone:</strong> {donor.phonenumber}</p>
//                     <p className="card-text mb-1"><strong>Location:</strong> {donor.address}</p>
//                     <p className="card-text mt-2" style={{ fontSize: "0.9rem", color: "gray" }}>
//                       Available for donation ✅
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <h5 className="text-center">No donors found.</h5>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Donors;




//222222222222222222222222222222222222222222222222222222
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

const Donors = () => {
  const [donors, setDonors] = useState([]);
  const [filteredDonors, setFilteredDonors] = useState([]);
  const [selectedBloodGroup, setSelectedBloodGroup] = useState('');
  const [selectedHospital, setSelectedHospital] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const donorsPerPage = 6;

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const { data } = await axios.get("http://localhost:8080/api/donors");
        setDonors(data);
        setFilteredDonors(data);
      } catch (error) {
        console.error("Failed to fetch donors", error);
      }
    };

    fetchDonors();
  }, []);

  const handleFilter = (bloodGroup, hospital) => {
    let filtered = donors;

    if (bloodGroup) {
      filtered = filtered.filter(donor => donor.bloodGroup === bloodGroup);
    }

    if (hospital) {
      filtered = filtered.filter(donor =>
        donor.address.toLowerCase().includes(hospital.toLowerCase())
      );
    }

    setFilteredDonors(filtered);
    setCurrentPage(1); // Reset to the first page when filtering
  };

  const handleBloodGroupChange = (e) => {
    const value = e.target.value;
    setSelectedBloodGroup(value);
    handleFilter(value, selectedHospital);
  };

  const handleHospitalChange = (e) => {
    const value = e.target.value;
    setSelectedHospital(value);
    handleFilter(selectedBloodGroup, value);
  };

  // Extract unique hospitals from the donors list for dropdown
  const hospitalOptions = [...new Set(donors.map(donor => donor.address))];

  // Pagination Logic
  const indexOfLastDonor = currentPage * donorsPerPage;
  const indexOfFirstDonor = indexOfLastDonor - donorsPerPage;
  const currentDonors = filteredDonors.slice(indexOfFirstDonor, indexOfLastDonor);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Header />
      <div className="container my-5">
        <h2 className="text-center mb-4" style={{ color: "rgb(192,57,57)", fontWeight: "bold" }}>
          Blood Donors List
        </h2>

        {/* Dropdown Filters */}
        <div className="mb-4 d-flex justify-content-center gap-4">
          {/* Blood Group Dropdown */}
          <select
            value={selectedBloodGroup}
            onChange={handleBloodGroupChange}
            className="form-select w-25"
          >
            <option value="">Filter by Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>

          {/* Hospital Dropdown */}
          <select
            value={selectedHospital}
            onChange={handleHospitalChange}
            className="form-select w-25"
          >
            <option value="">Filter by Hospital</option>
            {hospitalOptions.map((hospital, index) => (
              <option key={index} value={hospital}>
                {hospital}
              </option>
            ))}
          </select>
        </div>

        {/* Donors List */}
        <div className="row">
          {currentDonors.length > 0 ? (
            currentDonors.map((donor) => (
//               <div key={donor._id} className="col-md-4 mb-4">
//                 <div className="card shadow-sm h-100">
//                   <div className="card-body d-flex flex-column">
//                     <h5 className="card-title" style={{ color: "rgb(192,57,57)" }}>{donor.name}</h5>
//                     <p className="card-text mb-1"><strong>Blood Group:</strong> {donor.bloodGroup}</p>
//                     <p className="card-text mb-1"><strong>Phone:</strong> {donor.phonenumber}</p>
//                     <p className="card-text mb-1"><strong>Hospital:</strong> {donor.address}</p>
//                     <p className="card-text mt-2" style={{ fontSize: "0.9rem", color: "gray" }}>
//   Status: <span style={{ color: donor.verified ? 'green' : 'red', fontWeight: 'bold' }}>
//     {donor.verified ? 'Verified ✅' : 'Unverified ❌'}
//     </span><br></br>
//     Status: <span style={{ color: donor.available ? 'green' : 'red', fontWeight: 'bold' }}>
//     {donor.available ? 'Available ✅' : 'Unavailable ❌'}
//   </span>
// </p>
//                   </div>
//                 </div>
//               </div>
<div key={donor._id} className="col-md-4 mb-4">
  <div className="card shadow-sm h-100">
    <div className="card-body d-flex flex-column">
      {/* Name and Availability Status in one row */}
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h5 className="card-title mb-0" style={{ color: "rgb(192,57,57)" }}>
          {donor.name}
        </h5>
        <span
          className="badge"
          style={{
            backgroundColor: donor.verified ? '#28a745' : '#dc3545',
            color: 'white',
            fontSize: '0.95rem',
            padding: '5px 8px',
            borderRadius: '8px',
          }}
        >
          {donor.verified ? 'Verified' : 'Unverified'}
        </span>
      </div>

      {/* Rest of the info */}
      <p className="card-text mb-1"><strong>Blood Group:</strong> {donor.bloodGroup}</p>
      <p className="card-text mb-1"><strong>Phone:</strong> {donor.phonenumber}</p>
      <p className="card-text mb-1"><strong>Hospital:</strong> {donor.address}</p>

      {/* Verified Status */}
      <p className="card-text mt-2" style={{ fontSize: "0.9rem", color: "gray" }}>
        Status: <span style={{ color: donor.available ? 'green' : 'red', fontWeight: 'bold' }}>
          {donor.available ? 'Available ✅' : 'Unavailable ❌'}
        </span>
      </p>
    </div>
  </div>
</div>
            ))
          ) : (
            <h5 className="text-center">No donors found.</h5>
          )}
        </div>

        {/* Pagination Controls */}
        <div className="d-flex justify-content-center mt-4">
          <button
            className="btn btn-outline-danger me-2"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage * donorsPerPage >= filteredDonors.length}
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Donors;


