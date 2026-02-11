// Icon components based on Bonsai's icon usage patterns
import React from 'react';

export const Calendar = ({ className = "w-4 h-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

export const Video = ({ className = "w-4 h-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

export const FileText = ({ className = "w-4 h-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

export const CheckCircle = ({ className = "w-4 h-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const DollarSign = ({ className = "w-4 h-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const Briefcase = ({ className = "w-4 h-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export const MessageSquare = ({ className = "w-4 h-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

export const Mail = ({ className = "w-4 h-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export const Edit = ({ className = "w-4 h-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);

export const UserPlus = ({ className = "w-4 h-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
  </svg>
);

export const Users = ({ className = "w-4 h-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

export const Clock = ({ className = "w-4 h-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const Plus = ({ className = "w-4 h-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

export const MoreHorizontal = ({ className = "w-4 h-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
  </svg>
);

export const Search = ({ className = "w-4 h-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

export const ChevronRight = ({ className = "w-4 h-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export const Play = ({ className = "w-4 h-4", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M8 5v14l11-7z" />
  </svg>
);

// Sparkle/Summary icon for meeting pills
export const Sparkle = ({ className = "w-4 h-4", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

export const Phone = ({ className = "w-4 h-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

// Deal icon - three right-pointing chevrons
export const DealsIcon = ({ className = "w-4 h-4", ...props }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 8l4 4-4 4" />
    <path d="M11 8l4 4-4 4" />
    <path d="M16 8l4 4-4 4" />
  </svg>
);

// Contact icon - for contact created, contact property updated
export const ContactIcon = ({ className = "w-4 h-4", ...props }) => (
  <svg className={className} viewBox="0 0 23 21" fill="currentColor" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12.6299 5.00488C14.6792 5.10682 16.3096 6.77116 16.3096 8.80859L16.3037 9.00391C16.2 11.0169 14.5057 12.6161 12.4307 12.6162H12.4023C10.2676 12.6092 8.54378 10.9046 8.55176 8.80859C8.55176 6.70549 10.2887 5 12.4307 5L12.6299 5.00488ZM12.4307 7.28027C11.5084 7.28027 10.832 8.00386 10.832 8.80859V8.81738C10.8291 9.61505 11.4954 10.3338 12.4092 10.3369H12.4307C13.3531 10.3368 14.0291 9.61376 14.0293 8.80859C14.0293 8.00392 13.3528 7.28038 12.4307 7.28027Z" />
    <path fillRule="evenodd" clipRule="evenodd" d="M18.9287 0C21.1772 7.5932e-05 22.9998 1.83941 23 4.1084V16.8916C22.9998 19.1606 21.1772 20.9999 18.9287 21H12.5879C12.5585 21.0001 12.5292 21.001 12.5 21.001L12.4219 21H4.07129C1.82287 20.9999 0.000159335 19.1606 0 16.8916V4.1084C0.000159336 1.83941 1.82287 7.61931e-05 4.07129 0H18.9287ZM4.07129 2.28223C3.07208 2.2823 2.26188 3.10006 2.26172 4.1084V7H3.86035C4.48968 7.00019 4.99981 7.51032 5 8.13965C5 8.76914 4.48979 9.28008 3.86035 9.28027H2.26172V12H3.86035C4.48968 12.0002 4.99981 12.5103 5 13.1396C5 13.7691 4.48979 14.2801 3.86035 14.2803H2.26172V16.8916C2.26188 17.9 3.07208 18.7177 4.07129 18.7178H6.22266C6.10974 18.4556 6.03659 18.1644 6.01074 17.8408L6 17.5723C6 14.6462 9.65607 13.6671 12.5 13.667C15.359 13.667 19 14.646 19 17.5947L18.9893 17.8633C18.964 18.1783 18.8916 18.4615 18.7832 18.7178H18.9287C19.9279 18.7177 20.7381 17.9 20.7383 16.8916V4.1084C20.7381 3.10006 19.9279 2.2823 18.9287 2.28223H4.07129ZM12.5 15.9463C11.2807 15.9463 10.0281 16.1654 9.17188 16.5771C8.36365 16.9658 8.28027 17.2989 8.28027 17.5723C8.28035 17.7949 8.33302 17.8524 8.35938 17.8838C8.42045 17.9565 8.592 18.107 8.99805 18.2637C9.80201 18.5738 10.9719 18.7028 12.2461 18.7178H12.7539C14.0265 18.7033 15.1974 18.5788 16.0049 18.2715C16.4124 18.1163 16.5836 17.9671 16.6436 17.8965C16.6674 17.8683 16.7197 17.8149 16.7197 17.5947C16.7197 17.2975 16.625 16.9623 15.8291 16.5771C14.9782 16.1655 13.7284 15.9463 12.5 15.9463Z" />
  </svg>
);

// Client Portal icon
export const ClientPortalIcon = ({ className = "w-4 h-4", ...props }) => (
  <svg className={className} viewBox="0 0 29 26" fill="currentColor" {...props}>
    <path d="M9.8501 17.9996C9.8501 17.3645 10.365 16.8496 11.0001 16.8496H18.0001C18.6352 16.8496 19.1501 17.3645 19.1501 17.9996C19.1501 18.6347 18.6352 19.1496 18.0001 19.1496L11.0001 19.1496C10.365 19.1496 9.8501 18.6347 9.8501 17.9996Z" />
    <path fillRule="evenodd" clipRule="evenodd" d="M6.0001 9.99961C6.0001 8.34276 7.34324 6.99961 9.0001 6.99961H20.0001C21.657 6.99961 23.0001 8.34276 23.0001 9.99961V10.9996C23.0001 12.6565 21.657 13.9996 20.0001 13.9996H9.0001C7.34324 13.9996 6.0001 12.6565 6.0001 10.9996V9.99961ZM9.0001 9.29961H20.0001C20.3867 9.29961 20.7001 9.61301 20.7001 9.99961V10.9996C20.7001 11.3862 20.3867 11.6996 20.0001 11.6996H9.0001C8.6135 11.6996 8.3001 11.3862 8.3001 10.9996V9.99961C8.3001 9.61301 8.6135 9.29961 9.0001 9.29961Z" />
    <path fillRule="evenodd" clipRule="evenodd" d="M0.850098 6.99961C0.850098 3.60306 3.60355 0.849609 7.0001 0.849609H22.0001C25.3966 0.849609 28.1501 3.60306 28.1501 6.99961V18.9996C28.1501 22.3962 25.3966 25.1496 22.0001 25.1496H7.0001C3.60355 25.1496 0.850098 22.3962 0.850098 18.9996V6.99961ZM7.0001 3.14961C4.8738 3.14961 3.1501 4.87331 3.1501 6.99961V18.9996C3.1501 21.1259 4.8738 22.8496 7.0001 22.8496H22.0001C24.1264 22.8496 25.8501 21.1259 25.8501 18.9996V6.99961C25.8501 4.87331 24.1264 3.14961 22.0001 3.14961H7.0001Z" />
  </svg>
);

// Icon mapper for activity types
export const getIconComponent = (iconName) => {
  const icons = {
    'calendar': Calendar,
    'video': Video,
    'file-text': FileText,
    'check-circle': CheckCircle,
    'dollar-sign': DollarSign,
    'briefcase': Briefcase,
    'message-square': MessageSquare,
    'mail': Mail,
    'edit': Edit,
    'user-plus': UserPlus,
    'users': Users,
    'clock': Clock,
    'deals': DealsIcon,
    'contact': ContactIcon,
    'client-portal': ClientPortalIcon
  };
  return icons[iconName] || FileText;
};
