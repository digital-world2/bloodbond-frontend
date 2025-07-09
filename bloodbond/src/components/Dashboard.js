// // Dashboard.js
// import React, { useEffect, useState } from 'react';

// const Dashboard = () => {
//   const [stats, setStats] = useState({
//     totalDonors: 0,
//     totalRequests: 0,
//     fulfilledRequests: 0,
//   });

//   useEffect(() => {
//     fetchStats();
//   }, []);

//   const fetchStats = async () => {
//     try {
//       const response = await fetch('/api/v1/dashboard/stats');
//       const data = await response.json();
//       if (data.success) {
//         setStats(data.stats);
//       }
//     } catch (error) {
//       console.error('Error fetching dashboard stats:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Dashboard Overview</h2>
//       <div style={{ display: 'flex', gap: '20px' }}>
//         <div style={styles.statBox}>
//           <h3>Total Donors</h3>
//           <p>{stats.totalDonors}</p>
//         </div>
//         <div style={styles.statBox}>
//           <h3>Total Requests</h3>
//           <p>{stats.totalRequests}</p>
//         </div>
//         <div style={styles.statBox}>
//           <h3>Fulfilled Requests</h3>
//           <p>{stats.fulfilledRequests}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   statBox: {
//     flex: 1,
//     backgroundColor: '#1abc9c',
//     color: '#fff',
//     padding: '20px',
//     borderRadius: '8px',
//     textAlign: 'center',
//   },
// };

// export default Dashboard;







import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalDonors: 0,
    totalRequests: 0,
    fulfilledRequests: 0,
    donorsByBloodGroup: [],
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/v1/dashboard/stats');
      const data = await response.json();
      if (data.success) {
        setStats(data.stats);
      }
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Dashboard Overview</h2>
      <div style={styles.cardContainer}>
        <div style={{ ...styles.statBox, backgroundColor: '#1abc9c' }}>
          <h3>Total Donors</h3>
          <p>{stats.totalDonors}</p>
        </div>
        <div style={{ ...styles.statBox, backgroundColor: '#3498db' }}>
          <h3>Total Requests</h3>
          <p>{stats.totalRequests}</p>
        </div>
        <div style={{ ...styles.statBox, backgroundColor: '#2ecc71' }}>
          <h3>Fulfilled Requests</h3>
          <p>{stats.fulfilledRequests}</p>
        </div>
      </div>

      {/* Donors by Blood Group */}
      <div style={styles.bloodGroupBox}>
        <h3>Donors by Blood Group</h3>
        <div style={styles.verticalChart}>
  {stats.donorsByBloodGroup.map((group) => (
    <div key={group._id} style={styles.verticalBarItem}>
      <div style={styles.verticalBarWithCount}>
  <div style={styles.countText}>{group.count}</div>
  <div
    style={{
      ...styles.verticalBar,
      height: `${group.count * 10}px`,
    }}
  ></div>
</div>

      <div style={styles.verticalLabel}>{group._id || 'Unknown'}</div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '30px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    marginBottom: '20px',
    fontSize: '26px',
    color: '#333',
  },
  cardContainer: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
  },
  statBox: {
    flex: '1 1 250px',
    color: '#fff',
    padding: '30px 20px',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontSize: '20px',
  },
  bloodGroupBox: {
    marginTop: '40px',
    padding: '20px',
    backgroundColor: '#ecf0f1',
    borderRadius: '10px',
  },
  verticalChart: {
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-around',
  height: '300px',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '10px',
  backgroundColor: '#fff',
  marginTop: '20px',
},

verticalBarItem: {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '50px',
},

verticalBar: {
  width: '30px',
  backgroundColor: '#e74c3c',
  borderRadius: '5px 5px 0 0',
  transition: 'height 0.3s ease',
},

verticalLabel: {
  marginTop: '8px',
  fontWeight: 'bold',
  fontSize: '14px',
},
verticalBarWithCount: {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
},

countText: {
  marginBottom: '4px',
  fontSize: '14px',
  fontWeight: 'bold',
  color: '#333',
}

};

export default Dashboard;
