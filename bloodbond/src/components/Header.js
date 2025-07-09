import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg shadow-sm" style={{ height: "80px", backgroundColor: 'rgb(192,57,57)' }}>
      <div className="container-fluid">
        {/* Brand */}
        <Link className="navbar-brand fw-bold fs-4 text-white" to="/">
          Blood Bond
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <div className="d-flex align-items-center gap-5">
             <NavItem to="/" label="Home" isAuthenticated={isAuthenticated} />
    <NavItem to="/donors" label="Donors" isAuthenticated={isAuthenticated} />
    <NavItem to="/contact" label="Request" isAuthenticated={isAuthenticated} />
    <NavItem to="/about" label="About" isAuthenticated={isAuthenticated} />
          </div>
        </div>

        {/* Login/Logout Button aligned right */}
        <div className="d-none d-lg-block">
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="btn btn-light"
              style={{ fontWeight: 'bold' }}
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              className="btn btn-light"
              style={{ fontWeight: 'bold' }}
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

// NavLink with active style
const NavItem = ({ to, label, isAuthenticated }) => {

  const handleClick = (e) => {
    if (!isAuthenticated) {
      e.preventDefault();
    toast.warn("Please login first to access this page.");
    }
  };

  return (
    <NavLink
      to={to}
      onClick={handleClick}
      className="nav-link"
      style={({ isActive }) => ({
        color: isActive ? '#fff' : '#f8f9fa',
        borderBottom: isActive ? '2px solid #fff' : 'none',
        fontWeight: isActive ? 'bold' : 'normal'
      })}
    >
      {label}
    </NavLink>
  );
};

export default Header;



// import React from "react";
// import { NavLink, Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <nav className="navbar navbar-expand-lg shadow-sm"  style={{ height: "80px", backgroundColor: 'rgb(192,57,57)' }}>
//       <div className="container-fluid">
//         {/* Brand */}
//         <Link className="navbar-brand fw-bold fs-4 text-white" to="/">
//           Blood Bond
//         </Link>

//         {/* Toggle Button for Mobile */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Navbar Items */}
//         <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
//           <div className="d-flex align-items-center gap-5">
//             <NavItem to="/" label="Home" />
//             <NavItem to="/donors" label="Donors" />
//             <NavItem to="/contact" label="Request" />
//             <NavItem to="/about" label="About" />
//           </div>
//         </div>

//         {/* Login Button aligned right */}
//         <div className="d-none d-lg-block">
//           <NavLink
//             to="/login"
//             className="btn btn-light"
//   style={{ fontWeight: 'bold' }}
//           >
//             Login
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// };

// // NavLink with active style
// const NavItem = ({ to, label }) => (
//   <NavLink
//     to={to}
//     className="nav-link"
//     style={({ isActive }) => ({
//       color: isActive ? '#fff' : '#f8f9fa',
//       // textDecoration: isActive ? 'underline' : 'none',
//       borderBottom: isActive ? '2px solid #fff' : 'none',
//       fontWeight: isActive ? 'bold' : 'normal'
//     })}
    
//   >
//     {label}
//   </NavLink>
// );

// export default Header; 
//ACTIVEEEEEEEEEEEEEEEEEEEEEEEEEEE





// import React from "react";
// import { Link,NavLink } from "react-router-dom";
// const Header=()=>{
// return(
//     <nav className="navbar navbar-expand-lg navbar-light header-container" style={{height:'80px'}}>
//     <div className="container-fluid">
//       <Link className="navbar-brand" to={'/home'}>Blood Bond</Link>
//       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//       <div className="collapse navbar-collapse navbar-container" id="navbarNavAltMarkup">
//         <div className="navbar-nav">
//         <NavLink 
//   to="/" 
//   className="nav-link"
//   style={({ isActive }) => ({
//     marginLeft: '280px',
//     textDecoration: isActive ? 'underline' : 'none',
//     color: isActive ? 'rgb(192,57,57)' : '',
//     borderBottom: isActive ? '2px solid rgb(192,57,57)' : 'none',
//     fontWeight: isActive ? 'bold' : 'normal'
//   })}
// >
//   Home
// </NavLink>

// <NavLink 
//   to="/donors" 
//   className="nav-link"
//   style={({ isActive }) => ({
//     marginLeft: '60px',
//     textDecoration: isActive ? 'underline' : 'none',
//     color: isActive ? 'rgb(192,57,57)' : '',
//     borderBottom: isActive ? '2px solid rgb(192,57,57)' : 'none',
//     fontWeight: isActive ? 'bold' : 'normal'
//   })}
// >
//   Donors
// </NavLink>

// <NavLink 
//   to="/about" 
//   className="nav-link"
//   style={({ isActive }) => ({
//     marginLeft: '60px',
//     textDecoration: isActive ? 'underline' : 'none',
//     color: isActive ? 'rgb(192,57,57)' : '',
//     borderBottom: isActive ? '2px solid rgb(192,57,57)' : 'none',
//     fontWeight: isActive ? 'bold' : 'normal'
//   })}
// >
//   About
// </NavLink>

// <NavLink 
//   to="/contact" 
//   className="nav-link"
//   style={({ isActive }) => ({
//     marginLeft: '60px',
//     textDecoration: isActive ? 'underline' : 'none',
//     color: isActive ? 'rgb(192,57,57)' : '',
//     borderBottom: isActive ? '2px solid rgb(192,57,57)' : 'none',
//     fontWeight: isActive ? 'bold' : 'normal'
//   })}
// >
// Request
// </NavLink>

// <NavLink 
//   to="/login" 
//   className="nav-link buton zoom-hover"
//   style={({ isActive }) => ({
//     marginLeft: '350px',
//     background: 'white',
//     color: isActive ? 'rgb(192,57,57)' : 'rgb(0, 0, 0)',
//     border: isActive ? '2px solid rgb(192,57,57)' : 'none',
//     fontWeight: isActive ? 'bold' : 'normal'
//   })}
// >
//   Login
// </NavLink>


          //  <Link className="nav-link active" style={{marginLeft:'280px'}} aria-current="page" to={'/'}>Home</Link>
          // <Link className="nav-link" style={{marginLeft:'60px'}} to={'/donors'}>Donors</Link>
          // <Link className="nav-link" style={{marginLeft:'60px'}} to={'/about'}>About</Link>
          // <Link className="nav-link" style={{marginLeft:'60px'}} to={'/contact'}>Contact</Link>
          // <Link className="nav-link buton zoom-hover" style={{marginLeft:'350px',background:'white'}} to={'/login'}>Login</Link>
         
         
//           </div>
//       </div>
//     </div>
//   </nav>
// )
// }
// export default Header; 