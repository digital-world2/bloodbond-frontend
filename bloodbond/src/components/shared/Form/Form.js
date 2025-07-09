// import React, { useState } from 'react'
// import InputType from './InputType'
// import { Link } from 'react-router-dom';
// import { handleLogin, handleRegister } from '../../../services/authService';

// const Form = ({formType,submitBtn,formTitle}) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [role, setRole] = useState('donor');
//     const [name, setName] = useState('');
//     const [adminName, setAdminName] = useState('');
//     const [bloodGroup, setBloodGroup] = useState('');
//     const [phonenumber, setPhonenumber] = useState('');
//     const [address, setAddress] = useState('');
//   return (
//     <div>
//         <form onSubmit={(e) => {
//             if(formType === 'login') return handleLogin(e,email,password,role)
//                 else if(formType === 'register') return handleRegister(e,name,role,email,password,adminName,bloodGroup,phonenumber,address)
//         }}>
//             <h1 className='text-center'>{formTitle}</h1>
//             <hr/>
//             <div className="d-flex mb-3">
//                 <div className="form-check ms-1">
//                     <input 
//                     type="radio"
//                     className="form-check-input" 
//                     name="role" 
//                     id="donorRadio"
//                     value={'donor'} 
//                     onChange={(e)=>setRole(e.target.value)}
//                     defaultChecked
//                     />
//                     <label htmlFor='donorRadio' className='form-check-label'>
//                         Donor
//                     </label>
//                 </div>

//                 <div className="form-check ms-5">
//                     <input 
//                     type="radio"
//                     className="form-check-input" 
//                     name="role" 
//                     id="recipientRadio"
//                     value={'recipient'} 
//                     onChange={(e)=>setRole(e.target.value)}
//                     />
//                     <label htmlFor='recipientRadio' className='form-check-label'>
//                         Recipient
//                     </label>
//                 </div>

//                 <div className="form-check ms-5">
//                     <input 
//                     type="radio"
//                     className="form-check-input" 
//                     name="role" 
//                     id="adminRadio"
//                     value={'admin'} 
//                     onChange={(e)=>setRole(e.target.value)}
//                     />
//                     <label htmlFor='adminRadio' className='form-check-label'>
//                         Admin
//                     </label>
//                 </div>
//             </div>

//             {/* ***Switch Statement*** */}
//             {(() => {
//                  //eslint-disable-next-line
//                 switch(true){
//                     case formType === 'login':{
//                         return(
//                             <>
//                              <InputType 
//             labelText={"Email"} 
//             labelFor={"forEmail"} 
//             inputType={"email"} 
//             name={"email"}
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             />
//             <InputType 
//             labelText={"Password"} 
//             labelFor={"forPassword"} 
//             inputType={"password"} 
//             name={"password"}
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             />
//                             </>
//                         )
//                     }

//                     case formType === 'register':{
//                         return(
//                             <>
//                             {(role === 'donor'  || role === 'recipient') && (
//                                 <InputType 
//                                 labelText={"Name"} 
//                                 labelFor={"forName"} 
//                                 inputType={"text"} 
//                                 name={"name"}
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                                 />
//             )}
//             {role ==='admin' && ( 
//                 <InputType 
//                 labelText={"Admin Name"} 
//                 labelFor={"forAdminName"} 
//                 inputType={"text"} 
//                 name={"adminName"}
//                 value={adminName}
//                 onChange={(e) => setAdminName(e.target.value)}
//                 />
//             )}
//              {role === 'donor' && (
//   <div className="mb-3">
//     <label htmlFor="bloodGroup" className="form-label">Blood Group</label>
//     <select required
//       className="form-select"
//       id="bloodGroup"
//       name="bloodGroup"
//       value={bloodGroup}
//       onChange={(e) => setBloodGroup(e.target.value)}
//     >
//       <option value="">Select your blood group</option>
//       <option value="A+">A+</option>
//       <option value="A-">A-</option>
//       <option value="B+">B+</option>
//       <option value="B-">B-</option>
//       <option value="AB+">AB+</option>
//       <option value="AB-">AB-</option>
//       <option value="O+">O+</option>
//       <option value="O-">O-</option>
//     </select>
//   </div>
// )}

             
             
//              <InputType 
//             labelText={"Phone Number"} 
//             labelFor={"forPhonenumber"} 
//             inputType={"text"} 
//             name={"phonenumber"}
//             value={phonenumber}
//             onChange={(e) => setPhonenumber(e.target.value)}
//             />
//              <InputType 
//             labelText={"Nearest Hospital"} 
//             labelFor={"forAddress"} 
//             inputType={"text"} 
//             name={"address"}
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             />
//             <InputType 
//             labelText={"Email"} 
//             labelFor={"forEmail"} 
//             inputType={"email"} 
//             name={"email"}
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             />
//             <InputType 
//             labelText={"Password"} 
//             labelFor={"forPassword"} 
//             inputType={"password"} 
//             name={"password"}
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             />
//                             </>
//                         )
//                     }
//                 }
//             })()}
             

