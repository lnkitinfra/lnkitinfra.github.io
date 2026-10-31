import { useState } from 'react';
import { X, CheckCircle2, Send, PhoneCall } from 'lucide-react';

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

  const [prevReq, setPrevReq] = useState(defaultRequirement);
  if (defaultRequirement !== prevReq) {
    setPrevReq(defaultRequirement);
    setForm((prev) => ({
      ...prev,
      requirements: defaultRequirement || 'Need quotation for office IT setup and networking',
      submitted: false
    }));
  }

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForm((prev) => ({ ...prev, submitted: true }));
  };

  const openWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello LNK IT Infra! My name is ${form.name} from ${form.company || 'our company'}. Phone: ${form.phone}. Requirement: ${form.requirements}. Please share an official quote and schedule a site survey.`
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
            <div className="modal-header">
              <div className="badge-glow">FREE QUOTATION & ON-SITE SURVEY</div>
              <h3>Request an Official Quotation & Site Visit</h3>
              <p>
                Tell us about your office setup or upgrade. Our senior network engineer will inspect your premises and prepare a transparent, itemized quotation with zero hidden charges.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="quote-form-grid">
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
                <label>Company / Office Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Global Technologies"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                />
              </div>

              <div className="form-field">
                <label>Phone / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98200 12345"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>

              <div className="form-field">
                <label>Work Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. rahul@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              <div className="form-field">
                <label>Office City / Location</label>
                <select
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                >
                  <option value="Pune">Pune (Magarpatta, Hinjawadi, Kharadi)</option>
                  <option value="Mumbai">Mumbai (BKC, Andheri, Navi Mumbai, Thane)</option>
                  <option value="Bengaluru">Bengaluru (ORR, Whitefield, Electronic City)</option>
                  <option value="Delhi NCR">Delhi NCR (Gurugram, Noida, Delhi)</option>
                  <option value="Hyderabad">Hyderabad (HITEC City, Gachibowli)</option>
                  <option value="Chennai">Chennai (OMR, Guindy)</option>
                  <option value="Other">Other City in India</option>
                </select>
              </div>

              <div className="form-field full-width">
                <label>What do you need help with?</label>
                <textarea
                  rows={3}
                  value={form.requirements}
                  onChange={(e) => setForm({ ...form, requirements: e.target.value })}
                  placeholder="Describe your office size, number of computers, cabling needs, firewall requirements, or AMC inquiry..."
                />
              </div>

              <div className="modal-form-actions full-width">
                <button type="submit" className="btn-primary w-full">
                  <Send size={16} />
                  <span>Send Quotation & Survey Request</span>
                </button>
                <p className="privacy-guarantee">
                  🔒 We respect your privacy. No spam or third-party marketing calls.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
