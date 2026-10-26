import { cx } from '../../lib/format.js';

/** iPhone home bar at the bottom. Shown only inside the desktop frame. */
export default function HomeIndicator({ light = false }) {
  return <div aria-hidden="true" className={cx('home-indicator', light && '!bg-white')} />;
}
