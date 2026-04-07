import React, { Component } from 'react';
import './Users.css'
import Navbar from '../Components/Nav';
import Topbar from '../Components/Tobbar';

const Users = () => {

  const usersData = [
    { id: 'P', name: 'Partinia Emad', email: 'john.smith@example.com', role: 'Premium', cartype:'BMW', status: 'Active', joinDate: '2024-01-15', lastActive: '2 hours ago', },
    { id: 'P', name: 'Paula Emad', email: 'sarah.j@example.com', role: 'Standard', cartype:'Mercedes', status: 'Active', joinDate: '2024-02-20', lastActive: '1 day ago' },
    { id: 'P', name: 'Perla Emad', email: 'mike.chen@example.com', role: 'Premium', cartype:'BMW', status: 'Active', joinDate: '2024-03-10', lastActive: '3 hours ago' },
    { id: 'M', name: 'Marian Nady', email: 'emma.w@example.com', role: 'Standard', cartype:'Mercedes', status: 'Blocked', joinDate: '2024-01-05', lastActive: '1 week ago' },
    { id: 'E', name: 'Emad Boktor', email: 'david.lee@example.com', role: 'Standard', cartype:'BMW', status: 'Pending', joinDate: '2024-03-17', lastActive: 'Never' },
    { id: 'R', name: 'Ramez Raouf', email: 'lisa.a@example.com', role: 'Premium', cartype:'Mercedes', status: 'Active', joinDate: '2024-02-28', lastActive: '5 hours ago' },
    { id: 'A', name: 'Amir Nady', email: 'tom.brown@example.com', role: 'Standard', cartype:'BMW', status: 'Active', joinDate: '2024-03-12', lastActive: '2 days ago' },
    { id: 'E', name: 'Erini Nagy', email: 'rachel.g@example.com', role: 'Premium', cartype:'BYD', status: 'Active', joinDate: '2024-01-25', lastActive: '4 hours ago' }
  ];

  const getStatusClass = (status) => {
    if (status === 'Active') return 'status-active3';
    if (status === 'Blocked') return 'status-blocked3';
    if (status === 'Pending') return 'status-pending3';
    return '';
  };

    return ( <>
    
    
     <div className="dashboard">

      <Navbar />

      <div className="mainContent">

        <Topbar />

<div className="dashboard-container3">
      {/* Header Section */}
      <header className="header-section3">
        <div className="header-titles3">
          <h1 className="main-title3">USERS</h1>
          <p className="sub-title3">Manage and monitor all platform users</p>
        </div>
        <button className="add-user-btn3">
          <svg className="btn-icon3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
          Add User
        </button>
      </header>

      {/* Stats Cards Section */}
      <div className="stats-grid3">
        <div className="stat-card3">
          <div className="stat-label3">Total Users</div>
          <div className="stat-value-total3">8</div>
        </div>
        <div className="stat-card3">
          <div className="stat-label3">Active Users</div>
          <div className="stat-value-active3">6</div>
        </div>
        <div className="stat-card3">
          <div className="stat-label3">Blocked Users</div>
          <div className="stat-value-blocked3">1</div>
        </div>
        <div className="stat-card3">
          <div className="stat-label3">Pending Users</div>
          <div className="stat-value-pending3">1</div>
        </div>
      </div>

      {/* Toolbar Section */}
      <div className="toolbar-section3">
        <div className="search-wrapper3">
          <svg className="search-icon3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text" 
            className="search-input3" 
            placeholder="Search users by name or email..." 
          />
        </div>
        <button className="export-btn3">
          <svg className="btn-icon3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
          Export
        </button>
      </div>

      {/* Table Section */}
      <div className="table-wrapper3">
        <table className="users-table3">
          <thead className="table-head3">
            <tr className="table-row3">
              <th className="table-th3">USER</th>
              <th className="table-th3">ROLE</th>
              <th className="table-th3">Car Type</th>
              <th className="table-th3">STATUS</th>
              <th className="table-th3">JOIN DATE</th>
              <th className="table-th3">LAST ACTIVE</th>
              <th className="table-th-actions3">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="table-body3">
            {usersData.map((user, index) => (
              <tr key={index} className="table-row3">
                <td className="table-td3">
                  <div className="user-cell-content3">
                    <div className="user-avatar3">{user.id}</div>
                    <div className="user-info3">
                      <div className="user-name3">{user.name}</div>
                      <div className="user-email3">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td className="table-td3">{user.role}</td>
                <td className="table-td3">{user.cartype}</td>

                <td className="table-td3">
                  <span className={`status-badge3 ${getStatusClass(user.status)}`}>
                    {user.status}
                  </span>
                </td>
                <td className="table-td3 table-text-muted3">{user.joinDate}</td>
                <td className="table-td3 table-text-muted3">{user.lastActive}</td>
                <td className="table-td-actions3">
                  <button className="action-dots-btn3">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="5" r="2" />
                      <circle cx="12" cy="12" r="2" />
                      <circle cx="12" cy="19" r="2" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer / Pagination Section */}
      <footer className="pagination-footer3">
        <div className="showing-text3">
          Showing <strong>1</strong> to <strong>8</strong> of <strong>8</strong> results
        </div>
        <div className="pagination-controls3">
          <button className="page-btn3">Previous</button>
          <button className="page-btn3 page-btn-active3">1</button>
          <button className="page-btn3">2</button>
          <button className="page-btn3">3</button>
          <button className="page-btn3">Next</button>
        </div>
      </footer>
    </div>

       

      </div>
    </div>
    
    
    </> );
}
 
export default Users;