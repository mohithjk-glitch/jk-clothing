import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';

export default function About() {
  useEffect(() => { document.title = 'About J&K'; }, []);

  return (
    <div>
      <section className="about-hero">
        <img src="https://i.pinimg.com/1200x/af/a2/e1/afa2e1bd2964e4d6c42d55aea927b0f4.jpg" alt="J&K studio" />
        <div className="about-hero-copy container">
          <span className="eyebrow" style={{ color: 'rgba(250,247,240,0.75)' }}>Our Story</span>
          <h1>Crafted for confidence.</h1>
        </div>
      </section>

      <section className="section container" style={{ maxWidth: 760, margin: '0 auto' }}>
        <Reveal>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 24, lineHeight: 1.5, textAlign: 'center' }}>
            J&amp;K began with a simple idea: everyday clothing shouldn't feel ordinary. We design pieces
            that move with you — through the workday, the weekend and everything between — without ever
            asking you to compromise on fabric, fit or finish.
          </p>
        </Reveal>
      </section>

      <section className="section-tight container">
        <div className="values-grid">
          <Reveal delay={0} className="value-card">
            <span className="eyebrow">Fabric</span>
            <h3>Material honesty</h3>
            <p>We choose cottons, crepes and knits for how they wear over years, not just how they photograph on day one.</p>
          </Reveal>
          <Reveal delay={100} className="value-card">
            <span className="eyebrow">Fit</span>
            <h3>Designed to move</h3>
            <p>Every silhouette is tested across body types before it earns a place in the J&amp;K collection.</p>
          </Reveal>
          <Reveal delay={200} className="value-card">
            <span className="eyebrow">Finish</span>
            <h3>Detail over noise</h3>
            <p>Clean seams, considered hardware and a quiet confidence — no logo shouts louder than the cut.</p>
          </Reveal>
        </div>
      </section>

      <section className="section container" style={{ textAlign: 'center' }}>
        <Reveal>
          <span className="eyebrow">Ready When You Are</span>
          <h2 style={{ marginTop: 12, fontSize: 'clamp(26px, 3.4vw, 40px)' }}>Discover the current collection.</h2>
          <div style={{ marginTop: 26 }}>
            <Link to="/shop" className="btn btn-primary">Shop J&amp;K</Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
