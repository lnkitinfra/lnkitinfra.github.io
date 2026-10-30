import { WhatsAppIcon } from './SocialIcons';

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/917796852335?text=Hello%20LNK%20IT%20Infra,%20I%20would%20like%20to%20inquire%20about%20office%20IT%20infrastructure%20and%20networking%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-btn"
      title="Chat with our IT Engineer on WhatsApp (+91 7796852335)"
      aria-label="Chat on WhatsApp (+91 7796852335)"
    >
      <div className="whatsapp-pulse"></div>
      <WhatsAppIcon size={28} />
      <span className="whatsapp-tooltip">Chat on WhatsApp: +91 7796852335</span>
    </a>
  );
}
