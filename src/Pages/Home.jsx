import React, { Component } from 'react';
import './Home.css'
import Navbar from '../Components/Nav';
import Topbar from '../Components/Tobbar';

const Home = () => {
    return ( <>
    
    <div className="dashboard">

      <Navbar />

      <div className="mainContent">

        <Topbar />

       <div className="dashboard1">

<h1 className="title">WAYCHARGE DASHBOARD</h1>

        <p className="subtitle">
          Monitor your electric vehicle charging network and coffee experience
          platform in real-time
        </p>

      {/* Top Cards */}
      <div className="cards1">
        
        <div className="card1">
          <div className="iconBox1">⚡</div>
          <div className="cardContent1">
            <h2>47</h2>
            <p>Active Charging Sessions</p>
          </div>
          <span className="percent1">+12.5%</span>
        </div>

        <div className="card1">
          <div className="iconBox1">👥</div>
          <div className="cardContent1">
            <h2>8,234</h2>
            <p>Total Users</p>
          </div>
          <span className="percent1">+8.2%</span>
        </div>

        <div className="card1">
          <div className="iconBox1">☕</div>
          <div className="cardContent1">
            <h2>156</h2>
            <p>Coffee Bookings Today</p>
          </div>
          <span className="percent1">+15.4%</span>
        </div>

        <div className="card1">
          <div className="iconBox1">💰</div>
          <div className="cardContent1">
            <h2>$4,582</h2>
            <p>Revenue Today</p>
          </div>
          <span className="percent1">+5.8%</span>
        </div>

      </div>

      {/* Charts Section */}
      <div className="charts1">

        <div className="chartBox1">
          <h3 className='title'>Charging Sessions & Revenue</h3>
          <div className="fakeChart1"></div>
        </div>

        <div className="chartBox1">
          <h3>Charger Type Usage</h3>
          <div className="pieChart1">
            <div className="slice1 sliceBlue1"></div>
            <div className="slice1 sliceGreen1"></div>
            <div className="slice1 sliceOrange1"></div>
            <div className="slice1 slicePurple1"></div>
          </div>
        </div>

      </div>
      <div className="sectionContainer2">

      {/* Top Section */}
      <div className="topSection2">

        {/* Bar Chart */}
        <div className="chartCard2">
          <h3>Coffee Experience Bookings</h3>

          <div className="barChart2">
            <div className="barItem2">
              <div className="bar2" style={{ height: "90%" }}></div>
              <span>Espresso & Charge</span>
            </div>

            <div className="barItem2">
              <div className="bar2" style={{ height: "75%" }}></div>
              <span>Quick Coffee Break</span>
            </div>

            <div className="barItem2">
              <div className="bar2" style={{ height: "55%" }}></div>
              <span>Premium Lounge</span>
            </div>

            <div className="barItem2">
              <div className="bar2" style={{ height: "40%" }}></div>
              <span>Work & Charge</span>
            </div>

            <div className="barItem2">
              <div className="bar2" style={{ height: "30%" }}></div>
              <span>Fast Charge Special</span>
            </div>
          </div>
        </div>

        {/* Live Feed */}
        <div className="feedCard2">
          <h3>Live Activity Feed</h3>

          <div className="feedItem2">
            <div className="feedIcon2 blue2">⚡</div>
            <div>
              <h4>John Smith</h4>
              <p>Started charging session</p>
              <span>2 minutes ago</span>
            </div>
          </div>

          <div className="feedItem2">
            <div className="feedIcon2 purple2">☕</div>
            <div>
              <h4>Sarah Johnson</h4>
              <p>Booked coffee experience</p>
              <span>5 minutes ago</span>
            </div>
          </div>

          <div className="feedItem2">
            <div className="feedIcon2 blue2">⚡</div>
            <div>
              <h4>Mike Chen</h4>
              <p>Completed charging</p>
              <span>8 minutes ago</span>
            </div>
          </div>

        </div>

      </div>

      {/* Network Status */}
      <div className="statusSection2">

        <h2 className="statusTitle2">CHARGING STATION NETWORK STATUS</h2>

        <div className="statusCards2">

          <div className="statusCard2">
            <h4>Total Stations</h4>
            <h2>124</h2>
            <p>Across 45 locations</p>
          </div>

          <div className="statusCard2">
            <h4>Active Chargers</h4>
            <h2 className="greenText2">47/124</h2>
            <p>38% utilization</p>
          </div>

          <div className="statusCard2">
            <h4>Energy Delivered</h4>
            <h2>1,245 kWh</h2>
            <p>Today</p>
          </div>

          <div className="statusCard2">
            <h4>Avg. Session Time</h4>
            <h2>42 min</h2>
            <p>↓ 5 min from yesterday</p>
          </div>

        </div>

      </div>

    </div>
    
    <div className='terms'>
        <p className='conditions'>WayCharge-Copyrights@2026</p>
        <p className='conditions'>Partinia Emad</p>
    </div>

    </div>



      </div>
    </div>
    
    
    
    </> );
}
 
export default Home;