import IconButton from '../ui/IconButton.jsx';

// Placeholder avatar until the courier photo is exported from Figma.
// To use a real photo: put it in public/images and pass `photo="images/courier.jpg"`.
function AvatarIllustration() {
  return (
    <svg viewBox="0 0 54 54" className="block h-full w-full">
      <rect width="54" height="54" fill="#5B7A8C" />
      <circle cx="27" cy="22" r="10" fill="#E9B98F" />
      <path d="M17 20c0-8 5-12 10-12s10 4 10 12c-2-4-5-5-10-5s-8 1-10 5z" fill="#2B2B2B" />
      <path d="M8 54c2-11 10-16 19-16s17 5 19 16z" fill="#E8E1D6" />
      <path d="M21 27c1 5 3 7 6 7s5-2 6-7c-1 3-3 4-6 4s-5-1-6-4z" fill="#2B2B2B" />
    </svg>
  );
}

export default function CourierCard({ courier, photo, onCall }) {
  return (
    <div className="mt-5 flex items-center gap-5 text-left">
      <div className="h-14 w-14 flex-none overflow-hidden rounded-[14px]">
        {photo ? (
          <img src={photo} alt={courier.name} className="h-full w-full object-cover" />
        ) : (
          <AvatarIllustration />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-ink-2">{courier.name}</p>
        <p className="mt-1 text-xs text-muted">{courier.role}</p>
      </div>
      <IconButton icon="phone" label="Show courier phone number" variant="outline" onClick={onCall} />
    </div>
  );
}
