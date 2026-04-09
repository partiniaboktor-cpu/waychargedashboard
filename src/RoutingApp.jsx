import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Users from './Pages/Users';
import Adduser from './Pages/Adduser';
import Coffee from './Pages/Coffee';
import Addcofffee from './Pages/Addcoffee';
import Location from './Pages/Location';
import Analatycs from './Pages/Analatycs';
import System from './Pages/System';
import Addlocation from './Pages/Addlocation';
import Orders from './Pages/Orders';
import Payments from './Pages/Payments';
import Website from './Pages/Website';
import Settings from './Pages/Settings';


const RoutingApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Users' element={<Users />} />
        <Route path='Adduser' element={<Adduser />} />
        <Route path='Coffee' element={<Coffee />} />
        <Route path='Addcoffee' element={<Addcofffee />} />
        <Route path='Location' element={<Location />} />
        <Route path='Addlocation' element={<Addlocation />} />
        <Route path='Orders' element={<Orders />} />
        <Route path='Payments' element={<Payments />} />
        <Route path='Website' element={<Website />} />
        <Route path='Settings' element={<Settings />} />
        <Route path='Analatycs' element={<Analatycs />} />
        <Route path='System' element={<System />} />

      </Routes>
    </BrowserRouter>
  );
};

export default RoutingApp;
