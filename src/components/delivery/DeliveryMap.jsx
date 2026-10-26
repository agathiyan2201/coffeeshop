import { BIKE_PATHS } from '../ui/Icon.jsx';

const W = 375;
const H = 540;

// Courier route in map coordinates: [customer, ..., courier start]
const ROUTE = [
  [66, 214],
  [92, 214],
  [92, 160],
  [196, 150],
  [196, 136],
  [290, 132],
  [290, 300],
];

const STREET_LABELS = [
  { x: 110, y: 34, text: '96th St' },
  { x: 110, y: 132, text: '95th St' },
  { x: 342, y: 88, text: '2nd Ave' },
  { x: 100, y: 236, text: '86th Street' },
  { x: 342, y: 296, text: '3rd Ave' },
  { x: 205, y: 404, text: '86th Street' },
  { x: 160, y: 290, text: 'Nirmala' },
  { x: 160, y: 300, text: 'Girls HSS' },
  { x: 302, y: 360, text: 'Jawaharlal Nehru Road', rotate: 90 },
  { x: 24, y: 420, text: 'Kamarajar Salai', rotate: -90 },
];

// City blocks are generated once at module load
const BLOCKS = (() => {
  const cols = [0, 38, 92, 150, 196, 248, 290, 336, 375];
  const rows = [0, 40, 94, 136, 190, 240, 300, 352, 410, 470, 540];
  const out = [];
  for (let r = 0; r < rows.length - 1; r++) {
    for (let c = 0; c < cols.length - 1; c++) {
      const x = cols[c] + 6;
      const y = rows[r] + 6;
      const w = cols[c + 1] - cols[c] - 12;
      const h = rows[r + 1] - rows[r] - 12;
      if ((r + c) % 3 === 0 && w > 30) {
        const half = w / 2 - 3;
        out.push({ x, y, w: half, h }, { x: x + half + 6, y, w: half, h });
      } else {
        out.push({ x, y, w, h });
      }
    }
  }
  return out;
})();

const ROUTE_POINTS = ROUTE.map((p) => p.join(',')).join(' ');

/** Point on the route. progress 0 = courier start, 1 = at the customer. */
export function pointOnRoute(progress) {
  const segments = [];
  let total = 0;
  for (let i = ROUTE.length - 1; i > 0; i--) {
    const [x1, y1] = ROUTE[i];
    const [x2, y2] = ROUTE[i - 1];
    const length = Math.hypot(x2 - x1, y2 - y1);
    segments.push({ x1, y1, x2, y2, length });
    total += length;
  }
  let distance = Math.min(Math.max(progress, 0), 1) * total;
  for (const s of segments) {
    if (distance <= s.length) {
      const k = distance / s.length;
      return [s.x1 + (s.x2 - s.x1) * k, s.y1 + (s.y2 - s.y1) * k];
    }
    distance -= s.length;
  }
  return ROUTE[0];
}

export default function DeliveryMap({ progress = 0 }) {
  const [cx, cy] = pointOnRoute(progress);

  return (
    <div className="absolute inset-x-0 top-0 h-[66%] overflow-hidden" aria-hidden="true">
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice" className="block h-full w-full">
        <rect width={W} height={H} fill="#FFFFFF" />
        <g fill="#E9E9E9">
          {BLOCKS.map((b, i) => (
            <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h} rx="2" />
          ))}
        </g>
        <rect x="282" y="0" width="16" height={H} fill="#FFFFFF" />

        <g fontFamily="Sora, sans-serif" fontSize="8" fill="#8A8A8A">
          {STREET_LABELS.map((l) => (
            <text key={`${l.text}-${l.y}`} x={l.x} y={l.y} transform={`rotate(${l.rotate ?? 0} ${l.x} ${l.y})`}>
              {l.text}
            </text>
          ))}
        </g>

        <polyline points={ROUTE_POINTS} fill="none" stroke="#C67C4E" strokeWidth="3" strokeLinejoin="round" />

        {/* Customer pin */}
        <g transform="translate(66 214)">
          <path d="M0-16a7 7 0 0 1 7 7c0 5-7 11-7 11s-7-6-7-11a7 7 0 0 1 7-7z" fill="#C67C4E" />
          <circle cy="-9" r="2.6" fill="#fff" />
        </g>

        {/* Courier */}
        <g
          transform={`translate(${cx.toFixed(1)} ${cy.toFixed(1)})`}
          style={{ transition: 'transform 1s linear' }}
        >
          <circle r="16" fill="#fff" stroke="#EDEDED" />
          <g
            transform="translate(-8 -8) scale(.66)"
            fill="none"
            stroke="#C67C4E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {BIKE_PATHS}
          </g>
        </g>
      </svg>
    </div>
  );
}
