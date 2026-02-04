// Activity feed events - All 14 event types
// Based on the permissions and event types table provided

export const getActivitiesForContact = (contactId) => {
  // Sample activities for contact ID 1 (Michael Fawler)
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

  // Sample activities for other contacts (shorter lists)
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

// Event type metadata for rendering
export const eventTypeConfig = {
  meeting_scheduled: {
    icon: 'calendar',
    color: '#22ad01',
    label: 'Meeting Scheduled'
  },
  meeting_ended: {
    icon: 'video',
    color: '#5db6f8',
    label: 'Meeting Ended'
  },
  note_added: {
    icon: 'file-text',
    color: '#8c8b7d',
    label: 'Note Added'
  },
  proposal_sent: {
    icon: 'file-text',
    color: '#520eb0',
    label: 'Proposal Sent'
  },
  proposal_accepted: {
    icon: 'check-circle',
    color: '#22ad01',
    label: 'Proposal Accepted'
  },
  contract_sent: {
    icon: 'file-text',
    color: '#520eb0',
    label: 'Contract Sent'
  },
  contract_signed: {
    icon: 'check-circle',
    color: '#22ad01',
    label: 'Contract Signed'
  },
  invoice_sent: {
    icon: 'dollar-sign',
    color: '#ee8146',
    label: 'Invoice Sent'
  },
  invoice_paid: {
    icon: 'check-circle',
    color: '#22ad01',
    label: 'Invoice Paid'
  },
  deal_assigned: {
    icon: 'briefcase',
    color: '#5db6f8',
    label: 'Deal Assigned'
  },
  client_portal_message: {
    icon: 'message-square',
    color: '#5db6f8',
    label: 'Client Portal Message'
  },
  project_email_sent: {
    icon: 'mail',
    color: '#8c8b7d',
    label: 'Email Sent'
  },
  project_email_received: {
    icon: 'mail',
    color: '#8c8b7d',
    label: 'Email Received'
  },
  contact_property_updated: {
    icon: 'edit',
    color: '#8c8b7d',
    label: 'Contact Updated'
  },
  contact_created: {
    icon: 'user-plus',
    color: '#22ad01',
    label: 'Contact Created'
  }
};
