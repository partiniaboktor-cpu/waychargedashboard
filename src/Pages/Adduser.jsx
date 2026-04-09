import React from "react";
import './Adduser.css'
import Navbar from '../Components/Nav';
import Topbar from '../Components/Tobbar';
import { Link } from 'react-router-dom';
import Footer from "../Components/Footer";
import RichTextField from "../Components/RichTextField";

const Adduser = () => {

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
<RichTextField placeholder="Enter user name" minHeight={56} />


<label className="label4">Email*</label>
<RichTextField placeholder="Enter email address" minHeight={56} />


<label className="label4">Role*</label>
<RichTextField placeholder="Enter role" minHeight={56} />


<label className="label4">Status*</label>
<RichTextField placeholder="Enter status" minHeight={56} />


<label className="label4">Car Type</label>
<RichTextField placeholder="Enter car type" minHeight={96} />


<label className="label4">Join Date</label>
<RichTextField placeholder="Enter join date" minHeight={96} />


<label className="label4">Last Active</label>
<RichTextField placeholder="Enter last active date/time" minHeight={96} />


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