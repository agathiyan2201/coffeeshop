import { useApp } from '../context/AppContext.jsx';
import { ADDRESSES, DELIVERY_FEE, DELIVERY_FEE_ORIGINAL } from '../data/products.js';
import Screen, { ScrollArea } from '../components/layout/Screen.jsx';
import StatusBar from '../components/layout/StatusBar.jsx';
import TopBar from '../components/layout/TopBar.jsx';
import HomeIndicator from '../components/layout/HomeIndicator.jsx';
import DeliveryToggle from '../components/order/DeliveryToggle.jsx';
import AddressCard from '../components/order/AddressCard.jsx';
import OrderItem from '../components/order/OrderItem.jsx';
import DiscountRow from '../components/order/DiscountRow.jsx';
import PaymentSummary from '../components/order/PaymentSummary.jsx';
import PaymentBar from '../components/order/PaymentBar.jsx';

export default function Order() {
  const { product, size, qty, setQty, unitPrice, mode, setMode, placeDeliveryOrder, showToast } = useApp();

  const isDelivery = mode === 'deliver';
  const subtotal = unitPrice * qty;
  const total = subtotal + (isDelivery ? DELIVERY_FEE : 0);

  const handleOrder = () => {
    if (isDelivery) placeDeliveryOrder();
    else showToast(`Order placed. Pick it up at ${ADDRESSES.pickup.name}`);
  };

  return (
    <Screen name="order" label="Order">
      <StatusBar />
      <TopBar title="Order" />

      <ScrollArea>
        <div className="px-6">
          <DeliveryToggle value={mode} onChange={setMode} />
          <AddressCard
            address={ADDRESSES[mode]}
            editable={isDelivery}
            onEdit={() => showToast('Address editing is coming soon')}
            onNote={() => showToast('Note added to your order')}
          />
          <hr className="mx-3 my-5 border-line" />
          <OrderItem product={product} size={size} qty={qty} onQtyChange={setQty} />
        </div>

        <div className="mb-5 h-1 bg-brand-soft" aria-hidden="true" />

        <div className="px-6">
          <DiscountRow
            label="1 Discount is Applies"
            onClick={() => showToast('Delivery fee discount: $ 2.0 → $ 1.0')}
          />
          <PaymentSummary
            subtotal={subtotal}
            deliveryFee={DELIVERY_FEE}
            originalFee={DELIVERY_FEE_ORIGINAL}
            showFee={isDelivery}
          />
        </div>
      </ScrollArea>

      <PaymentBar
        total={total}
        buttonLabel={isDelivery ? 'Order' : 'Order for Pick Up'}
        onPaymentClick={() => showToast('Paying with Cash/Wallet')}
        onOrder={handleOrder}
      />
      <HomeIndicator />
    </Screen>
  );
}
