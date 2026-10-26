import Icon from '../ui/Icon.jsx';

const FEATURES = [
  { icon: 'bike', title: 'Fast delivery' },
  { icon: 'bean', title: 'Quality beans' },
  { icon: 'milk', title: 'Extra milk' },
];

export default function ProductInfo({ product }) {
  return (
    <div className="mt-4 flex items-end justify-between gap-3">
      <div>
        <h2 className="text-xl font-semibold text-ink">{product.name}</h2>
        <p className="mt-1 text-xs text-muted">Ice/Hot</p>
        <p className="mt-4 flex items-center gap-1 text-base">
          <Icon name="star" className="h-5 w-5 text-star" />
          <b className="font-semibold text-ink-2">{product.rating.toFixed(1)}</b>
          <span className="text-xs text-muted">({product.reviews})</span>
        </p>
      </div>

      <ul className="mb-1 flex gap-3" aria-label="Features">
        {FEATURES.map((f) => (
          <li
            key={f.icon}
            title={f.title}
            className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand"
          >
            <Icon name={f.icon} className="h-5 w-5" />
          </li>
        ))}
      </ul>
    </div>
  );
}
