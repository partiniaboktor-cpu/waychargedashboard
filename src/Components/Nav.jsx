import React, { useState } from 'react';
import './Nav.css';

import logo from '../Assets/icons/logo.svg';
import dashboard from '../Assets/icons/dashboard.svg';
import users from '../Assets/icons/users.svg';
import coffee from '../Assets/icons/coffee.svg';
import locations from '../Assets/icons/locations.svg';
import analatyics from '../Assets/icons/analatyics.svg';
import system from '../Assets/icons/system.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <>
    
      {/* 🔥 Burger Menu */}
      <div className="burger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <div className={`sidebar ${open ? "open" : ""}`}>

        {/* TOP */}
        <div className="topNav">
          
          <div className="logo">
            <img src={logo} alt="logo"/>
          </div>

          <div className="navItems">

  <div className="navItem">
    <img src={dashboard} className="navIcon active" alt="dashboard"/>
    <span className="navText">Dashboard</span>
  </div>

<Link to="/Users" className="navLink">
  <div className="navItem">
    <img src={users} className="navIcon" alt="users"/>
    <span className="navText">Users</span>
  </div>
</Link>

  <div className="navItem">
    <img src={coffee} className="navIcon" alt="coffee"/>
    <span className="navText">Coffee</span>
  </div>

  <div className="navItem">
    <img src={locations} className="navIcon" alt="location"/>
    <span className="navText">Locations</span>
  </div>

  <div className="navItem">
    <img src={analatyics} className="navIcon" alt="analatyics"/>
    <span className="navText">Analytics</span>
  </div>

  <div className="navItem">
    <img src={system} className="navIcon" alt="system"/>
    <span className="navText">System</span>
  </div>

</div>
        </div>

      </div>

    </>
  );
};

export default Navbar;