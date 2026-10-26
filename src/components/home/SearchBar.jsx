import Icon from '../ui/Icon.jsx';

export default function SearchBar({ value, onChange, onFilter }) {
  return (
    <div className="mt-6 flex gap-4">
      <label
        htmlFor="search"
        className="flex h-[52px] min-w-0 flex-1 items-center gap-2 rounded-xl bg-search px-4 text-white focus-within:ring-1 focus-within:ring-brand"
      >
        <Icon name="search" className="h-5 w-5" />
        <input
          id="search"
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search coffee"
          autoComplete="off"
          className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-muted"
        />
      </label>
      <button
        type="button"
        aria-label="Filter"
        onClick={onFilter}
        className="grid h-[52px] w-[52px] flex-none place-items-center rounded-xl bg-brand text-white"
      >
        <Icon name="filter" className="h-5 w-5" />
      </button>
    </div>
  );
}
