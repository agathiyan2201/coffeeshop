import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { PRODUCTS, SIZE_PRICE_DELTA, DELIVERY_TIME_MS } from '../data/products.js';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  // Navigation stack: last item is the visible screen
  const [stack, setStack] = useState(['onboarding']);

  // Order state
  const [productId, setProductId] = useState('mocha');
  const [size, setSize] = useState('M');
  const [qty, setQty] = useState(1);
  const [mode, setMode] = useState('deliver'); // 'deliver' | 'pickup'
  const [favorites, setFavorites] = useState(() => new Set());
  const [deliveryEta, setDeliveryEta] = useState(null);

  const [toast, setToast] = useState(null); // { id, text }

  const navigate = useCallback(
    (name) => setStack((s) => (s[s.length - 1] === name ? s : [...s, name])),
    []
  );
  const back = useCallback(() => setStack((s) => (s.length > 1 ? s.slice(0, -1) : s)), []);
  const reset = useCallback((name) => setStack([name]), []);

  const selectProduct = useCallback((id) => {
    setProductId(id);
    setSize('M');
    setQty(1);
  }, []);

  const toggleFavorite = useCallback((id) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const showToast = useCallback((text) => setToast({ id: Date.now(), text }), []);
  const hideToast = useCallback(() => setToast(null), []);

  const placeDeliveryOrder = useCallback(() => {
    setDeliveryEta(Date.now() + DELIVERY_TIME_MS);
    navigate('delivery');
  }, [navigate]);

  const value = useMemo(() => {
    const product = PRODUCTS.find((p) => p.id === productId);
    const unitPrice = Math.max(0, product.price + SIZE_PRICE_DELTA[size]);
    return {
      screen: stack[stack.length - 1],
      navigate,
      back,
      reset,
      product,
      unitPrice,
      selectProduct,
      size,
      setSize,
      qty,
      setQty,
      mode,
      setMode,
      favorites,
      toggleFavorite,
      deliveryEta,
      placeDeliveryOrder,
      toast,
      showToast,
      hideToast,
    };
  }, [stack, productId, size, qty, mode, favorites, deliveryEta, toast, navigate, back, reset, selectProduct, toggleFavorite, placeDeliveryOrder, showToast, hideToast]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside <AppProvider>');
  return ctx;
}
