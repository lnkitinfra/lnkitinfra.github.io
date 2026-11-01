import {
  Phone,
  Mail,
  MapPin,
  Clock
} from 'lucide-react';
import { WhatsAppIcon, YouTubeIcon, InstagramIcon } from './SocialIcons';

interface FooterProps {
  navigate: (route: string) => void;
}

export function Footer({ navigate }: FooterProps) {
  const handleNavClick = (route: string) => {
    navigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="main-footer">
      <div className="container footer-grid">
        {/* Col 1: Brand & Contacts */}
        <div className="footer-col brand-col">
          <a
            href="#/"
            className="footer-logo-link"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            title="LNK IT Infra - Connect | Secure | Grow Together"
          >
            <div className="footer-logo-card">
              <img
                src="/images/logo.png"
                alt="LNK IT Infra - Connect | Secure | Grow Together"
                className="footer-logo-img"
              />
            </div>
          </a>
          <p className="footer-about">
            LNK IT Infra delivers enterprise IT solutions exclusively across Pune & PCMC. We supply genuine hardware products (Sophos, Fortinet, SonicWall, Syntel), architect 8 core turnkey solutions, and provide 7 lifecycle IT services with rapid 1-hour emergency support.
          </p>
          <div className="footer-contacts">
            <div className="fc-item">
              <Phone size={14} className="text-cyan" />
              <a href="tel:+917796852335" className="footer-contact-link">Direct: +91 7796852335</a>
            </div>
            <div className="fc-item">
              <Mail size={14} className="text-cyan" />
              <a href="mailto:lnkitinfra@gmail.com" className="footer-contact-link">lnkitinfra@gmail.com</a>
            </div>
            <div className="fc-item">
              <Clock size={14} className="text-cyan" />
              <span>Support Desk: Mon - Sat, 9:00 AM - 8:00 PM (24/7 for AMC)</span>
            </div>
            <div className="fc-item">
              <MapPin size={14} className="text-cyan" />
              <span>Service Coverage: Pune & PCMC Only (HQ: Magarpatta City — 411028)</span>
            </div>
          </div>

          <div className="footer-social-row">
            <a
              href="https://wa.me/917796852335?text=Hello%20LNK%20IT%20Infra!%20I%20would%20like%20to%20inquire%20about%20office%20IT%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn whatsapp"
              title="Chat with LNK IT Infra on WhatsApp"
            >
              <WhatsAppIcon size={15} />
              <span>WhatsApp</span>
            </a>
            <a
              href="https://www.youtube.com/@LNKITInfra"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn youtube"
              title="Watch LNK IT Infra on YouTube"
            >
              <YouTubeIcon size={15} />
              <span>YouTube</span>
            </a>
            <a
              href="https://www.instagram.com/lnk_it_infra/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn instagram"
              title="Follow LNK IT Infra on Instagram"
            >
              <InstagramIcon size={15} />
              <span>Instagram</span>
            </a>
          </div>
        </div>

        {/* Col 2: SOLUTIONS (8 Items) */}
        <div className="footer-col">
          <h4 className="footer-heading">Solutions Suite (8)</h4>
          <ul className="footer-links">
            <li><a href="#/solutions#server-storage" onClick={(e) => { e.preventDefault(); handleNavClick('solutions#server-storage'); }}>1. Server & Storage Solutions</a></li>
            <li><a href="#/solutions#it-security" onClick={(e) => { e.preventDefault(); handleNavClick('solutions#it-security'); }}>2. IT Security Solutions</a></li>
            <li><a href="#/solutions#networking" onClick={(e) => { e.preventDefault(); handleNavClick('solutions#networking'); }}>3. Networking Solutions</a></li>
            <li><a href="#/solutions#structured-cabling" onClick={(e) => { e.preventDefault(); handleNavClick('solutions#structured-cabling'); }}>4. Structured Cabling</a></li>
            <li><a href="#/solutions#server-backup" onClick={(e) => { e.preventDefault(); handleNavClick('solutions#server-backup'); }}>5. Server & Backup Solutions</a></li>
            <li><a href="#/solutions#cctv-solutions" onClick={(e) => { e.preventDefault(); handleNavClick('solutions#cctv-solutions'); }}>6. CCTV Solutions</a></li>
            <li><a href="#/solutions#biometric-attendance" onClick={(e) => { e.preventDefault(); handleNavClick('solutions#biometric-attendance'); }}>7. Biometric Attendance Solutions</a></li>
            <li><a href="#/solutions#door-access" onClick={(e) => { e.preventDefault(); handleNavClick('solutions#door-access'); }}>8. Door Access Solutions</a></li>
          </ul>
        </div>

        {/* Col 3: PRODUCTS & SERVICES */}
        <div className="footer-col">
          <h4 className="footer-heading">Products & Services</h4>
          <div className="footer-sub-heading">Authorized Products</div>
          <ul className="footer-links mb-3">
            <li><a href="#/products?brand=sophos" onClick={(e) => { e.preventDefault(); handleNavClick('products?brand=sophos'); }}>SOPHOS (Firewalls & AP6)</a></li>
            <li><a href="#/products?brand=fortinet" onClick={(e) => { e.preventDefault(); handleNavClick('products?brand=fortinet'); }}>FORTINET (FortiGate & SD-WAN)</a></li>
            <li><a href="#/products?brand=sonicwall" onClick={(e) => { e.preventDefault(); handleNavClick('products?brand=sonicwall'); }}>SONICWALL (Multi-Gig Firewalls)</a></li>
            <li><a href="#/products?brand=syntel" onClick={(e) => { e.preventDefault(); handleNavClick('products?brand=syntel'); }}>SYNTEL (EPABX & Intercom)</a></li>
          </ul>

          <div className="footer-sub-heading">Core IT Services</div>
          <ul className="footer-links">
            <li><a href="#/amc" onClick={(e) => { e.preventDefault(); handleNavClick('amc'); }}>Annual Maintenance Contract (AMC)</a></li>
            <li><a href="#/services#it-audit" onClick={(e) => { e.preventDefault(); handleNavClick('services#it-audit'); }}>IT Health Checkup & Auditing</a></li>
            <li><a href="#/services#software-licensing" onClick={(e) => { e.preventDefault(); handleNavClick('services#software-licensing'); }}>Software Licensing (M365 & Tally)</a></li>
            <li><a href="#/services#remote-onsite-support" onClick={(e) => { e.preventDefault(); handleNavClick('services#remote-onsite-support'); }}>Remote & Onsite Desktop Support</a></li>
          </ul>
        </div>

        {/* Col 4: Company & Pune Helpdesk */}
        <div className="footer-col">
          <h4 className="footer-heading">Company & Helpdesk</h4>
          <ul className="footer-links">
            <li><a href="#/about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About LNK IT Infra</a></li>
            <li><a href="#/our-clients" onClick={(e) => { e.preventDefault(); handleNavClick('our-clients'); }}>Our Clients & Case Studies</a></li>
            <li><a href="#/contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Pune Head Office (Magarpatta)</a></li>
            <li><a href="#/contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Request BoQ / Site Audit</a></li>
            <li><a href="#/contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Book Free On-Site Inspection</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="container footer-bottom-inner">
          <div className="copyright-text">
            © 2026 LNK IT Infra Pvt. Ltd. All Rights Reserved. Enterprise IT Products, Solutions & Services in Pune & PCMC.
          </div>
          <div className="footer-cert-tags">
            <span>Official Hardware Partners</span>
            <span>•</span>
            <span>8 Turnkey Solutions</span>
            <span>•</span>
            <span>7 Core IT Services</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
