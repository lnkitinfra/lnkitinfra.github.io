import { useState, useEffect } from 'react';
import { X, CheckCircle2, Send, PhoneCall, Loader2, MapPin } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRequirement?: string;
}

export function QuoteModal({ isOpen, onClose, defaultRequirement }: QuoteModalProps) {
  const [form, setForm] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    city: 'Pune',
    requirements: defaultRequirement || 'Need quotation for office IT setup and networking',
    submitted: false
  });

  useEffect(() => {
    if (defaultRequirement) {
      setForm((prev) => ({
        ...prev,
        requirements: defaultRequirement,
        submitted: false
      }));
    }
  }, [defaultRequirement]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

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
          _subject: `New Quotation Request: ${form.name} (${form.company || form.city})`,
          _template: 'table',
          _captcha: 'false',
          'Customer Name': form.name,
          'Phone / WhatsApp': form.phone,
          'Company Name': form.company || 'Not specified',
          'Work Email': form.email || 'Not specified',
          'City / Location': form.city,
          'Service Requirements': form.requirements
        })
      });
    } catch (err) {
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
      setForm((prev) => ({ ...prev, submitted: true }));
    }
  };

  const openWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello LNK IT Infra! My name is ${form.name} from ${form.company || 'our company'} (Location: ${form.city}, Pune). Phone: ${form.phone}. Requirement: ${form.requirements}. Please share an official quote and schedule a site survey.`
    );
    window.open(`https://wa.me/917796852335?text=${text}`, '_blank');
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-window glass-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {form.submitted ? (
          <div className="modal-success-state">
            <div className="success-icon-box">
              <CheckCircle2 size={48} className="text-emerald" />
            </div>
            <h3>Inquiry Received Successfully!</h3>
            <p>
              Thank you, <strong>{form.name}</strong>. Our senior IT systems engineer will review your requirements for <strong>{form.company || 'your office'}</strong> and call you within <strong>30 minutes</strong> at <strong>{form.phone}</strong>.
            </p>
            <div className="modal-success-actions">
              <button
                className="btn-primary"
                onClick={() => {
                  setForm({ ...form, submitted: false });
                  onClose();
                }}
              >
                Close Window
              </button>
              <button
                className="btn-whatsapp"
                onClick={openWhatsAppDirect}
              >
                <PhoneCall size={16} />
                <span>Forward Direct to WhatsApp (+91 7796852335)</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="modal-form-content">
            <div className="modal-header compact">
              <div className="badge-glow">FREE QUOTE & SITE AUDIT • PUNE & PCMC ONLY</div>
              <h3>Request Quotation & Site Visit</h3>
              <p>
                Share your requirements below. Our engineer will provide a transparent, itemized estimate.
              </p>
              <div className="pune-service-note">
                <MapPin size={12} />
                <span>Services available exclusively in Pune & PCMC right now</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="quote-form-grid compact">
              <div className="form-field">
                <label>Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>

              <div className="form-field">
                <label>Phone / WhatsApp *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98200 12345"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>

              <div className="form-field">
                <label>Company Name</label>
                <input
                  type="text"
                  placeholder="e.g. Acme Tech Solutions"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                />
              </div>

              <div className="form-field">
                <label>Work Email</label>
                <input
                  type="email"
                  placeholder="e.g. rahul@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              <div className="form-field full-width">
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
                  📍 Note: On-site visits, hardware setups, and IT support are provided exclusively in Pune & PCMC.
                </span>
              </div>

              <div className="form-field full-width">
                <label>What do you need help with?</label>
                <textarea
                  rows={2}
                  value={form.requirements}
                  onChange={(e) => setForm({ ...form, requirements: e.target.value })}
                  placeholder="Office IT setup, cabling, laptops on rent, servers, firewalls, or AMC..."
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
                      <span>Submit Request</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
