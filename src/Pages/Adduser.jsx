import React, { useState } from "react";
import './Adduser.css'
import Navbar from '../Components/Nav';
import Topbar from '../Components/Tobbar';
import { useNavigate } from 'react-router-dom';
import Footer from "../Components/Footer";
import RichTextField from "../Components/RichTextField";
import { ConfirmDialog, InlineMessage } from "../Components/UIStates";

const Adduser = () => {
const navigate = useNavigate();
const [name, setName] = useState("");
const [message, setMessage] = useState({ type: "", text: "" });
const [confirmClose, setConfirmClose] = useState(false);

const handleAdd = () => {
  if (!name.trim()) {
    setMessage({ type: "error", text: "User name is required before adding." });
    return;
  }
  setMessage({ type: "success", text: "User added successfully." });
  setTimeout(() => navigate("/Users"), 500);
};

    return ( <>
    
      <div className="dashboard">

      <Navbar />

      <div className="mainContent">

        <Topbar />

<div className="modalOverlay4">

<div className="modalContainer4">

<div className="modalHeader4">
<h2 className="title4">Add New User</h2>
<button type="button" className="closeLink closeBtn4Button" onClick={() => setConfirmClose(true)}>
  <span className="closeBtn4">×</span>
</button></div>
<InlineMessage type={message.type} message={message.text} />



<div className="formContainer4">

<label className="label4">Name</label>
<RichTextField placeholder="Enter user name" minHeight={56} onChangeText={setName} />


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
<button className="submitBtn4" type="button" onClick={handleAdd}>Add User</button>
</div>

</div>

</div>

</div>

<ConfirmDialog
  open={confirmClose}
  title="Discard user form?"
  description="If you close now, unsaved data will be lost."
  confirmText="Discard"
  confirmVariant="danger"
  onCancel={() => setConfirmClose(false)}
  onConfirm={() => navigate("/Users")}
/>

<Footer />

      </div>
    </div>
    
    </> );
}
 
export default Adduser;