import { WhatsAppIcon, InstagramIcon, YouTubeIcon, PhoneCallIcon } from './SocialIcons';

export function FloatingWhatsApp() {
  return (
    <aside className="floating-social-dock" aria-label="Quick Contact and Social Channels">
      {/* 1. Phone Call */}
      <a
        href="tel:+917796852335"
        className="dock-item dock-call"
        title="Call LNK IT Infra (+91 7796852335)"
        aria-label="Direct Call (+91 7796852335)"
      >
        <PhoneCallIcon size={19} />
        <span className="dock-tooltip">Call: +91 7796852335</span>
      </a>

      {/* 2. YouTube Channel */}
      <a
        href="https://www.youtube.com/@LNKITInfra"
        target="_blank"
        rel="noopener noreferrer"
        className="dock-item dock-youtube"
        title="Watch Project Demos on YouTube (@LNKITInfra)"
        aria-label="YouTube Channel (@LNKITInfra)"
      >
        <YouTubeIcon size={20} />
        <span className="dock-tooltip">YouTube: @LNKITInfra</span>
      </a>

      {/* 3. Instagram Profile */}
      <a
        href="https://www.instagram.com/lnk_it_infra/"
        target="_blank"
        rel="noopener noreferrer"
        className="dock-item dock-instagram"
        title="Follow On-Site Photos on Instagram (@lnk_it_infra)"
        aria-label="Instagram Profile (@lnk_it_infra)"
      >
        <InstagramIcon size={20} />
        <span className="dock-tooltip">Instagram: @lnk_it_infra</span>
      </a>

      {/* 4. WhatsApp (Primary Action with Pulse) */}
      <a
        href="https://wa.me/917796852335?text=Hello%20LNK%20IT%20Infra,%20I%20would%20like%20to%20inquire%20about%20office%20IT%20infrastructure%20and%20networking%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="dock-item dock-whatsapp"
        title="Chat with IT Engineer on WhatsApp (+91 7796852335)"
        aria-label="Chat on WhatsApp (+91 7796852335)"
      >
        <div className="whatsapp-pulse"></div>
        <WhatsAppIcon size={26} />
        <span className="dock-tooltip">WhatsApp: 7796852335</span>
      </a>
    </aside>
  );
}
