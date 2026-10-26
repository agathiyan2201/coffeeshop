import QuantityStepper from './QuantityStepper.jsx';

export default function OrderItem({ product, size, qty, onQtyChange }) {
  return (
    <div className="flex items-center gap-4 pb-5">
      <img className="h-[54px] w-[54px] flex-none rounded-lg object-cover" src={product.image} alt={product.name} />
      <div className="min-w-0 flex-1">
        <p className="text-base font-semibold text-ink-2">{product.name}</p>
        <p className="mt-1 text-xs text-muted">
          {product.sub} · {size}
        </p>
      </div>
      <QuantityStepper value={qty} onChange={onQtyChange} />
    </div>
  );
}
