import {
  Check,
  X as CrossIcon,
  ShieldCheck,
  PhoneCall,
  FileCheck,
  ArrowRight
} from 'lucide-react';

interface AMCPageProps {
  navigate: (route: string) => void;
  openQuoteModal: (requirement?: string) => void;
}

export function AMCPage({ navigate, openQuoteModal }: AMCPageProps) {
  const openWhatsApp = () => {
    window.open('https://wa.me/917796852335?text=Hello%20LNK%20IT%20Infra!%20I%20would%20like%20to%20inquire%20about%20an%20Annual%20Maintenance%20Contract%20(IT%20AMC)%20for%20our%20office.', '_blank');
  };

  return (
    <div className="page-wrapper amc-page">
      {/* Hero */}
      <section className="page-hero-section">
        <div className="container">
          <div className="badge-glow">
            <ShieldCheck size={14} className="text-cyan" />
            <span>ANNUAL MAINTENANCE CONTRACTS (IT AMC)</span>
          </div>
          <h1 className="page-hero-title">
            Worry-Free IT Support & <span className="gradient-text">Maintenance Contracts</span>
          </h1>
          <p className="page-hero-desc">
            Consider LNK IT Infra as your outsourced, dedicated IT department on speed dial. We proactively prevent computer breakdowns, protect your files, and dispatch on-site engineers within 1 hour when emergencies happen.
          </p>
        </div>
      </section>

      {/* AMC Tiers Grid */}
      <section className="section-amc-plans py-8">
        <div className="container">
          <div className="amc-tiers-grid">
            {/* Basic Plan */}
            <div className="amc-card glass-card">
              <div className="amc-badge">STANDARD SUPPORT</div>
              <h2 className="amc-title">Basic IT Support</h2>
              <div className="amc-price">Best for small offices (10 to 30 computers)</div>
              <p className="amc-desc-summary">
                Essential monthly maintenance and remote assistance for small professional teams who need dependable computer help without high monthly overheads.
              </p>
              <ul className="amc-perks">
                <li><Check size={16} className="text-emerald" /> Monthly scheduled preventive checkup of all office PCs</li>
                <li><Check size={16} className="text-emerald" /> Unlimited remote desktop and phone assistance</li>
                <li><Check size={16} className="text-emerald" /> Antivirus and Windows security update management</li>
                <li><Check size={16} className="text-emerald" /> Verification that daily cloud/offline data backups are working</li>
                <li><Check size={16} className="text-emerald" /> On-site engineer visit for hardware breakdowns (within 4 hours)</li>
                <li><CrossIcon size={16} className="text-slate-400" /> <span className="text-slate-400">Standby hardware replacement not included</span></li>
                <li><CrossIcon size={16} className="text-slate-400" /> <span className="text-slate-400">24/7 night/weekend support not included</span></li>
              </ul>
              <button
                className="btn-secondary w-full"
                onClick={() => openQuoteModal('Inquiry for Basic IT Support AMC Plan')}
              >
                Inquire Basic Plan
              </button>
            </div>

            {/* Comprehensive Plan */}
            <div className="amc-card glass-card featured">
              <div className="amc-badge highlight">MOST POPULAR • 85% OF CLIENTS</div>
              <h2 className="amc-title">Comprehensive AMC</h2>
              <div className="amc-price">Ideal for growing companies (30 to 150 computers)</div>
              <p className="amc-desc-summary">
                Complete, zero-stress IT coverage. Includes priority 1-hour on-site arrival, standby spare hardware, server room care, and 24/7 emergency response.
              </p>
              <ul className="amc-perks">
                <li><Check size={16} className="text-emerald" /> <strong>Everything in Basic Plan included</strong></li>
                <li><Check size={16} className="text-emerald" /> <strong>Guaranteed fast on-site arrival within 1 hour in Pune & Mumbai</strong></li>
                <li><Check size={16} className="text-emerald" /> Complete maintenance for Wi-Fi APs, switches, routers & firewalls</li>
                <li><Check size={16} className="text-emerald" /> <strong>Temporary standby equipment provided during hardware repairs</strong></li>
                <li><Check size={16} className="text-emerald" /> Server room thermal, UPS battery, and RAID storage inspection</li>
                <li><Check size={16} className="text-emerald" /> CCTV cameras, biometric attendance & intercom maintenance</li>
                <li><Check size={16} className="text-emerald" /> <strong>Priority 24/7 emergency escalation hotline</strong></li>
              </ul>
              <button
                className="btn-primary w-full"
                onClick={() => openQuoteModal('Inquiry for Comprehensive AMC Plan')}
              >
                Choose Comprehensive AMC
              </button>
            </div>

            {/* Resident Engineer Plan */}
            <div className="amc-card glass-card">
              <div className="amc-badge">DEDICATED FULL-TIME STAFF</div>
              <h2 className="amc-title">Resident IT Engineer</h2>
              <div className="amc-price">For large offices, schools & factories (100+ users)</div>
              <p className="amc-desc-summary">
                A full-time LNK IT Infra certified hardware & network engineer stationed directly inside your office from 9 AM to 6 PM every working day.
              </p>
              <ul className="amc-perks">
                <li><Check size={16} className="text-emerald" /> Certified full-time engineer seated at your office premises</li>
                <li><Check size={16} className="text-emerald" /> Immediate desk-side help: printer jams, Outlook setup, Wi-Fi drops</li>
                <li><Check size={16} className="text-emerald" /> Employee onboarding: configuring new laptops, email, and access cards</li>
                <li><Check size={16} className="text-emerald" /> Daily morning check of servers, backup logs, CCTV, and biometric locks</li>
                <li><Check size={16} className="text-emerald" /> Standby replacement engineer provided if resident technician is on leave</li>
                <li><Check size={16} className="text-emerald" /> Backed by our Level-3 Senior Network Architects for complex escalations</li>
              </ul>
              <button
                className="btn-secondary w-full"
                onClick={() => openQuoteModal('Inquiry for Resident IT Engineer AMC Plan')}
              >
                Inquire Resident Engineer
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Matrix Table */}
      <section className="section-comparison-matrix">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">
              Detailed Plan <span className="gradient-text">Feature Matrix</span>
            </h2>
            <p className="section-desc mx-auto">
              Compare features across all three AMC maintenance tiers to select the perfect fit for your office workflow.
            </p>
          </div>

          <div className="table-wrapper glass-card">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Coverage Feature</th>
                  <th>Basic Support</th>
                  <th>Comprehensive AMC</th>
                  <th>Resident Engineer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Target Office Size</td>
                  <td>10 to 30 Computers</td>
                  <td>30 to 150 Computers</td>
                  <td>100+ Computers / Multi-Floor</td>
                </tr>
                <tr>
                  <td>Remote Support Response Time</td>
                  <td>&lt; 30 Minutes</td>
                  <td>&lt; 15 Minutes</td>
                  <td>Instant (On-Site Desk)</td>
                </tr>
                <tr>
                  <td>On-Site Arrival SLA</td>
                  <td>&lt; 4 Hours</td>
                  <td>&lt; 1 Hour (Guaranteed)</td>
                  <td>Stationed at your office</td>
                </tr>
                <tr>
                  <td>Monthly Preventive Audit Visit</td>
                  <td>1 Visit / Month</td>
                  <td>2 to 4 Visits / Month</td>
                  <td>Daily Full-Time Presence</td>
                </tr>
                <tr>
                  <td>Coverage for Network Switches & Wi-Fi</td>
                  <td>Basic Troubleshooting</td>
                  <td>Full Hardware & Firmware Care</td>
                  <td>Full Daily Monitoring</td>
                </tr>
                <tr>
                  <td>Firewall & Dual-ISP Failover Management</td>
                  <td>✕</td>
                  <td>Included</td>
                  <td>Included</td>
                </tr>
                <tr>
                  <td>Standby Spare Replacement Units</td>
                  <td>✕</td>
                  <td>Included (Free Loaner)</td>
                  <td>Included (Free Loaner)</td>
                </tr>
                <tr>
                  <td>CCTV & Biometric Attendance Maintenance</td>
                  <td>✕</td>
                  <td>Included</td>
                  <td>Included</td>
                </tr>
                <tr>
                  <td>Support Hours</td>
                  <td>Mon - Sat (9am - 7pm)</td>
                  <td>24/7/365 Emergency Line</td>
                  <td>Full-Time Shift (Customizable)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 10-Point Monthly Preventive Checklist */}
      <section className="section-checklist py-8">
        <div className="container">
          <div className="checklist-box glass-card">
            <div className="checklist-header">
              <FileCheck size={28} className="text-cyan" />
              <div>
                <h3>What Happens During Our Monthly Preventive Maintenance Visit?</h3>
                <p>We do not just wait for things to break. Every month, our senior technician runs a 10-point checklist:</p>
              </div>
            </div>

            <div className="checklist-items-grid">
              <div className="chk-item">
                <span className="chk-num">01</span>
                <div>
                  <strong>Data Backup Integrity Verification</strong>
                  <p>We perform a test recovery to prove that your Tally, accounts, and server files are actually restorable.</p>
                </div>
              </div>
              <div className="chk-item">
                <span className="chk-num">02</span>
                <div>
                  <strong>Firewall & Security Patch Updates</strong>
                  <p>Installing latest threat definitions and reviewing blocked intrusion logs.</p>
                </div>
              </div>
              <div className="chk-item">
                <span className="chk-num">03</span>
                <div>
                  <strong>Server Thermal & Dust Cleaning</strong>
                  <p>Cleaning rack fans, measuring operating temperatures, and checking power supplies.</p>
                </div>
              </div>
              <div className="chk-item">
                <span className="chk-num">04</span>
                <div>
                  <strong>UPS Battery Load Testing</strong>
                  <p>Simulating a power cut to verify battery health and runtime capacity under full office load.</p>
                </div>
              </div>
              <div className="chk-item">
                <span className="chk-num">05</span>
                <div>
                  <strong>Wi-Fi Signal Heatmap & Channel Check</strong>
                  <p>Adjusting radio frequencies to eliminate newly emerged interference from neighbor offices.</p>
                </div>
              </div>
              <div className="chk-item">
                <span className="chk-num">06</span>
                <div>
                  <strong>Switch Port Health & Error Logs</strong>
                  <p>Checking managed switches for packet errors, port flapping, or bad cables.</p>
                </div>
              </div>
              <div className="chk-item">
                <span className="chk-num">07</span>
                <div>
                  <strong>Antivirus & Malware Scan Verification</strong>
                  <p>Ensuring every laptop has active antivirus definitions and no hidden spyware.</p>
                </div>
              </div>
              <div className="chk-item">
                <span className="chk-num">08</span>
                <div>
                  <strong>CCTV Camera Recording Audit</strong>
                  <p>Verifying all camera lenses are clean, hard drives are healthy, and playback has 30+ days.</p>
                </div>
              </div>
              <div className="chk-item">
                <span className="chk-num">09</span>
                <div>
                  <strong>Biometric Attendance Sync</strong>
                  <p>Backing up user biometric templates and verifying accurate clock-in logs for HR payroll.</p>
                </div>
              </div>
              <div className="chk-item">
                <span className="chk-num">10</span>
                <div>
                  <strong>Management Executive Report</strong>
                  <p>Submitting an itemized health summary report with proactive upgrade recommendations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-cta-banner">
        <div className="container">
          <div className="cta-banner-box glass-card">
            <div className="cta-banner-content">
              <div className="badge-glow">GET PEACE OF MIND</div>
              <h2 className="cta-headline">
                Ready to Protect Your <span className="gradient-text">Office IT?</span>
              </h2>
              <p className="cta-subhead">
                Get in touch today for a free IT health inspection and a customized AMC quotation tailored to your computer count and budget.
              </p>
              <div className="cta-buttons">
                <button
                  className="btn-primary"
                  onClick={() => openQuoteModal('Requesting custom IT AMC proposal')}
                >
                  Request AMC Proposal & Site Audit
                </button>
                <button
                  className="btn-secondary"
                  onClick={() => navigate('hardware')}
                >
                  <span>Explore Supported Hardware</span>
                  <ArrowRight size={16} />
                </button>
                <button
                  className="btn-whatsapp"
                  onClick={openWhatsApp}
                >
                  <PhoneCall size={18} />
                  <span>WhatsApp (+91 7796852335)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
