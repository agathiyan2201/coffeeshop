import { useEffect, useRef } from 'react';
import { useApp } from '../../context/AppContext.jsx';
import { cx } from '../../lib/format.js';

/**
 * All screens stay mounted and slide/fade in when active,
 * so the transition matches the prototype in Figma.
 */
export default function Screen({ name, label, className, children }) {
  const { screen } = useApp();
  const active = screen === name;
  const ref = useRef(null);

  // Reset scroll position each time the screen opens
  useEffect(() => {
    if (active) ref.current?.querySelector('[data-scroll]')?.scrollTo(0, 0);
  }, [active]);

  return (
    <section
      ref={ref}
      className={cx('screen', active && 'is-active', className)}
      aria-label={label}
      aria-hidden={!active}
      inert={!active}
    >
      {children}
    </section>
  );
}

/** Scrollable middle area of a screen */
export function ScrollArea({ className, children }) {
  return (
    <div data-scroll className={cx('no-scrollbar flex-1 overflow-y-auto overflow-x-hidden', className)}>
      {children}
    </div>
  );
}
