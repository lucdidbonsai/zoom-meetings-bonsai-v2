// Browser-compatible version - uses CDN React
const { useState } = React;

// ========== DATA ==========

// 12 sample contacts
const contacts = [
  {
    id: 1,
    name: "Michael Fawler",
    initials: "MF",
    role: "Senior Manager of Consulting",
    company: "Adobe",
    companyInitials: "A",
    companyColor: "#EB1000",
    email: "michael.fawler@adobe.com",
    phone: "+1 (415) 789-2341",
    birthday: "March 16, 1985",
    region: "North America - West Coast",
    comments: "Key stakeholder for Adobe's Q1 marketing initiatives. Prefers morning meetings.",
    isPrimary: true
  },
  {
    id: 2,
    name: "Sarah Chen",
    initials: "SC",
    role: "VP of Product",
    company: "Salesforce",
    companyInitials: "S",
    companyColor: "#00A1E0",
    email: "sarah.chen@salesforce.com",
    phone: "+1 (628) 555-0198",
    birthday: "July 22, 1988",
    region: "North America - West Coast",
    comments: "Decision maker for enterprise software. Very detail-oriented.",
    isPrimary: true
  },
  {
    id: 3,
    name: "David Rodriguez",
    initials: "DR",
    role: "Creative Director",
    company: "Netflix",
    companyInitials: "N",
    companyColor: "#E50914",
    email: "d.rodriguez@netflix.com",
    phone: "+1 (323) 555-0142",
    birthday: "November 8, 1983",
    region: "North America - West Coast",
    comments: "Works on brand campaigns. Prefers visual presentations.",
    isPrimary: true
  },
  {
    id: 4,
    name: "Emily Watson",
    initials: "EW",
    role: "Head of Marketing",
    company: "Shopify",
    companyInitials: "S",
    companyColor: "#7AB55C",
    email: "emily.watson@shopify.com",
    phone: "+1 (613) 555-0176",
    birthday: "April 12, 1990",
    region: "North America - East Coast",
    comments: "Interested in growth marketing strategies. Fast decision maker.",
    isPrimary: true
  },
  {
    id: 5,
    name: "James Mitchell",
    initials: "JM",
    role: "CTO",
    company: "Stripe",
    companyInitials: "S",
    companyColor: "#635BFF",
    email: "james.mitchell@stripe.com",
    phone: "+1 (650) 555-0134",
    birthday: "September 3, 1986",
    region: "North America - West Coast",
    comments: "Technical stakeholder. Needs detailed technical specs.",
    isPrimary: true
  },
  {
    id: 6,
    name: "Amanda Foster",
    initials: "AF",
    role: "Senior Product Manager",
    company: "Figma",
    companyInitials: "F",
    companyColor: "#000000",
    email: "amanda.foster@figma.com",
    phone: "+1 (415) 555-0189",
    birthday: "January 28, 1991",
    region: "North America - West Coast",
    comments: "Design-focused. Values clean, intuitive solutions.",
    isPrimary: true
  },
  {
    id: 7,
    name: "Robert Kim",
    initials: "RK",
    role: "VP of Sales",
    company: "HubSpot",
    companyInitials: "H",
    companyColor: "#FF7A59",
    email: "robert.kim@hubspot.com",
    phone: "+1 (857) 555-0145",
    birthday: "May 15, 1984",
    region: "North America - East Coast",
    comments: "Sales-driven. Appreciates ROI-focused presentations.",
    isPrimary: true
  },
  {
    id: 8,
    name: "Jessica Martinez",
    initials: "JM",
    role: "Director of Operations",
    company: "Asana",
    companyInitials: "A",
    companyColor: "#F06A6A",
    email: "jessica.martinez@asana.com",
    phone: "+1 (415) 555-0167",
    birthday: "December 7, 1987",
    region: "North America - West Coast",
    comments: "Process-oriented. Wants clear timelines and deliverables.",
    isPrimary: true
  },
  {
    id: 9,
    name: "Christopher Lee",
    initials: "CL",
    role: "Chief Strategy Officer",
    company: "Notion",
    companyInitials: "N",
    companyColor: "#000000",
    email: "chris.lee@notion.so",
    phone: "+1 (628) 555-0123",
    birthday: "August 19, 1982",
    region: "North America - West Coast",
    comments: "Strategic thinker. Likes to start with the big picture.",
    isPrimary: true
  },
  {
    id: 10,
    name: "Laura Albany",
    initials: "LA",
    role: "Partnerships Manager",
    company: "Slack",
    companyInitials: "S",
    companyColor: "#4A154B",
    email: "laura.albany@slack.com",
    phone: "+1 (415) 555-0190",
    birthday: "February 24, 1989",
    region: "North America - West Coast",
    comments: "Collaborative approach. Prefers working closely with teams.",
    isPrimary: true
  },
  {
    id: 11,
    name: "Daniel Thompson",
    initials: "DT",
    role: "Finance Director",
    company: "Zoom",
    companyInitials: "Z",
    companyColor: "#2D8CFF",
    email: "daniel.thompson@zoom.us",
    phone: "+1 (408) 555-0156",
    birthday: "June 11, 1985",
    region: "North America - West Coast",
    comments: "Budget-conscious. Needs detailed financial breakdowns.",
    isPrimary: true
  },
  {
    id: 12,
    name: "Olivia Parker",
    initials: "OP",
    role: "Content Marketing Lead",
    company: "Mailchimp",
    companyInitials: "M",
    companyColor: "#FFE01B",
    email: "olivia.parker@mailchimp.com",
    phone: "+1 (404) 555-0178",
    birthday: "October 5, 1992",
    region: "North America - East Coast",
    comments: "Content-first mindset. Values storytelling and brand voice.",
    isPrimary: true
  }
];

