import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import 'jquery'; 
import 'popper.js'; 
import 'bootstrap/dist/js/bootstrap.min.js';
import Donors from './pages/Donors';
import Login from './pages/auth/Loginpage';
import Register from './pages/auth/Registerpage'
import Services from './components/Services';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Admindashboard from './pages/Admindashboard';
import Donorprofile from './pages/Donorprofile';

function App() {
  return (
    <BrowserRouter>
    <ToastContainer />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/donors" element={<Donors/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/services" element={<Home><Services/></Home>} />
      <Route path="/admindashboard" element={<Admindashboard/>} />
      <Route path="/donorprofile" element={<Donorprofile/>} />
      <Route path="/donorprofile/:id" element={<Donorprofile/>} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
