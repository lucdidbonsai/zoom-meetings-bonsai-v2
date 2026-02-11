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

export const MoreVertical = ({ className = "w-4 h-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
  </svg>
);

export const Filter = ({ className = "w-4 h-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
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

export const X = ({ className = "w-4 h-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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

// Invoice icon
export const InvoiceIcon = ({ className = "w-4 h-4", ...props }) => (
  <svg className={className} width="29" height="32" viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M17.6731 13.3455C17.6731 13.9738 17.4603 14.5179 17.0347 14.9776C16.6091 15.4335 16.0469 15.7324 15.348 15.8741V17.2419H13.4973V15.8052C12.8452 15.6213 12.32 15.2822 11.9218 14.788C11.5274 14.2899 11.3303 13.7114 11.3303 13.0524H13.3333C13.3333 13.3627 13.4465 13.6118 13.673 13.7995C13.8994 13.9834 14.1942 14.0753 14.5573 14.0753C14.897 14.0753 15.1664 14.0102 15.3656 13.8799C15.5686 13.7459 15.6701 13.5677 15.6701 13.3455C15.6701 13.219 15.6213 13.1099 15.5237 13.0179C15.4261 12.9221 15.2953 12.8436 15.1313 12.7823C14.9673 12.721 14.7779 12.6635 14.5632 12.6099C14.3484 12.5562 14.122 12.4988 13.8838 12.4375C13.6495 12.3762 13.4153 12.3072 13.181 12.2306C12.9467 12.1501 12.7222 12.0467 12.5075 11.9202C12.2927 11.7938 12.1033 11.6482 11.9394 11.4835C11.7754 11.3149 11.6446 11.1022 11.547 10.8456C11.4493 10.5889 11.4005 10.2996 11.4005 9.97776C11.4005 9.38391 11.5919 8.8686 11.9745 8.43183C12.361 7.99506 12.8686 7.70579 13.4973 7.56404V6.17902H15.348V7.58702C16.0274 7.7556 16.5408 8.08892 16.8883 8.58699C17.2358 9.08506 17.4096 9.65785 17.4096 10.3053H15.3128C15.3207 10.0257 15.2289 9.79577 15.0376 9.6157C14.8502 9.43563 14.5925 9.34559 14.2645 9.34559C13.9873 9.34559 13.7706 9.40115 13.6144 9.51226C13.4582 9.61953 13.3801 9.77087 13.3801 9.96627C13.3801 10.0889 13.4289 10.1942 13.5265 10.2823C13.6242 10.3666 13.755 10.4375 13.9189 10.495C14.0868 10.5525 14.2782 10.6061 14.4929 10.6559C14.7077 10.7057 14.9322 10.7613 15.1664 10.8226C15.4046 10.8839 15.6428 10.9547 15.881 11.0352C16.1191 11.1118 16.3456 11.2153 16.5603 11.3455C16.7751 11.4758 16.9645 11.6271 17.1284 11.7995C17.2963 11.9681 17.4291 12.1846 17.5267 12.449C17.6243 12.7133 17.6731 13.0122 17.6731 13.3455Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M9.43026 0.949219C7.10764 0.949219 5.22478 2.83208 5.22478 5.1547V9.4871C3.64238 9.71399 2.37329 10.506 1.48508 11.6853C0.455141 13.0527 0 14.8504 0 16.7014V24.1547C0 28.0226 2.63954 31.4371 6.76296 31.4268H22.237C26.3605 31.4371 29 28.0226 29 24.1547V16.7014C29 14.8799 28.6057 13.0871 27.6312 11.7137C26.7488 10.4702 25.4463 9.65438 23.7784 9.46331V5.1547C23.7784 2.83208 21.8955 0.949219 19.5729 0.949219H9.43026ZM23.7784 11.9638V14.1335L25.3596 12.8302C24.9663 12.4022 24.4544 12.0945 23.7784 11.9638ZM26.3995 15.1789L17.9049 22.1803C17.8972 22.1866 17.8894 22.1929 17.8816 22.199C16.2781 23.4567 14.025 23.4618 12.4162 22.2143L2.63117 15.1116C2.52852 15.5978 2.47382 16.1305 2.47382 16.7014V24.1547C2.47382 26.9517 4.28209 28.9599 6.75819 28.953L6.76162 28.953H22.2384L22.2418 28.953C24.7179 28.9599 26.5262 26.9517 26.5262 24.1547V16.7014C26.5262 16.155 26.4825 15.6454 26.3995 15.1789ZM3.73296 12.8545L5.22478 13.9374V12.0033C4.61194 12.1535 4.12227 12.4515 3.73296 12.8545ZM21.3111 16.1671C21.3068 16.1251 21.3046 16.0826 21.3046 16.0395V5.1547C21.3046 4.19833 20.5293 3.42303 19.5729 3.42303H9.43026C8.47389 3.42303 7.69859 4.19833 7.69859 5.1547V15.7331L13.8866 20.2248L13.9048 20.2382L13.9233 20.2525C14.6335 20.8095 15.6315 20.8122 16.3445 20.2606L21.3111 16.1671Z" fill="currentColor"/>
  </svg>
);

// Contract icon
export const ContractIcon = ({ className = "w-4 h-4", ...props }) => (
  <svg className={className} width="28" height="31" viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M19.6917 0.75C21.9979 0.75 23.9818 1.51185 25.3877 2.96294C26.789 4.40919 27.5 6.41967 27.5 8.70385V22.0854C27.5 24.3589 26.7941 26.3603 25.4044 27.8042C24.0101 29.2529 22.042 30.0207 19.7532 30.0348L19.7455 30.0349L8.55788 30.0392C8.5578 30.0392 8.55737 30.0392 8.55689 28.7892L8.55788 30.0392C6.25159 30.0392 4.26702 29.2774 2.8614 27.8261C1.46052 26.3798 0.75 24.3694 0.75 22.0854V8.70385C0.75 6.43056 1.45539 4.4294 2.84482 2.98577C4.23889 1.53732 6.20672 0.769941 8.49535 0.755844L8.50305 0.755797L19.6917 0.75C19.6917 0.75 19.691 0.75 19.6917 2V0.75ZM19.6917 3.25C21.4363 3.25007 22.7319 3.81457 23.5923 4.70257C24.4574 5.59547 25 6.93692 25 8.70385V22.0854C25 23.8426 24.4617 25.1786 23.6032 26.0706C22.7499 26.9572 21.4668 27.5235 19.7411 27.5349C19.74 27.5349 19.7389 27.5349 19.7378 27.5349L8.55691 27.5392C6.81208 27.5392 5.51718 26.9747 4.65715 26.0868C3.79236 25.194 3.25 23.8525 3.25 22.0854V8.70385C3.25 6.9464 3.78804 5.61091 4.64608 4.7194C5.49892 3.83328 6.7815 3.26717 8.50737 3.25582L19.6917 3.25ZM7.65625 9.43656C7.65625 8.7462 8.21589 8.18656 8.90625 8.18656H12.9152C13.6055 8.18656 14.1652 8.7462 14.1652 9.43656C14.1652 10.1269 13.6055 10.6866 12.9152 10.6866H8.90625C8.21589 10.6866 7.65625 10.1269 7.65625 9.43656ZM7.65625 15.5137C7.65625 14.8233 8.21589 14.2637 8.90625 14.2637H19.4124C20.1028 14.2637 20.6624 14.8233 20.6624 15.5137C20.6624 16.204 20.1028 16.7637 19.4124 16.7637H8.90625C8.21589 16.7637 7.65625 16.204 7.65625 15.5137ZM7.65625 21.6065C7.65625 20.9161 8.21589 20.3565 8.90625 20.3565H19.4124C20.1028 20.3565 20.6624 20.9161 20.6624 21.6065C20.6624 22.2968 20.1028 22.8565 19.4124 22.8565H8.90625C8.21589 22.8565 7.65625 22.2968 7.65625 21.6065Z" fill="currentColor"/>
  </svg>
);

// Proposal icon
export const ProposalIcon = ({ className = "w-4 h-4", ...props }) => (
  <svg className={className} width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M20.7278 2.70149C20.8079 2.43098 20.5585 2.19961 20.3116 2.27197L2.49928 7.48831C2.22156 7.56953 2.16281 7.95246 2.41618 8.11111C2.41622 8.11114 2.41626 8.11117 2.4163 8.11119L9.15335 12.325L15.1148 6.29982C15.5528 5.85721 16.2666 5.85342 16.7092 6.29135C17.1518 6.72928 17.1556 7.44309 16.7177 7.8857L10.7425 13.9246L14.8482 20.5843C14.8483 20.5844 14.8483 20.5845 14.8484 20.5846C14.8484 20.5846 14.8484 20.5847 14.8485 20.5847C15.0012 20.8315 15.3734 20.787 15.4584 20.5003L20.7278 2.70155L20.7278 2.70149ZM8.49211 14.5709L12.9294 21.7684C14.1091 23.6802 16.9832 23.2895 17.6202 21.1413L22.8898 3.34168C22.8898 3.34166 22.8898 3.34165 22.8898 3.34163C23.4711 1.37842 21.6572 -0.471877 19.6776 0.108136C19.6775 0.10816 19.6775 0.108184 19.6774 0.108207L1.8664 5.32417M8.49211 14.5709L1.22051 10.0228L1.22038 10.0227C-0.67572 8.83641 -0.287437 5.95438 1.86599 5.32429" fill="currentColor"/>
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
    'invoice': InvoiceIcon,
    'contract': ContractIcon,
    'proposal': ProposalIcon,
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
