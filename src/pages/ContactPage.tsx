import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  PhoneCall,
  Loader2
} from 'lucide-react';
import { WhatsAppIcon } from '../components/SocialIcons';

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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('https://formsubmit.co/ajax/lnkitinfra@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Contact Inquiry: ${form.name} (${form.company || form.city})`,
          _template: 'table',
          _captcha: 'false',
          'Customer Name': form.name,
          'Phone / WhatsApp': form.phone,
          'Company Name': form.company || 'Not specified',
          'Work Email': form.email || 'Not specified',
          'City / Location': form.city,
          'Project Details': form.requirements
        })
      });
    } catch (err) {
      console.error('Contact form submission error:', err);
    } finally {
      setIsSubmitting(false);
      setForm((prev) => ({ ...prev, submitted: true }));
    }
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
            <span>PUNE IT INFRASTRUCTURE & SUPPORT ONLY</span>
          </div>
          <h1 className="page-hero-title">
            Contact & <span className="gradient-text">Pune Office Support</span>
          </h1>
          <p className="page-hero-desc">
            We currently provide our IT infrastructure, hardware setups, and on-site technical services exclusively in Pune & PCMC. Get in touch with our engineering team for free site surveys, transparent itemized quotations, hardware pricing, or dependable local support.
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
                <div className="pune-service-alert">
                  <MapPin size={16} className="text-cyan shrink-0" />
                  <span><strong>Service Area Notice:</strong> We currently provide all on-site IT setups, cabling, hardware rentals, and support <strong>exclusively in Pune & PCMC</strong>.</span>
                </div>
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
                    <label>Location in Pune / PCMC *</label>
                    <select
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                    >
                      <option value="Pune - Magarpatta">Pune (Magarpatta City & Hadapsar)</option>
                      <option value="Pune - Hinjawadi">Pune (Hinjawadi IT Park Phase 1, 2, 3)</option>
                      <option value="Pune - Kharadi">Pune (Kharadi EON Free Zone & Viman Nagar)</option>
                      <option value="Pune - Baner">Pune (Baner, Balewadi & Aundh)</option>
                      <option value="Pune - Central">Pune (Shivaji Nagar, SB Road & Camp)</option>
                      <option value="PCMC - Bhosari & Chakan">PCMC (Bhosari MIDC, Chakan & Talwade)</option>
                      <option value="Other Pune Area">Other Pune City Location</option>
                    </select>
                    <span style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '5px', display: 'block' }}>
                      📍 On-site services exclusively in Pune & PCMC.
                    </span>
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
                    <button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          <span>Sending to Email...</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>Submit Request for Free Survey & Quote</span>
                        </>
                      )}
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
              <h3>Direct Support & Office Inquiries</h3>
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
                  <p>Monday - Saturday: 9:30 AM - 6:30 PM (Pune & PCMC)</p>
                </div>
              </div>
            </div>

            {/* Pune Head Office Card */}
            <div className="locations-stack">
              <div className="loc-card glass-card">
                <div className="loc-badge">PUNE HEAD OFFICE</div>
                <h4 className="loc-title">Pune Operations Hub</h4>
                <div className="loc-address">
                  <MapPin size={16} className="loc-pin" />
                  <span>Tower 4, Level 5, Cybercity IT Park, Magarpatta City, Hadapsar, Pune, Maharashtra — 411028</span>
                </div>
                <div className="loc-phone">
                  <Phone size={14} className="text-cyan" />
                  <a href="tel:+917796852335" style={{ color: '#0f172a', textDecoration: 'none' }}>+91 7796852335</a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#475569', marginBottom: '14px' }}>
                  <Mail size={14} className="text-cyan" />
                  <a href="mailto:lnkitinfra@gmail.com" style={{ color: '#475569', textDecoration: 'none' }}>lnkitinfra@gmail.com</a>
                </div>
                <div className="loc-status">
                  <span className="pulse-dot"></span> Central Dispatch & Operations Hub (Serving Pune & PCMC)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
