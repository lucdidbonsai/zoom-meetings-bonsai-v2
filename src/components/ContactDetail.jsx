import React, { useState } from 'react';
import { getActivitiesForContact, eventTypeConfig } from '../data/activities';
import { getIconComponent, Plus, MoreHorizontal, Calendar, Mail, Phone, FileText, Play, Video, Users, Clock } from './Icons';

const ContactDetail = ({ contact, onBack }) => {
  const [activeTab, setActiveTab] = useState('activity');
  const activities = getActivitiesForContact(contact.id);

  const upcomingActivities = activities.filter(a => a.upcoming);
  const pastActivities = activities.filter(a => !a.upcoming);

  const tabs = ['activity', 'notes', 'meetings'];

  return (
    <div className="contact-detail">
      {/* Header */}
      <div className="detail-header">
        <div className="breadcrumb">
          <button onClick={onBack} className="breadcrumb-link">Contacts</button>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{contact.name}</span>
        </div>
        <div className="header-actions">
          <button className="btn-icon">
            <MoreHorizontal />
          </button>
          <button className="btn-icon">
            <Plus />
          </button>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="contact-info-section">
        <div className="contact-header">
          <div className="contact-avatar-large">{contact.initials}</div>
          <div className="contact-details">
            <h1 className="contact-detail-name">{contact.name}</h1>
            <p className="contact-detail-role">
              {contact.role} at{' '}
              <span style={{ color: contact.companyColor }}>{contact.company}</span>
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="btn btn-default">
            <FileText className="btn-icon-left" />
            Note
          </button>
          <button className="btn btn-default">
            <Mail className="btn-icon-left" />
            Email
          </button>
          <button className="btn btn-default">
            <Phone className="btn-icon-left" />
            Call
          </button>
          <button className="btn btn-default">
            <Calendar className="btn-icon-left" />
            Meeting
          </button>
          <button className="btn-icon">
            <MoreHorizontal />
          </button>
        </div>

        {/* Tabs */}
        <div className="tabs">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`tab ${activeTab === tab ? 'active' : ''}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="detail-content-wrapper">
        {/* Activity Feed */}
        <div className="activity-feed">
          {activeTab === 'activity' && (
            <>
              {/* Upcoming Section */}
              {upcomingActivities.length > 0 && (
                <div className="activity-section">
                  <div className="section-header">
                    <h2 className="section-title">Upcoming</h2>
                    <button className="btn-text">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="upcoming-cards">
                    {upcomingActivities.map(activity => (
                      <UpcomingMeetingCard key={activity.id} activity={activity} />
                    ))}
                  </div>
                </div>
              )}

              {/* History Section */}
              <div className="activity-section">
                <h2 className="section-title">History</h2>
                <div className="activity-timeline">
                  {pastActivities.map((activity, index) => (
                    <ActivityItem
                      key={activity.id}
                      activity={activity}
                      isLast={index === pastActivities.length - 1}
                      contactName={contact.name}
                    />
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'notes' && (
            <div className="empty-state">
              <FileText className="w-12 h-12" style={{ color: '#8c8b7d' }} />
              <p>No notes yet</p>
            </div>
          )}

          {activeTab === 'meetings' && (
            <div className="empty-state">
              <Calendar className="w-12 h-12" style={{ color: '#8c8b7d' }} />
              <p>No meetings yet</p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="detail-sidebar">
          <div className="sidebar-section">
            <h3 className="sidebar-section-title">Key Information</h3>
            <div className="info-grid">
              <InfoField label="EMAIL" value={contact.email} />
              <InfoField label="PHONE NUMBER" value={contact.phone} />
              <InfoField label="BIRTHDAY" value={contact.birthday} />
              <InfoField label="COMMENTS" value={contact.comments} />
              <InfoField label="REGION" value={contact.region} />
            </div>
          </div>

          <div className="sidebar-section">
            <div className="sidebar-section-header">
              <h3 className="sidebar-section-title">Companies (1)</h3>
              <button className="btn-text-sm">+ Add</button>
            </div>
            <div className="company-card">
              <div
                className="company-avatar"
                style={{ backgroundColor: contact.companyColor }}
              >
                {contact.companyInitials}
              </div>
              <div className="company-info-sidebar">
                <p className="company-name-sidebar">{contact.company}</p>
                {contact.isPrimary && (
                  <span className="badge badge-primary">Primary</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Upcoming Meeting Card Component
const UpcomingMeetingCard = ({ activity }) => (
  <div className="meeting-card">
    <div className="meeting-card-header">
      <div className="meeting-icon-wrapper">
        <Video className="meeting-icon" />
      </div>
      <div className="meeting-info">
        <p className="meeting-title">{activity.title}</p>
        <p className="meeting-meta">
          Meeting — {activity.date} — {activity.time}
          {activity.attendees && (
            <span className="attendees-count">
              👤 {activity.attendees}
            </span>
          )}
        </p>
      </div>
    </div>
    <div className="meeting-actions">
      {activity.zoomUrl && (
        <a
          href={activity.zoomUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm btn-success"
        >
          Join Meeting
        </a>
      )}
      <button className="btn-icon-sm">
        <MoreHorizontal />
      </button>
    </div>
  </div>
);

// Activity Timeline Item
const ActivityItem = ({ activity, isLast, contactName }) => {
  const config = eventTypeConfig[activity.type];
  const IconComponent = getIconComponent(config.icon);
  const isSystemEvent = activity.type === 'meeting_ended' || activity.type === 'contact_created';

  return (
    <div className={`activity-item ${isLast ? 'last' : ''}`}>
      <div className="activity-icon-wrapper" style={{ backgroundColor: `${config.color}15` }}>
        <IconComponent className="activity-icon" style={{ color: config.color }} />
      </div>
      {!isSystemEvent && activity.actor && (
        <div className="activity-avatar" title={activity.actor}>
          {activity.actorInitials || activity.actor.split(' ').map(n => n[0]).join('')}
        </div>
      )}
      <div className="activity-content">
        <div className="activity-header">
          <span className="activity-title">{renderActivityTitle(activity, contactName)}</span>
          <span className="activity-date">
            {activity.date}, {activity.time}
          </span>
        </div>
        {renderActivityBody(activity)}
      </div>
    </div>
  );
};

// Helper function to render activity title
const renderActivityTitle = (activity, contactName) => {
  const actor = activity.actor;
  switch (activity.type) {
    case 'meeting_scheduled':
      return <>{actor} scheduled a meeting</>;
    case 'meeting_ended':
      return <>Meeting completed</>;
    case 'note_added':
      return <>{actor} added a note</>;
    case 'proposal_sent':
      return <>{actor} sent proposal <strong>{activity.documentTitle}</strong></>;
    case 'proposal_accepted':
      return <>{actor} accepted proposal <strong>{activity.documentTitle}</strong></>;
    case 'contract_sent':
      return <>{actor} sent contract <strong>{activity.documentTitle}</strong></>;
    case 'contract_signed':
      return <>{actor} signed contract <strong>{activity.documentTitle}</strong></>;
    case 'invoice_sent':
      return <>{actor} sent invoice <strong>{activity.invoiceNumber}</strong></>;
    case 'invoice_paid':
      return <>{actor} paid invoice <strong>{activity.invoiceNumber}</strong></>;
    case 'deal_assigned':
      return <>{actor} assigned deal <strong>{activity.dealName}</strong> ({activity.dealValue}){contactName ? <> to {contactName}</> : null}</>;
    case 'client_portal_message':
      return <>{actor} sent a message in client portal</>;
    case 'project_email_sent':
    case 'project_email_received':
      return <>{actor} sent an email</>;
    case 'contact_property_updated':
      return <>{actor} updated {activity.field}: "{activity.oldValue}" → "{activity.newValue}"</>;
    case 'contact_created':
      return <>Contact created by {activity.createdBy === 'manual' ? actor : `system`}</>;
    default:
      return <>Activity</>;
  }
};

// Helper function to render activity body
const renderActivityBody = (activity) => {
  switch (activity.type) {
    case 'meeting_scheduled':
      return null;
    case 'meeting_ended':
      return (
        <div className="meeting-preview">
          <div className="meeting-preview-header">
            <Video className="w-4 h-4" />
            <div>
              <p className="meeting-preview-title">{activity.title}</p>
              <p className="meeting-preview-meta">
                {activity.duration && `Duration: ${activity.duration} • `}
                {activity.attendees} participants
              </p>
              <div className="meeting-badges">
                {activity.hasRecording && (
                  <span className="badge badge-blue">
                    <Video className="w-3 h-3" />
                    Recording
                  </span>
                )}
                {activity.hasSummary && (
                  <span className="badge badge-green">
                    <FileText className="w-3 h-3" />
                    Summary
                  </span>
                )}
                {activity.hasTranscript && (
                  <span className="badge badge-purple">
                    <FileText className="w-3 h-3" />
                    Transcript
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      );

    case 'note_added':
      return (
        <div className="activity-note">
          <p>{activity.content}</p>
        </div>
      );

    case 'client_portal_message':
      return (
        <>
          <div className="activity-note">
            <p>{activity.content}</p>
          </div>
          <a href="#" className="activity-action-link" onClick={(e) => e.preventDefault()}>View Message</a>
        </>
      );

    case 'proposal_sent':
    case 'contract_sent':
      return (
        <>
          <div className="document-preview">
            <FileText className="w-4 h-4" />
            <div>
              <p className="document-title">{activity.documentTitle}</p>
              {activity.amount && <p className="document-amount">{activity.amount}</p>}
            </div>
          </div>
          {activity.sentVia !== 'url' && (
            <a href="#" className="activity-action-link" onClick={(e) => e.preventDefault()}>View Email</a>
          )}
        </>
      );

    case 'proposal_accepted':
    case 'contract_signed':
      return null;

    case 'invoice_sent':
      return (
        <>
          <div className="document-preview">
            <FileText className="w-4 h-4" />
            <div>
              <p className="document-title">Invoice {activity.invoiceNumber}</p>
              <p className="document-amount">{activity.amount}</p>
              {activity.dueDate && <p className="document-meta">Due: {activity.dueDate}</p>}
            </div>
          </div>
          {activity.sentVia !== 'url' && (
            <a href="#" className="activity-action-link" onClick={(e) => e.preventDefault()}>View Email</a>
          )}
        </>
      );

    case 'invoice_paid':
      return null;

    case 'deal_assigned':
      return (
        <div className="document-preview">
          <div>
            <p className="document-title">{activity.dealName}</p>
            <p className="document-amount">{activity.dealValue}</p>
            <p className="document-meta">Stage: {activity.stage}</p>
          </div>
        </div>
      );

    case 'project_email_sent':
    case 'project_email_received':
      return (
        <>
          <div className="activity-note">
            <p className="email-subject"><strong>{activity.subject}</strong></p>
            <p className="email-preview">{activity.preview}</p>
          </div>
          <a href="#" className="activity-action-link" onClick={(e) => e.preventDefault()}>View Email</a>
        </>
      );

    case 'contact_property_updated':
    case 'contact_created':
      return null;

    default:
      return null;
  }
};

// Info Field Component
const InfoField = ({ label, value }) => (
  <div className="info-field">
    <p className="info-label">{label}</p>
    <p className="info-value">{value}</p>
  </div>
);

export default ContactDetail;
