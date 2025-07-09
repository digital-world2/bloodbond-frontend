import React from "react";
import easyImage from "../assets/image/easy.png"
import findImage from "../assets/image/find.png"
import inventoryImage from "../assets/image/inventory.png"
import supportImage from "../assets/image/support.png"
const Services=()=>{
return(
    <div className="service-container">
        <div className="text-center">
            <h2 className="service-title">Our Services</h2>
        </div>
    <div className="row">
        <div className="col-sm-3 text-center service-card">
        <div className="card w-80" style={{marginLeft: '10px'}}>
            <div>
            <img className="card-img-top" src={easyImage} style={{height:'100px', width:'100px', marginTop:'30px'}} alt="Card cap" />
            </div>
  <div className="card-body">
    <h5 className="card-title">Easy Blood Donation Registration</h5>
  </div>
</div>
        </div>
        <div className="col-sm-3 text-center service-card">
        <div className="card w-80">
            <div>
            <img className="card-img-top" src={findImage} style={{height:'100px', width:'100px', marginTop:'30px'}} alt="Card cap" />
            </div>
  <div className="card-body">
    <h5 className="card-title">Find and Request Blood</h5>
  </div>
</div>
        </div>
        <div className="col-sm-3 text-center service-card">
        <div className="card w-80">
            <div>
            <img className="card-img-top" src={inventoryImage} style={{height:'100px', width:'100px', marginTop:'30px'}} alt="Card cap" />
            </div>
  <div className="card-body">
    <h5 className="card-title">Blood Inventory Management</h5>
  </div>
</div>
        </div>
        <div className="col-sm-3 text-center service-card">
        <div className="card w-80" style={{marginRight:'10px'}}>
            <div>
            <img className="card-img-top" src={supportImage} style={{height:'100px', width:'100px', marginTop:'30px'}} alt="Card cap" />
            </div>
  <div className="card-body">
    <h5 className="card-title">24/7 Support & Assistance</h5>
  </div>
</div>
        </div>
    </div>
    </div>
)
}
export default Services;