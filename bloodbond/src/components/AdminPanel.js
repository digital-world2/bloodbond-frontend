import React, { useEffect, useState } from 'react';
import Dashboard from './Dashboard';
import Header from "../components/Header";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



const AdminPanel = () => {
  const [bloodRequests, setBloodRequests] = useState([]);
  const [activeMenu, setActiveMenu] = useState('requests'); // default to Blood Requests
  const [donors, setDonors] = useState([]);


  useEffect(() => {
  if (activeMenu === 'requests') fetchRequests();
  if (activeMenu === 'donors') fetchDonors(); // fetch donors when Donors tab is active
}, [activeMenu]);
  const fetchDonors = async () => {
  try {
    const response = await fetch('/api/v1/donors');
    const data = await response.json();
    if (data.success) {
      setDonors(data.donors);
    } else {
      console.error("Error fetching donors:", data.message);
    }
  } catch (error) {
    console.error("Error fetching donors:", error);
  }
};

  const fetchRequests = async () => {
    try {
      const response = await fetch('/api/v1/blood/requests');
      const data = await response.json();
      if (data.success) {
        setBloodRequests(data.requests);
      }
    } catch (error) {
      console.error("Error fetching requests:", error);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      const response = await fetch(`/api/v1/blood/update-status/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });

      const result = await response.json();
      if (result.success) {
        fetchRequests();
      } else {
        console.error("Failed to update status:", result.message);
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };


  const navigate = useNavigate();

const handleViewDonor = (donorId) => {
  navigate(`/donorprofile/${donorId}`); // This will navigate to the specific donor profile page
};

const handleVerifyToggle = async (donorId, status) => {
  try {
    const response = await fetch(`/api/v1/donors/verify-toggle/${donorId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ verified: status })
    });

    const data = await response.json();
    if (data.success) {
      toast.success(`Donor ${status ? 'verified' : 'unverified'} successfully!`);
      fetchDonors(); // Refresh list
    } else {
      toast.error(data.message || 'Failed to update donor.');
    }
  } catch (error) {
    console.error("Error toggling donor verification:", error);
    toast.error('An error occurred.');
  }
};



  return (
    <div style={styles.page}>
      <Header/>
      {/* Header */}
      <header style={styles.header}>🩸 Blood Donation Admin Panel</header>

      {/* Main content area with sidebar and content */}
      <div style={styles.main}>
        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <h3 style={styles.sidebarHeading}>Admin Menu</h3>
          <ul style={styles.sidebarList}>
  <li style={activeMenu === 'dashboard' ? styles.activeItem : styles.sidebarListItem} onClick={() => setActiveMenu('dashboard')}>
    Dashboard
  </li>
  <li style={activeMenu === 'requests' ? styles.activeItem : styles.sidebarListItem} onClick={() => setActiveMenu('requests')}>
    Blood Requests
  </li>
<li style={activeMenu === 'donors' ? styles.activeItem : styles.sidebarListItem} onClick={() => setActiveMenu('donors')}>
              Donors
            </li>
            </ul>

        </aside>

        {/* Content */}
        <main style={styles.content}>
            {activeMenu === 'dashboard' && <Dashboard/>}
  {activeMenu === 'requests' && (
    <>
<h2 style={styles.heading}>Blood Requests</h2>
          <table style={styles.table}>
            <thead>
              <tr>
                {['Name', 'Blood Group', 'Quantity', 'Needed Time', 'Location', 'Contact', 'Status', 'Requested At', 'Action'].map((head) => (
                  <th key={head} style={styles.cell}>{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bloodRequests.map(req => (
                <tr key={req._id}>
                  <td style={styles.cell}>{req.name}</td>
                  <td style={styles.cell}>{req.bloodGroup}</td>
                  <td style={styles.cell}>{req.quantity}</td>
                  <td style={styles.cell}>{req.neededTime}</td>
                  <td style={styles.cell}>{req.location}</td>
<td style={styles.cell}>
  <a
    href={`https://wa.me/${req.contact}`}
    target="_blank"
    rel="noopener noreferrer"
    style={styles.contactButton}
  >
    Contact!
  </a>
</td>
                  <td style={styles.cell}>
                    <span
                      style={{
                        ...styles.statusBadge,
                        backgroundColor: req.status === 'Fulfilled' ? '#4caf50' : '#ff9800'
                      }}
                    >
                      {req.status}
                    </span>
                  </td>
                  <td style={styles.cell}>{new Date(req.createdAt).toLocaleString()}</td>
                  <td style={styles.cell}>
                    <button
                      style={{
                        ...styles.button,
                        backgroundColor: req.status === 'Pending' ? '#4caf50' : '#ff9800'
                      }}
                      onClick={() => handleStatusChange(req._id, req.status === 'Pending' ? 'Fulfilled' : 'Pending')}
                    >
                      {req.status === 'Pending' ? 'Mark Fulfilled' : 'Mark Pending'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>  
            </>
  )}


  {activeMenu === 'donors' && (
  <>
    <h2 style={styles.heading}>Registered Donors</h2>
    <table style={styles.table}>
      <thead>
  <tr>
    <th style={styles.cell}>Name</th>
    <th style={styles.cell}>Email</th>
    <th style={styles.cell}>Blood Group</th>
    <th style={styles.cell}>Nearest Hospital</th>
    <th style={styles.cell}>Contact</th>
    <th style={styles.cell}>Actions</th>
  </tr>
</thead>
<tbody>
  {donors.map(donor => (
    <tr key={donor._id}>
      <td style={styles.cell}>{donor.name}</td>
      <td style={styles.cell}>{donor.email}</td>
      <td style={styles.cell}>{donor.bloodGroup}</td>
      <td style={styles.cell}>{donor.address}</td>
      <td style={styles.cell}>{donor.phonenumber}</td>
      <td style={styles.cell}>
        <button
          style={{ ...styles.button, marginRight: '10px', backgroundColor: '#3498db' }}
          onClick={() => handleViewDonor(donor._id)}
        >
          View
        </button>
        {donor.verified ? (
  <button
    style={{ ...styles.button, backgroundColor: '#e74c3c', marginLeft: '10px' }}
    onClick={() => handleVerifyToggle(donor._id, false)}
  >
    Unverify
  </button>
) : (
  <button
    style={{ ...styles.button, backgroundColor: '#2ecc71', marginLeft: '10px' }}
    onClick={() => handleVerifyToggle(donor._id, true)}
  >
    Verify
  </button>
)}

      </td>
    </tr>
  ))}
</tbody>

    </table>
  </>
)}

        </main>
        
      </div>

      {/* Footer */}
      <footer style={styles.footer}>© 2025 Blood Donation System</footer>
    </div>
  );
};



// Styles
const styles = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  header: {
    backgroundColor: '#ff9800',
    color: '#fff',
    padding: '20px 30px',
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  main: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  sidebar: {
    width: '200px',
    backgroundColor: '#2c3e50',
    color: '#fff',
    padding: '20px 15px'
  },
  sidebarHeading: {
    fontSize: '20px',
    marginBottom: '20px'
  },
  sidebarListItem: {
  cursor: 'pointer',
  padding: '10px 0',
  color: '#fff',
  transition: 'color 0.3s',
},
activeItem: {
  fontWeight: 'bold',
  color: '#1abc9c',
  cursor: 'default',
  padding: '10px 0',
},
  content: {
    flex: 1,
    padding: '30px',
    fontFamily: 'Arial, sans-serif'
  },
  heading: {
    marginBottom: '20px',
    fontSize: '26px',
    color: '#333'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: '#fff',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
  },
  cell: {
    padding: '12px 16px',
    borderBottom: '1px solid #eee',
    textAlign: 'left'
  },
  statusBadge: {
    padding: '5px 10px',
    color: 'white',
    borderRadius: '12px',
    fontSize: '13px',
    fontWeight: 'bold'
  },
  button: {
    padding: '6px 12px',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px'
  },
  footer: {
    backgroundColor: '#ecf0f1',
    color: '#333',
    padding: '14px 30px',
    textAlign: 'center',
    fontSize: '14px'
  },
  contactButton: {
  backgroundColor: '#4caf50',
  color: 'white',
  padding: '6px 12px',
  textDecoration: 'none',
  borderRadius: '4px',
  fontWeight: 'bold',
  fontSize: '14px',
  display: 'inline-block'
}
};

export default AdminPanel;
