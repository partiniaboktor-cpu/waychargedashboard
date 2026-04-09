import React from "react";
import "./Settings.css";
import Navbar from "../Components/Nav";
import Topbar from "../Components/Tobbar";
import Footer from "../Components/Footer";

const Settings = () => {
  const integrations = [
    ["Google Maps API", "AIzaSy************************"],
    ["Stripe Payment Gateway", "sk_live_*******************"],
    ["Firebase Cloud Messaging", "AAAA************************"],
    ["SendGrid Email Service", "SG.**************************"],
  ];

  const admins = [
    ["Admin User", "Super Administrator", "2026-03-19 14:30"],
    ["Mobile Manager", "Mobile Operations", "2026-03-19 12:10"],
    ["Content Editor", "Content/Website Ops", "2026-03-18 16:41"],
  ];

  return (
    <div className="dashboard">
      <Navbar />
      <div className="mainContent">
        <Topbar />

        <div className="settingsPage">
          <h1 className="settingsTitle">SETTINGS</h1>
          <p className="settingsSub">Configure system settings, security, and admin access</p>

          <div className="settingsCards">
            <section className="settingsCard">
              <h3>General Settings</h3>
              <label>Site Name</label><input defaultValue="WayCharge" />
              <label>Support Email</label><input defaultValue="support@waycharge.com" />
              <label>Contact Phone</label><input defaultValue="+20 123 456 7890" />
              <div className="switchRow"><span>Maintenance Mode</span><input type="checkbox" /></div>
              <button type="button">Save Changes</button>
            </section>

            <section className="settingsCard">
              <h3>Security &amp; Access</h3>
              <div className="switchRow"><span>Two-Factor Authentication</span><input type="checkbox" defaultChecked /></div>
              <label>Session Timeout (minutes)</label><input defaultValue="30" />
              <label>Max Login Attempts</label><input defaultValue="5" />
              <label>Password Expiry (days)</label><input defaultValue="90" />
              <button type="button">Save Changes</button>
            </section>

            <section className="settingsCard">
              <h3>Notifications</h3>
              <div className="switchRow"><span>Email Notifications</span><input type="checkbox" defaultChecked /></div>
              <div className="switchRow"><span>SMS Notifications</span><input type="checkbox" /></div>
              <div className="switchRow"><span>Push Notifications</span><input type="checkbox" defaultChecked /></div>
              <div className="switchRow"><span>Booking Confirmations</span><input type="checkbox" defaultChecked /></div>
              <button type="button">Save Changes</button>
            </section>

            <section className="settingsCard">
              <h3>Payment Settings</h3>
              <div className="switchRow"><span>Accept Credit Cards</span><input type="checkbox" defaultChecked /></div>
              <div className="switchRow"><span>Accept Apple Pay</span><input type="checkbox" defaultChecked /></div>
              <div className="switchRow"><span>Accept Instapay</span><input type="checkbox" defaultChecked /></div>
              <div className="switchRow"><span>Points Redemption</span><input type="checkbox" /></div>
              <button type="button">Save Changes</button>
            </section>
          </div>

          <section className="settingsPanel">
            <h3>API Keys &amp; Integrations</h3>
            <p>Manage external service integrations</p>
            <div className="integrationList">
              {integrations.map((item) => (
                <article key={item[0]} className="integrationRow">
                  <div><strong>{item[0]}</strong><small>{item[1]}</small></div>
                  <span>Active</span>
                </article>
              ))}
            </div>
          </section>

          <section className="settingsPanel">
            <div className="panelTop">
              <div>
                <h3>Admin Users</h3>
                <p>Manage admin accounts and permissions</p>
              </div>
              <button type="button">+ Add Admin</button>
            </div>
            <div className="adminList">
              {admins.map((a) => (
                <article key={a[0]} className="adminRow">
                  <div><strong>{a[0]}</strong><small>{a[1]}</small></div>
                  <small>Last login: {a[2]}</small>
                </article>
              ))}
            </div>
          </section>

          <section className="settingsRelated">
            <article><strong>Database</strong><span>Healthy</span><small>24 GB used</small></article>
            <article><strong>Server</strong><span>Running</span><small>16 GB RAM</small></article>
            <article><strong>App Version</strong><span>v2.1.4</span><small>iOS &amp; Android</small></article>
          </section>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Settings;
