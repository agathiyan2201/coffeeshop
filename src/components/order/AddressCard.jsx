import Icon from '../ui/Icon.jsx';

function Pill({ icon, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex h-[27px] items-center gap-1 rounded-2xl border border-muted px-3 text-xs text-ink-2"
    >
      <Icon name={icon} className="h-3.5 w-3.5" />
      {children}
    </button>
  );
}

export default function AddressCard({ address, editable, onEdit, onNote }) {
  return (
    <>
      <h3 className="section-title">{address.title}</h3>
      <p className="text-sm font-semibold text-ink-2">{address.name}</p>
      <p className="mt-1 text-xs text-muted">{address.line}</p>
      {editable && (
        <div className="mt-4 flex flex-wrap gap-2">
          <Pill icon="edit" onClick={onEdit}>
            Edit Address
          </Pill>
          <Pill icon="note" onClick={onNote}>
            Add Note
          </Pill>
        </div>
      )}
    </>
  );
}
