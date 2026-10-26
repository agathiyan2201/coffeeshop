import { useApp } from '../../context/AppContext.jsx';
import IconButton from '../ui/IconButton.jsx';

/** Back button, centered title and an optional action on the right */
export default function TopBar({ title, right }) {
  const { back } = useApp();
  return (
    <header className="flex flex-none items-center justify-between px-3.5 py-3">
      <IconButton icon="chevronLeft" label="Back" onClick={back} />
      <h1 className="text-base font-semibold text-ink">{title}</h1>
      {right ?? <span className="h-11 w-11" aria-hidden="true" />}
    </header>
  );
}
