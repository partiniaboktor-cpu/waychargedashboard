import React from 'react';
import './common.css';

function StatusBadge({ status }) {
  const normalized = status.toLowerCase();
  return <span className={`badge badge-${normalized}`}>{status}</span>;
}

export default StatusBadge;
