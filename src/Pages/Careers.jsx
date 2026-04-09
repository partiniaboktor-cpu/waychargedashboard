import React from "react";
import { Link } from "react-router-dom";
import "./Careers.css";
import Navbar from "../Components/Nav";
import Topbar from "../Components/Tobbar";
import Footer from "../Components/Footer";

const Careers = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="mainContent">
        <Topbar />

        <div className="careersPage">
          <h1 className="careersTitle">CAREERS MANAGEMENT</h1>
          <p className="careersSubtitle">Manage job openings and career opportunities</p>

          <div className="careersTabs">
            <button type="button" className="tabActive">Page Content</button>
            <Link to="/CareersSeo" className="tabLink">SEO Settings</Link>
          </div>

          <section className="careersPanel">
            <h3>Page Header</h3>
            <div className="careerGrid">
              <div>
                <label>Page Title (EN)</label>
                <input placeholder="Find Jobs in WayCharge" />
              </div>
              <div>
                <label>العربية (AR)</label>
                <input placeholder="ابحث عن وظيفة في واي تشارج" />
              </div>
              <div>
                <label>Page Description (EN)</label>
                <textarea placeholder="Explore new career opportunities with us..." />
              </div>
              <div>
                <label>العربية (AR)</label>
                <textarea placeholder="اكتشف وظائف جديدة معنا في مجال التنقل المستدام..." />
              </div>
            </div>
          </section>

          <section className="careersPanel">
            <div className="panelTop">
              <h3>Job Openings</h3>
              <button type="button">+ Add Job</button>
            </div>

            <div className="jobCard">
              <h4>Job 1</h4>
              <div className="careerGrid">
                <div>
                  <label>Job Title (EN)</label>
                  <input placeholder="Senior Battery Engineer" />
                </div>
                <div>
                  <label>العربية (AR)</label>
                  <input placeholder="مهندس بطاريات أول" />
                </div>
                <div>
                  <label>Department (EN)</label>
                  <input placeholder="Engineering" />
                </div>
                <div>
                  <label>العربية (AR)</label>
                  <input placeholder="الهندسة" />
                </div>
                <div>
                  <label>Location (EN)</label>
                  <input placeholder="San Francisco, CA" />
                </div>
                <div>
                  <label>العربية (AR)</label>
                  <input placeholder="سان فرانسيسكو، كاليفورنيا" />
                </div>
                <div className="full">
                  <label>Job Type</label>
                  <input placeholder="Full-time" />
                </div>
                <div>
                  <label>Job Description (EN)</label>
                  <textarea placeholder="Lead the development of next-generation batteries..." />
                </div>
                <div>
                  <label>العربية (AR)</label>
                  <textarea placeholder="قيادة تطوير البطاريات من الجيل التالي..." />
                </div>
                <div>
                  <label>Requirements (EN)</label>
                  <textarea placeholder="- 5+ years experience&#10;- Bachelor's degree&#10;- CAD proficiency" />
                </div>
                <div>
                  <label>العربية (AR)</label>
                  <textarea placeholder="- خبرة 5 سنوات&#10;- درجة بكالوريوس&#10;- إجادة CAD" />
                </div>
              </div>
            </div>
          </section>

          <section className="careersRelated">
            <h3>Related Hiring Insights</h3>
            <div className="relatedGrid">
              <article><strong>Open Roles</strong><span>12</span><small>Across 5 departments</small></article>
              <article><strong>Avg. Time to Hire</strong><span>18 days</span><small>Improved by 12%</small></article>
              <article><strong>Applications This Month</strong><span>326</span><small>+21% vs last month</small></article>
            </div>
          </section>

          <div className="saveWrap">
            <button type="button">Save Changes</button>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Careers;
