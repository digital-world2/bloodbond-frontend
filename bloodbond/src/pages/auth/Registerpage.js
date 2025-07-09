import React from 'react'
import registerimage from "../../assets/image/registerimage.jpg"
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Form from '../../components/shared/Form/Form'

const Registerpage = () => {
  return (
    <>
    <Header/>
    <div className="row" style={{marginBottom:'20px'}}>
        <div className="col-md-7 form-banner">
            <img src={registerimage} alt="banner" />
        </div>
        <div className="col-md-5 log1">
            <Form formTitle={'Register'} submitBtn={'Register'} formType={'register'} />
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Registerpage;