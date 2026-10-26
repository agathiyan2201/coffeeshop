import { useEffect, useState } from 'react';

/**
 * Milliseconds left until `target`. Ticks every second while `running` is true.
 */
export function useCountdown(target, running) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    if (!running || !target) return undefined;
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, [target, running]);

  return target ? Math.max(0, target - now) : null;
}
