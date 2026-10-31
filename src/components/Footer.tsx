import {
  Phone,
  Mail,
  MapPin,
  Clock
} from 'lucide-react';

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
            LNK IT Infra provides end-to-end office IT infrastructure and technical support solutions exclusively in Pune & PCMC, including structured network cabling, high-density Wi-Fi 6, cyber security firewalls, CCTV security, biometric door locks, EPABX intercoms, and comprehensive Annual Maintenance Contracts (IT AMC).
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
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Services & Solutions</h4>
          <ul className="footer-links">
            <li><a href="#/solutions" onClick={(e) => { e.preventDefault(); handleNavClick('solutions'); }}>Turnkey Enterprise Solutions</a></li>
            <li><a href="#/services/cabling" onClick={(e) => { e.preventDefault(); handleNavClick('services/cabling'); }}>Structured Network Cabling</a></li>
            <li><a href="#/services/server-installation" onClick={(e) => { e.preventDefault(); handleNavClick('services/server-installation'); }}>Server Installation & RAID Setup</a></li>
            <li><a href="#/services/desktop-support" onClick={(e) => { e.preventDefault(); handleNavClick('services/desktop-support'); }}>Desktop Support & Helpdesk</a></li>
            <li><a href="#/services/mail-domain-migration" onClick={(e) => { e.preventDefault(); handleNavClick('services/mail-domain-migration'); }}>Email & Domain Migration (M365)</a></li>
            <li><a href="#/services/application-support" onClick={(e) => { e.preventDefault(); handleNavClick('services/application-support'); }}>Application & Tally ERP Support</a></li>
            <li><a href="#/services/wifi" onClick={(e) => { e.preventDefault(); handleNavClick('services/wifi'); }}>Commercial Office Wi-Fi 6</a></li>
            <li><a href="#/services/firewall" onClick={(e) => { e.preventDefault(); handleNavClick('services/firewall'); }}>Next-Gen Firewalls & VPN</a></li>
            <li><a href="#/services/cctv" onClick={(e) => { e.preventDefault(); handleNavClick('services/cctv'); }}>CCTV Security Surveillance</a></li>
            <li><a href="#/services/biometrics" onClick={(e) => { e.preventDefault(); handleNavClick('services/biometrics'); }}>Biometrics & Door Access</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Hardware Products & Rentals</h4>
          <ul className="footer-links">
            <li><a href="#/products" onClick={(e) => { e.preventDefault(); handleNavClick('products'); }}>All Hardware Products</a></li>
            <li><a href="#/products" onClick={(e) => { e.preventDefault(); handleNavClick('products'); }}>Corporate Laptops on Rent</a></li>
            <li><a href="#/products" onClick={(e) => { e.preventDefault(); handleNavClick('products'); }}>Dell PowerEdge & HPE Servers</a></li>
            <li><a href="#/products" onClick={(e) => { e.preventDefault(); handleNavClick('products'); }}>Commercial Monitors & Desktops</a></li>
            <li><a href="#/products" onClick={(e) => { e.preventDefault(); handleNavClick('products'); }}>Logitech & Dell Keyboards/Mouse</a></li>
            <li><a href="#/products" onClick={(e) => { e.preventDefault(); handleNavClick('products'); }}>Cat6 LSZH Cables & Patch Panels</a></li>
            <li><a href="#/products" onClick={(e) => { e.preventDefault(); handleNavClick('products'); }}>Sophos XGS Firewalls & AP6</a></li>
            <li><a href="#/products" onClick={(e) => { e.preventDefault(); handleNavClick('products'); }}>HPE Aruba & Cisco Switches</a></li>
            <li><a href="#/products" onClick={(e) => { e.preventDefault(); handleNavClick('products'); }}>Hikvision 4K IP Security Cameras</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Company & Contact</h4>
          <ul className="footer-links">
            <li><a href="#/about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About LNK IT Infra</a></li>
            <li><a href="#/our-clients" onClick={(e) => { e.preventDefault(); handleNavClick('our-clients'); }}>Our Clients & Case Studies</a></li>
            <li><a href="#/amc" onClick={(e) => { e.preventDefault(); handleNavClick('amc'); }}>Annual Maintenance Contracts (AMC)</a></li>
            <li><a href="#/contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Pune Head Office (Magarpatta)</a></li>
            <li><a href="#/contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Contact Engineering Team</a></li>
            <li><a href="#/contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Book Free On-Site Inspection</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="container footer-bottom-inner">
          <div className="copyright-text">
            © 2026 LNK IT Infra Pvt. Ltd. All Rights Reserved. Enterprise IT Solutions, Structured Cabling & Networking Services in Pune & PCMC.
          </div>
          <div className="footer-cert-tags">
            <span>5+ Years IT Experience</span>
            <span>•</span>
            <span>Installation & Setup</span>
            <span>•</span>
            <span>Technical Support</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
