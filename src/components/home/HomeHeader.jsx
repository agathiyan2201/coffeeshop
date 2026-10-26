import Icon from '../ui/Icon.jsx';
import StatusBar from '../layout/StatusBar.jsx';
import SearchBar from './SearchBar.jsx';

/** Dark header with location and search */
export default function HomeHeader({ query, onQueryChange, onLocation, onFilter }) {
  return (
    <header className="bg-[linear-gradient(200deg,#313131_0%,#111111_100%)] pb-[92px]">
      <StatusBar light />
      <div className="px-6 pt-6">
        <p className="text-xs text-muted">Location</p>
        <button
          type="button"
          onClick={onLocation}
          className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[#D8D8D8]"
        >
          Bilzen, Tanjungbalai <Icon name="chevronDown" className="h-3.5 w-3.5" />
        </button>
        <SearchBar value={query} onChange={onQueryChange} onFilter={onFilter} />
      </div>
    </header>
  );
}
