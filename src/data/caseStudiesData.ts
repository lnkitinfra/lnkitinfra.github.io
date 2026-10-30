export interface CaseStudy {
  id: string;
  client: string;
  city: string;
  industry: string;
  scale: string;
  timeline: string;
  heroImage: string;
  challenge: string;
  solution: string;
  results: string[];
  equipmentInstalled: string[];
  quote: {
    text: string;
    author: string;
    designation: string;
  };
}

export const CASE_STUDIES_DETAILED: CaseStudy[] = [
  {
    id: 'mumbai-wealth-management',
    client: 'Apex Financial Advisors & Wealth Management',
    city: 'Mumbai (Bandra Kurla Complex - BKC)',
    industry: 'Financial Services & Investment',
    scale: '160 Employees • 2 Floor Corporate Office',
    timeline: 'Completed in 6 Days (Over Weekend)',
    heroImage: '/images/datacenter.jpg',
    challenge: 'The client experienced frequent video conference call drops and slow Tally accounting access. Their server room had a 10-year-old tangle of loose, unlabeled network cables. Additionally, their primary broadband line went down 2-3 times every month, halting financial transactions.',
    solution: 'Our team carried out complete structural recabling with CommScope Cat6A, installed an organized 42U server rack with color-coded patch cords, deployed a Sophos XGS 126 firewall with dual Airtel and Tata auto-failover, and added Aruba Instant On Wi-Fi 6 access points across both floors.',
    results: [
      'Zero network downtime recorded over 14 consecutive months',
      'Dual-ISP failover automatically switches lines in 1.8 seconds with zero lost client calls',
      'Cable tracing time reduced from 2 hours to under 30 seconds due to clear laser labeling',
      'Full compliance with SEBI and RBI cybersecurity audit guidelines'
    ],
    equipmentInstalled: [
      'CommScope Cat6A Structured Cabling (320 Points)',
      'Sophos XGS 126 Security Firewall with 3-Yr Central Subscription',
      '4x Aruba Instant On 1930 24-Port PoE+ Switches',
      '8x Aruba Instant On AP22 Wi-Fi 6 Ceiling Access Points',
      'APC 3kVA Online UPS with Extended Battery Bank'
    ],
    quote: {
      text: 'LNK IT Infra re-cabled our entire office server room and set up strong Wi-Fi across 2 floors in BKC. Their team worked over the weekend so our staff arrived Monday morning to a clean, super-fast network with zero work disruption.',
      author: 'Kavita Iyer',
      designation: 'Head of Operations, Apex Financial Advisors'
    }
  },
  {
    id: 'pune-auto-parts-manufacturing',
    client: 'Precision Automotive Components Pvt. Ltd.',
    city: 'Pune (Magarpatta City & Chakan Industrial Area)',
    industry: 'Industrial & Automotive Manufacturing',
    scale: '15-Acre Factory Campus • 6 Production Sheds',
    timeline: 'Completed in 14 Days',
    heroImage: '/images/noc.jpg',
    challenge: 'A heavy machinery factory campus had continuous network disconnections between production sheds. Forklifts kept damaging overhead plastic cables, Wi-Fi would not penetrate steel roofing, and blind spots around outdoor loading yards led to inventory tracking disputes.',
    solution: 'We laid armored underground optical fiber links in heavy-duty HDPE conduits between all 6 production sheds, deployed 120 Hikvision IP cameras with long-range night vision, and installed ruggedized outdoor industrial Wi-Fi access points for barcode scanning guns.',
    results: [
      '100% stable campus-wide optical fiber link immune to electrical machine noise',
      'Full HD camera coverage across all loading docks, store sheds, and machine lines on mobile',
      'Warehouse inventory scan speed improved by 40% with zero scanner disconnects',
      'Centralized biometric attendance linked between factory gates and head office HR'
    ],
    equipmentInstalled: [
      '4,500 Meters Armored 6-Core Single-Mode Optical Fiber',
      '120x Hikvision 4MP ColorVu Day/Night IP Security Cameras',
      '4x Hikvision 32-Channel 4K NVR with WD Purple Surveillance Hard Drives',
      '6x Aruba Rugged Outdoor Industrial Access Points',
      'ZKTeco Biometric Face Recognition Terminals with Heavy-Duty Turnstile Gates'
    ],
    quote: {
      text: 'Before LNK IT Infra took over, we had broken network wires every month from heavy machinery. Their armored fiber and camera setup has been rock-solid for over two years now.',
      author: 'Rajesh Kulkarni',
      designation: 'VP of Manufacturing & Plant Operations'
    }
  },
  {
    id: 'bengaluru-cloud-tech',
    client: 'Omniverse Cloud Technologies',
    city: 'Bengaluru (Outer Ring Road - Bellandur)',
    industry: 'Software & Technology Services',
    scale: '450 Software Engineers • 4 Office Floors',
    timeline: 'Completed in 10 Days',
    heroImage: '/images/access_control.jpg',
    challenge: 'Rapid team expansion led to severe Wi-Fi congestion. During daily engineering standups, video calls constantly stuttered and froze. Visiting clients were forced onto the internal staff network due to lack of an isolated guest portal, posing a security risk.',
    solution: 'We engineered a high-capacity HPE Aruba network switch fabric with 10Gbps fiber backbone between floors, deployed 18 high-density Aruba AP-505 Wi-Fi access points with client steering, and created an isolated SMS-OTP guest portal backed by a dedicated 500Mbps symmetrical leased line.',
    results: [
      'Flawless Zoom and Teams video calls with zero packet loss across 400+ concurrent users',
      'Symmetrical 500Mbps upload and download speeds for fast code repo cloning and cloud builds',
      'Complete network isolation between guest devices, engineers, and financial servers',
      'Onsite resident engineer provided through LNK IT Infra AMC for immediate daily support'
    ],
    equipmentInstalled: [
      '18x Aruba AP-505 High-Density Campus Wi-Fi Access Points',
      '6x Aruba Instant On 1960 48-Port Stackable PoE+ Switches',
      'Dedicated 500Mbps Symmetrical Leased Line Internet (Airtel Business)',
      'Touchless eSSL Face Recognition Attendance at all 4 floor elevator lobbies',
      'Fortinet FortiGate 100F Enterprise Firewall Appliance'
    ],
    quote: {
      text: 'Our 400 engineers rely on stable internet every single minute. LNK IT Infra delivered a network setup that handles our heaviest video calls and code pushes without breaking a sweat.',
      author: 'Sunil Nair',
      designation: 'Director of Technology Infrastructure'
    }
  }
];
