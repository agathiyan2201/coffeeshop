export const money = (value) => `$ ${value.toFixed(2)}`;

// Join class names, skipping falsy values
export const cx = (...classes) => classes.filter(Boolean).join(' ');
