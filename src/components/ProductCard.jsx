import { formatPrice } from '../utils/formatPrice.js';
import '../styles/products.css';

// Props contain product data AND the function defined in the parent ProductList.
export default function ProductCard({ product, onBuy }) {
  function viewDetails() {
    alert(`Product: ${product.name}\nPrice: ${formatPrice(product.price)}\nCategory: ${product.category}\nStock: ${product.quantity}`);
  }

  return (
    <article className={`product-card ${product.available ? 'is-available' : 'is-unavailable'}`}>
      <div className="product-image">
        <img src={product.image} alt={product.name} width="400" height="320" />
        {/* && displays the badge only when bestSeller is true. */}
        {product.bestSeller && <span className="badge">Best seller</span>}
      </div>
      <div className="product-info">
        <div className="product-meta"><span>{product.category}</span><span className={product.available ? 'stock in-stock' : 'stock out-of-stock'}>
          {/* Ternary: exactly one of these messages is displayed. */}
          {product.quantity === 0 ? 'Out of stock' : 'In stock'}
        </span></div>
        <h3>{product.name}</h3>
        <p className="product-price">{formatPrice(product.price)}</p>
        <div className="product-actions">
          {/* Pass a function, without (). React calls it when clicked. */}
          <button className="button button-outline" type="button" onClick={viewDetails}>View details</button>
          {/* The wrapper delays onBuy(product) until the click and supplies its argument. */}
          <button className="button button-primary" type="button" disabled={!product.available} onClick={() => onBuy(product)}>
            {product.available ? 'Buy now ↗' : 'Unavailable'}
          </button>
        </div>
      </div>
    </article>
  );
}
