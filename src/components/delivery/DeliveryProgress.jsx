import { cx } from '../../lib/format.js';

/** Four-step progress bar (green = done) */
export default function DeliveryProgress({ steps = 4, done }) {
  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={steps}
      aria-valuenow={done}
      className="my-5 grid grid-cols-4 gap-2.5"
    >
      {Array.from({ length: steps }, (_, i) => (
        <i
          key={i}
          className={cx('h-1 rounded transition-colors duration-500', i < done ? 'bg-success' : 'bg-rail')}
        />
      ))}
    </div>
  );
}