//             <div className="d-flex flex-row justify-content-between">
//                 { formType === 'login' ? (
//                     <p>Not Registered yet? Register
//                     <Link to="/register" className="custom-link"> Here !</Link>
//                     </p>
//                 ) : (
//                     <p>Alread Registered
//                     <Link to="/login" className="custom-link"> login !</Link>
//                     </p>
//                 ) }
//                 <button className='btn' style={{background:'rgb(192,57,57)', color:'white'}} type='submit'>
//                     {submitBtn}
//                 </button>
//             </div>


//         </form>
//     </div>
//   )
// }

// export default Form
















import React, { useState } from 'react';
import InputType from './InputType';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogin, userRegister } from '../../../redux/features/auth/authActions';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Form = ({ formType, submitBtn, formTitle }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('donor');
  const [name, setName] = useState('');
  const [adminName, setAdminName] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [address, setAddress] = useState('');
  const [bloodReportImage, setBloodReportImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formType === 'login') {
      const result = await dispatch(userLogin({ role, email, password }));
      if (userLogin.rejected.match(result)) {
        toast.error(result.payload || "Login failed");
      }
      else if (userLogin.fulfilled.match(result)) {
      const userRole = result.payload.user.role;
      // ✅ Redirect based on role
      if (userRole === 'donor') navigate('/donorprofile');
      else if (userRole === 'recipient') navigate('/donors');
      else if (userRole === 'admin') navigate('/admindashboard');
    }
    } else {
      const result = await dispatch(userRegister({ name, role, email, password, adminName, bloodGroup, phonenumber, address, bloodReportImage }));
      if (userRegister.rejected.match(result)) {
        toast.error(result.payload || "Registration failed");
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className='text-center'>{formTitle}</h1>
        <hr />
        <div className="d-flex mb-3">
{/* Role radio buttons to display all the three radio buttons on both regiseter and login page */}
{/* {['donor', 'recipient', 'admin'].map((r) => (
  <div className="form-check ms-4" key={r}>
    <input
      type="radio"
      className="form-check-input"
      name="role"
      id={`${r}Radio`}
      value={r}
      onChange={(e) => setRole(e.target.value)}
      checked={role === r}
    />
    <label htmlFor={`${r}Radio`} className="form-check-label">{r.charAt(0).toUpperCase() + r.slice(1)}</label>
  </div>
))} */}
 {/* Role radio buttons */}
{['donor', 'recipient'].map((r) => (
  <div className="form-check ms-4" key={r}>
    <input
      type="radio"
      className="form-check-input"
      name="role"
      id={`${r}Radio`}
      value={r}
      onChange={(e) => setRole(e.target.value)}
      checked={role === r}
    />
    <label htmlFor={`${r}Radio`} className="form-check-label">{r.charAt(0).toUpperCase() + r.slice(1)}</label>
  </div>
))}

{/* Show admin radio only on login form */}
{formType === 'login' && (
  <div className="form-check ms-4">
    <input
      type="radio"
      className="form-check-input"
      name="role"
      id="adminRadio"
      value="admin"
      onChange={(e) => setRole(e.target.value)}
      checked={role === 'admin'}
    />
    <label htmlFor="adminRadio" className="form-check-label">Admin</label>
  </div>
)}

        </div>

        {/* Conditional Fields */}
        {formType === 'register' && (
          <>
            {(role === 'donor' || role === 'recipient') && (
              <InputType labelText="Name" labelFor="forName" inputType="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            )}
            {role === 'admin' && (
              <InputType labelText="Admin Name" labelFor="forAdminName" inputType="text" name="adminName" value={adminName} onChange={(e) => setAdminName(e.target.value)} />
            )}
            {role === 'donor' && (
              <>
              <div className="mb-3">
                <label htmlFor="bloodGroup" className="form-label">Blood Group</label>
                <select className="form-select" id="bloodGroup" value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} required>
                  <option value="">Select your blood group</option>
                  {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((bg) => (
                    <option key={bg} value={bg}>{bg}</option>
                  ))}
                </select>
              </div>
               <div className="mb-3">
    <label htmlFor="bloodReportImage" className="form-label">Upload Blood Report</label>
    <input
      type="file"
      className="form-control"
      name="bloodReportImage"
      onChange={(e) => setBloodReportImage(e.target.files[0])}
    />
  </div>
  </>
            )}
            <InputType labelText="Phone Number" labelFor="forPhonenumber" inputType="text" name="phonenumber" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} />
            <InputType labelText="Nearest Hospital" labelFor="forAddress" inputType="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
          </>
        )}

        {/* Common Fields */}
        <InputType labelText="Email" labelFor="forEmail" inputType="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <InputType labelText="Password" labelFor="forPassword" inputType="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <div className="d-flex flex-row justify-content-between align-items-center mt-3">
          <p>
            {formType === 'login' ? (
              <>Not Registered yet? <Link to="/register" className="custom-link">Here!</Link></>
            ) : (
              <>Already Registered? <Link to="/login" className="custom-link">Login!</Link></>
            )}
          </p>
          <button className='btn' style={{ background: 'rgb(192,57,57)', color: 'white' }} type='submit'>
            {submitBtn}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
