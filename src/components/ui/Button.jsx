import { cx } from '../../lib/format.js';

/** Brand primary button: "Get Started", "Buy Now", "Order" */
export default function Button({ className, children, ...props }) {
  return (
    <button type="button" className={cx('btn-primary', className)} {...props}>
      {children}
    </button>
  );
}
