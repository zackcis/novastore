import { useSearchParams } from 'react-router-dom';
import OrderForm from '../components/OrderForm.jsx';
import { products } from '../data/products.js';
import '../styles/order.css';

export default function Order() {
  const [searchParams] = useSearchParams();
  const requestedId = Number(searchParams.get('product'));
  const selected = products.find((product) => product.id === requestedId && product.available);
  const selectedProductId = selected ? String(selected.id) : '';

  return (
    <section className="container section">
      <div className="page-intro"><p className="eyebrow">ONE STEP CLOSER</p><h1>Make it yours.</h1><p>Choose your essentials. We’ll take it from here.</p></div>
      <div className="order-layout">
        {/* key resets uncontrolled defaults if the URL's selected product changes. */}
        <OrderForm key={selectedProductId} products={products} selectedProductId={selectedProductId} />
        <aside className="order-aside"><p className="eyebrow">GOOD TO KNOW</p><h2>Simple from<br />start to finish.</h2><ol><li>Pick a product you love.</li><li>Enter your details and quantity.</li><li>Review the summary and confirm.</li></ol><div className="discount-note"><strong>A little thank you.</strong><p>10% off orders above 2,000 MAD. Your discount is calculated when you submit.</p></div><p className="demo-note">Classroom simulation. No payment is taken and no order or personal data is sent to a server.</p></aside>
      </div>
    </section>
  );
}
