import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="container not-found"><p className="eyebrow">A LITTLE OFF THE BEATEN PATH</p><p className="error-number">404</p><h1>This page wandered off.</h1><p>Let’s get you back to the good things.</p><Link className="button button-primary" to="/">Back to home ↗</Link></section>
  );
}
