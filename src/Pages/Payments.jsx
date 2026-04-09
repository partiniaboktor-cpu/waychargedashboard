import React, { useState } from "react";
import "./Payments.css";
import Navbar from "../Components/Nav";
import Topbar from "../Components/Tobbar";
import Footer from "../Components/Footer";
import RichTextField from "../Components/RichTextField";
import { EmptyState, InlineMessage } from "../Components/UIStates";

const Payments = () => {
  const metrics = [
    { icon: "$", label: "Total Revenue", value: "$48,254", trend: "+18.7%" },
    { icon: "💳", label: "Transactions", value: "2,847", trend: "+23.1%" },
    { icon: "🟣", label: "Successful", value: "2,789", trend: "+24.2%" },
    { icon: "🔴", label: "Failed", value: "58", trend: "-12.5%" },
  ];

  const methods = [
    { name: "Credit Card", amount: "$18,500", sub: "1,245 transactions", share: "38.2%" },
    { name: "Apple Pay", amount: "$12,300", sub: "850 transactions", share: "25.5%" },
    { name: "Instapay", amount: "$9,400", sub: "534 transactions", share: "19.8%" },
    { name: "Points", amount: "$8,054", sub: "218 transactions", share: "16.7%" },
  ];

  const initialRows = [
    ["TXN-9821", "Ahmed Mohamed", "$25.50", "Apple Pay", "2026-03-19 14:30", "Completed"],
    ["TXN-9820", "Sara Ali", "$12.00", "Credit Card", "2026-03-19 14:15", "Completed"],
    ["TXN-9819", "Mohamed Hassan", "$35.75", "Instapay", "2026-03-19 13:45", "Pending"],
    ["TXN-9818", "Layla Ahmed", "$28.90", "Points + Card", "2026-03-19 12:20", "Completed"],
    ["TXN-9817", "Omar Ibrahim", "$8.50", "Credit Card", "2026-03-19 11:30", "Failed"],
  ];

  const [rows] = useState(initialRows);
  const [feedback, setFeedback] = useState({ type: "", message: "" });

  return (
    <div className="dashboard">
      <Navbar />
      <div className="mainContent">
        <Topbar />

        <div className="paymentsPage">
          <div className="paymentsHeader">
            <div>
              <h1 className="paymentsTitle">PAYMENTS &amp; TRANSACTIONS</h1>
              <p className="paymentsSubtitle">
                Monitor revenue, transactions, and payment methods
              </p>
            </div>
            <button
              type="button"
              className="paymentsExportBtn"
              onClick={() => setFeedback({ type: "error", message: "Export service is not connected yet." })}
            >
              Export Report
            </button>
          </div>
          <InlineMessage type={feedback.type} message={feedback.message} />

          <div className="paymentsStats">
            {metrics.map((m) => (
              <article className="paymentsStatCard" key={m.label}>
                <div className="statTop">
                  <span className="statIcon">{m.icon}</span>
                  <span className={`statTrend ${m.trend.startsWith("-") ? "down" : ""}`}>
                    {m.trend}
                  </span>
                </div>
                <div className="statLabel">{m.label}</div>
                <div className="statValue">{m.value}</div>
              </article>
            ))}
          </div>

          <section className="paymentsPanel">
            <h3>Revenue Trend</h3>
            <p>Daily revenue and transaction volume</p>
            <div className="trendChart">
              <svg viewBox="0 0 1000 240" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="revGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8dc63f" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#8dc63f" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,170 C130,150 220,135 300,90 C400,45 470,140 580,110 C700,80 800,40 1000,20 L1000,240 L0,240 Z"
                  fill="url(#revGradient)"
                />
                <path
                  d="M0,170 C130,150 220,135 300,90 C400,45 470,140 580,110 C700,80 800,40 1000,20"
                  className="trendLine"
                />
              </svg>
            </div>
          </section>

          <div className="paymentsGrid">
            <section className="paymentsPanel">
              <h3>Payment Methods</h3>
              <p>Revenue by payment method</p>
              <div className="methodBars">
                <div className="barItem"><span>Credit Card</span><div><i style={{ width: "85%" }} /></div></div>
                <div className="barItem"><span>Apple Pay</span><div><i style={{ width: "62%" }} /></div></div>
                <div className="barItem"><span>Instapay</span><div><i style={{ width: "48%" }} /></div></div>
                <div className="barItem"><span>Points</span><div><i style={{ width: "41%" }} /></div></div>
              </div>
            </section>

            <section className="paymentsPanel">
              <h3>Payment Method Breakdown</h3>
              <p>Transaction count and revenue</p>
              <div className="methodCards">
                {methods.map((m) => (
                  <article className="methodCard" key={m.name}>
                    <div>
                      <strong>{m.name}</strong>
                      <small>{m.sub}</small>
                    </div>
                    <div className="methodRight">
                      <strong>{m.amount}</strong>
                      <small>{m.share}</small>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <div className="paymentsToolbar">
            <RichTextField
              placeholder="Search by transaction ID, customer, or amount..."
              minHeight={46}
              showToolbar={false}
            />
            <button type="button">Filters</button>
          </div>

          <section className="paymentsPanel">
            <h3>Recent Transactions</h3>
            <p>Latest payment transactions</p>

            {rows.length === 0 ? (
              <EmptyState title="No transactions yet" subtitle="Transactions will appear here once available." />
            ) : (
              <div className="txnList">
                {rows.map((r) => (
                <article className="txnRow" key={r[0]}>
                  <div className="txnId">
                    <strong>{r[0]}</strong>
                    <small>{r[1]}</small>
                  </div>
                  <div><small>Amount</small><strong>{r[2]}</strong></div>
                  <div><small>Method</small><strong>{r[3]}</strong></div>
                  <div><small>Date &amp; Time</small><strong>{r[4]}</strong></div>
                  <span className={`txnStatus ${r[5].toLowerCase()}`}>{r[5]}</span>
                </article>
                ))}
              </div>
            )}

            <div className="txnFooter">
              <span>Showing 1-5 of 2,847 transactions</span>
              <div>
                <button type="button">Previous</button>
                <button type="button">Next</button>
              </div>
            </div>
          </section>

          <section className="paymentsRelated">
            <h3>Related Insights</h3>
            <div className="relatedGrid">
              <article>
                <strong>Average Ticket Size</strong>
                <span>$16.95</span>
                <small>+4.1% vs last week</small>
              </article>
              <article>
                <strong>Refund Rate</strong>
                <span>1.8%</span>
                <small>Within target threshold</small>
              </article>
              <article>
                <strong>Peak Payment Time</strong>
                <span>6:00 PM - 9:00 PM</span>
                <small>34% of daily transactions</small>
              </article>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Payments;
