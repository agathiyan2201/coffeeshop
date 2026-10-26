# Coffee Shop App (React)

Mobile app UI built from the Figma design (Onboarding, Home, Detail, Order, Delivery) with **React 19**, **Vite** and **Tailwind CSS 3**.

## Run

Requires **Node.js 18 or newer** (`node -v` to check).

```bash
cd coffee-shop-react      # the folder that contains package.json
npm install
npm run dev               # opens http://localhost:5173
```

Production build:

```bash
npm run build             # output goes to dist/
npm run preview           # serve the built files
```

For the mobile view, open DevTools (F12) and turn on the device toolbar (e.g. iPhone 12 Pro). On screens 480px wide or less the app fills the whole screen; on desktop it shows inside a 375×812 phone frame.

## Project structure

```
coffee-shop-react/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js          Figma colors, Sora font, "phone" breakpoint
├── postcss.config.js
├── public/images/              coffee photos
└── src/
    ├── main.jsx                React entry
    ├── App.jsx                 phone frame + all screens
    ├── index.css               @tailwind directives + custom components
    ├── context/
    │   └── AppContext.jsx      navigation, selected coffee, size, qty, toast
    ├── hooks/
    │   └── useCountdown.js     delivery timer
    ├── data/
    │   └── products.js         products, sizes, prices, addresses, courier
    ├── lib/
    │   └── format.js           money() and cx() helpers
    ├── screens/
    │   ├── Onboarding.jsx
    │   ├── Home.jsx
    │   ├── Detail.jsx
    │   ├── Order.jsx
    │   └── Delivery.jsx
    └── components/
        ├── ui/          Icon, Button, IconButton
        ├── layout/      PhoneFrame, Screen, StatusBar, TopBar, HomeIndicator, Toast
        ├── home/        HomeHeader, SearchBar, PromoBanner, CategoryChips, ProductCard, TabBar
        ├── detail/      ProductInfo, Description, SizeSelector, BuyBar
        ├── order/       DeliveryToggle, AddressCard, OrderItem, QuantityStepper,
        │                DiscountRow, PaymentSummary, PaymentBar
        └── delivery/    DeliveryMap, DeliveryProgress, StatusCard, CourierCard
```

## How it fits together

- `AppContext` holds shared state. Any component reads it with `const { product, navigate } = useApp();`
- Navigation: `navigate('detail')`, `back()`, `reset('home')`. Screen names: `onboarding`, `home`, `detail`, `order`, `delivery`.
- Every screen is wrapped in `<Screen name="...">`, which slides it in when it becomes active.
- To add a coffee, add an object to `PRODUCTS` in `src/data/products.js` and put its photo in `public/images/`.
- Courier photo: put it in `public/images/` and pass `photo="images/courier.jpg"` to `<CourierCard>` in `Delivery.jsx`.

## Design tokens (Tailwind classes)

| Token | Value | Example class |
|---|---|---|
| `brand` | #C67C4E | `bg-brand`, `text-brand` |
| `brand-soft` | #F9F2ED | `bg-brand-soft` |
| `ink` / `ink-2` | #242424 / #313131 | `text-ink-2` |
| `muted` | #A2A2A2 | `text-muted` |
| `line` | #E3E3E3 | `border-line` |
| `surface` | #F9F9F9 | `bg-surface` |

## Common npm errors

| Error | Fix |
|---|---|
| `ENOENT ... package.json` | Run the command inside the `coffee-shop-react` folder, not its parent. |
| `'vite' is not recognized` | Run `npm install` first. |
| `EADDRINUSE :5173` | Port is busy. Run `npm run dev -- --port 3000`. |
| `ERESOLVE unable to resolve dependency tree` | Delete `node_modules` and `package-lock.json`, then `npm install` again. |
| `ECONNRESET` / `ETIMEDOUT` / certificate errors | Network or proxy problem. Run `npm config set registry https://registry.npmjs.org/` and try again. |
| Styles missing | Make sure `src/main.jsx` still has `import './index.css'`. |
