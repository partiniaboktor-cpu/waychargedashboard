import React, { useState } from "react";
import './Adduser.css'
import Navbar from '../Components/Nav';
import Topbar from '../Components/Tobbar';
import { Link } from 'react-router-dom';
import Footer from "../Components/Footer";

const Adduser = () => {

const [name4,setName4] = useState("");
const [email4,setEmail4] = useState("");
const [role4,setRole4] = useState("");
const [status4,setStatus4] = useState("");
const [carType4,setCarType4] = useState("");
const [joinDate4,setJoinDate4] = useState("");
const [lastActive4,setLastActive4] = useState("");


    return ( <>
    
      <div className="dashboard">

      <Navbar />

      <div className="mainContent">

        <Topbar />

<div className="modalOverlay4">

<div className="modalContainer4">

<div className="modalHeader4">
<h2 className="title4">Add New User</h2>
<Link to="/Users" className="closeLink">
  <span className="closeBtn4">×</span>
</Link></div>



<div className="formContainer4">

<label className="label4">Name</label>
<input className="input4" placeholder="Enter location name" />


<label className="label4">Email*</label>
<textarea className="textarea4" placeholder="Enter location description"></textarea>


<label className="label4">Role*</label>
<input className="input4" placeholder="Enter full address" />


<label className="label4">Status*</label>
<input className="input4" />


<label className="label4">Car Type</label>
<textarea className="textarea4" placeholder="List available amenities"></textarea>


<label className="label4">Join Date</label>
<textarea className="textarea4" placeholder="List available amenities"></textarea>


<label className="label4">Last Active</label>
<textarea className="textarea4" placeholder="List available amenities"></textarea>


<div className="buttonContainer4">
  <Link to="/Users" className="Adduser">
<button className="submitBtn4">Add User</button>
</Link>
</div>

</div>

</div>

</div>

<Footer />

      </div>
    </div>
    
    </> );
}
 
export default Adduser;