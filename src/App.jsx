import React, { useState } from 'react';
import { contacts } from './data/contacts';
import ContactDetail from './components/ContactDetail';
import { Search, ChevronRight, InvoiceIcon, ContractIcon, ProposalIcon, Filter, MoreVertical } from './components/Icons';
import './App.css';

const formatBirthday = (str) => {
  if (!str) return '';
  const d = new Date(str);
  if (isNaN(d.getTime())) return str;
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

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
            <a href="#" className="nav-item"><ProposalIcon className="nav-item-icon" /> Proposals</a>
            <a href="#" className="nav-item"><ContractIcon className="nav-item-icon" /> Contracts</a>
            <a href="#" className="nav-item"><InvoiceIcon className="nav-item-icon" /> Invoices</a>
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

        {/* Search and Filter */}
        <div className="contacts-toolbar">
          <div className="search-input-wrapper">
            <Search className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="btn btn-default btn-filter">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>

        {/* Contacts Table */}
        <div className="contacts-table-container">
          <table className="contacts-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Job Title</th>
                <th>Company</th>
                <th>Phone Number</th>
                <th>Birthday</th>
                <th>Comments</th>
                <th className="contacts-table-actions">
                  <button className="btn-icon-sm" onClick={(e) => e.stopPropagation()}>
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredContacts.map((contact) => (
                <tr
                  key={contact.id}
                  className="contacts-table-row"
                  onClick={() => setSelectedContact(contact)}
                >
                  <td>
                    <div className="contacts-table-name">
                      <div className="contact-avatar contact-avatar-sm">
                        {contact.avatar ? (
                          <img src={contact.avatar} alt={contact.name} className="contact-avatar-img" />
                        ) : (
                          contact.initials
                        )}
                      </div>
                      <span>{contact.name}</span>
                    </div>
                  </td>
                  <td>
                    <span className="contacts-table-email">
                      {contact.email}
                      <span className="email-status-dot" title="Verified" />
                    </span>
                  </td>
                  <td>{contact.role || '—'}</td>
                  <td>{contact.company}</td>
                  <td className="contacts-table-muted">{contact.phone || 'Add phone'}</td>
                  <td className="contacts-table-muted">{contact.birthday ? formatBirthday(contact.birthday) : 'Add birthday'}</td>
                  <td className="contacts-table-comments">{contact.comments || 'Add comments'}</td>
                  <td className="contacts-table-actions" onClick={(e) => e.stopPropagation()}>
                    <button className="btn-icon-sm">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
