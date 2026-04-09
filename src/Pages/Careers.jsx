import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Careers.css";
import Navbar from "../Components/Nav";
import Topbar from "../Components/Tobbar";
import Footer from "../Components/Footer";
import RichTextField from "../Components/RichTextField";
import { InlineMessage } from "../Components/UIStates";

const Careers = () => {
  const [feedback, setFeedback] = useState({ type: "", message: "" });
  return (
    <div className="dashboard">
      <Navbar />
      <div className="mainContent">
        <Topbar />

        <div className="careersPage">
          <h1 className="careersTitle">CAREERS MANAGEMENT</h1>
          <p className="careersSubtitle">Manage job openings and career opportunities</p>
          <InlineMessage type={feedback.type} message={feedback.message} />

          <div className="careersTabs">
            <button type="button" className="tabActive">Page Content</button>
            <Link to="/CareersSeo" className="tabLink">SEO Settings</Link>
          </div>

          <section className="careersPanel">
            <h3>Page Header</h3>
            <div className="careerGrid">
              <div>
                <label>Page Title (EN)</label>
                <RichTextField placeholder="Find Jobs in WayCharge" minHeight={52} />
              </div>
              <div>
                <label>العربية (AR)</label>
                <RichTextField placeholder="ابحث عن وظيفة في واي تشارج" minHeight={52} />
              </div>
              <div>
                <label>Page Description (EN)</label>
                <RichTextField placeholder="Explore new career opportunities with us..." minHeight={90} />
              </div>
              <div>
                <label>العربية (AR)</label>
                <RichTextField placeholder="اكتشف وظائف جديدة معنا في مجال التنقل المستدام..." minHeight={90} />
              </div>
            </div>
          </section>

          <section className="careersPanel">
            <div className="panelTop">
              <h3>Job Openings</h3>
              <button type="button" onClick={() => setFeedback({ type: "success", message: "New job block added." })}>+ Add Job</button>
            </div>

            <div className="jobCard">
              <h4>Job 1</h4>
              <div className="careerGrid">
                <div>
                  <label>Job Title (EN)</label>
                  <RichTextField placeholder="Senior Battery Engineer" minHeight={52} />
                </div>
                <div>
                  <label>العربية (AR)</label>
                  <RichTextField placeholder="مهندس بطاريات أول" minHeight={52} />
                </div>
                <div>
                  <label>Department (EN)</label>
                  <RichTextField placeholder="Engineering" minHeight={52} />
                </div>
                <div>
                  <label>العربية (AR)</label>
                  <RichTextField placeholder="الهندسة" minHeight={52} />
                </div>
                <div>
                  <label>Location (EN)</label>
                  <RichTextField placeholder="San Francisco, CA" minHeight={52} />
                </div>
                <div>
                  <label>العربية (AR)</label>
                  <RichTextField placeholder="سان فرانسيسكو، كاليفورنيا" minHeight={52} />
                </div>
                <div className="full">
                  <label>Job Type</label>
                  <RichTextField placeholder="Full-time" minHeight={52} />
                </div>
                <div>
                  <label>Job Description (EN)</label>
                  <RichTextField placeholder="Lead the development of next-generation batteries..." minHeight={90} />
                </div>
                <div>
                  <label>العربية (AR)</label>
                  <RichTextField placeholder="قيادة تطوير البطاريات من الجيل التالي..." minHeight={90} />
                </div>
                <div>
                  <label>Requirements (EN)</label>
                  <RichTextField placeholder="- 5+ years experience - Bachelor's degree - CAD proficiency" minHeight={90} />
                </div>
                <div>
                  <label>العربية (AR)</label>
                  <RichTextField placeholder="- خبرة 5 سنوات - درجة بكالوريوس - إجادة CAD" minHeight={90} />
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
            <button type="button" onClick={() => setFeedback({ type: "success", message: "Career content saved successfully." })}>Save Changes</button>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Careers;
