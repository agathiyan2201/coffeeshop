// Images live in public/images and are served from the site root.
export const CATEGORIES = ['All Coffee', 'Machiato', 'Latte', 'Americano'];

export const PRODUCTS = [
  {
    id: 'mocha',
    name: 'Caffe Mocha',
    sub: 'Deep Foam',
    price: 4.53,
    rating: 4.8,
    reviews: 230,
    category: 'Machiato',
    image: 'images/caffe-mocha.jpg',
  },
  {
    id: 'flat-white',
    name: 'Flat White',
    sub: 'Espresso',
    price: 3.53,
    rating: 4.8,
    reviews: 192,
    category: 'Americano',
    image: 'images/flat-white.jpg',
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    sub: 'Steamed Milk',
    price: 4.2,
    rating: 4.6,
    reviews: 158,
    category: 'Machiato',
    image: 'images/cappuccino.jpg',
  },
  {
    id: 'latte',
    name: 'Caffe Latte',
    sub: 'Oat Milk',
    price: 3.99,
    rating: 4.9,
    reviews: 311,
    category: 'Latte',
    image: 'images/latte.jpg',
  },
];

export const DESCRIPTION =
  'A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk the foam that sits on top keeps the drink warm and gives it a velvety finish. Our baristas pour every cup by hand with beans roasted this week.';

export const SIZES = ['S', 'M', 'L'];
export const SIZE_PRICE_DELTA = { S: -0.5, M: 0, L: 0.5 };

export const DELIVERY_FEE = 1.0;
export const DELIVERY_FEE_ORIGINAL = 2.0;

export const ADDRESSES = {
  deliver: {
    title: 'Delivery Address',
    name: 'Jl. vadakadu',
    line: 'Alangudi,pudukottai.',
  },
  pickup: {
    title: 'Pick Up Store',
    name: 'k1 mangadu',
    line: 'Alangudi,pudukottai.',
  },
};

export const COURIER = {
  name: 'Brooklyn Simmons',
  role: 'Personal Courier',
  phone: '9843439799',
};

// Delivery tracking: courier arrives this long after the order is placed
export const DELIVERY_TIME_MS = 10 * 60 * 1000;
