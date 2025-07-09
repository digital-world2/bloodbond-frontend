import React from "react";
import { Link } from "react-router-dom";
import mailImage from "../assets/image/mail.png";
import whatsappImage from "../assets/image/whatsapp.png";
import globeImage from "../assets/image/globe.png";
import faviconImage from "../assets/image/favicon.jpg";
import { toast } from "react-toastify";


const Footer = () => {
   const isAuthenticated = !!localStorage.getItem("token");

  const handleProtectedLinkClick = (e, path) => {
    if (!isAuthenticated) {
      e.preventDefault();
    toast.warn("Please login first to access this page.");
    }
  };
  return (
    <div className="footer container-fluid">
      <div className="row text-center text-md-start">
        {/* BLOODBOND Logo Section */}
        <div className="col-12 col-md-4 mb-4 mb-md-0 d-flex flex-column align-items-center">
          <h3 className="link">BLOODBOND</h3>
          <Link to="/">
            <img
              src={faviconImage}
              alt="BloodBond"
              style={{ height: "102px", width: "166px", marginTop: "10px" }}
              className="img-fluid"
            />
          </Link>
        </div>

        {/* Quick Links */}
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <h4 className="link text-center">QUICK LINKS</h4>
          <ul className="usefull-link">
            <li><Link to="/about" onClick={(e) => handleProtectedLinkClick(e, "/about")}>About Us</Link></li>
      <li><Link to="/contact" onClick={(e) => handleProtectedLinkClick(e, "/contact")}>Request Blood</Link></li>
      <li><Link to="/" onClick={(e) => handleProtectedLinkClick(e, "/")}>Our Services</Link></li>
      <li><Link to="/donors" onClick={(e) => handleProtectedLinkClick(e, "/donors")}>Donor List</Link></li>
      <li><Link to="/login" onClick={(e) => handleProtectedLinkClick(e, "/login")}>Donate Now</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-12 col-md-4">
          <h4 className="link text-center text-md-start">CONTACT INFO</h4>
          <p className="para1 text-center text-md-start">Have questions or need help? Reach out to us anytime!</p>

          <div className="d-flex align-items-center mb-2">
            <img src={mailImage} alt="Email" style={{ height: "40px", width: "40px" }} />
            <span className="ms-2 info">bloodbond@gmail.com</span>
          </div>

          <div className="d-flex align-items-center mb-2">
            <img src={whatsappImage} alt="WhatsApp" style={{ height: "40px", width: "40px" }} />
            <span className="ms-2 info">+923057865455</span>
          </div>

          <div className="d-flex align-items-center">
            <img src={globeImage} alt="Website" style={{ height: "40px", width: "40px" }} />
            <span className="ms-2 info">www.bloodbond.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;







// import React from "react";
// import { Link } from "react-router-dom";
// import mailImage from "../assets/image/mail.png"
// import whatsappImage from "../assets/image/whatsapp.png"
// import globeImage from "../assets/image/globe.png"
// import faviconImage from "../assets/image/favicon.jpg"
// const Footer=()=>{
// return(
//     <div className="row footer">
//          <div className="col-sm-4">
//         <h3 className="link text-center" style={{marginTop:'30px'}}>BLOODBOND</h3>
//         <Link to={'/home'}><img src={faviconImage} style={{height:'102px', width:'166px', marginTop:'10px', marginLeft:'130px'}} alt="Card cap" /></Link>
//         {/* <p className="para">We connect blood donors with recepients in real-time to save lives faster. Join us in making a difference because every drop counts!</p> */}
//     </div>
//     <div className="col-sm-4">
//         <div className="text-center">
//             <h4 className="link">QUICK LINKS</h4>
//         </div>
//         <ul className="usefull-link">
//             <li><Link to={'/services'}>Our Services</Link></li>
//             <li><Link to={'/contact'}>FAQ</Link></li>
//             <li><Link to={'/'}>Privacy Policy</Link></li>
//             <li><Link to={'/donors'}>Donor List</Link></li>
//             <li><Link to={'/login'}>Donate Now</Link></li>
//         </ul>
//         </div>
//     <div className="col-sm-4">
//         <h4 className="link">CONTACT INFO</h4>
//         <p className="para1">Have questions or need help? Reach out to us anytime!</p>
//         <div className="row">
//             <div className="col-sm-2">      
//                       <img className="card-img-top" src={mailImage} style={{height:'40px', width:'40px', marginTop:'10px'}} alt="Card cap" />
//             </div>
//             <div className="col-sm-10 info" style={{marginTop:'17px'}}>bloodbond@gmail.com</div>
//         </div>
//         <div className="row">
//             <div className="col-sm-2">      
//                       <img className="card-img-top" src={whatsappImage} style={{height:'40px', width:'40px', marginTop:'10px'}} alt="Card cap" />
//             </div>
//             <div className="col-sm-10 info" style={{marginTop:'17px'}}>+923057865455</div>
//         </div>
//         <div className="row">
//             <div className="col-sm-2">      
//                       <img className="card-img-top" src={globeImage} style={{height:'40px', width:'40px', marginTop:'10px'}} alt="Card cap" />
//             </div>
//             <div className="col-sm-10 info" style={{marginTop:'17px'}}>www.bloodbond.com</div>
//         </div>
//     </div>
//     </div>
// )
// }
// export default Footer;