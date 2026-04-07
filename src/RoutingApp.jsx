import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Users from './Pages/Users';
import Adduser from './Pages/Adduser';
import Coffee from './Pages/Coffee';


const RoutingApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Users' element={<Users />} />
        <Route path='Adduser' element={<Adduser />} />
        <Route path='Coffee' element={<Coffee />} />

      </Routes>
    </BrowserRouter>
  );
};

export default RoutingApp;
