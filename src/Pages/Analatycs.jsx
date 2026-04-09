import React from "react";
import "./Analatycs.css";
import Topbar from "../Components/Tobbar";
import Navbar from "../Components/Nav";
import Footer from "../Components/Footer";

const Analatycs = () => {
  const topMetrics = [
    {
      icon: "👥",
      value: "1,234",
      label: "Active Users Now",
      tone: "highlight",
      extra: "Live",
    },
    {
      icon: "👁",
      value: "145.2K",
      label: "Page Views Today",
      tone: "normal",
      extra: "↗",
    },
    {
      icon: "🕒",
      value: "3:42",
      label: "Avg. Session Duration",
      tone: "normal",
      extra: "↗",
    },
    {
      icon: "🖱",
      value: "68.5%",
      label: "Engagement Rate",
      tone: "normal",
      extra: "↗",
    },
  ];

  const topPages = [
    { page: "/dashboard", views: "15,420", time: "3:24" },
    { page: "/products", views: "12,380", time: "2:45" },
    { page: "/blog/getting-started", views: "9,870", time: "5:12" },
    { page: "/pricing", views: "8,450", time: "2:16" },
    { page: "/about", views: "6,230", time: "1:52" },
  ];

  const devices = [
    { name: "Desktop", sessions: "8,500 sessions", percent: 45 },
    { name: "Mobile", sessions: "7,200 sessions", percent: 38 },
    { name: "Tablet", sessions: "3,200 sessions", percent: 17 },
  ];

  const bottomCards = [
    { title: "Bounce Rate", value: "32.4%", info: "↓ 5.2% from last month", icon: "♡" },
    { title: "Pages/Session", value: "4.8", info: "↑ 0.5 from last month", icon: "◉" },
    { title: "New vs Returning", value: "65/35", info: "New/Returning ratio", icon: "👥" },
    { title: "Conversion Rate", value: "12.8%", info: "↑ 2.1% from last month", icon: "↗" },
  ];

  return (
    <div className="dashboard">
      <Navbar />

      <div className="mainContent">
        <Topbar />

        <div className="analyticsPage">
          <h1 className="analyticsTitle">ANALYTICS</h1>
          <p className="analyticsSubtitle">Real-time insights and performance metrics</p>

          <div className="metricsRow">
            {topMetrics.map((metric) => (
              <div
                key={metric.label}
                className={`metricCard ${
                  metric.tone === "highlight" ? "metricHighlight" : ""
                }`}
              >
                <div className="metricTop">
                  <span className="metricIcon">{metric.icon}</span>
                  <span className="metricExtra">{metric.extra}</span>
                </div>
                <div className="metricValue">{metric.value}</div>
                <div className="metricLabel">{metric.label}</div>
              </div>
            ))}
          </div>

          <section className="panel largePanel">
            <h3>Real-time Active Users</h3>
            <div className="areaChart">
              <svg viewBox="0 0 1000 260" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="areaFade" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4f8df7" stopOpacity="0.62" />
                    <stop offset="100%" stopColor="#4f8df7" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                <path
                  className="curve"
                  d="M0,180 C80,170 140,175 200,172 C280,165 360,95 460,68 C560,40 650,12 740,42 C840,75 920,130 1000,160 L1000,260 L0,260 Z"
                  fill="url(#areaFade)"
                />
                <path
                  className="curveLine"
                  d="M0,180 C80,170 140,175 200,172 C280,165 360,95 460,68 C560,40 650,12 740,42 C840,75 920,130 1000,160"
                />
              </svg>
              <div className="xLabels">
                <span>00:00</span>
                <span>04:00</span>
                <span>08:00</span>
                <span>12:00</span>
                <span>16:00</span>
                <span>20:00</span>
                <span>23:59</span>
              </div>
            </div>
          </section>

          <div className="twoCol">
            <section className="panel">
              <h3>Engagement Trends</h3>
              <div className="lineChart">
                <svg viewBox="0 0 700 260" preserveAspectRatio="none">
                  <polyline
                    points="40,180 130,160 220,118 310,130 400,100 490,85 580,72"
                    fill="none"
                    stroke="#19b58a"
                    strokeWidth="3"
                  />
                  <g className="chartPoints">
                    <circle cx="40" cy="180" r="4" />
                    <circle cx="130" cy="160" r="4" />
                    <circle cx="220" cy="118" r="4" />
                    <circle cx="310" cy="130" r="4" />
                    <circle cx="400" cy="100" r="4" />
                    <circle cx="490" cy="85" r="4" />
                    <circle cx="580" cy="72" r="4" />
                  </g>
                </svg>
              </div>
              <div className="legend">Page Views • Sessions</div>
            </section>

            <section className="panel">
              <h3>Traffic Sources</h3>
              <div className="trafficWrap">
                <div className="pie"></div>
                <div className="trafficLabels">
                  <span>Direct 34%</span>
                  <span>Search 30%</span>
                  <span>Social 17%</span>
                  <span>Referral 12%</span>
                  <span>Email 7%</span>
                </div>
              </div>
            </section>
          </div>

          <div className="twoCol bottomPanels">
            <section className="panel">
              <h3>Top Pages</h3>
              <table className="pagesTable">
                <thead>
                  <tr>
                    <th>PAGE</th>
                    <th>VIEWS</th>
                    <th>AVG. TIME</th>
                  </tr>
                </thead>
                <tbody>
                  {topPages.map((row) => (
                    <tr key={row.page}>
                      <td>{row.page}</td>
                      <td>{row.views}</td>
                      <td>{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            <section className="panel">
              <h3>Device Breakdown</h3>
              <div className="deviceList">
                {devices.map((d) => (
                  <div className="deviceItem" key={d.name}>
                    <div className="deviceTop">
                      <span>{d.name}</span>
                      <span>{d.percent}%</span>
                    </div>
                    <div className="progressTrack">
                      <div className="progressFill" style={{ width: `${d.percent}%` }} />
                    </div>
                    <small>{d.sessions}</small>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="miniCards">
            {bottomCards.map((card) => (
              <div className="miniCard" key={card.title}>
                <div className="miniTop">
                  <span>{card.title}</span>
                  <span className="miniIcon">{card.icon}</span>
                </div>
                <div className="miniValue">{card.value}</div>
                <div className="miniInfo">{card.info}</div>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Analatycs;
