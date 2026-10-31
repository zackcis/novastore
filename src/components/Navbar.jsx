import { Link, NavLink } from 'react-router-dom';
import '../styles/layout.css';

export default function Navbar() {
  return (
    <>
      <div className="announcement">Thoughtful essentials. Everyday possibilities.</div>
      <header className="site-header">
        <div className="container navbar">
          <Link className="brand" to="/" aria-label="NOVA STORE home">NOVA<span>®</span><small>STORE</small></Link>
          <nav aria-label="Main navigation">
            {/* NavLink adds an active class automatically; end matches / exactly. */}
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/order" className="nav-order">Place an order <span aria-hidden="true">↗</span></NavLink>
          </nav>
        </div>
      </header>
    </>
  );
}
