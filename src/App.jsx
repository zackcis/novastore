import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Order from './pages/Order.jsx';
import About from './pages/About.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      {/* Outside Routes: these two components appear on every page. */}
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        {/* Routes chooses the page whose path matches the browser URL. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/order" element={<Order />} />
          <Route path="/about" element={<About />} />
          {/* The wildcard catches URLs that do not match another route. */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
