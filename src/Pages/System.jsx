import React from "react";
import "./System.css";
import Topbar from "../Components/Tobbar";
import Navbar from "../Components/Nav";
import Footer from "../Components/Footer";

const System = () => {
  const resourceCards = [
    { icon: "⚙", title: "CPU Usage", value: "65%", color: "blue", bar: 65 },
    { icon: "〽", title: "Memory Usage", value: "72%", color: "green", bar: 72 },
    { icon: "🧰", title: "Storage Usage", value: "58%", color: "orange", bar: 58 },
    { icon: "📶", title: "Network Traffic", value: "2.8GB/s", color: "purple", bar: 70 },
  ];

  const infraCards = [
    {
      icon: "↻",
      title: "Load Balancer",
      lines: ["Connections: 1,245", "Throughput: 2.4 Gb/s", "ErrorRate: 0.02%"],
    },
    {
      icon: "🗄",
      title: "Application Servers",
      lines: ["Active: 8/10", "Cpu: 65%", "Memory: 72%"],
    },
    {
      icon: "🛢",
      title: "Database Cluster",
      lines: ["Nodes: 3/3", "Queries: 12.5K/s", "Replication: < 1s"],
    },
    {
      icon: "☁",
      title: "CDN",
      lines: ["HitRate: 94.2%", "Bandwidth: 5.8 Gb/s", "Regions: 12"],
    },
  ];

  const serviceRows = [
    ["Web Server", "Operational", "99.98%", "45ms", "1 min ago"],
    ["API Gateway", "Operational", "99.95%", "82ms", "1 min ago"],
    ["Database Primary", "Operational", "99.99%", "12ms", "1 min ago"],
    ["Database Replica", "Operational", "99.92%", "15ms", "1 min ago"],
    ["Cache Server", "Degraded", "98.50%", "120ms", "1 min ago"],
    ["File Storage", "Operational", "99.97%", "35ms", "1 min ago"],
    ["Email Service", "Operational", "99.85%", "250ms", "2 min ago"],
    ["Background Jobs", "Operational", "99.91%", "N/A", "1 min ago"],
  ];

  return (
    <div className="dashboard">
      <Navbar />

      <div className="mainContent">
        <Topbar />

        <div className="systemPage">
          <h1 className="systemTitle">SYSTEM STATUS</h1>
          <p className="systemSubtitle">Monitor system health and performance</p>

          <section className="systemBanner">
            <div className="bannerLeft">
              <div className="bannerCheck">✓</div>
              <div>
                <h2>All Systems Operational</h2>
                <p>All services are running smoothly</p>
              </div>
            </div>
            <div className="bannerRight">
              <div className="bigPercent">99.96%</div>
              <p>Uptime (30 days)</p>
            </div>
          </section>

          <div className="resourceGrid">
            {resourceCards.map((card) => (
              <article className="resourceCard" key={card.title}>
                <div className="resourceTop">
                  <span className={`resourceIcon ${card.color}`}>{card.icon}</span>
                  <span className="resourceValue">{card.value}</span>
                </div>
                <div className="resourceTitle">{card.title}</div>
                <div className="track">
                  <div
                    className={`fill ${card.color}`}
                    style={{ width: `${card.bar}%` }}
                  />
                </div>
              </article>
            ))}
          </div>

          <div className="chartRow">
            <section className="panel">
              <h3>CPU Usage (24h)</h3>
              <div className="chart cpu">
                <svg viewBox="0 0 700 220" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="cpuFade" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#4f8df7" stopOpacity="0.55" />
                      <stop offset="100%" stopColor="#4f8df7" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,140 C70,160 120,150 170,100 C230,70 310,45 390,55 C470,70 540,120 620,140 C660,150 680,160 700,170 L700,220 L0,220 Z"
                    fill="url(#cpuFade)"
                  />
                  <path
                    d="M0,140 C70,160 120,150 170,100 C230,70 310,45 390,55 C470,70 540,120 620,140 C660,150 680,160 700,170"
                    className="lineBlue"
                  />
                </svg>
                <div className="xAxis">
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

            <section className="panel">
              <h3>Memory Usage (24h)</h3>
              <div className="chart memory">
                <svg viewBox="0 0 700 220" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="memoryFade" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#19b58a" stopOpacity="0.55" />
                      <stop offset="100%" stopColor="#19b58a" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,120 C80,130 120,140 170,90 C250,65 290,80 360,60 C450,40 520,58 590,70 C640,82 680,110 700,130 L700,220 L0,220 Z"
                    fill="url(#memoryFade)"
                  />
                  <path
                    d="M0,120 C80,130 120,140 170,90 C250,65 290,80 360,60 C450,40 520,58 590,70 C640,82 680,110 700,130"
                    className="lineGreen"
                  />
                </svg>
                <div className="xAxis">
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
          </div>

          <section className="panel">
            <h3>Infrastructure Health</h3>
            <div className="infraGrid">
              {infraCards.map((item) => (
                <article className="infraCard" key={item.title}>
                  <div className="infraTop">
                    <span className="infraIcon">{item.icon}</span>
                    <span className="okCheck">✓</span>
                  </div>
                  <h4>{item.title}</h4>
                  {item.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </article>
              ))}
            </div>
          </section>

          <section className="panel">
            <h3>Services Status</h3>
            <table className="servicesTable">
              <thead>
                <tr>
                  <th>SERVICE</th>
                  <th>STATUS</th>
                  <th>UPTIME</th>
                  <th>RESPONSE TIME</th>
                  <th>LAST CHECK</th>
                </tr>
              </thead>
              <tbody>
                {serviceRows.map((row) => (
                  <tr key={row[0]}>
                    <td>{row[0]}</td>
                    <td>
                      <span
                        className={`serviceStatus ${
                          row[1] === "Operational" ? "operational" : "degraded"
                        }`}
                      >
                        {row[1] === "Operational" ? "✓" : "⚠"} {row[1]}
                      </span>
                    </td>
                    <td>{row[2]}</td>
                    <td>{row[3]}</td>
                    <td>{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default System;
