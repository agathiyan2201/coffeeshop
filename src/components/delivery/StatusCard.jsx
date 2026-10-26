import Icon from '../ui/Icon.jsx';

export default function StatusCard({ title, text }) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-line px-3 py-2.5 text-left">
      <span className="grid h-14 w-14 flex-none place-items-center rounded-xl border border-line text-brand">
        <Icon name="bike" />
      </span>
      <div>
        <p className="text-sm font-semibold text-ink-2">{title}</p>
        <p className="mt-1 text-xs leading-normal text-muted">{text}</p>
      </div>
    </div>
  );
}
