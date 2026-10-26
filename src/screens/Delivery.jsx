import { useApp } from '../context/AppContext.jsx';
import { useCountdown } from '../hooks/useCountdown.js';
import { ADDRESSES, COURIER, DELIVERY_TIME_MS } from '../data/products.js';
import Screen from '../components/layout/Screen.jsx';
import StatusBar from '../components/layout/StatusBar.jsx';
import HomeIndicator from '../components/layout/HomeIndicator.jsx';
import IconButton from '../components/ui/IconButton.jsx';
import DeliveryMap from '../components/delivery/DeliveryMap.jsx';
import DeliveryProgress from '../components/delivery/DeliveryProgress.jsx';
import StatusCard from '../components/delivery/StatusCard.jsx';
import CourierCard from '../components/delivery/CourierCard.jsx';

export default function Delivery() {
  const { screen, back, deliveryEta, showToast } = useApp();
  const msLeft = useCountdown(deliveryEta, screen === 'delivery') ?? DELIVERY_TIME_MS;

  const arrived = msLeft === 0;
  const minutes = Math.ceil(msLeft / 60000);
  const progress = 1 - msLeft / DELIVERY_TIME_MS;

  return (
    <Screen name="delivery" label="Delivery tracking" className="bg-[#EFEFEF]">
      <DeliveryMap progress={progress} />
      <StatusBar />

      <div className="relative z-[2] flex justify-between px-6 py-3">
        <IconButton icon="chevronLeft" label="Back" variant="map" onClick={back} />
        <IconButton
          icon="target"
          label="Center map"
          variant="map"
          onClick={() => showToast('Map centered on your courier')}
        />
      </div>

      <div className="pb-safe absolute inset-x-0 bottom-0 z-[2] rounded-t-3xl bg-white px-6 pt-3 text-center shadow-sheet">
        <span className="mx-auto mb-4 block h-[5px] w-[45px] rounded-2xl bg-line" aria-hidden="true" />
        <h2 className="text-base font-semibold text-ink-2">
          {arrived ? 'Your coffee has arrived' : `${minutes} minute${minutes === 1 ? '' : 's'} left`}
        </h2>
        <p className="mt-1 text-xs text-muted">
          Delivery to <b className="font-semibold text-ink-2">{ADDRESSES.deliver.name}</b>
        </p>

        <DeliveryProgress done={arrived ? 4 : 3} />

        <StatusCard
          title={arrived ? 'Order delivered' : 'Delivered your order'}
          text="We will deliver your goods to you in the shortes possible time."
        />

        <CourierCard courier={COURIER} onCall={() => showToast(`${COURIER.name}: ${COURIER.phone}`)} />
      </div>

      <HomeIndicator />
    </Screen>
  );
}
