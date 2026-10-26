import Icon from '../ui/Icon.jsx';
import Button from '../ui/Button.jsx';
import { money } from '../../lib/format.js';

export default function PaymentBar({ total, buttonLabel, onPaymentClick, onOrder }) {
  return (
    <footer className="pb-safe flex flex-none flex-col gap-2 rounded-t-2xl bg-white px-6 pt-4 shadow-bar">
      <button type="button" onClick={onPaymentClick} className="flex items-center gap-4 pb-2 text-left text-ink-2">
        <Icon name="wallet" className="h-5 w-5 text-brand" />
        <span className="flex flex-1 flex-col gap-0.5">
          <b className="text-sm font-semibold">Cash/Wallet</b>
          <span className="text-xs font-semibold tabular-nums text-brand">{money(total)}</span>
        </span>
        <Icon name="chevronDown" className="h-5 w-5" />
      </button>
      <Button className="w-full" onClick={onOrder}>
        {buttonLabel}
      </Button>
    </footer>
  );
}
