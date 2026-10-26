import { AppProvider } from './context/AppContext.jsx';
import PhoneFrame from './components/layout/PhoneFrame.jsx';
import Toast from './components/layout/Toast.jsx';
import Onboarding from './screens/Onboarding.jsx';
import Home from './screens/Home.jsx';
import Detail from './screens/Detail.jsx';
import Order from './screens/Order.jsx';
import Delivery from './screens/Delivery.jsx';

export default function App() {
  return (
    <AppProvider>
      <PhoneFrame>
        <Onboarding />
        <Home />
        <Detail />
        <Order />
        <Delivery />
        <Toast />
      </PhoneFrame>
    </AppProvider>
  );
}
