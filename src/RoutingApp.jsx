import React, { useEffect, useState } from 'react';
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
import Careers from './Pages/Careers';
import CareersSeo from './Pages/CareersSeo';
import { PageLoading } from './Components/UIStates';
import Login from './Pages/Login';
import Logout from './Pages/Logout';

const RouteLoader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <PageLoading />;
  return children;
};


const RoutingApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RouteLoader><Login /></RouteLoader>} />
        <Route path='dashboard' element={<RouteLoader><Home /></RouteLoader>} />
        <Route path='Logout' element={<RouteLoader><Logout /></RouteLoader>} />
        <Route path='Users' element={<RouteLoader><Users /></RouteLoader>} />
        <Route path='Adduser' element={<RouteLoader><Adduser /></RouteLoader>} />
        <Route path='Coffee' element={<RouteLoader><Coffee /></RouteLoader>} />
        <Route path='Addcoffee' element={<RouteLoader><Addcofffee /></RouteLoader>} />
        <Route path='Location' element={<RouteLoader><Location /></RouteLoader>} />
        <Route path='Addlocation' element={<RouteLoader><Addlocation /></RouteLoader>} />
        <Route path='Orders' element={<RouteLoader><Orders /></RouteLoader>} />
        <Route path='Payments' element={<RouteLoader><Payments /></RouteLoader>} />
        <Route path='Website' element={<RouteLoader><Website /></RouteLoader>} />
        <Route path='Settings' element={<RouteLoader><Settings /></RouteLoader>} />
        <Route path='Careers' element={<RouteLoader><Careers /></RouteLoader>} />
        <Route path='CareersSeo' element={<RouteLoader><CareersSeo /></RouteLoader>} />
        <Route path='Analatycs' element={<RouteLoader><Analatycs /></RouteLoader>} />
        <Route path='System' element={<RouteLoader><System /></RouteLoader>} />

      </Routes>
    </BrowserRouter>
  );
};

export default RoutingApp;
