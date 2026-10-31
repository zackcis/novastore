import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section className="container section">
      <div className="page-intro"><p className="eyebrow">LESS, BUT BETTER</p><h1>Everyday, considered.</h1><p>A small collection. A simple idea.</p></div>
      <div className="about-layout"><div className="about-visual"><img src="/images/backpack.svg" alt="Our Everyday Backpack" width="400" height="320" /><span>For wherever the day takes you.</span></div><div className="about-copy"><h2>Good things should<br />fit into real life.</h2><p>NOVA STORE brings together useful essentials for work, home and the moments in between. We believe in a smaller, more thoughtful collection that makes choosing easier.</p><p>Based in Al Hoceima, Morocco, this fictional store is a MolenGeek React classroom project. Its products, prices and contact information are demonstration data.</p><Link to="/products" className="button button-primary">Find your essentials ↗</Link></div></div>
    </section>
  );
}
