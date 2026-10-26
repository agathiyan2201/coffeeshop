import Icon from '../ui/Icon.jsx';
import { money } from '../../lib/format.js';

export default function ProductCard({ product, onOpen, onAdd }) {
  const handleKey = (e) => {
    if (e.target === e.currentTarget && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onOpen(product.id);
    }
  };

  return (
    <article
      role="button"
      tabIndex={0}
      aria-label={`${product.name}, ${money(product.price)}`}
      onClick={() => onOpen(product.id)}
      onKeyDown={handleKey}
      className="flex min-w-0 cursor-pointer flex-col rounded-2xl bg-white px-2 pb-3 pt-2 text-left transition hover:shadow-card active:scale-[.98]"
    >
      <div className="relative overflow-hidden rounded-xl">
        <img className="aspect-[140/128] w-full object-cover" src={product.image} alt="" loading="lazy" />
        <span className="absolute right-0 top-0 flex items-center gap-0.5 rounded-bl-3xl bg-[linear-gradient(90deg,rgba(17,17,17,.3),rgba(49,49,49,.3))] py-1.5 pl-2 pr-2.5 text-[8px] font-semibold text-white backdrop-blur-md">
          <Icon name="star" className="h-3 w-3 text-star" />
          {product.rating.toFixed(1)}
        </span>
      </div>

      <div className="min-w-0 px-1 pt-2">
        <h3 className="truncate text-base font-semibold text-ink">{product.name}</h3>
        <p className="mt-1 text-xs text-muted">{product.sub}</p>
      </div>

      <div className="mt-3 flex items-center justify-between px-1">
        <span className="text-lg font-semibold tabular-nums text-ink-2">{money(product.price)}</span>
        <button
          type="button"
          aria-label={`Add ${product.name} to order`}
          onClick={(e) => {
            e.stopPropagation();
            onAdd(product.id);
          }}
          className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-white active:scale-90"
        >
          <Icon name="plus" className="h-4 w-4" />
        </button>
      </div>
    </article>
  );
}
