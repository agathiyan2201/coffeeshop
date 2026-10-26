import { useEffect } from 'react';
import { useApp } from '../../context/AppContext.jsx';

/** Short message near the bottom of the phone. Hides itself after 2.6s. */
export default function Toast() {
  const { toast, hideToast } = useApp();

  useEffect(() => {
    if (!toast) return undefined;
    const id = setTimeout(hideToast, 2600);
    return () => clearTimeout(id);
  }, [toast, hideToast]);

  if (!toast) return null;

  return (
    <div
      key={toast.id}
      role="status"
      className="toast-in absolute bottom-[120px] left-1/2 z-50 max-w-[calc(100%-48px)] -translate-x-1/2 select-text rounded-xl bg-ink-2 px-4 py-2.5 text-center text-[13px] text-white"
    >
      {toast.text}
    </div>
  );
}
