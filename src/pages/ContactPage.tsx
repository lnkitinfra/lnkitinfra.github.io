import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';
import { YouTubeIcon, InstagramIcon, WhatsAppIcon } from '../components/SocialIcons';

export function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    city: 'Pune',
    requirements: '',
    submitted: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForm({ ...form, submitted: true });
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello LNK IT Infra! My name is ${form.name || 'a visitor'} from ${form.company || 'our company'}. Phone: ${form.phone || ''}. Requirements: ${form.requirements || 'Need office IT consultation'}.`
    );
    window.open(`https://wa.me/917796852335?text=${text}`, '_blank');
  };

  return (
    <div className="page-wrapper contact-page">
      {/* Hero */}
      <section className="page-hero-section">
        <div className="container">
          <div className="badge-glow">
            <MapPin size={14} className="text-cyan" />
            <span>NATIONWIDE TECHNOLOGY CENTERS</span>
          </div>
          <h1 className="page-hero-title">
            Contact & <span className="gradient-text">Office Locations</span>
          </h1>
          <p className="page-hero-desc">
            Get in touch with our engineering team for free site surveys, transparent itemized quotations, hardware pricing, or emergency 24/7 IT AMC support across India.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Office Locations */}
      <section className="contact-main-section py-8">
        <div className="container contact-grid">
          {/* Contact Form Column */}
          <div className="contact-form-col">
            <div className="contact-form-card glass-card">
              <div className="form-card-header">
                <span className="badge-glow">FAST RESPONSE IN &lt; 30 MINS</span>
                <h2>Book an On-Site Survey or Request a Quote</h2>
                <p>
                  Fill out the form below and our senior systems engineer will call you to understand your requirements and schedule an on-site visit.
                </p>
              </div>

              {form.submitted ? (
                <div className="modal-success-state py-8">
                  <div className="success-icon-box">
                    <CheckCircle2 size={48} className="text-emerald" />
                  </div>
                  <h3>Thank You, {form.name}!</h3>
                  <p>
                    Your inquiry for <strong>{form.company || 'your office'}</strong> has been received by our Pune dispatch team. A senior network architect will contact you within <strong>30 minutes</strong> at <strong>{form.phone}</strong>.
                  </p>
                  <div className="modal-success-actions mt-4">
                    <button
                      className="btn-whatsapp"
                      onClick={openWhatsApp}
                    >
                      <PhoneCall size={16} />
                      <span>Forward to WhatsApp (+91 7796852335)</span>
                    </button>
                    <button
                      className="btn-secondary"
                      onClick={() => setForm({ ...form, submitted: false })}
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="quote-form-grid mt-4">
                  <div className="form-field">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Amit Patil"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label>Company / Organization Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Industrial Solutions"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label>Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 77968 52335"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label>Work Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. amit@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label>Primary Office City / Hub</label>
                    <select
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                    >
                      <option value="Pune">Pune (HQ - Magarpatta, Hinjawadi, Kharadi)</option>
                      <option value="Mumbai">Mumbai (BKC, Andheri, Navi Mumbai, Thane)</option>
                      <option value="Bengaluru">Bengaluru (Outer Ring Road, Whitefield)</option>
                      <option value="Delhi NCR">Delhi NCR (Gurugram, Noida, Delhi)</option>
                      <option value="Hyderabad">Hyderabad (HITEC City, Gachibowli)</option>
                      <option value="Other">Other City in India</option>
                    </select>
                  </div>

                  <div className="form-field full-width">
                    <label>Project Details / Requirements</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Please describe your office requirements: number of computers, network cabling, firewall setup, CCTV, or IT AMC inquiry..."
                      value={form.requirements}
                      onChange={(e) => setForm({ ...form, requirements: e.target.value })}
                    />
                  </div>

                  <div className="modal-form-actions full-width">
                    <button type="submit" className="btn-primary w-full">
                      <Send size={16} />
                      <span>Submit Request for Free Survey & Quote</span>
                    </button>
                    <p className="privacy-guarantee">
                      🔒 Your contact information is kept 100% confidential. No spam calls.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Office Locations Info Column */}
          <div className="contact-offices-col">
            <div className="direct-reach-box glass-card mb-6">
              <h3>Direct Support & Official Channels</h3>
              <div className="reach-item">
                <WhatsAppIcon size={18} className="text-emerald shrink-0" />
                <div>
                  <strong>Official WhatsApp / Phone:</strong>
                  <a
                    href="https://wa.me/917796852335?text=Hello%20LNK%20IT%20Infra!%20I%20would%20like%20to%20inquire%20about%20office%20IT%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reach-link highlight-whatsapp"
                  >
                    +91 7796852335
                  </a>
                </div>
              </div>
              <div className="reach-item">
                <Mail size={18} className="text-cyan shrink-0" />
                <div>
                  <strong>Official Email:</strong>
                  <a href="mailto:lnkitinfra@gmail.com" className="reach-link">lnkitinfra@gmail.com</a>
                </div>
              </div>
              <div className="reach-item">
                <Clock size={18} className="text-cyan shrink-0" />
                <div>
                  <strong>Operating Hours:</strong>
                  <p>Monday - Saturday: 9:00 AM - 8:00 PM (24/7/365 for AMC Clients)</p>
                </div>
              </div>

              {/* Official Social Media Channels */}
              <div className="reach-social-block">
                <div className="reach-social-title">Connect on Social Media:</div>
                <div className="reach-social-links">
                  <a
                    href="https://www.youtube.com/@LNKITInfra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reach-social-btn btn-youtube"
                  >
                    <YouTubeIcon size={16} />
                    <span>YouTube (@LNKITInfra)</span>
                  </a>
                  <a
                    href="https://www.instagram.com/lnk_it_infra/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reach-social-btn btn-instagram"
                  >
                    <InstagramIcon size={16} />
                    <span>Instagram (@lnk_it_infra)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Regional Hub Cards */}
            <div className="locations-stack">
              <div className="loc-card glass-card">
                <div className="loc-badge">PUNE HEADQUARTERS</div>
                <h4 className="loc-title">Pune (Magarpatta City)</h4>
                <div className="loc-address">
                  <MapPin size={16} className="loc-pin" />
                  <span>Tower 4, Level 5, Cybercity IT Park, Magarpatta City, Pune, Maharashtra — 411028</span>
                </div>
                <div className="loc-phone">
                  <Phone size={14} /> +91 7796852335 / +91 20 6790 3300
                </div>
                <div className="loc-status">
                  <span className="pulse-dot"></span> Central Dispatch & Spares Inventory Hub
                </div>
              </div>

              <div className="loc-card glass-card">
                <div className="loc-badge">MUMBAI REGIONAL CENTER</div>
                <h4 className="loc-title">Mumbai (Bandra Kurla Complex)</h4>
                <div className="loc-address">
                  <MapPin size={16} className="loc-pin" />
                  <span>Level 11, Platina Tech Tower, G-Block, BKC, Bandra East, Mumbai — 400051</span>
                </div>
                <div className="loc-phone">
                  <Phone size={14} /> +91 7796852335 / +91 22 6900 4400
                </div>
                <div className="loc-status">
                  <span className="pulse-dot"></span> Serving MMR, Navi Mumbai & Thane
                </div>
              </div>

              <div className="loc-card glass-card">
                <div className="loc-badge">BENGALURU TECH CENTER</div>
                <h4 className="loc-title">Bengaluru (Outer Ring Road)</h4>
                <div className="loc-address">
                  <MapPin size={16} className="loc-pin" />
                  <span>EcoSpace Business Park, Campus 2B, Bellandur, Outer Ring Road, Bengaluru — 560103</span>
                </div>
                <div className="loc-phone">
                  <Phone size={14} /> +91 7796852335 / +91 80 4430 8800
                </div>
                <div className="loc-status">
                  <span className="pulse-dot"></span> Serving ORR Corridor, Whitefield & Electronic City
                </div>
              </div>

              <div className="loc-card glass-card">
                <div className="loc-badge">DELHI NCR REGIONAL HUB</div>
                <h4 className="loc-title">Delhi NCR (DLF Cyber City)</h4>
                <div className="loc-address">
                  <MapPin size={16} className="loc-pin" />
                  <span>Building 9B, Level 6, DLF Cyber City, Phase 3, Gurugram, Haryana — 122002</span>
                </div>
                <div className="loc-phone">
                  <Phone size={14} /> +91 7796852335 / +91 124 4560 900
                </div>
                <div className="loc-status">
                  <span className="pulse-dot"></span> Serving Delhi, Gurugram, Noida & Faridabad
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
