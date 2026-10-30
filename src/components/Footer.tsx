import {
  Shield,
  Network,
  Phone,
  Mail,
  MapPin,
  Clock
} from 'lucide-react';
import { YouTubeIcon, InstagramIcon, WhatsAppIcon } from './SocialIcons';

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
          <div className="logo-group mb-3">
            <div className="logo-mark">
              <Shield className="logo-shield" />
              <Network className="logo-network" />
            </div>
            <div className="logo-text">
              <div className="brand-name">
                LNK<span className="brand-accent">IT</span> INFRA
              </div>
              <div className="brand-subtitle">ENTERPRISE IT INFRASTRUCTURE</div>
            </div>
          </div>
          <p className="footer-about">
            LNK IT Infra provides end-to-end office IT infrastructure solutions across India, including structured network cabling, high-density Wi-Fi 6, cyber security firewalls, CCTV security, biometric door locks, EPABX intercoms, and comprehensive Annual Maintenance Contracts (IT AMC).
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
              <span>Pune HQ: Magarpatta City IT Park, Pune — 411028</span>
            </div>
          </div>

          {/* Official Social Channels */}
          <div className="footer-social-wrapper">
            <div className="footer-social-title">Follow Official Channels:</div>
            <div className="footer-social-links">
              <a
                href="https://www.youtube.com/@LNKITInfra"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-badge badge-youtube"
                title="LNK IT Infra Official YouTube Channel"
              >
                <YouTubeIcon size={16} />
                <span>YouTube @LNKITInfra</span>
              </a>
              <a
                href="https://www.instagram.com/lnk_it_infra/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-badge badge-instagram"
                title="LNK IT Infra Official Instagram Profile"
              >
                <InstagramIcon size={16} />
                <span>Instagram @lnk_it_infra</span>
              </a>
              <a
                href="https://wa.me/917796852335?text=Hello%20LNK%20IT%20Infra!%20I%20would%20like%20to%20inquire%20about%20office%20IT%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-badge badge-whatsapp"
                title="Chat on WhatsApp (+91 7796852335)"
              >
                <WhatsAppIcon size={16} />
                <span>WhatsApp (+91 7796852335)</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Services & Solutions</h4>
          <ul className="footer-links">
            <li><a href="#/services/cabling" onClick={(e) => { e.preventDefault(); handleNavClick('services/cabling'); }}>Structured Network Cabling</a></li>
            <li><a href="#/services/wifi" onClick={(e) => { e.preventDefault(); handleNavClick('services/wifi'); }}>Commercial Office Wi-Fi</a></li>
            <li><a href="#/services/firewall" onClick={(e) => { e.preventDefault(); handleNavClick('services/firewall'); }}>Next-Gen Firewalls & VPN</a></li>
            <li><a href="#/services/datacenter" onClick={(e) => { e.preventDefault(); handleNavClick('services/datacenter'); }}>Server Rooms & Online UPS</a></li>
            <li><a href="#/services/networking" onClick={(e) => { e.preventDefault(); handleNavClick('services/networking'); }}>Gigabit PoE Network Switches</a></li>
            <li><a href="#/services/cctv" onClick={(e) => { e.preventDefault(); handleNavClick('services/cctv'); }}>CCTV Security Surveillance</a></li>
            <li><a href="#/services/biometrics" onClick={(e) => { e.preventDefault(); handleNavClick('services/biometrics'); }}>Biometrics & Smart Door Locks</a></li>
            <li><a href="#/services/epabx" onClick={(e) => { e.preventDefault(); handleNavClick('services/epabx'); }}>Office Intercom & EPABX</a></li>
            <li><a href="#/services/ill-mpls" onClick={(e) => { e.preventDefault(); handleNavClick('services/ill-mpls'); }}>Dedicated Internet Leased Line</a></li>
            <li><a href="#/services/cloud-backup" onClick={(e) => { e.preventDefault(); handleNavClick('services/cloud-backup'); }}>Automated Data Backup & Cloud</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Genuine Hardware Brands</h4>
          <ul className="footer-links">
            <li><a href="#/hardware" onClick={(e) => { e.preventDefault(); handleNavClick('hardware'); }}>Sophos XGS Firewalls & AP6</a></li>
            <li><a href="#/hardware" onClick={(e) => { e.preventDefault(); handleNavClick('hardware'); }}>Fortinet FortiGate Security</a></li>
            <li><a href="#/hardware" onClick={(e) => { e.preventDefault(); handleNavClick('hardware'); }}>HPE Aruba Switches & Wi-Fi 6</a></li>
            <li><a href="#/hardware" onClick={(e) => { e.preventDefault(); handleNavClick('hardware'); }}>Cisco Catalyst Managed Switches</a></li>
            <li><a href="#/hardware" onClick={(e) => { e.preventDefault(); handleNavClick('hardware'); }}>Syntel NEO DX Office Intercoms</a></li>
            <li><a href="#/hardware" onClick={(e) => { e.preventDefault(); handleNavClick('hardware'); }}>NEC SL2100 Hybrid Smart PBX</a></li>
            <li><a href="#/hardware" onClick={(e) => { e.preventDefault(); handleNavClick('hardware'); }}>Hikvision 4K IP Security Cameras</a></li>
            <li><a href="#/hardware" onClick={(e) => { e.preventDefault(); handleNavClick('hardware'); }}>APC by Schneider Electric UPS</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Company & Locations</h4>
          <ul className="footer-links">
            <li><a href="#/about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About LNK IT Infra</a></li>
            <li><a href="#/case-studies" onClick={(e) => { e.preventDefault(); handleNavClick('case-studies'); }}>Real Client Case Studies</a></li>
            <li><a href="#/amc" onClick={(e) => { e.preventDefault(); handleNavClick('amc'); }}>Annual Maintenance Contracts (AMC)</a></li>
            <li><a href="#/contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Pune Headquarters (Magarpatta)</a></li>
            <li><a href="#/contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Mumbai Office (BKC Platina)</a></li>
            <li><a href="#/contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Bengaluru Tech Center (Outer Ring Road)</a></li>
            <li><a href="#/contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Delhi NCR Hub (DLF Cyber City)</a></li>
            <li><a href="#/contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Book Free On-Site Inspection</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="container footer-bottom-inner">
          <div className="copyright-text">
            © 2026 LNK IT Infra Pvt. Ltd. All Rights Reserved. Enterprise IT Solutions, Structured Cabling & Networking Services.
          </div>
          <div className="footer-cert-tags">
            <span>ISO 9001:2015 Quality Certified</span>
            <span>•</span>
            <span>Authorized System Integrator</span>
            <span>•</span>
            <span>Fluke Networks Certified Cabling</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
