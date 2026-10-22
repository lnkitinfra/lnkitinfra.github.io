import { useState, useEffect } from 'react';
import {
  Server,
  Cloud,
  ShieldCheck,
  Cpu,
  Network,
  Terminal,
  Activity,
  CheckCircle2,
  HardDrive,
  Copy,
  Check,
  ChevronRight,
  Sliders,
  Globe,
  Radio,
  Lock,
  Zap,
  ArrowUpRight,
  Layers,
  X
} from 'lucide-react';
import './App.css';

interface TopologyNode {
  id: string;
  name: string;
  category: string;
  cpu: number;
  memory: number;
  throughput: string;
  ping: string;
  status: 'optimal' | 'warning' | 'healthy';
  log: string[];
}

const TOPOLOGY_NODES: TopologyNode[] = [
  {
    id: 'edge',
    name: 'Edge Gateway & Anycast DNS',
    category: 'Global Edge Ingress',
    cpu: 28,
    memory: 42,
    throughput: '38.4 Gbps',
    ping: '2.8 ms',
    status: 'optimal',
    log: [
      '[02:40:11] Ingress BGP route converged across 14 PoPs',
      '[02:45:02] DDoS scrubbed: 4.2M packets dropped at edge',
      '[02:50:18] SSL/TLS handshakes: 99.8% session cache hit',
      '[02:58:33] Global Anycast latency stable @ 2.8ms'
    ]
  },
  {
    id: 'k8s',
    name: 'Autonomous Kubernetes Core',
    category: 'Microservices & Compute',
    cpu: 64,
    memory: 78,
    throughput: '22.1 Gbps',
    ping: '4.1 ms',
    status: 'optimal',
    log: [
      '[02:38:09] HPA autoscaled 18 worker pods in cluster-us-east',
      '[02:44:21] Cilium eBPF mesh verified zero packet drops',
      '[02:51:00] Rolling canary deployment version v3.12.0 verified',
      '[02:59:10] Cluster health: 128/128 nodes ready and synced'
    ]
  },
  {
    id: 'storage',
    name: 'High-Throughput NVMe SAN Array',
    category: 'Low-Latency Storage Tier',
    cpu: 32,
    memory: 56,
    throughput: '94.2 Gbps',
    ping: '0.4 ms',
    status: 'optimal',
    log: [
      '[02:35:12] Ceph / NVMe-oF peer replication active-active',
      '[02:42:04] IOPS benchmark: 1,840,000 IOPS @ 400µs latency',
      '[02:49:15] Immutable snapshot created: zfs-snap-hourly-0250',
      '[02:57:44] Storage capacity at 48.2% (142 TB unallocated)'
    ]
  },
  {
    id: 'security',
    name: 'Zero-Trust AI SOC & SASE Gateway',
    category: 'Cyber Defense & EDR',
    cpu: 45,
    memory: 63,
    throughput: '16.8 Gbps',
    ping: '1.9 ms',
    status: 'optimal',
    log: [
      '[02:39:41] SIEM telemetry ingest: 42,000 eps analyzed',
      '[02:46:19] Micro-segmentation policy enforced for subnet-prod-db',
      '[02:52:40] Identity verify: 0 anomalous MFA tokens detected',
      '[02:58:12] Compliance audit status: ISO27001 & SOC2 passed'
    ]
  },
  {
    id: 'cloud-mesh',
    name: 'Multi-Cloud Transit Interconnect',
    category: 'AWS • Azure • GCP • On-Prem',
    cpu: 39,
    memory: 49,
    throughput: '45.0 Gbps',
    ping: '5.2 ms',
    status: 'optimal',
    log: [
      '[02:36:22] AWS DirectConnect 100G link healthy',
      '[02:43:55] Azure ExpressRoute failover standby verified',
      '[02:50:11] Multi-cloud routing optimized via AI path selection',
      '[02:59:04] Cross-cloud synchronization delta: 0.00ms'
    ]
  }
];

