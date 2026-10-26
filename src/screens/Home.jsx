import { useMemo, useState } from 'react';
import { useApp } from '../context/AppContext.jsx';
import { CATEGORIES, PRODUCTS } from '../data/products.js';
import Screen, { ScrollArea } from '../components/layout/Screen.jsx';
import HomeIndicator from '../components/layout/HomeIndicator.jsx';
import HomeHeader from '../components/home/HomeHeader.jsx';
import PromoBanner from '../components/home/PromoBanner.jsx';
import CategoryChips from '../components/home/CategoryChips.jsx';
import ProductCard from '../components/home/ProductCard.jsx';
import TabBar from '../components/home/TabBar.jsx';

export default function Home() {
  const { navigate, selectProduct, showToast } = useApp();
  const [category, setCategory] = useState('All Coffee');
  const [query, setQuery] = useState('');

  const products = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter(
      (p) =>
        (category === 'All Coffee' || p.category === category) &&
        (!q || `${p.name} ${p.sub}`.toLowerCase().includes(q))
    );
  }, [category, query]);

  const openDetail = (id) => {
    selectProduct(id);
    navigate('detail');
  };

  const addToOrder = (id) => {
    selectProduct(id);
    navigate('order');
  };

  return (
    <Screen name="home" label="Home">
      <ScrollArea>
        <HomeHeader
          query={query}
          onQueryChange={setQuery}
          onLocation={() => showToast('Delivering to Bilzen, Tanjungbalai')}
          onFilter={() => showToast('Filters: sort by price, rating or size (coming soon)')}
        />

        <div className="-mt-[68px] px-6 pb-6">
          <PromoBanner />
          <CategoryChips categories={CATEGORIES} active={category} onChange={setCategory} />

          {products.length > 0 ? (
            <div className="grid grid-cols-2 gap-x-[15px] gap-y-4">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} onOpen={openDetail} onAdd={addToOrder} />
              ))}
            </div>
          ) : (
            <p className="py-8 text-center text-sm text-muted">No coffee matches your search.</p>
          )}
        </div>
      </ScrollArea>

      <TabBar active="Home" onSelect={(tab) => tab === 'Bag' && navigate('order')} />
      <HomeIndicator />
    </Screen>
  );
}
