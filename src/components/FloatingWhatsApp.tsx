import { WhatsAppIcon } from './SocialIcons';

export function FloatingWhatsApp() {
  return (
    <aside className="floating-whatsapp-container" aria-label="WhatsApp Quick Support">
      <a
        href="https://wa.me/917796852335?text=Hello%20LNK%20IT%20Infra!%20I%20would%20like%20to%20inquire%20about%20office%20IT%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-pill"
        title="Chat with IT Engineer on WhatsApp (+91 7796852335)"
        aria-label="Chat with IT Engineer on WhatsApp"
      >
        <span className="wa-dot-pulse"></span>
        <WhatsAppIcon size={22} />
        <span className="wa-pill-text">Chat on WhatsApp</span>
      </a>
    </aside>
  );
}
