import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div><Link className="footer-brand" to="/">NOVA STORE®</Link><p>Good things for your everyday.</p></div>
        <div><strong>Explore</strong><Link to="/products">Our collection</Link><Link to="/order">Place an order</Link><Link to="/about">Our story</Link></div>
        <div><strong>Say hello</strong><span>Al Hoceima, Morocco</span><a href="mailto:hello@nova.example">hello@nova.example</a><span>Mon–Fri · 09:00–17:00</span></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} NOVA STORE.</span><span>MolenGeek classroom demo · No real purchases</span></div>
    </footer>
  );
}
