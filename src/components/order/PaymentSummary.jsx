import { money } from '../../lib/format.js';

export default function PaymentSummary({ subtotal, deliveryFee, originalFee, showFee }) {
  return (
    <>
      <h3 className="section-title mt-6">Payment Summary</h3>
      <dl className="flex flex-col gap-2 pb-6 text-sm text-ink-2">
        <div className="flex justify-between">
          <dt>Price</dt>
          <dd className="font-semibold tabular-nums">{money(subtotal)}</dd>
        </div>
        {showFee && (
          <div className="flex justify-between">
            <dt>Delivery Fee</dt>
            <dd className="font-semibold tabular-nums">
              <s className="mr-2 font-normal">$ {originalFee.toFixed(1)}</s>$ {deliveryFee.toFixed(1)}
            </dd>
          </div>
        )}
      </dl>
    </>
  );
}
