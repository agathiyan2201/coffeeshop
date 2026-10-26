import { useApp } from '../context/AppContext.jsx';
import { DESCRIPTION, SIZES } from '../data/products.js';
import Screen, { ScrollArea } from '../components/layout/Screen.jsx';
import StatusBar from '../components/layout/StatusBar.jsx';
import TopBar from '../components/layout/TopBar.jsx';
import HomeIndicator from '../components/layout/HomeIndicator.jsx';
import IconButton from '../components/ui/IconButton.jsx';
import ProductInfo from '../components/detail/ProductInfo.jsx';
import Description from '../components/detail/Description.jsx';
import SizeSelector from '../components/detail/SizeSelector.jsx';
import BuyBar from '../components/detail/BuyBar.jsx';

export default function Detail() {
  const { product, size, setSize, unitPrice, setQty, favorites, toggleFavorite, navigate, showToast } = useApp();
  const isFavorite = favorites.has(product.id);

  const handleFavorite = () => {
    toggleFavorite(product.id);
    showToast(isFavorite ? 'Removed from favorites' : 'Added to favorites');
  };

  const handleBuy = () => {
    setQty(1);
    navigate('order');
  };

  return (
    <Screen name="detail" label="Coffee detail">
      <StatusBar />
      <TopBar
        title="Detail"
        right={
          <IconButton
            icon={isFavorite ? 'heartFill' : 'heart'}
            label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            aria-pressed={isFavorite}
            variant={isFavorite ? 'active' : 'ghost'}
            onClick={handleFavorite}
          />
        }
      />

      <ScrollArea className="px-6 pb-6">
        <img
          src={product.image}
          alt={product.name}
          className="aspect-[327/202] w-full rounded-2xl object-cover"
        />
        <ProductInfo product={product} />
        <hr className="my-4 border-line" />
        <Description key={product.id} text={DESCRIPTION} />
        <SizeSelector sizes={SIZES} value={size} onChange={setSize} />
      </ScrollArea>

      <BuyBar price={unitPrice} onBuy={handleBuy} />
      <HomeIndicator />
    </Screen>
  );
}
