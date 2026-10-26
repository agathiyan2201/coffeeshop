import Icon from '../ui/Icon.jsx';
import { cx } from '../../lib/format.js';

const TABS = [
  { icon: 'home', label: 'Home' },
  { icon: 'heart', label: 'Favorites' },
  { icon: 'bag', label: 'Bag' },
  { icon: 'bell', label: 'Notifications' },
];

export default function TabBar({ active = 'Home', onSelect }) {
  return (
    <nav
      aria-label="Main"
      className="pb-safe-tab flex flex-none justify-around rounded-t-3xl bg-white px-6 pt-6 shadow-bar"
    >
      {TABS.map((tab) => {
        const isActive = tab.label === active;
        return (
          <button
            key={tab.label}
            type="button"
            aria-label={tab.label}
            aria-current={isActive ? 'page' : undefined}
            onClick={() => onSelect?.(tab.label)}
            className={cx('flex w-11 flex-col items-center gap-1.5', isActive ? 'text-brand' : 'text-muted')}
          >
            <Icon name={tab.icon} />
            <i className={cx('h-[5px] w-2.5 rounded-full', isActive ? 'bg-brand' : 'bg-transparent')} />
          </button>
        );
      })}
    </nav>
  );
}
