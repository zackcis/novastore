import { Link } from 'react-router-dom';
import ProductList from '../components/ProductList.jsx';
import { products } from '../data/products.js';
import '../styles/home.css';

export default function Home() {
  // filter selects featured products without changing the original array.
  const featuredProducts = products.filter((product) => product.bestSeller);

  return (
    <>
      <section className="container hero">
        <div className="hero-copy">
          <p className="eyebrow">THE EVERYDAY COLLECTION / 2026</p>
          <h1>Small upgrades.<br />Better <em>everydays.</em></h1>
          <p className="hero-description">A considered collection of things you’ll reach for again and again. Find your next everyday favourite.</p>
          <Link className="button button-primary button-large" to="/products">Explore the collection <span aria-hidden="true">↗</span></Link>
          <div className="hero-note"><span className="little-star" aria-hidden="true">✳</span><span>Selected with care.<br /><strong>Made for your everyday.</strong></span></div>
        </div>
        <div className="hero-art">
          <span className="hero-art-label">THE DAILY EDIT</span>
          <div className="hero-circle" />
          <img src="/images/headphones.svg" alt="Green Studio Headphones" width="600" height="480" />
          <div className="hero-product-label"><span>01 / Studio Headphones</span><strong>890 MAD</strong></div>
          <span className="hero-seal" aria-hidden="true">GOOD<br />BY DESIGN</span>
        </div>
      </section>
      <div className="values-strip"><div className="container"><span>01 · Thoughtfully selected</span><span>02 · Prices in MAD</span><span>03 · Simple ordering</span></div></div>
      <section className="container section">
        <div className="section-heading"><div><p className="eyebrow">THE CROWD FAVOURITES</p><h2>Meet your new essentials.</h2></div><Link className="text-link" to="/products">View all products ↗</Link></div>
        <ProductList products={featuredProducts} />
      </section>
      <section className="container home-banner"><div><p className="eyebrow">A LITTLE EXTRA</p><h2>More good things.<br />A little less to pay.</h2><p>Get 10% off when your order total is above 2,000 MAD.</p></div><Link className="button button-light" to="/order">Start your order ↗</Link></section>
    </>
  );
}
