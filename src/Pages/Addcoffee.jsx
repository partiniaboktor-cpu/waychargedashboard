import React from "react";
import "./Addcoffee.css";
import Navbar from '../Components/Nav';
import Topbar from '../Components/Tobbar';
import { Link } from 'react-router-dom';
import Footer from "../Components/Footer";
import RichTextField from "../Components/RichTextField";

const Addcofffee = () => {

    return ( <>
    
      <div className="dashboard">

      <Navbar />

      <div className="mainContent">

        <Topbar />

<div className="modalOverlay4">

<div className="modalContainer4">

<div className="modalHeader4">
<h2 className="title4">Add New Coffee Type</h2>
<Link to="/Coffee" className="closeLink">
  <span className="closeBtn4">×</span>
</Link></div>



<div className="formContainer4">

<label className="label4">Image</label>
<RichTextField placeholder="Enter image URL or image details" minHeight={56} />


<label className="label4">Descrption</label>
<RichTextField placeholder="Enter coffee description" minHeight={120} />


<label className="label4">Price</label>
<RichTextField placeholder="Enter price" minHeight={56} />


<label className="label4">Size</label>
<RichTextField placeholder="Enter available sizes" minHeight={56} />


<label className="label4">Status</label>
<RichTextField placeholder="Enter status" minHeight={96} />




<label className="label4">Last Active</label>
<RichTextField placeholder="Enter last active info" minHeight={96} />


<div className="buttonContainer4">
  <Link to="/Coffee" className="Adduser">
<button className="submitBtn4">Add Coffee</button>
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
 
export default Addcofffee;