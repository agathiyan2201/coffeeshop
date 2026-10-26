import Icon from './Icon.jsx';
import { cx } from '../../lib/format.js';

const VARIANTS = {
  ghost: 'text-ink',
  active: 'text-brand',
  map: 'bg-chip text-ink-2 shadow-float',
  outline: 'border border-line text-ink-2',
};

/** Square 44×44 icon button used in top bars, the map and the courier card */
export default function IconButton({ icon, label, variant = 'ghost', className, ...props }) {
  return (
    <button
      type="button"
      aria-label={label}
      className={cx('grid h-11 w-11 place-items-center rounded-xl', VARIANTS[variant], className)}
      {...props}
    >
      <Icon name={icon} />
    </button>
  );
}
