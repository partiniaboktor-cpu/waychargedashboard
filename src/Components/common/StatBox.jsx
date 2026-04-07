import React from 'react';
import './common.css';

function StatBox({ label, value, icon, trend, highlight = false }) {
  return (
    <article className={`stat-box ${highlight ? 'highlight' : ''}`}>
      <div className="stat-header">
        <span className="stat-icon">{icon}</span>
        {trend ? <span className="stat-trend">{trend}</span> : null}
      </div>
      <h3>{value}</h3>
      <p>{label}</p>
    </article>
  );
}

export default StatBox;
