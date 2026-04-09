import React, { useState } from "react";
import "./Addcoffee.css";
import Navbar from '../Components/Nav';
import Topbar from '../Components/Tobbar';
import { useNavigate } from 'react-router-dom';
import Footer from "../Components/Footer";
import RichTextField from "../Components/RichTextField";
import { ConfirmDialog, InlineMessage } from "../Components/UIStates";

const Addcofffee = () => {
const navigate = useNavigate();
const [coffeeName, setCoffeeName] = useState("");
const [message, setMessage] = useState({ type: "", text: "" });
const [confirmClose, setConfirmClose] = useState(false);

const handleAdd = () => {
  if (!coffeeName.trim()) {
    setMessage({ type: "error", text: "Image/coffee field is required before adding." });
    return;
  }
  setMessage({ type: "success", text: "Coffee item added successfully." });
  setTimeout(() => navigate("/Coffee"), 500);
};

    return ( <>
    
      <div className="dashboard">

      <Navbar />

      <div className="mainContent">

        <Topbar />

<div className="modalOverlay4">

<div className="modalContainer4">

<div className="modalHeader4">
<h2 className="title4">Add New Coffee Type</h2>
<button type="button" className="closeLink closeBtn4Button" onClick={() => setConfirmClose(true)}>
  <span className="closeBtn4">×</span>
</button></div>
<InlineMessage type={message.type} message={message.text} />



<div className="formContainer4">

<label className="label4">Image</label>
<RichTextField
  placeholder="Enter image URL or image details"
  minHeight={56}
  onChangeText={setCoffeeName}
/>


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
<button className="submitBtn4" type="button" onClick={handleAdd}>Add Coffee</button>
</div>

</div>

</div>

</div>

<ConfirmDialog
  open={confirmClose}
  title="Discard coffee form?"
  description="If you close now, unsaved data will be lost."
  confirmText="Discard"
  confirmVariant="danger"
  onCancel={() => setConfirmClose(false)}
  onConfirm={() => navigate("/Coffee")}
/>

<Footer />

      </div>
    </div>
    
    </> );
}
 
export default Addcofffee;