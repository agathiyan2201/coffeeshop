import Icon from '../ui/Icon.jsx';

function StepButton({ icon, label, disabled, onClick }) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="grid h-7 w-7 place-items-center rounded-full bg-white text-ink-2 ring-1 ring-inset ring-line disabled:text-muted"
    >
      <Icon name={icon} className="h-4 w-4" />
    </button>
  );
}

export default function QuantityStepper({ value, min = 1, max = 20, onChange }) {
  return (
    <div className="flex items-center gap-[18px]">
      <StepButton
        icon="minus"
        label="Decrease quantity"
        disabled={value <= min}
        onClick={() => onChange(Math.max(min, value - 1))}
      />
      <output className="min-w-2 text-center text-sm font-semibold tabular-nums">{value}</output>
      <StepButton
        icon="plus"
        label="Increase quantity"
        disabled={value >= max}
        onClick={() => onChange(Math.min(max, value + 1))}
      />
    </div>
  );
}
