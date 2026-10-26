import { cx } from '../../lib/format.js';

export default function CategoryChips({ categories, active, onChange }) {
  return (
    <nav
      aria-label="Coffee categories"
      className="no-scrollbar -mx-6 mb-4 mt-6 flex gap-4 overflow-x-auto px-6"
    >
      {categories.map((name) => {
        const isActive = name === active;
        return (
          <button
            key={name}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(name)}
            className={cx(
              'h-[29px] flex-none rounded-md px-2 text-sm transition-colors',
              isActive ? 'bg-brand font-semibold text-white' : 'bg-chip text-ink-2'
            )}
          >
            {name}
          </button>
        );
      })}
    </nav>
  );
}
