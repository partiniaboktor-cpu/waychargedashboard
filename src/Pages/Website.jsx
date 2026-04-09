import React from "react";
import "./Website.css";
import Navbar from "../Components/Nav";
import Topbar from "../Components/Tobbar";
import Footer from "../Components/Footer";

const Website = () => {
  const pages = [
    { title: "About WayCharge", slug: "/en/about", views: "15,843", status: "Published" },
    { title: "How It Works", slug: "/en/how-it-works", views: "9,021", status: "Published" },
    { title: "Pricing Plans", slug: "/en/pricing", views: "12,334", status: "Published" },
    { title: "Contact Us", slug: "/en/contact", views: "7,879", status: "Draft" },
  ];

  const posts = [
    { title: "The Future of Electric Vehicle", date: "2026-03-08", views: "4,397", status: "Published" },
    { title: "Top 5 Benefits of Using", date: "2026-03-05", views: "3,882", status: "Published" },
    { title: "How to Maximize Your EV Battery", date: "2026-03-02", views: "5,214", status: "Published" },
  ];

  return (
    <div className="dashboard">
      <Navbar />
      <div className="mainContent">
        <Topbar />

        <div className="websitePage">
          <h1 className="websiteTitle">WEBSITE MANAGEMENT</h1>
          <p className="websiteSub">Manage SEO content, pages, and blog posts with bilingual support</p>

          <div className="websiteStats">
            <article><span>Total Pages</span><strong>24</strong></article>
            <article><span>Blog Posts</span><strong>67</strong></article>
            <article><span>Monthly Views</span><strong>45.2k</strong></article>
            <article><span>Languages</span><strong>2</strong></article>
          </div>

          <section className="websitePanel">
            <div className="panelHead">
              <h3>SEO Content Editor</h3>
              <button type="button">Save Changes</button>
            </div>

            <div className="seoGrid">
              <div>
                <label>Page Title (EN)</label>
                <input placeholder="Enter page title in English" />
              </div>
              <div>
                <label>عنوان الصفحة (AR)</label>
                <input placeholder="ادخل عنوان الصفحة بالعربي" />
              </div>
              <div>
                <label>URL Slug (EN)</label>
                <input placeholder="e.g. payment-ev-flag" />
              </div>
              <div>
                <label>رابط الصفحة (AR)</label>
                <input placeholder="اكتب رابط الصفحة" />
              </div>
              <div>
                <label>Meta Description (EN)</label>
                <textarea placeholder="SEO meta description for search engine..." />
              </div>
              <div>
                <label>وصف ميتا (AR)</label>
                <textarea placeholder="اكتب وصف ميتا باللغة العربية" />
              </div>
            </div>
          </section>

          <section className="websitePanel">
            <div className="panelHead">
              <h3>Website Pages</h3>
              <button type="button">+ New Page</button>
            </div>
            <div className="rowsList">
              {pages.map((p) => (
                <article className="pageRow" key={p.title}>
                  <div>
                    <strong>{p.title}</strong>
                    <small>{p.slug}</small>
                  </div>
                  <div><small>Views</small><strong>{p.views}</strong></div>
                  <span className={`status ${p.status.toLowerCase()}`}>{p.status}</span>
                </article>
              ))}
            </div>
          </section>

          <section className="websitePanel">
            <div className="panelHead">
              <h3>Blog Posts</h3>
              <button type="button">+ New Post</button>
            </div>
            <div className="rowsList">
              {posts.map((p) => (
                <article className="pageRow" key={p.title}>
                  <div>
                    <strong>{p.title}</strong>
                    <small>{p.date}</small>
                  </div>
                  <div><small>Views</small><strong>{p.views}</strong></div>
                  <span className={`status ${p.status.toLowerCase()}`}>{p.status}</span>
                </article>
              ))}
            </div>
          </section>

          <section className="websiteRelated">
            <h3>Related SEO Insights</h3>
            <div className="relatedCards">
              <article><strong>Top Search Keyword</strong><span>EV charging near me</span></article>
              <article><strong>Bounce Rate</strong><span>32.1%</span></article>
              <article><strong>Avg. Session Duration</strong><span>3m 28s</span></article>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Website;
