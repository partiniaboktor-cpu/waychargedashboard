import React from "react";
import "./Addlocation.css";
import Navbar from "../Components/Nav";
import Topbar from "../Components/Tobbar";
import Footer from "../Components/Footer";
import RichTextField from "../Components/RichTextField";
import { Link } from "react-router-dom";

const Addlocation = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="mainContent">
        <Topbar />

        <div className="addLocationPage">
          <div className="addLocationCard">
            <div className="addLocationHeader">
              <h2>Add New Location</h2>
              <Link to="/Location" className="addLocationClose">
                ×
              </Link>
            </div>

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
              <RichTextField placeholder="Enter location name" minHeight={52} />

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
              <Link to="/Location">
                <button type="button">Add Location</button>
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Addlocation;
