import Button from '../ui/Button.jsx';
import { money } from '../../lib/format.js';

export default function BuyBar({ price, onBuy }) {
  return (
    <footer className="pb-safe flex flex-none items-center gap-[34px] rounded-t-2xl bg-white px-6 pt-4">
      <div className="flex flex-none flex-col gap-1">
        <span className="text-sm text-muted-2">Price</span>
        <b className="text-lg font-semibold tabular-nums text-brand">{money(price)}</b>
      </div>
      <Button className="min-w-0 flex-1" onClick={onBuy}>
        Buy Now
      </Button>
    </footer>
  );
}
