import React, { useState } from 'react';
import './Nav.css';

import logo from '../Assets/icons/logo.svg';
import dashboard from '../Assets/icons/dashboard.svg';
import users from '../Assets/icons/users.svg';
import coffee from '../Assets/icons/coffee.svg';
import locations from '../Assets/icons/locations.svg';
import analatyics from '../Assets/icons/analatyics.svg';
import system from '../Assets/icons/system.svg';
import globe from '../Assets/icons/globe.svg';
import { Link, useLocation } from 'react-router-dom';
import { FaCartShopping, FaMoneyBillWave } from 'react-icons/fa6';

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

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
<Link to="/" className="navLink">
  <div className="navItem">
    <img src={dashboard} className={`navIcon ${isActive("/") ? "active" : ""}`} alt="dashboard"/>
    <span className="navText">Dashboard</span>
  </div>
</Link>

<Link to="/Users" className="navLink">
  <div className="navItem">
    <img src={users} className={`navIcon ${isActive("/Users") || isActive("/Adduser") ? "active" : ""}`} alt="users"/>
    <span className="navText">Users</span>
  </div>
</Link>
<Link to="/Coffee" className="navLink">
  <div className="navItem">
    <img src={coffee} className={`navIcon ${isActive("/Coffee") || isActive("/Addcoffee") ? "active" : ""}`} alt="coffee"/>
    <span className="navText">Coffee</span>
  </div>
</Link>
<Link to="/Location" className="navLink">
  <div className="navItem">
    <img src={locations} className={`navIcon ${isActive("/Location") || isActive("/Addlocation") ? "active" : ""}`} alt="location"/>
    <span className="navText">Locations</span>
  </div>
</Link>

<Link to="/Orders" className="navLink">
  <div className="navItem">
    <FaCartShopping className={`navIconGlyph ${isActive("/Orders") ? "active" : ""}`} />
    <span className="navText">Orders</span>
  </div>
</Link>

<Link to="/Payments" className="navLink">
  <div className="navItem">
    <FaMoneyBillWave className={`navIconGlyph ${isActive("/Payments") ? "active" : ""}`} />
    <span className="navText">Payments</span>
  </div>
</Link>

<Link to="/Website" className="navLink">
  <div className="navItem">
    <img src={globe} className={`navIcon ${isActive("/Website") ? "active" : ""}`} alt="website"/>
    <span className="navText">Website</span>
  </div>
</Link>

<Link to="/Analatycs" className="navLink">
  <div className="navItem">
    <img src={analatyics} className={`navIcon ${isActive("/Analatycs") ? "active" : ""}`} alt="analatyics"/>
    <span className="navText">Analytics</span>
  </div>
</Link>

<Link to="/Settings" className="navLink">
  <div className="navItem">
    <img src={system} className={`navIcon ${isActive("/Settings") || isActive("/System") ? "active" : ""}`} alt="settings"/>
    <span className="navText">Settings</span>
  </div>
</Link>

</div>
        </div>

      </div>

    </>
  );
};

export default Navbar;