// Activity data generator
const getActivitiesForContact = (contactId) => {
  if (contactId === 1) {
    return [
      {
        id: 'act-1',
        type: 'meeting_scheduled',
        title: 'Q2 Planning Session',
        date: 'Jan 20, 2026',
        time: '2:00 PM',
        timestamp: '2026-01-20T14:00:00',
        attendees: 4,
        actor: 'Laura Albany',
        actorInitials: 'LA',
        upcoming: true,
        zoomUrl: 'https://zoom.us/j/123456789'
      },
      {
        id: 'act-2',
        type: 'meeting_scheduled',
        title: 'Creative Review - Brand Refresh',
        date: 'Jan 22, 2026',
        time: '10:30 AM',
        timestamp: '2026-01-22T10:30:00',
        attendees: 3,
        actor: 'Sarah Chen',
        actorInitials: 'SC',
        upcoming: true,
        zoomUrl: 'https://zoom.us/j/987654321'
      },
      {
        id: 'act-3',
        type: 'note_added',
        date: 'Jan 18, 2026',
        time: '11:15 AM',
        timestamp: '2026-01-18T11:15:00',
        actor: 'Laura Albany',
        actorInitials: 'LA',
        content: 'Michael confirmed budget approval for Q1 marketing strategy. Moving forward with the $85K proposal.',
        pinned: false
      },
      {
        id: 'act-4',
        type: 'proposal_sent',
        date: 'Jan 15, 2026',
        time: '3:30 PM',
        timestamp: '2026-01-15T15:30:00',
        actor: 'Laura Albany',
        actorInitials: 'LA',
        documentTitle: 'Q1 2026 Marketing Strategy',
        amount: '$85,000',
        documentType: 'proposal'
      },
      {
        id: 'act-5',
        type: 'meeting_ended',
        title: 'Budget Review & Resource Allocation',
        date: 'Jan 12, 2026',
        time: '2:30 PM',
        timestamp: '2026-01-12T14:30:00',
        duration: '1h 36min',
        attendees: 5,
        actor: 'System',
        actorInitials: 'S',
        hasRecording: true,
        hasSummary: true,
        hasTranscript: true,
        summary: 'Discussed Q4 budget performance and Q1 resource allocation. Approved $85K for marketing consultation.',
        upcoming: false
      },
      {
        id: 'act-6',
        type: 'contract_signed',
        date: 'Jan 10, 2026',
        time: '4:22 PM',
        timestamp: '2026-01-10T16:22:00',
        actor: 'Michael Fawler',
        actorInitials: 'MF',
        documentTitle: 'Marketing Services Agreement',
        documentType: 'contract'
      },
      {
        id: 'act-7',
        type: 'invoice_paid',
        date: 'Jan 8, 2026',
        time: '9:15 AM',
        timestamp: '2026-01-08T09:15:00',
        actor: 'Michael Fawler',
        actorInitials: 'MF',
        amount: '$5,250.00',
        invoiceNumber: 'INV-2026-001',
        paymentMethod: 'Credit Card'
      },
      {
        id: 'act-8',
        type: 'project_email_received',
        date: 'Jan 5, 2026',
        time: '11:42 AM',
        timestamp: '2026-01-05T11:42:00',
        actor: 'Michael Fawler',
        actorInitials: 'MF',
        subject: 'Re: Q1 Campaign Timeline',
        preview: 'Thanks for the updated timeline. This looks great. I shared it with our team and everyone is aligned...'
      },
      {
        id: 'act-9',
        type: 'proposal_accepted',
        date: 'Dec 28, 2025',
        time: '2:18 PM',
        timestamp: '2025-12-28T14:18:00',
        actor: 'Michael Fawler',
        actorInitials: 'MF',
        documentTitle: 'Website Redesign Proposal',
        amount: '$42,000',
        documentType: 'proposal'
      },
      {
        id: 'act-10',
        type: 'deal_assigned',
        date: 'Dec 20, 2025',
        time: '10:30 AM',
        timestamp: '2025-12-20T10:30:00',
        actor: 'Laura Albany',
        actorInitials: 'LA',
        dealName: 'Adobe Q1 Marketing Engagement',
        dealValue: '$85,000',
        stage: 'Proposal Sent'
      },
      {
        id: 'act-11',
        type: 'client_portal_message',
        date: 'Dec 18, 2025',
        time: '4:55 PM',
        timestamp: '2025-12-18T16:55:00',
        actor: 'Michael Fawler',
        actorInitials: 'MF',
        content: 'Just uploaded the brand guidelines to the shared folder. Let me know if you need anything else!'
      },
      {
        id: 'act-12',
        type: 'invoice_sent',
        date: 'Dec 15, 2025',
        time: '9:00 AM',
        timestamp: '2025-12-15T09:00:00',
        actor: 'Laura Albany',
        actorInitials: 'LA',
        amount: '$5,250.00',
        invoiceNumber: 'INV-2026-001',
        dueDate: 'Jan 14, 2026'
      },
      {
        id: 'act-13',
        type: 'contact_property_updated',
        date: 'Dec 10, 2025',
        time: '3:20 PM',
        timestamp: '2025-12-10T15:20:00',
        actor: 'Laura Albany',
        actorInitials: 'LA',
        field: 'Job Title',
        oldValue: 'Manager of Consulting',
        newValue: 'Senior Manager of Consulting'
      },
      {
        id: 'act-14',
        type: 'contact_created',
        date: 'Nov 5, 2025',
        time: '2:15 PM',
        timestamp: '2025-11-05T14:15:00',
        actor: 'Laura Albany',
        actorInitials: 'LA',
        createdBy: 'manual'
      }
    ];
  }

  return [
    {
      id: `act-${contactId}-1`,
      type: 'meeting_scheduled',
      title: 'Initial Discovery Call',
      date: 'Jan 25, 2026',
      time: '11:00 AM',
      timestamp: '2026-01-25T11:00:00',
      attendees: 2,
      actor: 'Laura Albany',
      actorInitials: 'LA',
      upcoming: true,
      zoomUrl: 'https://zoom.us/j/111222333'
    },
    {
      id: `act-${contactId}-2`,
      type: 'note_added',
      date: 'Jan 20, 2026',
      time: '2:30 PM',
      timestamp: '2026-01-20T14:30:00',
      actor: 'Laura Albany',
      actorInitials: 'LA',
      content: 'Great first conversation. They seem very interested in our consulting services.',
      pinned: false
    },
    {
      id: `act-${contactId}-3`,
      type: 'project_email_sent',
      date: 'Jan 18, 2026',
      time: '10:15 AM',
      timestamp: '2026-01-18T10:15:00',
      actor: 'Laura Albany',
      actorInitials: 'LA',
      subject: 'Introduction & Next Steps',
      preview: 'Thank you for taking the time to connect. I wanted to follow up on our conversation...'
    },
    {
      id: `act-${contactId}-4`,
      type: 'contact_created',
      date: 'Jan 15, 2026',
      time: '4:45 PM',
      timestamp: '2026-01-15T16:45:00',
      actor: 'Laura Albany',
      actorInitials: 'LA',
      createdBy: 'manual'
    }
  ];
};

