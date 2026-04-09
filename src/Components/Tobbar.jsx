import React, { Component } from 'react';
import './Topbar.css'
import settings from "../Assets/icons/settings.svg";
import globe from "../Assets/icons/globe.svg";
import notifications from '../Assets/icons/notifications.svg'
import RichTextField from "./RichTextField";

const Topbar = () => {
    return ( <>
    
<div className="topbar">

      <div className="searchRte">
        <RichTextField placeholder="Search..." minHeight={40} showToolbar={false} />
      </div>

      <div className="topRight">

        <div className="language">
          <img src={globe} alt="globe" />
          <span>العربية</span>
        </div>

        <img src={notifications} className="topIcon" alt="notification" />

        <img src={settings} className="topIcon" alt="settings" />

      </div>

    </div>
    
    
    </> );
}
 
export default Topbar;