// A small set of hand-picked line icons so the project has zero icon-library
// dependency. Each accepts standard SVG props (className etc).

export const SearchIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
  </svg>
);

export const HeartIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
    <path
      d="M12 20.5s-7.5-4.6-10-9.3C0.4 8 1.7 4.3 5.2 3.4c2.2-.6 4.3.4 5.4 2.2l1.4 2.2 1.4-2.2c1.1-1.8 3.2-2.8 5.4-2.2 3.5.9 4.8 4.6 3.2 7.8-2.5 4.7-10 9.3-10 9.3z"
      strokeLinejoin="round"
    />
  </svg>
);

export const UserIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c1.6-3.6 5-5.5 8-5.5s6.4 1.9 8 5.5" strokeLinecap="round" />
  </svg>
);

export const BagIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
    <path d="M6 8h12l-1 12.5a1.5 1.5 0 0 1-1.5 1.5h-7a1.5 1.5 0 0 1-1.5-1.5L6 8z" strokeLinejoin="round" />
    <path d="M9 8V6a3 3 0 0 1 6 0v2" strokeLinecap="round" />
  </svg>
);

export const MenuIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
  </svg>
);

export const CloseIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
    <path d="M5 5l14 14M19 5L5 19" strokeLinecap="round" />
  </svg>
);

export const ChevronIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 32 32" fill="currentColor" {...props}>
    <path d="M16.001 3C9.11 3 3.4 8.71 3.4 15.6c0 2.36.66 4.66 1.9 6.66L3 29l6.94-2.24c1.9 1.03 4.03 1.58 6.06 1.58h.01c6.9 0 12.6-5.71 12.6-12.6C28.61 8.85 22.9 3 16.001 3zm0 22.9h-.01c-1.9 0-3.77-.5-5.4-1.46l-.39-.23-4.12 1.33 1.35-4.02-.25-.41a10.5 10.5 0 0 1-1.62-5.51c0-5.82 4.75-10.56 10.6-10.56 2.83 0 5.49 1.1 7.49 3.1a10.47 10.47 0 0 1 3.1 7.46c0 5.82-4.76 10.3-10.75 10.3zm5.8-7.72c-.32-.16-1.89-.93-2.18-1.04-.29-.1-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.34-.5-2.55-1.58-.94-.84-1.58-1.87-1.76-2.19-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.55-.08-.16-.72-1.74-.99-2.38-.26-.63-.53-.54-.72-.55h-.61c-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.63 0 1.55 1.13 3.05 1.29 3.26.16.21 2.22 3.39 5.38 4.76.75.32 1.34.52 1.8.66.76.24 1.44.21 1.99.13.61-.09 1.89-.77 2.15-1.52.27-.74.27-1.38.19-1.51-.08-.14-.29-.21-.61-.37z"/>
  </svg>
);

export const StarIcon = ({ fill = 'currentColor', ...props }) => (
  <svg viewBox="0 0 20 20" fill={fill} {...props}>
    <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L10 14.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.8L10 1.5z" />
  </svg>
);

export const CheckIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M5 12.5l4.5 4.5L19 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const TruckIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
    <path d="M2 7h11v9H2z" strokeLinejoin="round" />
    <path d="M13 10h4l3 3v3h-7z" strokeLinejoin="round" />
    <circle cx="6" cy="18" r="1.7" />
    <circle cx="17" cy="18" r="1.7" />
  </svg>
);

export const ShieldIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
    <path d="M12 2.5l8 3v6c0 5-3.4 8.8-8 10-4.6-1.2-8-5-8-10v-6l8-3z" strokeLinejoin="round" />
  </svg>
);

export const RefreshIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
    <path d="M4 12a8 8 0 0114-5.3M20 12a8 8 0 01-14 5.3" strokeLinecap="round" />
    <path d="M18 3v4h-4M6 21v-4h4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const TagIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
    <path d="M3 12.5L11.5 4H20v8.5L11.5 21 3 12.5z" strokeLinejoin="round" />
    <circle cx="15.5" cy="8.5" r="1.3" fill="currentColor" stroke="none" />
  </svg>
);
