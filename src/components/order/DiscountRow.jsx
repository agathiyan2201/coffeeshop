import Icon from '../ui/Icon.jsx';

export default function DiscountRow({ label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-14 w-full items-center gap-4 rounded-2xl border border-line bg-white pl-5 pr-4 text-left text-ink-2"
    >
      <Icon name="discount" className="h-5 w-5 text-brand" />
      <span className="flex-1 text-sm font-semibold">{label}</span>
      <Icon name="chevronRight" className="h-5 w-5" />
    </button>
  );
}
