import React from "react";
import { Link } from "react-router-dom";
import "./CareersSeo.css";
import Navbar from "../Components/Nav";
import Topbar from "../Components/Tobbar";
import Footer from "../Components/Footer";

const CareersSeo = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="mainContent">
        <Topbar />

        <div className="careersSeoPage">
          <h1 className="careersSeoTitle">CAREERS SEO SETTINGS</h1>
          <p className="careersSeoSubtitle">Optimize careers page visibility for search engines</p>

          <div className="careersSeoTabs">
            <Link to="/Careers" className="tabLink">Page Content</Link>
            <button type="button" className="tabActive">SEO Settings</button>
          </div>

          <section className="careersSeoPanel">
            <h3>Search Metadata</h3>
            <div className="seoFormGrid">
              <div>
                <label>SEO Title (EN)</label>
                <input placeholder="Careers at WayCharge | EV Future Jobs" />
              </div>
              <div>
                <label>SEO Title (AR)</label>
                <input placeholder="وظائف واي تشارج | مستقبل التنقل الكهربائي" />
              </div>
              <div>
                <label>Meta Description (EN)</label>
                <textarea placeholder="Join WayCharge and build the future of electric mobility." />
              </div>
              <div>
                <label>Meta Description (AR)</label>
                <textarea placeholder="انضم إلى واي تشارج وشارك في بناء مستقبل التنقل الكهربائي." />
              </div>
              <div>
                <label>Focus Keywords</label>
                <input placeholder="ev jobs, battery engineer, charging station careers" />
              </div>
              <div>
                <label>Canonical URL</label>
                <input placeholder="https://waycharge.com/careers" />
              </div>
            </div>
          </section>

          <section className="careersSeoPanel">
            <h3>Schema &amp; Social Preview</h3>
            <div className="seoRelatedGrid">
              <article>
                <strong>Schema Type</strong>
                <span>JobPosting + Organization</span>
                <small>Improves Google job indexing</small>
              </article>
              <article>
                <strong>Open Graph Preview</strong>
                <span>Ready</span>
                <small>Title + Description + Image set</small>
              </article>
              <article>
                <strong>SEO Health Score</strong>
                <span>92 / 100</span>
                <small>Add 2 more long-tail keywords</small>
              </article>
            </div>
          </section>

          <div className="seoSaveWrap">
            <button type="button">Save SEO Settings</button>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default CareersSeo;
