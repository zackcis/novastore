import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard.jsx';

export default function ProductList({ products }) {
  // A router hook performs navigation; no useState or useEffect is needed.
  const navigate = useNavigate();

  function handleBuy(product) {
    // Defensive check: unavailable products must not be ordered.
    if (!product.available) {
      alert('This product is out of stock.');
      return;
    }
    alert(`You selected: ${product.name}\nComplete the order form to continue.`);
    // A query parameter carries the selected product to the order page.
    navigate(`/order?product=${product.id}`);
  }

  return (
    <div className="products-grid">
      {/* map returns one card per object. Stable IDs make good React keys. */}
      {products.map((product) => <ProductCard key={product.id} product={product} onBuy={handleBuy} />)}
    </div>
  );
}
