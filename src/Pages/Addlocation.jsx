import React, { useState } from "react";
import "./Addlocation.css";
import Navbar from "../Components/Nav";
import Topbar from "../Components/Tobbar";
import Footer from "../Components/Footer";
import RichTextField from "../Components/RichTextField";
import { useNavigate } from "react-router-dom";
import { ConfirmDialog, InlineMessage } from "../Components/UIStates";

const Addlocation = () => {
  const navigate = useNavigate();
  const [locationName, setLocationName] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" });
  const [confirmClose, setConfirmClose] = useState(false);

  const handleAdd = () => {
    if (!locationName.trim()) {
      setMessage({ type: "error", text: "Location name is required before adding." });
      return;
    }
    setMessage({ type: "success", text: "Location added successfully." });
    setTimeout(() => navigate("/Location"), 500);
  };

  return (
    <div className="dashboard">
      <Navbar />
      <div className="mainContent">
        <Topbar />

        <div className="addLocationPage">
          <div className="addLocationCard">
            <div className="addLocationHeader">
              <h2>Add New Location</h2>
              <button
                type="button"
                className="addLocationClose"
                onClick={() => setConfirmClose(true)}
              >
                ×
              </button>
            </div>
            <InlineMessage type={message.type} message={message.text} />

            <div className="addLocationTabs">
              <button type="button" className="tab active">
                ⊕ English Content
              </button>
              <button type="button" className="tab">
                ⊕ المحتوى العربي
              </button>
            </div>

            <div className="addLocationForm">
              <label>Location Name<span>*</span></label>
              <RichTextField
                placeholder="Enter location name"
                minHeight={52}
                onChangeText={setLocationName}
              />

              <label>Description<span>*</span></label>
              <RichTextField placeholder="Enter location description" minHeight={130} />

              <label>Address<span>*</span></label>
              <RichTextField placeholder="Enter full address" minHeight={56} />

              <label>Location Type<span>*</span></label>
              <RichTextField placeholder="Choose location type" minHeight={56} />

              <label>Amenities</label>
              <RichTextField placeholder="List available amenities" minHeight={110} />
            </div>

            <div className="addLocationActions">
              <button type="button" onClick={handleAdd}>Add Location</button>
            </div>
          </div>
        </div>
        <ConfirmDialog
          open={confirmClose}
          title="Discard changes?"
          description="If you close now, unsaved changes will be lost."
          confirmText="Discard"
          confirmVariant="danger"
          onCancel={() => setConfirmClose(false)}
          onConfirm={() => navigate("/Location")}
        />

        <Footer />
      </div>
    </div>
  );
};

export default Addlocation;
