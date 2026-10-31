// One source of product data, shared by the home, products and order pages.
// These images live in public/, so their URLs start with /images/.
// quantity means STOCK quantity; order quantity is entered in the form.
export const products = [
  { id: 1, name: 'Studio Headphones', price: 890, category: 'Electronics', image: '/images/headphones.svg', quantity: 8, bestSeller: true },
  { id: 2, name: 'Everyday Backpack', price: 349, category: 'Lifestyle', image: '/images/backpack.svg', quantity: 12, bestSeller: true },
  { id: 3, name: 'City Sneakers', price: 559, category: 'Fashion', image: '/images/sneakers.svg', quantity: 0, bestSeller: false },
  { id: 4, name: 'Insulated Bottle', price: 199, category: 'Lifestyle', image: '/images/bottle.svg', quantity: 20, bestSeller: false },
  { id: 5, name: 'Mechanical Keyboard', price: 790, category: 'Electronics', image: '/images/keyboard.svg', quantity: 5, bestSeller: false },
  { id: 6, name: 'Arc Desk Lamp', price: 420, category: 'Home', image: '/images/lamp.svg', quantity: 4, bestSeller: false },
].map((product) => ({
  ...product,
  // Derive the boolean from stock so available and quantity never disagree.
  available: product.quantity > 0,
}));
