// import Header from "../components/Header";
// import Footer from "../components/Footer";
// const Donorprofile=()=>{
// return(
// <>
// <Header/>
// <h2>Donor Profile</h2>
// <Footer/>
// </>
// )
// }
// export default Donorprofile;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const DonorProfile = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchCurrentUser = async () => {
//       try {
//         const { data } = await axios.get('/api/v1/auth/current-user', {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//           },
//         });

//         if (data?.success) {
//           setUser(data.user);
//         } else {
//           console.error('Failed to fetch user');
//         }
//       } catch (error) {
//         console.error('Error loading profile:', error);
//       }
//     };

//     fetchCurrentUser();
//   }, []);

//   if (!user) return <div>Loading...</div>;

//   return (
//     <div className="donor-profile">
//         {user.bloodReportImage && (
//         <img
//           src={`http://localhost:8080/uploads/${user.bloodReportImage}`}
//           alt="Blood Report"
//           style={{ width: '200px', marginTop: '10px' }}
//         />
//       )}
//       <h2>Welcome, {user.name}</h2>
//       <p>Email: {user.email}</p>
//       <p>Blood Group: {user.bloodGroup}</p>
//       <p>Phone: {user.phonenumber}</p>
//       <p>Location: {user.address}</p>
//     </div>
//   );
// };

// export default DonorProfile;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './DonorProfile.css';
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// const DonorProfile = () => {
//   const [donor, setDonor] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const { data } = await axios.get('/api/v1/auth/current-user', {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//           },
//         });
//         setDonor(data.user);
//       } catch (error) {
//         console.error('Error loading profile', error);
//       }
//     };

//     fetchProfile();
//   }, []);

//   if (!donor) return <div className="donor-profile-container"><div className="donor-profile">Loading...</div></div>;

//   return (
//     <>
//     <Header/>
//     <div className="donor-profile-container">
//       <div className="donor-profile">
//         <img
//           src={`http://localhost:8080/uploads/${donor.bloodReportImage}`}
//           alt="Profile"
//           className="profile-image"
//         />
//         <h2>Welcome, {donor.name}</h2>
//         <div className="donor-info">
//           <p><strong>Email:</strong> {donor.email}</p>
//           <p><strong>Phone:</strong> {donor.phonenumber}</p>
//           <p><strong>Blood Group:</strong> {donor.bloodGroup}</p>
//           <p><strong>Location:</strong> {donor.address}</p>
//           <p><strong>Role:</strong> {donor.role}</p>
//         </div>
//       </div>
//     </div>
//     <Footer/>
//     </>
//   );
// };

// export default DonorProfile;






import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DonorProfile.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const DonorProfile = () => {
  const { id } = useParams(); // donor ID from route (if any)
  const [donor, setDonor] = useState(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        let response;

        if (id) {
          // Admin viewing specific donor by ID
          response = await axios.get(`/api/v1/donors/${id}`);
          setDonor(response.data.donor);
        } else {
          // Donor viewing their own profile
          response = await axios.get('/api/v1/auth/current-user', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          });
          setDonor(response.data.user);
        }

      } catch (error) {
        console.error('Error loading profile:', error);
      }
    };

    fetchProfile();
  }, [id]);

//   const handleSave = async () => {
//   try {
//     const { data } = await axios.put('/api/v1/donors/update-profile', donor, {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem('token')}`,
//       },
//     });

//     if (data.success) {
//       setEditing(false);
//       alert("Profile updated successfully!");
//     } else {
//       alert("Failed to update profile.");
//     }
//   } catch (error) {
//     console.error("Update error:", error);
//     alert("An error occurred.");
//   }
// };


const handleSave = async () => {
  try {
    const updatedData = {
      bloodreportimage: donor.bloodReportImage,
      email: donor.email,
      phonenumber: donor.phonenumber,
      bloodGroup: donor.bloodGroup,
      address: donor.address,
      role: donor.role,
      available: donor.available,
    };

    const { data } = await axios.put('/api/v1/donors/update-profile', updatedData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (data.success) {
      setEditing(false);
      toast("Profile updated successfully!");
    } else {
      alert("Failed to update profile.");
    }
  } catch (error) {
    console.error("Update error:", error);
    alert("An error occurred.");
  }
};




  if (!donor) return <div className="donor-profile-container"><div className="donor-profile">Loading...</div></div>;

  return (
    <>
      <Header />
      <div className="donor-profile-container">
        <div className="donor-profile">
          {editing ? (
  <>
    <input
      type="file"
      accept="image/*"
      onChange={(e) => setDonor({ ...donor, bloodReportImageFile: e.target.files[0] })}
      className="form-control mt-2"
    />
  </>
) : (
  <img
    src={`http://localhost:8080/uploads/${donor.bloodReportImage}`}
    alt="Profile"
    className="profile-image"
  />
)}
          <h2>Welcome, {donor.name}</h2>
          <div className="donor-info">
{editing ? (
  <div>
    <label><strong>Available to Donate: </strong></label>
    <input
      type="checkbox"
      checked={donor.available}
      onChange={(e) => setDonor({ ...donor, available: e.target.checked })}
    />
  </div>
) : (
  <p><strong>Availability:</strong> {donor.available ? "Available" : "Unavailable"}</p>
)}

            {editing ? (
  <input
    type="email"
    value={donor.email}
    onChange={(e) => setDonor({ ...donor, email: e.target.value })}
    className="form-control"
  />
) : (
  <p><strong>Email:</strong> {donor.email}</p>
)}

{editing ? (
  <input
    type="phonenumber"
    value={donor.phonenumber}
    onChange={(e) => setDonor({ ...donor, phonenumber: e.target.value })}
    className="form-control"
  />
) : (
  <p><strong>Phone:</strong> {donor.phonenumber}</p>
)}

{editing ? (
  <input
    type="bloodgroup"
    value={donor.bloodGroup}
    onChange={(e) => setDonor({ ...donor, bloodGroup: e.target.value })}
    className="form-control"
  />
) : (
  <p><strong>Blood Group:</strong> {donor.bloodGroup}</p>
)}

{editing ? (
  <input
    type="location"
    value={donor.address}
    onChange={(e) => setDonor({ ...donor, address: e.target.value })}
    className="form-control"
  />
) : (
  <p><strong>Location:</strong> {donor.address}</p>
)}

{/* {editing ? (
  <input
    type="role"
    value={donor.role}
    onChange={(e) => setDonor({ ...donor, role: e.target.value })}
    className="form-control"
  />
) : ( */}
  <p><strong>Role:</strong> {donor.role}</p>
{/* )} */}
            {/* <p><strong>Phone:</strong> {donor.phonenumber}</p>
            <p><strong>Blood Group:</strong> {donor.bloodGroup}</p>
            <p><strong>Location:</strong> {donor.address}</p>
            <p><strong>Role:</strong> {donor.role}</p> */}
            <button
  className="btn btn-warning mt-3"
  onClick={() => setEditing(true)}
>
  Edit Profile
</button>

{editing && (
  <div className="mt-3">
    <button className="btn btn-success me-2" onClick={handleSave}>
      Save Changes
    </button>
    <button className="btn btn-secondary" onClick={() => setEditing(false)}>
      Cancel
    </button>
  </div>
)}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DonorProfile;
