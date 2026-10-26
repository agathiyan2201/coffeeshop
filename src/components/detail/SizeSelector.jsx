import { cx } from '../../lib/format.js';

export default function SizeSelector({ sizes, value, onChange }) {
  return (
    <>
      <h3 className="section-title">Size</h3>
      <div role="radiogroup" aria-label="Size" className="grid grid-cols-3 gap-4">
        {sizes.map((size) => {
          const selected = size === value;
          return (
            <button
              key={size}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => onChange(size)}
              className={cx(
                'h-[41px] rounded-xl border text-sm transition-colors',
                selected ? 'border-brand bg-brand-soft text-brand' : 'border-line-2 bg-white text-ink'
              )}
            >
              {size}
            </button>
          );
        })}
      </div>
    </>
  );
}
