import React from "react";
import "./Orders.css";
import Navbar from "../Components/Nav";
import Topbar from "../Components/Tobbar";
import Footer from "../Components/Footer";

const Orders = () => {
  const metrics = [
    { icon: "🛒", label: "Total Orders", value: "1,847", trend: "+23.1%" },
    { icon: "⚡", label: "Charging Sessions", value: "1,256", trend: "+18.5%" },
    { icon: "☕", label: "Coffee Orders", value: "412", trend: "+32.4%" },
    { icon: "📍", label: "Mobile Requests", value: "179", trend: "+15.2%" },
  ];

  const orders = [
    {
      id: "ORD-2341",
      type: "charging",
      customer: "Ahmed Mohamed",
      details: "Downtown Cairo Station",
      energy: "18.5 kWh",
      duration: "45 min",
      amount: "$25.50",
      payment: "Apple Pay",
      status: "Completed",
      time: "2026-03-19 14:30",
    },
    {
      id: "ORD-2340",
      type: "coffee",
      customer: "Sara Ali",
      details: "2x Cappuccino, 1x Croissant",
      energy: "New Cairo Hub",
      duration: "-",
      amount: "$12.00",
      payment: "Credit Card",
      status: "Preparing",
      time: "2026-03-19 14:15",
    },
    {
      id: "ORD-2339",
      type: "mobile",
      customer: "Mohamed Hassan",
      details: "New Cairo, 5th Settlement",
      energy: "22.0 kWh",
      duration: "-",
      amount: "$35.75",
      payment: "Instapay",
      status: "In Progress",
      time: "2026-03-19 13:45",
    },
    {
      id: "ORD-2338",
      type: "charging",
      customer: "Layla Ahmed",
      details: "Alexandria Coastal Station",
      energy: "20.2 kWh",
      duration: "52 min",
      amount: "$28.90",
      payment: "Points + Card",
      status: "Completed",
      time: "2026-03-19 12:30",
    },
    {
      id: "ORD-2337",
      type: "coffee",
      customer: "Omar Ibrahim",
      details: "1x Latte",
      energy: "Giza Express Station",
      duration: "-",
      amount: "$8.50",
      payment: "Credit Card",
      status: "Cancelled",
      time: "2026-03-19 11:30",
    },
  ];

  return (
    <div className="dashboard">
      <Navbar />
      <div className="mainContent">
        <Topbar />

        <div className="ordersPage">
          <div className="ordersHeader">
            <div>
              <h1 className="ordersTitle">ORDERS &amp; BOOKINGS</h1>
              <p className="ordersSubtitle">
                Manage charging sessions, coffee orders, and mobile requests
              </p>
            </div>
            <button className="exportBtn" type="button">
              Export Report
            </button>
          </div>

          <div className="ordersMetrics">
            {metrics.map((item) => (
              <article className="ordersMetricCard" key={item.label}>
                <div className="metricTopLine">
                  <span className="metricIcon">{item.icon}</span>
                  <span className="metricTrend">{item.trend}</span>
                </div>
                <div className="metricLabel">{item.label}</div>
                <div className="metricValue">{item.value}</div>
              </article>
            ))}
          </div>

          <div className="ordersToolbar">
            <input
              className="ordersSearch"
              placeholder="Search orders by ID, customer, or station..."
            />
            <button className="filterBtn" type="button">
              Filters
            </button>
          </div>

          <section className="ordersSection">
            <div className="sectionHead">
              <h3>Recent Orders</h3>
              <p>Latest transactions and bookings</p>
            </div>

            <div className="ordersList">
              {orders.map((order) => (
                <article className="orderRow" key={order.id}>
                  <div className={`rowType type-${order.type}`}>
                    {order.type === "charging"
                      ? "⚡"
                      : order.type === "coffee"
                      ? "☕"
                      : "📍"}
                  </div>

                  <div className="rowMain">
                    <div className="rowOrderId">{order.id}</div>
                    <div className="rowTime">{order.time}</div>
                  </div>

                  <div className="rowMain">
                    <div className="rowCustomer">{order.customer}</div>
                    <div className="rowTime">{order.details}</div>
                  </div>

                  <div className="rowMeta">
                    <span>Energy</span>
                    <strong>{order.energy}</strong>
                  </div>

                  <div className="rowMeta">
                    <span>Duration</span>
                    <strong>{order.duration}</strong>
                  </div>

                  <div className="rowMeta">
                    <span>Amount</span>
                    <strong>{order.amount}</strong>
                  </div>

                  <div className="rowMeta">
                    <span>Payment</span>
                    <strong>{order.payment}</strong>
                  </div>

                  <span
                    className={`orderStatus status-${order.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {order.status}
                  </span>
                </article>
              ))}
            </div>

            <div className="ordersFooter">
              <span>Showing 1-5 of 1,847 orders</span>
              <div className="pagerBtns">
                <button type="button">Previous</button>
                <button type="button">Next</button>
              </div>
            </div>
          </section>

          <section className="ordersRelatedSection">
            <h3>Order Channel Overview</h3>
            <div className="relatedCards">
              <article className="relatedCard green">
                <div>Charging Sessions</div>
                <strong>1,256</strong>
                <span>68% of total orders</span>
              </article>
              <article className="relatedCard orange">
                <div>Coffee Orders</div>
                <strong>412</strong>
                <span>22% of total orders</span>
              </article>
              <article className="relatedCard purple">
                <div>Mobile Requests</div>
                <strong>179</strong>
                <span>10% of total orders</span>
              </article>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Orders;
