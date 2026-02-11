import React, { useState, useRef, useEffect } from 'react';
import {
  Users,
  FileText,
  CreditCard,
  FolderOpen,
  HelpCircle,
  Send,
  Calendar,
  Video,
  Layout
} from './Icons';

// Primary nav - narrow strip with icon buttons
export const LeftSidebar = () => {
  const [showBottomMenu, setShowBottomMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowBottomMenu(false);
      }
    };
    if (showBottomMenu) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showBottomMenu]);

  return (
    <div className="left-sidebar">
      <div className="left-sidebar-logo">
        <span className="left-sidebar-logo-text">B</span>
      </div>
      <nav className="left-sidebar-nav">
        <button className="left-sidebar-btn left-sidebar-btn-active" aria-label="Clients">
          <Users className="left-sidebar-icon" />
        </button>
        <button className="left-sidebar-btn" aria-label="Documents">
          <FileText className="left-sidebar-icon" />
        </button>
        <button className="left-sidebar-btn" aria-label="Cards">
          <CreditCard className="left-sidebar-icon" />
        </button>
      </nav>
      <div className="left-sidebar-bottom">
        <button className="left-sidebar-btn" aria-label="Folder">
          <FolderOpen className="left-sidebar-icon" />
        </button>
        <button className="left-sidebar-btn" aria-label="Help">
          <HelpCircle className="left-sidebar-icon" />
        </button>
        <div className="left-sidebar-menu-wrap" ref={menuRef}>
          <button
            onClick={() => setShowBottomMenu(!showBottomMenu)}
            className="left-sidebar-btn left-sidebar-btn-blue"
            aria-label="Menu"
          >
            <span className="left-sidebar-logo-text">B</span>
          </button>
          {showBottomMenu && (
            <div className="left-sidebar-dropdown">
              <div className="left-sidebar-dropdown-header">
                <div className="left-sidebar-dropdown-title">Catalyst Consulting</div>
                <div className="left-sidebar-dropdown-subtitle">Lucas Did</div>
              </div>
              <button className="left-sidebar-dropdown-item">Settings</button>
              <button className="left-sidebar-dropdown-item">Team</button>
              <button className="left-sidebar-dropdown-item">Subscription</button>
              <button className="left-sidebar-dropdown-item">Appearance</button>
              <div className="left-sidebar-dropdown-divider" />
              <button className="left-sidebar-dropdown-item">Help Center</button>
              <button className="left-sidebar-dropdown-item">Referrals</button>
              <button className="left-sidebar-dropdown-item">Log Out</button>
              <div className="left-sidebar-dropdown-divider" />
              <button className="left-sidebar-dropdown-item">Admin Dashboard</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Secondary nav - Client Management with full menu
export const ClientManagementSidebar = ({ activeSection = 'contacts' }) => (
  <div className="client-management-sidebar">
    <div className="client-management-header">
      <span className="client-management-title">Client Management</span>
    </div>
    <nav className="client-management-nav">
      <a href="#" className="client-management-nav-item">
        <Users className="client-management-nav-icon" /> Clients
      </a>
      <a href="#" className={`client-management-nav-item ${activeSection === 'contacts' ? 'client-management-nav-item--active' : ''}`}>
        <Users className="client-management-nav-icon" /> Contacts
      </a>
      <a href="#" className="client-management-nav-item">
        <FileText className="client-management-nav-icon" /> Deals
      </a>
      <a href="#" className="client-management-nav-item">
        <FileText className="client-management-nav-icon" /> Estimates
      </a>
      <a href="#" className="client-management-nav-item">
        <Send className="client-management-nav-icon" /> Proposals
      </a>
      <a href="#" className="client-management-nav-item">
        <FileText className="client-management-nav-icon" /> Contracts
      </a>
      <a href="#" className="client-management-nav-item">
        <FileText className="client-management-nav-icon" /> Forms
      </a>
      <a href="#" className="client-management-nav-item">
        <Calendar className="client-management-nav-icon" /> Scheduling
      </a>
      <a href="#" className="client-management-nav-item">
        <FileText className="client-management-nav-icon" /> Services
      </a>
      <a href="#" className="client-management-nav-item">
        <Video className="client-management-nav-icon" /> Meetings
      </a>
      <a href="#" className="client-management-nav-item">
        <Layout className="client-management-nav-icon" /> Client Portal
      </a>
    </nav>
  </div>
);
