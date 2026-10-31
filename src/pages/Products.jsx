import ProductList from '../components/ProductList.jsx';
import { products } from '../data/products.js';

export default function Products() {
  return (
    <section className="container section">
      <div className="page-intro"><p className="eyebrow">FIND YOUR EVERYDAY FAVOURITES</p><h1>The collection.</h1><p>Useful, considered, ready for the everyday.</p></div>
      <div className="collection-heading"><span>All essentials</span><span>{products.length} products</span></div>
      <ProductList products={products} />
    </section>
  );
}
