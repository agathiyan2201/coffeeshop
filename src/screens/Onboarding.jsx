import { useApp } from '../context/AppContext.jsx';
import Screen from '../components/layout/Screen.jsx';
import StatusBar from '../components/layout/StatusBar.jsx';
import HomeIndicator from '../components/layout/HomeIndicator.jsx';
import Button from '../components/ui/Button.jsx';

export default function Onboarding() {
  const { reset } = useApp();

  return (
    <Screen name="onboarding" label="Welcome" className="bg-black">
      <StatusBar light overlay />
      <img
        src="images/onboarding.jpg"
        alt="Coffee beans falling into a white cup"
        className="absolute inset-x-0 top-0 h-[72%] w-full object-cover object-[center_30%]"
      />

      <div className="pb-safe absolute inset-x-0 bottom-0 bg-[linear-gradient(to_bottom,transparent_0,#000_38%)] px-6 pt-[120px] text-center text-white">
        <h1 className="text-balance text-[32px] font-semibold leading-[1.5] tracking-[.01em]">
          Fall in Love with Coffee in Blissful Delight!
        </h1>
        <p className="mx-auto mb-8 mt-2 max-w-[327px] text-sm leading-normal text-muted">
          Welcome to our cozy coffee corner, where every cup is a delightful for you.
        </p>
        <Button className="w-full" onClick={() => reset('home')}>
          Get Started
        </Button>
      </div>

      <HomeIndicator light />
    </Screen>
  );
}
