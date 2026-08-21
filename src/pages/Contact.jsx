import { useEffect, useState } from 'react';
import { useToast } from '../components/Toast.jsx';
import { WhatsAppIcon } from '../components/Icons.jsx';

function ContactIcon({ children }) {
  return <span className="cii-icon">{children}</span>;
}

export default function Contact() {
  const showToast = useToast();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => { document.title = 'Contact J&K'; }, []);

  function onChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    setSent(true);
    showToast('Message sent — we will get back to you soon');
    setForm({ name: '', email: '', phone: '', message: '' });
  }

  return (
    <div className="container section-tight">
      <div className="page-banner" style={{ paddingTop: 0 }}>
        <span className="eyebrow">J&amp;K</span>
        <h1>Get in Touch</h1>
        <p>Questions about an order, sizing, or a collection? We're here to help.</p>
      </div>

      <div className="contact-layout" style={{ marginTop: 40 }}>
        <div>
          <div className="contact-info-item">
            <ContactIcon>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="18" height="18">
                <path d="M4 5c0 8.3 6.7 15 15 15l2-4-5-2-2 2c-2-1-4-3-5-5l2-2-2-5-4 1z" strokeLinejoin="round" />
              </svg>
            </ContactIcon>
            <div>
              <h5>Phone</h5>
              <a href="tel:9994012589">9994012589</a>
            </div>
          </div>
          <div className="contact-info-item">
            <ContactIcon>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="18" height="18">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 6l9 7 9-7" />
              </svg>
            </ContactIcon>
            <div>
              <h5>Email</h5>
              <a href="mailto:mohithjk.2031@gmail.com">mohithjk.2031@gmail.com</a>
            </div>
          </div>
          <div className="contact-info-item">
            <ContactIcon>
              <WhatsAppIcon width="18" height="18" />
            </ContactIcon>
            <div>
              <h5>WhatsApp</h5>
              <a
                href="https://wa.me/919994012589?text=Hi%20J%26K%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products."
                target="_blank"
                rel="noreferrer"
              >
                Chat with us
              </a>
            </div>
          </div>

          <div style={{ marginTop: 28 }}>
            <a
              href="https://wa.me/919994012589?text=Hi%20J%26K%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products."
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Chat with us on WhatsApp
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit}>
          <div className="field">
            <label htmlFor="c-name">Name</label>
            <input id="c-name" name="name" required value={form.name} onChange={onChange} />
          </div>
          <div className="field" style={{ marginTop: 16 }}>
            <label htmlFor="c-email">Email</label>
            <input id="c-email" type="email" name="email" required value={form.email} onChange={onChange} />
          </div>
          <div className="field" style={{ marginTop: 16 }}>
            <label htmlFor="c-phone">Phone</label>
            <input id="c-phone" name="phone" value={form.phone} onChange={onChange} />
          </div>
          <div className="field" style={{ marginTop: 16 }}>
            <label htmlFor="c-message">Message</label>
            <textarea id="c-message" name="message" rows="5" required value={form.message} onChange={onChange} />
          </div>
          <button className="btn btn-primary btn-block" style={{ marginTop: 20 }} type="submit">
            Send Message
          </button>
          {sent && <p className="summary-note" style={{ marginTop: 12 }}>Thanks — we've received your message.</p>}
        </form>
      </div>
    </div>
  );
}
