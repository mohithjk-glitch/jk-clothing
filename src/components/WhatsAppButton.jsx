import { WhatsAppIcon } from './Icons.jsx';

const WHATSAPP_NUMBER = '919994012589';
const DEFAULT_MESSAGE = 'Hi J&K, I would like to know more about your products.';

export default function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Chat with J&K on WhatsApp"
    >
      <span className="wa-icon-wrap">
        <WhatsAppIcon />
      </span>
      <span className="wa-label">Chat with us</span>
    </a>
  );
}
