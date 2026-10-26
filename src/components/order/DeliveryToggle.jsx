import { cx } from '../../lib/format.js';

const OPTIONS = [
  { value: 'deliver', label: 'Deliver' },
  { value: 'pickup', label: 'Pick Up' },
];

export default function DeliveryToggle({ value, onChange }) {
  return (
    <div role="tablist" aria-label="Delivery method" className="mb-6 mt-3 grid grid-cols-2 gap-2 rounded-xl bg-chip p-1">
      {OPTIONS.map((opt) => {
        const selected = opt.value === value;
        return (
          <button
            key={opt.value}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(opt.value)}
            className={cx(
              'h-10 rounded-lg text-base transition-colors',
              selected ? 'bg-brand font-semibold text-white' : 'text-ink-2'
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
