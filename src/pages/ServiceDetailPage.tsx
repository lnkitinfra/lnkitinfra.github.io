import {
  ChevronRight,
  CheckCircle2,
  HelpCircle,
  PhoneCall,
  Send,
  ArrowLeft,
  Check
} from 'lucide-react';
import { DETAILED_SERVICES } from '../data/solutionsData';

interface ServiceDetailPageProps {
  serviceId: string;
  navigate: (route: string) => void;
  openQuoteModal: (requirement?: string) => void;
}

export function ServiceDetailPage({ serviceId, navigate, openQuoteModal }: ServiceDetailPageProps) {
  const service = DETAILED_SERVICES.find((s) => s.id === serviceId) || DETAILED_SERVICES[0];
  const IconComp = service.icon;

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello LNK IT Infra! I would like to inquire about ${service.title} for our office. Please share pricing and details.`
    );
    window.open(`https://wa.me/917796852335?text=${text}`, '_blank');
  };

  return (
    <div className="page-wrapper service-detail-page">
      {/* Breadcrumb Navigation */}
      <div className="breadcrumb-strip">
        <div className="container breadcrumb-inner">
          <a
            href="#/"
            onClick={(e) => {
              e.preventDefault();
              navigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Home
          </a>
          <ChevronRight size={14} className="separator" />
          <a
            href="#/services"
            onClick={(e) => {
              e.preventDefault();
              navigate('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Services
          </a>
          <ChevronRight size={14} className="separator" />
          <span className="current">{service.title}</span>
        </div>
      </div>

      {/* Service Hero */}
      <section className="service-detail-hero">
        <div className="container">
          <div className="detail-hero-content">
            <button
              className="btn-back-link"
              onClick={() => {
                navigate('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <ArrowLeft size={16} />
              <span>Back to All Services</span>
            </button>

            <div className="badge-glow mt-3">
              <IconComp size={16} className="text-cyan" />
              <span>{service.category.toUpperCase()}</span>
            </div>

            <h1 className="detail-hero-title">{service.title}</h1>
            <p className="detail-hero-tagline">{service.tagline}</p>
            <p className="detail-hero-summary">{service.summary}</p>

            <div className="ideal-for-box glass-card">
              <span className="ideal-label">RECOMMENDED FOR:</span>
              <p>{service.idealFor}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="service-detail-body">
        <div className="container detail-grid">
          {/* Main Left Column */}
          <div className="detail-main-col">
            {/* Section 1: Problems Solved */}
            <div className="detail-card glass-card mb-6">
              <h2 className="detail-section-heading">Common Office Problems We Solve</h2>
              <div className="problems-grid">
                {service.problemsSolved.map((prob, idx) => (
                  <div key={idx} className="problem-bullet-card">
                    <span className="prob-cross">✕</span>
                    <p>{prob}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2: What We Deliver & Install */}
            <div className="detail-card glass-card mb-6">
              <h2 className="detail-section-heading">What We Install & Configure</h2>
              <ul className="what-deliver-list">
                {service.whatWeDo.map((item, idx) => (
                  <li key={idx} className="deliver-item">
                    <CheckCircle2 size={18} className="text-emerald shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 3: Installation Process */}
            <div className="detail-card glass-card mb-6">
              <h2 className="detail-section-heading">Step-by-Step Installation Process</h2>
              <div className="process-timeline-list">
                {service.processSteps.map((step) => (
                  <div key={step.step} className="timeline-step-item">
                    <div className="step-circle">{step.step}</div>
                    <div className="step-content">
                      <h3>{step.title}</h3>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4: Hardware Brands */}
            <div className="detail-card glass-card mb-6">
              <h2 className="detail-section-heading">Genuine Brands & Hardware We Use</h2>
              <div className="hw-brands-row">
                {service.hardwareUsed.map((hw, idx) => (
                  <div key={idx} className="hw-brand-tag">
                    <Check size={14} className="text-cyan" />
                    <span>{hw}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-sm text-slate-500">
                All equipment is sourced directly from authorized Indian national distributors with official manufacturer serial numbers and warranties.
              </p>
            </div>

            {/* Section 5: FAQs */}
            <div className="detail-card glass-card">
              <h2 className="detail-section-heading">Frequently Asked Questions</h2>
              <div className="detail-faqs-list">
                {service.faq.map((item, idx) => (
                  <div key={idx} className="detail-faq-item">
                    <div className="detail-faq-q">
                      <HelpCircle size={18} className="text-cyan shrink-0" />
                      <h4>{item.q}</h4>
                    </div>
                    <p className="detail-faq-a">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Sidebar Right Column */}
          <aside className="detail-sidebar-col">
            <div className="sidebar-quote-card glass-card sticky-sidebar">
              <div className="sidebar-badge">FREE ESTIMATE & SURVEY</div>
              <h3>Need {service.title}?</h3>
              <p>
                Get a customized technical specification and itemized pricing quote for your office premises.
              </p>

              <div className="sidebar-perks">
                <div className="perk-row">
                  <Check size={16} className="text-emerald" />
                  <span>Free on-site floor inspection</span>
                </div>
                <div className="perk-row">
                  <Check size={16} className="text-emerald" />
                  <span>Transparent itemized quotation</span>
                </div>
                <div className="perk-row">
                  <Check size={16} className="text-emerald" />
                  <span>Genuine manufacturer warranty</span>
                </div>
                <div className="perk-row">
                  <Check size={16} className="text-emerald" />
                  <span>Post-installation AMC support</span>
                </div>
              </div>

              <div className="sidebar-actions mt-4">
                <button
                  className="btn-primary w-full"
                  onClick={() => openQuoteModal(`Quotation for: ${service.title}`)}
                >
                  <Send size={16} />
                  <span>Request Official Quotation</span>
                </button>
                <button
                  className="btn-whatsapp-full"
                  onClick={openWhatsApp}
                >
                  <PhoneCall size={16} />
                  <span>Chat on WhatsApp (+91 7796852335)</span>
                </button>
              </div>

              <div className="sidebar-direct-call">
                <span>Or speak directly with our engineer:</span>
                <a href="tel:+917796852335" className="call-number">
                  +91 7796852335
                </a>
              </div>
            </div>

            {/* Other Services Navigation Box */}
            <div className="sidebar-nav-card glass-card mt-6">
              <h4>Explore Other Solutions</h4>
              <ul className="sidebar-nav-list">
                {DETAILED_SERVICES.filter((s) => s.id !== service.id).slice(0, 6).map((other) => (
                  <li key={other.id}>
                    <button
                      className="sidebar-nav-link"
                      onClick={() => {
                        navigate(`services/${other.id}`);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      <span>{other.title}</span>
                      <ChevronRight size={14} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