const eventTypeConfig = {
  meeting_scheduled: { icon: 'calendar', color: '#22ad01', label: 'Meeting Scheduled' },
  meeting_ended: { icon: 'video', color: '#5db6f8', label: 'Meeting Ended' },
  note_added: { icon: 'file-text', color: '#8c8b7d', label: 'Note Added' },
  proposal_sent: { icon: 'file-text', color: '#520eb0', label: 'Proposal Sent' },
  proposal_accepted: { icon: 'check-circle', color: '#22ad01', label: 'Proposal Accepted' },
  contract_sent: { icon: 'file-text', color: '#520eb0', label: 'Contract Sent' },
  contract_signed: { icon: 'check-circle', color: '#22ad01', label: 'Contract Signed' },
  invoice_sent: { icon: 'dollar-sign', color: '#ee8146', label: 'Invoice Sent' },
  invoice_paid: { icon: 'check-circle', color: '#22ad01', label: 'Invoice Paid' },
  deal_assigned: { icon: 'briefcase', color: '#5db6f8', label: 'Deal Assigned' },
  client_portal_message: { icon: 'message-square', color: '#5db6f8', label: 'Client Portal Message' },
  project_email_sent: { icon: 'mail', color: '#8c8b7d', label: 'Email Sent' },
  project_email_received: { icon: 'mail', color: '#8c8b7d', label: 'Email Received' },
  contact_property_updated: { icon: 'edit', color: '#8c8b7d', label: 'Contact Updated' },
  contact_created: { icon: 'user-plus', color: '#22ad01', label: 'Contact Created' }
};

