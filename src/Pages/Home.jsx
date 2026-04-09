import React from "react";
import "./Home.css";
import Navbar from "../Components/Nav";
import Topbar from "../Components/Tobbar";
import Footer from "../Components/Footer";
import RichTextField from "../Components/RichTextField";

const Home = () => {
  const cards = [
    { icon: "⚡", value: "47", label: "Active Charging Sessions", trend: "+12.5%" },
    { icon: "👥", value: "8,234", label: "Total Users", trend: "+8.2%" },
    { icon: "☕", value: "156", label: "Coffee Bookings Today", trend: "+15.4%" },
    { icon: "💲", value: "$4,582", label: "Revenue Today", trend: "+5.8%" },
  ];

  return (
    <div className="dashboard">
      <Navbar />
      <div className="mainContent">
        <Topbar />

        <div className="homePage">
          <h1 className="homeTitle">WAYCHARGE DASHBOARD</h1>
          <p className="homeSubtitle">
            Monitor your electric vehicle charging network and coffee experience platform in real-time
          </p>

          <div className="homeFilters">
            <RichTextField placeholder="Search stations, users, bookings..." minHeight={46} showToolbar={false} />
            <button type="button" className="homeFilterBtn">Filter</button>
          </div>

          <div className="homeCards">
            {cards.map((c) => (
              <article key={c.label} className="homeCard">
                <div className="homeCardTop">
                  <span className="homeCardIcon">{c.icon}</span>
                  <span className="homeTrend">{c.trend}</span>
                </div>
                <strong>{c.value}</strong>
                <p>{c.label}</p>
              </article>
            ))}
          </div>

          <div className="homeCharts">
            <section className="homePanel">
              <h3>Charging Sessions &amp; Revenue</h3>
              <div className="fakeLineChart" />
            </section>
            <section className="homePanel">
              <h3>Charger Type Usage</h3>
              <div className="homePie" />
            </section>
          </div>

          <div className="homeBottom">
            <section className="homePanel">
              <h3>Coffee Experience Bookings</h3>
              <div className="homeBars">
                <div style={{ height: "78%" }} />
                <div style={{ height: "65%" }} />
                <div style={{ height: "52%" }} />
                <div style={{ height: "40%" }} />
                <div style={{ height: "30%" }} />
              </div>
            </section>
            <section className="homePanel">
              <h3>Live Activity Feed</h3>
              <div className="feedRow"><span>⚡</span><p>John Smith started charging session</p></div>
              <div className="feedRow"><span>☕</span><p>Sarah Johnson booked coffee experience</p></div>
              <div className="feedRow"><span>⚡</span><p>Mike Chen completed charging</p></div>
              <div className="feedRow"><span>⚡</span><p>Emma Wilson started a new session</p></div>
            </section>
          </div>

          <section className="homeStatus">
            <h2>CHARGING STATION NETWORK STATUS</h2>
            <div className="statusGrid">
              <article><h4>Total Stations</h4><strong>124</strong><p>Across 45 locations</p></article>
              <article><h4>Active Chargers</h4><strong className="green">47/124</strong><p>38% utilization</p></article>
              <article><h4>Energy Delivered</h4><strong>1,245 kWh</strong><p>Today</p></article>
              <article><h4>Avg. Session Time</h4><strong>42 min</strong><p>5 min from yesterday</p></article>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Home;