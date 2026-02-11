import React, { useState, useRef, useEffect } from 'react';
import { getActivitiesForContact, eventTypeConfig, formatActivityDateTime } from '../data/activities';
import { contacts } from '../data/contacts';
import { getIconComponent, Plus, MoreHorizontal, Calendar, Mail, Phone, FileText, Video, DealsIcon, Play, Sparkle } from './Icons';

// Truncatable Note Component
const TruncatableNote = ({ content }) => {
  const [expanded, setExpanded] = useState(false);
  const [needsTruncation, setNeedsTruncation] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (el) {
      setNeedsTruncation(el.scrollHeight > el.clientHeight + 1);
    }
  }, []);

  return (
    <div className="activity-note">
      <p ref={textRef} className={expanded ? '' : 'note-truncated'}>{content}</p>
      {needsTruncation && (
        <button className="show-more-link" onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
};

const ContactDetail = ({ contact, onBack }) => {
  const [activeTab, setActiveTab] = useState('activity');
  const activities = getActivitiesForContact(contact.id);

  const upcomingActivities = activities.filter(a => a.upcoming);
  const pastActivities = activities
    .filter(a => !a.upcoming)
    .sort((a, b) => new Date(b.timestamp || 0) - new Date(a.timestamp || 0));

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
          <div className="contact-avatar-large">
            {contact.avatar ? (
              <img src={contact.avatar} alt={contact.name} className="contact-avatar-img" />
            ) : (
              contact.initials
            )}
          </div>
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
                      contact={contact}
                      contactName={contact.name}
                      contactEmail={contact.email}
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

// Get actor avatar - look up by name in contacts
const getActorAvatar = (actorName) => {
  const c = contacts.find(x => x.name === actorName);
  return c?.avatar || null;
};

// Activity Timeline Item - Spec: 1) Timeline icon (always) + vertical line, 2) Avatar (user events only), 3) Action link (conditional, right), 4) Widget (conditional), 5) Text preview (conditional)
const ActivityItem = ({ activity, isLast, contact, contactName, contactEmail }) => {
  const config = eventTypeConfig[activity.type];
  const IconComponent = getIconComponent(config.icon);
  const isSystemEvent = activity.actor === 'System' || (activity.type === 'contact_created' && activity.createdBy !== 'manual');
  const { date, time } = activity.timestamp ? formatActivityDateTime(activity.timestamp) : { date: activity.date, time: activity.time };
  const actorAvatar = getActorAvatar(activity.actor);

  return (
    <div className={`activity-item ${isLast ? 'last' : ''}`}>
      {/* 1. Timeline icon + vertical line (always) - greyscale */}
      <div className="activity-timeline-col">
        <div className="activity-icon-wrapper activity-icon-greyscale">
          <IconComponent className="activity-icon" />
        </div>
        {!isLast && <div className="activity-timeline-line" />}
      </div>

      {/* 2-5. Main content area */}
      <div className="activity-main">
        <div className="activity-header-row">
          {!isSystemEvent && activity.actor && (
            <div className="activity-avatar" title={activity.actor}>
              {actorAvatar ? (
                <img src={actorAvatar} alt={activity.actor} className="activity-avatar-img" />
              ) : (
                activity.actorInitials || activity.actor.split(' ').map(n => n[0]).join('')
              )}
            </div>
          )}
          <div className="activity-text-block">
            <span className="activity-title">{renderActivityTitle(activity, contactName, contactEmail)}</span>
            {!['project_email_sent', 'project_email_received'].includes(activity.type) && (
              <span className="activity-datetime"> {date} {time}</span>
            )}
          </div>
          {renderActionLink(activity)}
        </div>
        {renderActivityBody(activity)}
      </div>
    </div>
  );
};

// Action link - conditional, right-aligned. Only for events that generated emails/messages
const renderActionLink = (activity) => {
  if (activity.type === 'contract_sent' && activity.sentVia !== 'url') {
    return <a href="#" className="activity-action-link-right" onClick={(e) => e.preventDefault()}>View Email</a>;
  }
  if (activity.type === 'invoice_sent' && activity.sentVia !== 'url') {
    return <a href="#" className="activity-action-link-right" onClick={(e) => e.preventDefault()}>View Email</a>;
  }
  if (activity.type === 'project_email_sent' || activity.type === 'project_email_received') {
    return <a href="#" className="activity-action-link-right" onClick={(e) => e.preventDefault()}>View Email</a>;
  }
  if (activity.type === 'client_portal_message') {
    return <a href="#" className="activity-action-link-right" onClick={(e) => e.preventDefault()}>View Message</a>;
  }
  return null;
};

// Project email body - format per screenshot 5: subject in quotes, date, preview (2 lines + Show More)
const ProjectEmailBody = ({ activity }) => {
  const { date, time } = activity.timestamp ? formatActivityDateTime(activity.timestamp) : { date: activity.date, time: activity.time };
  return (
    <div className="activity-email-body">
      <p className="email-subject-quoted">&quot;{activity.subject}&quot;</p>
      <p className="email-datetime">{date} {time}</p>
      <TruncatableNote content={activity.preview} />
    </div>
  );
};

// Helper function to render activity title (without date - date is shown inline separately)
const renderActivityTitle = (activity, contactName, contactEmail) => {
  const actor = activity.actor;
  switch (activity.type) {
    case 'meeting_scheduled':
      return <>{actor} scheduled a meeting</>;
    case 'meeting_ended':
      return <>Meeting completed</>;
    case 'note_added':
      return <>{actor} added a note</>;
    case 'proposal_sent':
      return <>{actor} sent the <span className="activity-entity-link">proposal</span> to {contactEmail}</>;
    case 'proposal_accepted':
      return <>{actor} accepted <span className="activity-entity-link">proposal</span> <strong>{activity.documentTitle}</strong></>;
    case 'contract_sent':
      return <>{actor} sent the <span className="activity-entity-link">contract</span> to {activity.recipientEmail || contactEmail}</>;
    case 'contract_viewed':
      return <>{contactName} has viewed <span className="activity-entity-link">contract</span> for the first time.</>;
    case 'contract_signed':
      return <>{actor} signed <span className="activity-entity-link">contract</span> <strong>{activity.documentTitle}</strong></>;
    case 'invoice_sent':
      return <>{actor} sent <span className="activity-entity-link">invoice {activity.invoiceNumber}</span> to {contactEmail}</>;
    case 'invoice_paid':
      return <>{actor} paid <span className="activity-entity-link">invoice</span> <strong>{activity.invoiceNumber}</strong></>;
    case 'deal_assigned':
      return <>{actor} assigned deal <strong>{activity.dealName}</strong> ({activity.dealValue}){contactName ? <> to {contactName}</> : null}</>;
    case 'client_portal_message':
      return <>{actor} sent a message in client portal</>;
    case 'project_email_sent':
      return <>{actor} sent an email to {activity.recipientEmail || contactEmail}:</>;
    case 'project_email_received':
      return <>{actor} received an email:</>;
    case 'contact_property_updated':
      return <>{actor} updated {activity.field}: &quot;{activity.oldValue}&quot; → &quot;{activity.newValue}&quot;</>;
    case 'contact_created':
      return <>Contact created by {activity.createdBy === 'manual' ? actor : 'system'}</>;
    case 'client_portal_invitation_accepted':
      return <>{actor} accepted client portal invitation</>;
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
        <div className="activity-widget activity-widget-meeting">
          <div className="activity-widget-meeting-icon">
            <Video className="w-4 h-4" />
          </div>
          <div className="activity-widget-meeting-main">
            <div className="activity-widget-meeting-content">
              <p className="activity-widget-meeting-title">{activity.title}</p>
              <p className="activity-widget-meeting-meta">
                {activity.duration ? `Duration: ${activity.duration}` : ''}
                {activity.duration && activity.attendees ? ' · ' : ''}
                {activity.attendees ? `${activity.attendees} participants` : ''}
              </p>
              {activity.hasTranscript && (
                <a href="#" className="activity-widget-meeting-link" onClick={(e) => e.preventDefault()}>Transcript</a>
              )}
            </div>
            <div className="activity-widget-meeting-pills">
              {activity.hasRecording && (
                <span className="meeting-pill meeting-pill-recording">
                  <Play className="w-3 h-3" />
                  Recording
                </span>
              )}
              {activity.hasSummary && (
                <span className="meeting-pill meeting-pill-summary">
                  <Sparkle className="w-3 h-3" />
                  Summary
                </span>
              )}
            </div>
          </div>
        </div>
      );

    case 'note_added':
      return <TruncatableNote content={activity.content} />;

    case 'client_portal_message':
      return <TruncatableNote content={activity.content} />;

    case 'proposal_sent':
    case 'contract_sent':
      return (
        <div className="activity-widget activity-widget-document">
          <FileText className="activity-widget-icon activity-widget-icon-contract" />
          <span>{activity.documentTitle}</span>
        </div>
      );

    case 'invoice_sent':
      return (
        <div className="activity-widget activity-widget-document">
          <FileText className="activity-widget-icon activity-widget-icon-invoice" />
          <span>Invoice {activity.invoiceNumber}</span>
        </div>
      );

    case 'deal_assigned':
      return (
        <div className="activity-widget activity-widget-deal">
          <DealsIcon className="activity-widget-icon activity-widget-icon-deal" />
          <span>{activity.dealName}</span>
        </div>
      );

    case 'proposal_accepted':
    case 'contract_signed':
    case 'contract_viewed':
    case 'invoice_paid':
    case 'contact_property_updated':
    case 'contact_created':
    case 'client_portal_invitation_accepted':
      return null;

    case 'project_email_sent':
    case 'project_email_received':
      return (
        <ProjectEmailBody activity={activity} />
      );

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