// ========== ICONS ==========

const Icon = ({ name, className = "w-4 h-4", style, ...props }) => {
  const icons = {
    'calendar': () => (
      <svg className={className} style={style} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    'video': () => (
      <svg className={className} style={style} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    'file-text': () => (
      <svg className={className} style={style} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    'check-circle': () => (
      <svg className={className} style={style} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    'dollar-sign': () => (
      <svg className={className} style={style} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    'briefcase': () => (
      <svg className={className} style={style} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    'message-square': () => (
      <svg className={className} style={style} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    'mail': () => (
      <svg className={className} style={style} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    'edit': () => (
      <svg className={className} style={style} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    'user-plus': () => (
      <svg className={className} style={style} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    ),
    'search': () => (
      <svg className={className} style={style} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    'chevron-right': () => (
      <svg className={className} style={style} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    ),
    'plus': () => (
      <svg className={className} style={style} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    ),
    'more-horizontal': () => (
      <svg className={className} style={style} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
      </svg>
    ),
    'phone': () => (
      <svg className={className} style={style} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    )
  };

  const IconComponent = icons[name];
  return IconComponent ? <IconComponent /> : null;
};

// ========== HELPER FUNCTIONS ==========

const renderActivityTitle = (activity) => {
  switch (activity.type) {
    case 'meeting_scheduled':
      return `${activity.actor} scheduled a meeting`;
    case 'meeting_ended':
      return 'Meeting completed';
    case 'note_added':
      return `${activity.actor} added a note`;
    case 'proposal_sent':
      return `${activity.actor} sent a proposal`;
    case 'proposal_accepted':
      return `${activity.actor} accepted proposal`;
    case 'contract_sent':
      return `${activity.actor} sent a contract`;
    case 'contract_signed':
      return `${activity.actor} signed the contract`;
    case 'invoice_sent':
      return `${activity.actor} sent an invoice`;
    case 'invoice_paid':
      return `${activity.actor} paid invoice`;
    case 'deal_assigned':
      return `${activity.actor} assigned a deal`;
    case 'client_portal_message':
      return `${activity.actor} sent a message in client portal`;
    case 'project_email_sent':
      return `${activity.actor} sent an email`;
    case 'project_email_received':
      return `${activity.actor} sent an email`;
    case 'contact_property_updated':
      return `${activity.actor} updated contact`;
    case 'contact_created':
      return `Contact created by ${activity.actor}`;
    default:
      return 'Activity';
  }
};

const renderActivityBody = (activity) => {
  switch (activity.type) {
    case 'meeting_scheduled':
    case 'meeting_ended':
      return (
        <div className="meeting-preview">
          <div className="meeting-preview-header">
            <Icon name="video" className="w-4 h-4" />
            <div>
              <p className="meeting-preview-title">{activity.title}</p>
              <p className="meeting-preview-meta">
                {activity.duration && `Duration: ${activity.duration} • `}
                {activity.attendees} participants
              </p>
              {activity.hasRecording && (
                <div className="meeting-badges">
                  <span className="badge badge-blue">
                    <Icon name="video" className="w-3 h-3" />
                    Recording
                  </span>
                  {activity.hasSummary && (
                    <span className="badge badge-green">
                      <Icon name="file-text" className="w-3 h-3" />
                      Summary
                    </span>
                  )}
                  {activity.hasTranscript && (
                    <span className="badge badge-purple">
                      <Icon name="file-text" className="w-3 h-3" />
                      Transcript
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      );

    case 'note_added':
    case 'client_portal_message':
      return (
        <div className="activity-note">
          <p>{activity.content}</p>
        </div>
      );

    case 'proposal_sent':
    case 'proposal_accepted':
    case 'contract_sent':
    case 'contract_signed':
      return (
        <div className="document-preview">
          <Icon name="file-text" className="w-4 h-4" />
          <div>
            <p className="document-title">{activity.documentTitle}</p>
            {activity.amount && <p className="document-amount">{activity.amount}</p>}
          </div>
        </div>
      );

    case 'invoice_sent':
    case 'invoice_paid':
      return (
        <div className="document-preview">
          <Icon name="file-text" className="w-4 h-4" />
          <div>
            <p className="document-title">Invoice {activity.invoiceNumber}</p>
            <p className="document-amount">{activity.amount}</p>
            {activity.dueDate && <p className="document-meta">Due: {activity.dueDate}</p>}
            {activity.paymentMethod && <p className="document-meta">Paid via {activity.paymentMethod}</p>}
          </div>
        </div>
      );

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
        <div className="activity-note">
          <p className="email-subject"><strong>{activity.subject}</strong></p>
          <p className="email-preview">{activity.preview}</p>
        </div>
      );

    case 'contact_property_updated':
      return (
        <div className="activity-note">
          <p>
            Changed <strong>{activity.field}</strong> from "{activity.oldValue}" to "{activity.newValue}"
          </p>
        </div>
      );

    case 'contact_created':
      return (
        <div className="activity-note">
          <p>
            Created {activity.createdBy === 'manual' ? 'manually' : 'by system'}
          </p>
        </div>
      );

    default:
      return null;
  }
};

// ========== COMPONENTS ==========

const UpcomingMeetingCard = ({ activity }) => (
  <div className="meeting-card">
    <div className="meeting-card-header">
      <div className="meeting-icon-wrapper">
        <Icon name="video" className="meeting-icon" />
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
        <Icon name="more-horizontal" />
      </button>
    </div>
  </div>
);

const ActivityItem = ({ activity, isLast }) => {
  const config = eventTypeConfig[activity.type];

  return (
    <div className={`activity-item ${isLast ? 'last' : ''}`}>
      <div className="activity-icon-wrapper" style={{ backgroundColor: `${config.color}15` }}>
        <Icon name={config.icon} className="activity-icon" style={{ color: config.color }} />
      </div>
      <div className="activity-content">
        <div className="activity-header">
          <span className="activity-title">{renderActivityTitle(activity)}</span>
          <span className="activity-date">
            {activity.date}, {activity.time}
          </span>
        </div>
        {renderActivityBody(activity)}
      </div>
    </div>
  );
};

const InfoField = ({ label, value }) => (
  <div className="info-field">
    <p className="info-label">{label}</p>
    <p className="info-value">{value}</p>
  </div>
);

const ContactDetail = ({ contact, onBack }) => {
  const [activeTab, setActiveTab] = useState('activity');
  const activities = getActivitiesForContact(contact.id);

  const upcomingActivities = activities.filter(a => a.upcoming);
  const pastActivities = activities.filter(a => !a.upcoming);

  const tabs = ['activity', 'notes', 'meetings'];

  return (
    <div className="contact-detail">
      <div className="detail-header">
        <div className="breadcrumb">
          <button onClick={onBack} className="breadcrumb-link">Contacts</button>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{contact.name}</span>
        </div>
        <div className="header-actions">
          <button className="btn-icon">
            <Icon name="more-horizontal" />
          </button>
          <button className="btn-icon">
            <Icon name="plus" />
          </button>
        </div>
      </div>

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

        <div className="action-buttons">
          <button className="btn btn-default">
            <Icon name="file-text" className="w-4 h-4" />
            Note
          </button>
          <button className="btn btn-default">
            <Icon name="mail" className="w-4 h-4" />
            Email
          </button>
          <button className="btn btn-default">
            <Icon name="phone" className="w-4 h-4" />
            Call
          </button>
          <button className="btn btn-default">
            <Icon name="calendar" className="w-4 h-4" />
            Meeting
          </button>
          <button className="btn-icon">
            <Icon name="more-horizontal" />
          </button>
        </div>

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

      <div className="detail-content-wrapper">
        <div className="activity-feed">
          {activeTab === 'activity' && (
            <>
              {upcomingActivities.length > 0 && (
                <div className="activity-section">
                  <div className="section-header">
                    <h2 className="section-title">Upcoming</h2>
                    <button className="btn-text">
                      <Icon name="plus" className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="upcoming-cards">
                    {upcomingActivities.map(activity => (
                      <UpcomingMeetingCard key={activity.id} activity={activity} />
                    ))}
                  </div>
                </div>
              )}

              <div className="activity-section">
                <h2 className="section-title">History</h2>
                <div className="activity-timeline">
                  {pastActivities.map((activity, index) => (
                    <ActivityItem
                      key={activity.id}
                      activity={activity}
                      isLast={index === pastActivities.length - 1}
                    />
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'notes' && (
            <div className="empty-state">
              <Icon name="file-text" className="w-12 h-12" style={{ color: '#8c8b7d' }} />
              <p>No notes yet</p>
            </div>
          )}

          {activeTab === 'meetings' && (
            <div className="empty-state">
              <Icon name="calendar" className="w-12 h-12" style={{ color: '#8c8b7d' }} />
              <p>No meetings yet</p>
            </div>
          )}
        </div>

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

const App = () => {
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

      <div className="main-content">
        <div className="page-header">
          <div>
            <h1 className="page-title">Contacts</h1>
            <p className="page-subtitle">{contacts.length} contacts</p>
          </div>
          <button className="btn btn-primary">
            <span>+ New Contact</span>
          </button>
        </div>

        <div className="search-container">
          <div className="search-input-wrapper">
            <Icon name="search" className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search contacts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="contacts-list">
          {filteredContacts.map((contact) => (
            <div
              key={contact.id}
              className="contact-card"
              onClick={() => setSelectedContact(contact)}
            >
              <div className="contact-card-content">
                <div className="contact-avatar-section">
                  <div className="contact-avatar">{contact.initials}</div>
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
              <Icon name="chevron-right" className="contact-arrow" />
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
};

// Render app
ReactDOM.render(<App />, document.getElementById('root'));
