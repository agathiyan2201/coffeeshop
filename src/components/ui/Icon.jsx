// Line icon set matching the Figma "Icons 2.0" style (24×24, currentColor)
const HEART = (
  <path d="M12 20s-7.5-4.6-9.2-9.2C1.6 7.3 4 4 7.3 4c2 0 3.6 1.1 4.7 2.7C13.1 5.1 14.7 4 16.7 4 20 4 22.4 7.3 21.2 10.8 19.5 15.4 12 20 12 20z" />
);

export const BIKE_PATHS = (
  <>
    <circle cx="6" cy="17" r="2.5" />
    <circle cx="18" cy="17" r="2.5" />
    <path d="M8.5 17h7M14 17l-2-6h-3M15 7h2l2.5 7.5" />
    <rect x="3" y="7" width="6" height="5" rx="1" />
  </>
);

const ICONS = {
  chevronDown: { d: <path d="m6 9 6 6 6-6" /> },
  chevronLeft: { d: <path d="m15 18-6-6 6-6" /> },
  chevronRight: { d: <path d="m9 18 6-6-6-6" /> },
  search: {
    d: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </>
    ),
  },
  filter: {
    d: (
      <>
        <path d="M4 7h9M17 7h3M4 17h3M11 17h9" />
        <circle cx="15" cy="7" r="2" />
        <circle cx="9" cy="17" r="2" />
      </>
    ),
  },
  plus: { d: <path d="M12 5v14M5 12h14" />, width: 2 },
  minus: { d: <path d="M5 12h14" />, width: 2 },
  star: {
    solid: true,
    d: <path d="m12 2.8 2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z" />,
  },
  heart: { d: HEART },
  heartFill: { d: HEART, solid: true },
  home: { d: <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z" /> },
  bag: {
    d: (
      <>
        <path d="M5 8h14l-1 12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z" />
        <path d="M9 8V6a3 3 0 0 1 6 0v2" />
      </>
    ),
  },
  bell: {
    d: (
      <>
        <path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z" />
        <path d="M10 20.5a2 2 0 0 0 4 0" />
      </>
    ),
  },
  bike: { d: BIKE_PATHS },
  bean: {
    d: (
      <>
        <ellipse cx="12" cy="12" rx="6" ry="8.5" transform="rotate(35 12 12)" />
        <path d="M9 6.5c3 2.5 1 6.5 4 11" />
      </>
    ),
  },
  milk: {
    d: (
      <>
        <path d="M8 3h8v3l2 3v11a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9l2-3z" />
        <path d="M6 12h12" />
      </>
    ),
  },
  edit: {
    d: (
      <>
        <path d="M4 20h4L19 9l-4-4L4 16z" />
        <path d="m13 7 4 4" />
      </>
    ),
  },
  note: {
    d: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 8h6M9 12h6M9 16h3" />
      </>
    ),
  },
  discount: {
    d: (
      <>
        <path d="M12 2.5 14.6 4.6l3.3-.3.9 3.2 2.8 1.8-1.3 3 1.3 3-2.8 1.8-.9 3.2-3.3-.3L12 21.5 9.4 19.4l-3.3.3-.9-3.2-2.8-1.8 1.3-3-1.3-3 2.8-1.8.9-3.2 3.3.3z" />
        <path d="m9.5 14.5 5-5" />
        <circle cx="9.5" cy="9.5" r=".6" fill="currentColor" />
        <circle cx="14.5" cy="14.5" r=".6" fill="currentColor" />
      </>
    ),
  },
  wallet: {
    d: (
      <>
        <rect x="3" y="6" width="18" height="14" rx="3" />
        <path d="M3 10h18M16 15h1.5" />
        <path d="M6 6l9-3 1 3" />
      </>
    ),
  },
  target: {
    d: (
      <>
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
      </>
    ),
  },
  phone: {
    d: (
      <>
        <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
        <path d="M15 3.5a6 6 0 0 1 5.5 5.5M15 7a2.5 2.5 0 0 1 2 2" />
      </>
    ),
  },
};

/**
 * <Icon name="search" className="h-5 w-5" />
 */
export default function Icon({ name, className = 'h-6 w-6' }) {
  const icon = ICONS[name];
  if (!icon) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
      fill={icon.solid ? 'currentColor' : 'none'}
      stroke={icon.solid ? 'none' : 'currentColor'}
      strokeWidth={icon.width ?? 1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icon.d}
    </svg>
  );
}
