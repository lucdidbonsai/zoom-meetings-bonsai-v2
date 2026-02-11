import React, { useState } from 'react';
import { contacts } from './data/contacts';
import ContactDetail from './components/ContactDetail';
import { Search, ChevronRight } from './components/Icons';
import './App.css';

function App() {
  const [selectedContact, setSelectedContact] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (selectedContact) {
    return (
      <ContactDetail
        contact={selectedContact}
        onBack={() => setSelectedContact(null)}
      />
    );
  }

  return (
    <div className="app">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h1 className="sidebar-title">Bonsai</h1>
          <div className="sidebar-nav">
            <a href="#" className="nav-item">Dashboard</a>
            <a href="#" className="nav-item">Projects</a>
            <a href="#" className="nav-item active">Contacts</a>
            <a href="#" className="nav-item">Invoices</a>
            <a href="#" className="nav-item">Contracts</a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="page-header">
          <div>
            <h1 className="page-title">Contacts</h1>
            <p className="page-subtitle">{contacts.length} contacts</p>
          </div>
          <button className="btn btn-primary">
            <span>+ New Contact</span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="search-container">
          <div className="search-input-wrapper">
            <Search className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search contacts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Contacts List */}
        <div className="contacts-list">
          {filteredContacts.map((contact) => (
            <div
              key={contact.id}
              className="contact-card"
              onClick={() => setSelectedContact(contact)}
            >
              <div className="contact-card-content">
                <div className="contact-avatar-section">
                  <div className="contact-avatar">
                    {contact.avatar ? (
                      <img src={contact.avatar} alt={contact.name} className="contact-avatar-img" />
                    ) : (
                      contact.initials
                    )}
                  </div>
                  <div className="contact-info">
                    <h3 className="contact-name">{contact.name}</h3>
                    <p className="contact-role">{contact.role}</p>
                  </div>
                </div>
                <div className="contact-meta">
                  <div className="company-badge" style={{ backgroundColor: contact.companyColor }}>
                    <span className="company-initials">{contact.companyInitials}</span>
                    <span className="company-name">{contact.company}</span>
                  </div>
                  <div className="contact-email">{contact.email}</div>
                </div>
              </div>
              <ChevronRight className="contact-arrow" />
            </div>
          ))}
        </div>

        {filteredContacts.length === 0 && (
          <div className="empty-state">
            <p>No contacts found matching "{searchQuery}"</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
