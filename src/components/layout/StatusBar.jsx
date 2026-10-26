import { cx } from '../../lib/format.js';

/** iOS status bar "9:41". Shown only inside the desktop frame. */
export default function StatusBar({ light = false, overlay = false }) {
  return (
    <div
      aria-hidden="true"
      className={cx('statusbar', light && 'statusbar--light', overlay && '!absolute inset-x-0 top-0')}
    />
  );
}
