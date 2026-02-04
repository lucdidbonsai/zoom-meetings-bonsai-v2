# Bonsai CRM Activity Feed Prototype

A React prototype demonstrating the activity feed functionality for Bonsai's CRM contact pages.

## Features

- **12 Sample Contacts** - Diverse set of contacts from various companies
- **14 Activity Event Types** - All event types from the requirements:
  - Meeting Scheduled
  - Meeting Ended
  - Note Added
  - Proposal Sent/Accepted
  - Contract Sent/Signed
  - Invoice Sent/Paid
  - Deal Assigned
  - Client Portal Messages
  - Project Emails (Sent/Received)
  - Contact Property Updates
  - Contact Creation

- **Bonsai Design System** - Authentic Bonsai green theme (#22ad01) and UI components
- **Activity Timeline** - "Upcoming" and "History" sections
- **Contact List View** - Searchable list of all contacts
- **Contact Detail View** - Full activity feed with tabs

## Getting Started

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Project Structure

```
crm-activity-feed/
├── src/
│   ├── components/
│   │   ├── Icons.jsx          # Icon components
│   │   └── ContactDetail.jsx  # Contact detail page with activity feed
│   ├── data/
│   │   ├── contacts.js        # 12 sample contacts
│   │   └── activities.js      # Activity feed data and event types
│   ├── App.jsx                # Main app with contact list
│   ├── App.css                # Bonsai-inspired styling
│   └── main.jsx               # React entry point
├── index.html
├── package.json
└── vite.config.js
```

## Usage

1. **Browse Contacts**: The home page shows all 12 contacts in a list
2. **Search**: Use the search bar to filter contacts by name, company, or email
3. **View Contact**: Click on any contact to view their detail page
4. **Activity Feed**: The "Activity" tab shows upcoming meetings and historical activities
5. **Event Types**: Scroll through the history to see all 14 event types

## Event Types Included

All 14 event types from the requirements table:

| Event Type | Permission | Implementation |
|-----------|------------|----------------|
| Deal assigned to contact | Deals - View | ✅ Implemented |
| Client portal invitation accepted | Clients - View | ✅ As "Client Portal Message" |
| Message sent by contact | Clients - View | ✅ Implemented |
| Project email sent | Projects - View | ✅ Implemented |
| Project email received | Projects - View | ✅ Implemented |
| Meeting Scheduled | Meetings - View | ✅ Implemented |
| Meeting Ended | Meetings - View | ✅ Implemented |
| Invoice Sent | Invoices - View | ✅ Implemented |
| Invoice Paid | Invoices - View | ✅ Implemented |
| Contract Sent | Contracts - View | ✅ Implemented |
| Contract Signed | Contracts - View | ✅ Implemented |
| Proposal Sent | Proposals - View | ✅ Implemented |
| Proposal Accepted | Proposals - View | ✅ Implemented |
| Contact Creation | Clients - View | ✅ Implemented |
| Contact Property Updated | Clients - View | ✅ Implemented |
| Note added to contact | Clients - View | ✅ Implemented |

## Design Notes

- **Bonsai Green Theme**: Uses authentic Bonsai brand color (#22ad01)
- **Timeline UI**: Inspired by Bonsai's existing event timeline component
- **Responsive**: Adapts to different screen sizes
- **Accessibility**: Semantic HTML and proper ARIA labels
- **Performance**: Optimized React components with proper key usage

## Next Steps

To integrate this into the Bonsai codebase:

1. Connect to real Bonsai API endpoints
2. Add permissions checking based on user roles
3. Implement real-time updates via webhooks
4. Add pagination for large activity feeds
5. Integrate with Zoom meetings API
6. Add filtering and sorting options
