import React, { useState } from "react";
import './Adduser.css'
import Navbar from '../Components/Nav';
import Topbar from '../Components/Tobbar';

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

       <div className="modalContainer4">

<div className="modalBox4">

<h2 className="title4">Add New User</h2>

<div className="tabs4">
<span className="activeTab4">English Content</span>
<span className="tab4">المحتوى العربي</span>
</div>


{/* Name */}
<label className="label4">Name</label>
<input
className="input4"
value={name4}
onChange={(e)=>setName4(e.target.value)}
placeholder="Enter location name"
/>

<ReactQuill className="editor4"/>


{/* Email */}
<label className="label4">Email*</label>
<input
className="input4"
value={email4}
onChange={(e)=>setEmail4(e.target.value)}
placeholder="Enter location description"
/>

<ReactQuill className="editor4"/>


{/* Role */}
<label className="label4">Role*</label>
<input
className="input4"
value={role4}
onChange={(e)=>setRole4(e.target.value)}
placeholder="Enter full address"
/>

<ReactQuill className="editor4"/>


{/* Status */}
<label className="label4">Status*</label>
<input
className="input4"
value={status4}
onChange={(e)=>setStatus4(e.target.value)}
/>

<ReactQuill className="editor4"/>


{/* Car Type */}
<label className="label4">Car Type</label>
<input
className="input4"
value={carType4}
onChange={(e)=>setCarType4(e.target.value)}
placeholder="List available amenities"
/>

<ReactQuill className="editor4"/>


{/* Join Date */}
<label className="label4">Join Date</label>
<input
className="input4"
value={joinDate4}
onChange={(e)=>setJoinDate4(e.target.value)}
/>

<ReactQuill className="editor4"/>


{/* Last Active */}
<label className="label4">Last Active</label>
<input
className="input4"
value={lastActive4}
onChange={(e)=>setLastActive4(e.target.value)}
/>

<ReactQuill className="editor4"/>


<button className="submitBtn4">Add Location</button>

</div>

</div>


      </div>
    </div>
    
    </> );
}
 
export default Adduser;