export function App() {
  const [selectedNode, setSelectedNode] = useState<TopologyNode>(TOPOLOGY_NODES[0]);
  const [activeTab, setActiveTab] = useState<'all' | 'cloud' | 'network' | 'security' | 'devops'>('all');
  
  // Sizing Calculator States
  const [vCpuCores, setVCpuCores] = useState<number>(64);
  const [nvmeStorage, setNvmeStorage] = useState<number>(12);
  const [redundancyTier, setRedundancyTier] = useState<'single' | 'dual' | 'multi'>('dual');
  const [supportTier, setSupportTier] = useState<'standard' | '24x7' | 'sre'>('24x7');

  // Multi-Account GitHub Helper States
  const [githubUser, setGithubUser] = useState<string>('');
  const [githubEmail, setGithubEmail] = useState<string>('');
  const [copiedKey, setCopiedKey] = useState<boolean>(false);
  const [copiedCommand, setCopiedCommand] = useState<boolean>(false);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalSubmitted, setModalSubmitted] = useState<boolean>(false);

  // Live Pings
  const [pings, setPings] = useState({
    usEast: 12,
    usWest: 24,
    euCentral: 18,
    apSouth: 29,
    apEast: 38
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPings({
        usEast: Math.floor(11 + Math.random() * 4),
        usWest: Math.floor(22 + Math.random() * 5),
        euCentral: Math.floor(17 + Math.random() * 4),
        apSouth: Math.floor(27 + Math.random() * 6),
        apEast: Math.floor(36 + Math.random() * 5)
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const sshPublicKey = 'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIFhSWhAcGvCsmltYSBPxC0fRll2K69emoywg5dH4lvzB lnk-it-infra';

  const copyToClipboard = (text: string, type: 'key' | 'cmd') => {
    navigator.clipboard.writeText(text);
    if (type === 'key') {
      setCopiedKey(true);
      setTimeout(() => setCopiedKey(false), 2000);
    } else {
      setCopiedCommand(true);
      setTimeout(() => setCopiedCommand(false), 2000);
    }
  };

  // Cost calculation formula
  const baseComputeCost = vCpuCores * 14;
  const baseStorageCost = nvmeStorage * 25;
  const redundancyMultiplier = redundancyTier === 'single' ? 1.0 : redundancyTier === 'dual' ? 1.6 : 2.2;
  const supportCost = supportTier === 'standard' ? 250 : supportTier === '24x7' ? 750 : 1500;
  const totalMonthlyEstimate = Math.round((baseComputeCost + baseStorageCost) * redundancyMultiplier + supportCost);

  const gitSetupSnippet = `# 1. Configure this repository with your dedicated GitHub credentials
git config user.name "${githubUser || 'YourGitHubUsername'}"
git config user.email "${githubEmail || 'your-email@example.com'}"

# 2. Add remote pointing to github-lnk SSH alias
git remote add origin git@github-lnk:${githubUser || '<username>'}/lnk-it-infra.git
git branch -M main
git push -u origin main`;

  return (
    <div className="app-root">
      {/* Top Telemetry Notification Banner */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="pulse-dot"></span>
            <span><strong>GLOBAL INFRA HEALTH:</strong> 100% OPERATIONAL</span>
            <span style={{ margin: '0 8px', opacity: 0.3 }}>|</span>
            <span>Active Edge Nodes: <strong>512</strong></span>
            <span style={{ margin: '0 8px', opacity: 0.3 }}>|</span>
            <span>Anycast Latency: <strong>{pings.usEast}ms</strong></span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a href="#github-setup" style={{ color: 'var(--accent-cyan)', textDecoration: 'none', fontWeight: 600 }}>
              ⚡ GitHub Multi-ID Ready
            </a>
            <span style={{ opacity: 0.4 }}>•</span>
            <span>SOC 2 Type II Certified</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="header-wrapper">
        <div className="container nav-container">
          <a href="#" className="brand-logo">
            <div className="logo-icon-box">
              <Server size={24} />
            </div>
            <div className="brand-info">
              <h1>LNK IT INFRA</h1>
              <span>Enterprise Hybrid Architecture</span>
            </div>
          </a>

          <ul className="nav-links">
            <li><a href="#topology">Architecture & Nodes</a></li>
            <li><a href="#solutions">Solutions</a></li>
            <li><a href="#calculator">Sizing Calculator</a></li>
            <li><a href="#latency-map">Global Network</a></li>
            <li><a href="#github-setup">GitHub Multi-ID</a></li>
          </ul>

          <div className="nav-actions">
            <button className="btn-secondary" onClick={() => setIsModalOpen(true)}>
              Request Audit
            </button>
            <a href="#calculator" className="btn-primary">
              <Zap size={16} /> Deploy Architecture
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="badge-glow" style={{ marginBottom: '16px' }}>
              <Activity size={14} /> Hyperconverged Multi-Cloud Infrastructure 4.0
            </div>
            <h2>
              Architecting Resilient, <span className="gradient-text">Cloud-Native</span> IT Foundations
            </h2>
            <p className="hero-subtitle">
              Power your mission-critical applications with zero-packet-loss SD-WAN fabrics, automated multi-cloud
              orchestration, NVMe microsecond storage tiers, and 24/7 autonomous NOC telemetry.
            </p>
            <div className="hero-cta-group">
              <a href="#calculator" className="btn-primary">
                Launch Infrastructure Sizer <ArrowUpRight size={18} />
              </a>
              <a href="#topology" className="btn-secondary">
                Inspect Live Node Topology
              </a>
            </div>

            <div style={{ display: 'flex', gap: '24px', alignItems: 'center', color: 'var(--text-dim)', fontSize: '0.85rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} color="var(--accent-emerald)" /> Zero Single Point of Failure
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} color="var(--accent-emerald)" /> Microsecond NVMe Latency
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} color="var(--accent-emerald)" /> Multi-Region Failover
              </span>
            </div>
          </div>

          <div className="hero-visual-card">
            <img src="/hero-datacenter.jpg" alt="LNK IT Infra Datacenter Visualization" className="hero-img" />
            <div className="floating-telemetry-badge">
              <div className="telemetry-item">
                <div className="label">Live SLA</div>
                <div className="value">99.999%</div>
              </div>
              <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.1)' }}></div>
              <div className="telemetry-item">
                <div className="label">Core Throughput</div>
                <div className="value">100 Gbps</div>
              </div>
              <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.1)' }}></div>
              <div className="telemetry-item">
                <div className="label">Active Clusters</div>
                <div className="value">48 PoPs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="metrics-section">
        <div className="container">
          <div className="metrics-grid">
            <div className="glass-card metric-card">
              <div className="metric-number gradient-text-alt">&lt; 10ms</div>
              <div className="metric-label">Global Edge Latency</div>
              <div className="metric-desc">Sub-millisecond route optimization with Anycast routing</div>
            </div>
            <div className="glass-card metric-card">
              <div className="metric-number gradient-text-alt">99.999%</div>
              <div className="metric-label">High-Availability SLA</div>
              <div className="metric-desc">N+2 redundancy across power, network, and compute layers</div>
            </div>
            <div className="glass-card metric-card">
              <div className="metric-number gradient-text-alt">0 sec</div>
              <div className="metric-label">Automated Failover (RPO=0)</div>
              <div className="metric-desc">Active-active synchronized storage replication</div>
            </div>
            <div className="glass-card metric-card">
              <div className="metric-number gradient-text-alt">24/7/365</div>
              <div className="metric-label">Dedicated SRE Operations</div>
              <div className="metric-desc">15-minute escalation response time guaranteed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Topology Simulator */}
      <section id="topology" className="topology-section">
        <div className="container">
          <div className="section-head">
            <div className="badge-glow"><Radio size={14} /> Real-Time Telemetry Engine</div>
            <h3>Interactive Infrastructure Topology</h3>
            <p>Click on any node in the LNK IT Infra architecture fabric to inspect live metrics, CPU load, and diagnostic logs.</p>
          </div>

          <div className="topology-container">
            <div className="topology-nodes-panel">
              {TOPOLOGY_NODES.map((node) => {
                const isActive = selectedNode.id === node.id;
                return (
                  <button
                    key={node.id}
                    className={`topology-node-btn ${isActive ? 'active' : ''}`}
                    onClick={() => setSelectedNode(node)}
                  >
                    <div className="node-btn-left">
                      <div className="node-icon-box">
                        {node.id === 'edge' && <Globe size={20} />}
                        {node.id === 'k8s' && <Cpu size={20} />}
                        {node.id === 'storage' && <HardDrive size={20} />}
                        {node.id === 'security' && <ShieldCheck size={20} />}
                        {node.id === 'cloud-mesh' && <Cloud size={20} />}
                      </div>
                      <div className="node-meta">
                        <h4>{node.name}</h4>
                        <span>{node.category}</span>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 600 }}>
                        {node.throughput}
                      </span>
                      <div style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'flex-end' }}>
                        <span className="pulse-dot" style={{ width: '6px', height: '6px' }}></span> {node.status}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="glass-card topology-detail-card">
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                      Selected Node Inspection
                    </span>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: '#fff', marginTop: '4px' }}>
                      {selectedNode.name}
                    </h4>
                  </div>
                  <span className="badge-glow" style={{ fontSize: '0.75rem' }}>
                    Latency: {selectedNode.ping}
                  </span>
                </div>

                <div className="telemetry-gauges">
                  <div className="gauge-box">
                    <div className="gauge-header">
                      <span>vCPU Load</span>
                      <strong style={{ color: '#fff' }}>{selectedNode.cpu}%</strong>
                    </div>
                    <div className="progress-track">
                      <div className="progress-bar-fill" style={{ width: `${selectedNode.cpu}%` }}></div>
                    </div>
                  </div>

                  <div className="gauge-box">
                    <div className="gauge-header">
                      <span>Memory Pool</span>
                      <strong style={{ color: '#fff' }}>{selectedNode.memory}%</strong>
                    </div>
                    <div className="progress-track">
                      <div
                        className="progress-bar-fill"
                        style={{ width: `${selectedNode.memory}%`, background: 'linear-gradient(90deg, #7928ca, #a855f7)' }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div style={{ margin: '20px 0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '8px' }}>
                    <Terminal size={15} /> Real-Time Node Ingress Logs
                  </div>
                  <div className="terminal-log">
                    {selectedNode.log.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                  Hardware: Dual AMD EPYC 9654 • 1.5TB DDR5 ECC
                </span>
                <button className="btn-secondary" style={{ padding: '8px 16px', fontSize: '0.85rem' }} onClick={() => setIsModalOpen(true)}>
                  Audit Node
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Matrix */}
      <section id="solutions" className="solutions-section">
        <div className="container">
          <div className="section-head">
            <div className="badge-glow"><Layers size={14} /> Full-Stack Architecture</div>
            <h3>Enterprise Infrastructure Solutions</h3>
            <p>Purpose-built infrastructure modules engineered for high availability, zero latency bottlenecks, and automated operations.</p>
          </div>

          <div className="tab-filter-strip">
            <button className={`tab-pill ${activeTab === 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')}>
              All Solutions
            </button>
            <button className={`tab-pill ${activeTab === 'cloud' ? 'active' : ''}`} onClick={() => setActiveTab('cloud')}>
              Hybrid Cloud & VPC
            </button>
            <button className={`tab-pill ${activeTab === 'network' ? 'active' : ''}`} onClick={() => setActiveTab('network')}>
              SD-WAN & BGP Network
            </button>
            <button className={`tab-pill ${activeTab === 'security' ? 'active' : ''}`} onClick={() => setActiveTab('security')}>
              Zero-Trust Cyber SOC
            </button>
            <button className={`tab-pill ${activeTab === 'devops' ? 'active' : ''}`} onClick={() => setActiveTab('devops')}>
              DevOps & GitOps
            </button>
          </div>

          <div className="solutions-grid">
            {(activeTab === 'all' || activeTab === 'cloud') && (
              <div className="glass-card solution-card">
                <div>
                  <div className="solution-icon-wrap"><Cloud size={28} /></div>
                  <h4>Hybrid Multi-Cloud Fabric</h4>
                  <p>Seamlessly unify AWS, Microsoft Azure, Google Cloud, and bare-metal datacenters into a single software-defined control plane.</p>
                  <ul className="feature-list">
                    <li><CheckCircle2 size={16} color="var(--accent-cyan)" /> Terraform & OpenTofu automated IaC</li>
                    <li><CheckCircle2 size={16} color="var(--accent-cyan)" /> 100G DirectConnect / ExpressRoute peering</li>
                    <li><CheckCircle2 size={16} color="var(--accent-cyan)" /> Automated cloud cost optimization & FinOps</li>
                  </ul>
                </div>
                <div className="tech-tag-row">
                  <span className="tech-tag">AWS Transit Gateway</span>
                  <span className="tech-tag">Azure Fabric</span>
                  <span className="tech-tag">Terraform</span>
                </div>
              </div>
            )}

            {(activeTab === 'all' || activeTab === 'network') && (
              <div className="glass-card solution-card">
                <div>
                  <div className="solution-icon-wrap"><Network size={28} /></div>
                  <h4>Enterprise SD-WAN & Backbone</h4>
                  <p>Intelligent, carrier-neutral software-defined wide area network with dynamic path selection and self-healing BGP routing.</p>
                  <ul className="feature-list">
                    <li><CheckCircle2 size={16} color="var(--accent-cyan)" /> Zero-touch branch deployment</li>
                    <li><CheckCircle2 size={16} color="var(--accent-cyan)" /> SASE Cloud-Delivered Security</li>
                    <li><CheckCircle2 size={16} color="var(--accent-cyan)" /> 99.999% SLA across multi-homed ISP uplinks</li>
                  </ul>
                </div>
                <div className="tech-tag-row">
                  <span className="tech-tag">Cisco Viptela</span>
                  <span className="tech-tag">Fortinet Secure SD-WAN</span>
                  <span className="tech-tag">BGP EVPN</span>
                </div>
              </div>
            )}

            {(activeTab === 'all' || activeTab === 'security') && (
              <div className="glass-card solution-card">
                <div>
                  <div className="solution-icon-wrap"><Lock size={28} /></div>
                  <h4>Zero-Trust Security & Autonomous SOC</h4>
                  <p>Continuous identity verification, micro-segmented network isolation, and AI-driven automated incident response.</p>
                  <ul className="feature-list">
                    <li><CheckCircle2 size={16} color="var(--accent-cyan)" /> Next-Gen Cloud Firewalls & WAF</li>
                    <li><CheckCircle2 size={16} color="var(--accent-cyan)" /> 5 Tbps DDoS scrubbing protection</li>
                    <li><CheckCircle2 size={16} color="var(--accent-cyan)" /> Continuous SOC 2 & ISO 27001 compliance</li>
                  </ul>
                </div>
                <div className="tech-tag-row">
                  <span className="tech-tag">Palo Alto SASE</span>
                  <span className="tech-tag">CrowdStrike EDR</span>
                  <span className="tech-tag">Splunk SOAR</span>
                </div>
              </div>
            )}

            {(activeTab === 'all' || activeTab === 'devops') && (
              <div className="glass-card solution-card">
                <div>
                  <div className="solution-icon-wrap"><Cpu size={28} /></div>
                  <h4>Kubernetes GitOps & CI/CD Pipelines</h4>
                  <p>Production-ready container orchestration platform with automated canary rollouts, service mesh, and observability.</p>
                  <ul className="feature-list">
                    <li><CheckCircle2 size={16} color="var(--accent-cyan)" /> ArgoCD automated declarative GitOps</li>
                    <li><CheckCircle2 size={16} color="var(--accent-cyan)" /> Istio & Cilium eBPF network security</li>
                    <li><CheckCircle2 size={16} color="var(--accent-cyan)" /> Prometheus, Grafana & OpenTelemetry stack</li>
                  </ul>
                </div>
                <div className="tech-tag-row">
                  <span className="tech-tag">Kubernetes</span>
                  <span className="tech-tag">ArgoCD</span>
                  <span className="tech-tag">Cilium eBPF</span>
                </div>
              </div>
            )}

            {(activeTab === 'all' || activeTab === 'cloud') && (
              <div className="glass-card solution-card">
                <div>
                  <div className="solution-icon-wrap"><HardDrive size={28} /></div>
                  <h4>NVMe All-Flash SAN & Disaster Recovery</h4>
                  <p>High-density Ceph and ZFS SAN clusters with active-active synchronous replication for zero-recovery-point disaster protection.</p>
                  <ul className="feature-list">
                    <li><CheckCircle2 size={16} color="var(--accent-cyan)" /> Microsecond read/write latency</li>
                    <li><CheckCircle2 size={16} color="var(--accent-cyan)" /> Immutable air-gapped ransomware backups</li>
                    <li><CheckCircle2 size={16} color="var(--accent-cyan)" /> Instant point-in-time snapshot recovery</li>
                  </ul>
                </div>
                <div className="tech-tag-row">
                  <span className="tech-tag">NVMe-oF</span>
                  <span className="tech-tag">Ceph Block</span>
                  <span className="tech-tag">Veeam Enterprise</span>
                </div>
              </div>
            )}

            {(activeTab === 'all' || activeTab === 'security') && (
              <div className="glass-card solution-card">
                <div>
                  <div className="solution-icon-wrap"><ShieldCheck size={28} /></div>
                  <h4>24/7 Managed NOC & SRE Support</h4>
                  <p>Round-the-clock proactive monitoring by certified network and cloud engineers with rapid 15-minute SLA escalation.</p>
                  <ul className="feature-list">
                    <li><CheckCircle2 size={16} color="var(--accent-cyan)" /> Predictive failure detection via machine learning</li>
                    <li><CheckCircle2 size={16} color="var(--accent-cyan)" /> Automated runbooks & self-healing remediation</li>
                    <li><CheckCircle2 size={16} color="var(--accent-cyan)" /> Monthly performance & security posture audit</li>
                  </ul>
                </div>
                <div className="tech-tag-row">
                  <span className="tech-tag">24/7/365 NOC</span>
                  <span className="tech-tag">PagerDuty SLA</span>
                  <span className="tech-tag">White-Glove SRE</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Sizing & Cost Estimator */}
      <section id="calculator" className="calc-section">
        <div className="container">
          <div className="section-head">
            <div className="badge-glow"><Sliders size={14} /> Interactive Sizing Tool</div>
            <h3>Infrastructure Cost & Capacity Estimator</h3>
            <p>Customize your compute, storage, and disaster recovery requirements to calculate instantaneous transparent pricing.</p>
          </div>

          <div className="calc-grid">
            <div className="glass-card calc-card-left">
              <div className="calc-slider-group">
                <div className="slider-label-row">
                  <span>Compute Allocation (High-Perf vCPUs)</span>
                  <span className="slider-val-badge">{vCpuCores} Cores</span>
                </div>
                <input
                  type="range"
                  min="16"
                  max="256"
                  step="16"
                  value={vCpuCores}
                  onChange={(e) => setVCpuCores(Number(e.target.value))}
                  className="custom-range"
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '6px' }}>
                  <span>16 vCPUs (Startup Core)</span>
                  <span>128 vCPUs</span>
                  <span>256 vCPUs (Enterprise Grid)</span>
                </div>
              </div>

              <div className="calc-slider-group">
                <div className="slider-label-row">
                  <span>NVMe Gen5 All-Flash SAN Storage</span>
                  <span className="slider-val-badge">{nvmeStorage} TB</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="50"
                  step="2"
                  value={nvmeStorage}
                  onChange={(e) => setNvmeStorage(Number(e.target.value))}
                  className="custom-range"
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '6px' }}>
                  <span>2 TB (Fast NVMe)</span>
                  <span>24 TB</span>
                  <span>50 TB (Petabyte Ready)</span>
                </div>
              </div>

              <div className="calc-slider-group">
                <div className="slider-label-row">
                  <span>Geographic Redundancy Strategy</span>
                </div>
                <div className="radio-pill-group">
                  <button
                    className={`radio-pill-btn ${redundancyTier === 'single' ? 'active' : ''}`}
                    onClick={() => setRedundancyTier('single')}
                  >
                    Single Region (99.9% SLA)
                  </button>
                  <button
                    className={`radio-pill-btn ${redundancyTier === 'dual' ? 'active' : ''}`}
                    onClick={() => setRedundancyTier('dual')}
                  >
                    Dual Region (99.99% SLA)
                  </button>
                  <button
                    className={`radio-pill-btn ${redundancyTier === 'multi' ? 'active' : ''}`}
                    onClick={() => setRedundancyTier('multi')}
                  >
                    Multi-Cloud Active (99.999%)
                  </button>
                </div>
              </div>

              <div className="calc-slider-group">
                <div className="slider-label-row">
                  <span>NOC Operations & Management Tier</span>
                </div>
                <div className="radio-pill-group">
                  <button
                    className={`radio-pill-btn ${supportTier === 'standard' ? 'active' : ''}`}
                    onClick={() => setSupportTier('standard')}
                  >
                    Standard Business Hours
                  </button>
                  <button
                    className={`radio-pill-btn ${supportTier === '24x7' ? 'active' : ''}`}
                    onClick={() => setSupportTier('24x7')}
                  >
                    24/7/365 NOC Monitoring
                  </button>
                  <button
                    className={`radio-pill-btn ${supportTier === 'sre' ? 'active' : ''}`}
                    onClick={() => setSupportTier('sre')}
                  >
                    Enterprise Dedicated SRE
                  </button>
                </div>
              </div>
            </div>

            <div className="glass-card calc-card-right">
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                  Estimated Architecture Tier
                </span>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: '#fff', marginTop: '6px' }}>
                  LNK Enterprise Cluster Specs
                </h4>

                <div className="price-display">
                  <div className="price-amount">${totalMonthlyEstimate.toLocaleString()}</div>
                  <div className="price-period">USD / Month (All-Inclusive Infrastructure)</div>
                </div>

                <div className="summary-rows">
                  <div className="summary-row">
                    <span>Dedicated Compute</span>
                    <strong>{vCpuCores} vCPUs (AMD EPYC)</strong>
                  </div>
                  <div className="summary-row">
                    <span>Storage Tier</span>
                    <strong>{nvmeStorage} TB NVMe-oF Gen5</strong>
                  </div>
                  <div className="summary-row">
                    <span>Redundancy Fabric</span>
                    <strong style={{ textTransform: 'capitalize' }}>{redundancyTier} Region Architecture</strong>
                  </div>
                  <div className="summary-row">
                    <span>Operations SLA</span>
                    <strong style={{ textTransform: 'capitalize' }}>{supportTier} White-Glove Support</strong>
                  </div>
                  <div className="summary-row">
                    <span>Egress Bandwidth</span>
                    <strong>Unmetered 100 Gbps Backbone</strong>
                  </div>
                </div>
              </div>

              <button className="btn-primary" style={{ width: '100%' }} onClick={() => setIsModalOpen(true)}>
                Deploy This Specification <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Latency Map */}
      <section id="latency-map" style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="section-head">
            <div className="badge-glow"><Globe size={14} /> Global Datacenter Fabric</div>
            <h3>Low-Latency Edge Datacenter Nodes</h3>
            <p>Live synchronized round-trip latency pings across LNK IT Infra core availability zones.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }}>
            <div className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '4px' }}>US-EAST (N. Virginia)</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.6rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>
                {pings.usEast} ms
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', marginTop: '4px' }}>🟢 Optimal</div>
            </div>
            <div className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '4px' }}>US-WEST (Oregon)</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.6rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>
                {pings.usWest} ms
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', marginTop: '4px' }}>🟢 Optimal</div>
            </div>
            <div className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '4px' }}>EU-CENTRAL (Frankfurt)</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.6rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>
                {pings.euCentral} ms
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', marginTop: '4px' }}>🟢 Optimal</div>
            </div>
            <div className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '4px' }}>AP-SOUTH (Mumbai)</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.6rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>
                {pings.apSouth} ms
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', marginTop: '4px' }}>🟢 Optimal</div>
            </div>
            <div className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '4px' }}>AP-EAST (Tokyo)</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.6rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>
                {pings.apEast} ms
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', marginTop: '4px' }}>🟢 Optimal</div>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Multi-Account Setup Assistant Section */}
      <section id="github-setup" className="git-section">
        <div className="container">
          <div className="glass-card git-panel">
            <div className="git-header-row">
              <div>
                <div className="badge-glow" style={{ marginBottom: '8px' }}>
                  <Terminal size={14} /> Multi-Account GitHub Integration
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: '#fff' }}>
                  Configured SSH Key & Remote Setup for LNK IT Infra
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  Your system now has a dedicated SSH key and SSH Host alias (<code>github-lnk</code>) so you can push and pull without conflicting with your other GitHub ID.
                </p>
              </div>
            </div>

            <div className="git-steps-grid">
              <div className="git-step-box">
                <h5>1. Add Dedicated SSH Public Key</h5>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-dim)' }}>
                  Add this public key to your <strong>LNK IT Infra</strong> GitHub account under <em>Settings &rarr; SSH and GPG keys</em>:
                </p>
                <div className="code-snippet">
                  {sshPublicKey}
                </div>
                <button
                  className="btn-secondary"
                  style={{ width: '100%', marginTop: '12px', padding: '8px' }}
                  onClick={() => copyToClipboard(sshPublicKey, 'key')}
                >
                  {copiedKey ? <Check size={16} color="var(--accent-emerald)" /> : <Copy size={16} />}
                  {copiedKey ? 'Copied Public Key!' : 'Copy SSH Public Key'}
                </button>
              </div>

              <div className="git-step-box">
                <h5>2. SSH Host Alias Configured</h5>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-dim)' }}>
                  Saved in <code>~/.ssh/config</code>:
                </p>
                <div className="code-snippet" style={{ color: 'var(--text-main)', fontSize: '0.75rem' }}>
                  Host github-lnk<br />
                  &nbsp;&nbsp;HostName github.com<br />
                  &nbsp;&nbsp;User git<br />
                  &nbsp;&nbsp;IdentityFile ~/.ssh/id_ed25519_lnk<br />
                  &nbsp;&nbsp;IdentitiesOnly yes
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', marginTop: '12px' }}>
                  ✓ Dedicated key isolated from your primary GitHub profile
                </div>
              </div>

              <div className="git-step-box">
                <h5>3. Set Local Repo Identity</h5>
                <div style={{ marginBottom: '8px' }}>
                  <input
                    type="text"
                    placeholder="Enter LNK GitHub Username"
                    value={githubUser}
                    onChange={(e) => setGithubUser(e.target.value)}
                    className="form-input"
                    style={{ padding: '8px 10px', fontSize: '0.8rem', marginBottom: '8px' }}
                  />
                  <input
                    type="email"
                    placeholder="Enter LNK GitHub Email"
                    value={githubEmail}
                    onChange={(e) => setGithubEmail(e.target.value)}
                    className="form-input"
                    style={{ padding: '8px 10px', fontSize: '0.8rem' }}
                  />
                </div>
                <button
                  className="btn-primary"
                  style={{ width: '100%', padding: '8px', fontSize: '0.825rem' }}
                  onClick={() => copyToClipboard(gitSetupSnippet, 'cmd')}
                >
                  {copiedCommand ? <Check size={16} /> : <Copy size={16} />}
                  {copiedCommand ? 'Copied Git Commands!' : 'Copy Setup Script'}
                </button>
              </div>
            </div>

            <div style={{ background: 'rgba(0,0,0,0.5)', borderRadius: 'var(--radius-md)', padding: '16px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>
                  PowerShell Commands for D:\LNK-IT-Infra
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                  Repository Path: D:\LNK-IT-Infra
                </span>
              </div>
              <pre style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '0.775rem', color: '#94a3b8', whiteSpace: 'pre-wrap' }}>
                {gitSetupSnippet}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Audit Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setIsModalOpen(false)}>
              <X size={20} />
            </button>

            {!modalSubmitted ? (
              <div>
                <div className="badge-glow" style={{ marginBottom: '12px' }}>
                  <ShieldCheck size={14} /> Architecture Review
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: '#fff', marginBottom: '8px' }}>
                  Request Enterprise Infrastructure Audit
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>
                  Our Principal Infrastructure Architects will evaluate your latency bottlenecks, multi-cloud redundancy, and security posture.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setModalSubmitted(true);
                  }}
                >
                  <div className="form-group">
                    <label>Company / Organization Name</label>
                    <input type="text" required placeholder="e.g. Acme Global Logistics" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label>Work Email</label>
                    <input type="email" required placeholder="infra-lead@acme.com" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label>Current Cloud / Infrastructure Environment</label>
                    <select className="form-input">
                      <option>Hybrid On-Prem + AWS / Azure</option>
                      <option>100% Cloud-Native (Multi-Region)</option>
                      <option>Colocation Datacenter Migration</option>
                      <option>Kubernetes Bare-Metal Edge</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Primary Priority</label>
                    <select className="form-input">
                      <option>Zero-Downtime High Availability & Disaster Recovery</option>
                      <option>Microsecond NVMe Storage & Database IOPS</option>
                      <option>Zero-Trust Security & SOC Compliance (SOC2 / ISO)</option>
                      <option>SD-WAN Branch Peering & Cost Optimization</option>
                    </select>
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '12px' }}>
                    Confirm Audit Consultation
                  </button>
                </form>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '24px 0' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(16,185,129,0.15)', border: '1px solid var(--accent-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: 'var(--accent-emerald)' }}>
                  <Check size={32} />
                </div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: '#fff', marginBottom: '8px' }}>
                  Consultation Request Received
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>
                  An LNK IT Infra Principal Solutions Architect will reach out with your custom architecture diagram and preliminary sizing report.
                </p>
                <button className="btn-secondary" onClick={() => { setIsModalOpen(false); setModalSubmitted(false); }}>
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer-wrap">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="brand-logo" style={{ marginBottom: '16px' }}>
                <div className="logo-icon-box">
                  <Server size={22} />
                </div>
                <div className="brand-info">
                  <h1>LNK IT INFRA</h1>
                  <span>Enterprise Hybrid Architecture</span>
                </div>
              </div>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.875rem', lineHeight: '1.6', maxWidth: '320px' }}>
                Engineering hyper-resilient hybrid multi-cloud fabrics, low-latency SD-WAN routing, and autonomous 24/7 SRE operations for global enterprises.
              </p>
            </div>

            <div className="footer-col">
              <h6>Infrastructure</h6>
              <ul className="footer-links">
                <li><a href="#topology">Edge Anycast DNS</a></li>
                <li><a href="#topology">Autonomous Kubernetes</a></li>
                <li><a href="#topology">NVMe-oF SAN Storage</a></li>
                <li><a href="#topology">Zero-Trust EDR / SOC</a></li>
                <li><a href="#topology">Multi-Cloud Interconnect</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h6>Solutions</h6>
              <ul className="footer-links">
                <li><a href="#solutions">Hybrid Cloud Transit</a></li>
                <li><a href="#solutions">Carrier-Neutral SD-WAN</a></li>
                <li><a href="#solutions">Ransomware-Proof Backups</a></li>
                <li><a href="#solutions">Declarative GitOps (ArgoCD)</a></li>
                <li><a href="#solutions">24/7 Managed NOC SLA</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h6>Developer & Git</h6>
              <ul className="footer-links">
                <li><a href="#github-setup">Multi-Account SSH Key</a></li>
                <li><a href="#github-setup">SSH Host Config Guide</a></li>
                <li><a href="#calculator">Infrastructure Sizer</a></li>
                <li><a href="#latency-map">Global Network Status</a></li>
                <li><a href="https://github.com" target="_blank" rel="noreferrer">GitHub Documentation</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div>
              &copy; {new Date().getFullYear()} LNK IT Infra. All rights reserved. SOC 2 Type II • ISO 27001 • PCI-DSS Certified.
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="pulse-dot"></span>
              <span>Global Mesh Status: 100% Operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
