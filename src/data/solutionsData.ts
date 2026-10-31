import {
  Server,
  ShieldCheck,
  Cpu,
  Network,
  Wifi,
  PhoneCall,
  Video,
  Fingerprint,
  Cloud,
  Radio,
  Monitor,
  Mail,
  Wrench,
  HardDrive
} from 'lucide-react';

export interface DetailedService {
  id: string;
  category: string;
  title: string;
  tagline: string;
  summary: string;
  icon: typeof Server;
  highlight: string;
  idealFor: string;
  problemsSolved: string[];
  whatWeDo: string[];
  processSteps: { step: string; title: string; desc: string }[];
  hardwareUsed: string[];
  faq: { q: string; a: string }[];
}

export const DETAILED_SERVICES: DetailedService[] = [
  {
    id: 'cabling',
    category: 'Core Infrastructure',
    title: 'Structured Network Cabling & Server Racks',
    tagline: 'Neat, Tangle-Free Office Wiring with Zero Disconnections',
    summary: 'We plan, lay, and neatly terminate high-speed Cat6, Cat6A, and optical fiber network cables for computers, printers, Wi-Fi access points, and server rooms. Every line is carefully tested and verified for full gigabit transmission.',
    icon: Network,
    highlight: 'Neat & Certified Wiring',
    idealFor: 'New office setups, expanding floors, and cleaning up old messy server rooms.',
    problemsSolved: [
      'Loose, dangling wires under desks that get kicked or unplugged accidentally',
      'Unlabeled cables that make troubleshooting network problems take hours',
      'Slow internet speed caused by cheap, poorly crimped, or bent cables',
      'Messy, overheating server racks with tangled cables blocking airflow'
    ],
    whatWeDo: [
      'Supply and lay genuine Cat6 and Cat6A cables inside protective PVC conduits and raceways',
      'Dress and organize cables neatly inside lockable floor-standing or wall-mount server racks',
      'Punch down all lines into labeled patch panels with color-coded RJ45 patch cords',
      'Pull multi-core optical fiber cables between different floors or separate office buildings',
      'Conduct wire-map and continuity testing verifying full gigabit and 10-gigabit speeds'
    ],
    processSteps: [
      { step: '01', title: 'Site Inspection & CAD Planning', desc: 'Our engineer visits your office to count desk points, measure cable distances, and locate the ideal server rack position.' },
      { step: '02', title: 'Conduit & Cable Pulling', desc: 'We pull cables through hidden wall and ceiling conduits without disturbing your interior decoration.' },
      { step: '03', title: 'Rack Dressing & Labeling', desc: 'Every cable is combed neatly, laced to cable management arms, and tagged with durable printed labels.' },
      { step: '04', title: 'Port Testing & Verification', desc: 'Every single RJ45 port is tested for continuity, correct pinout, and full speed before handover.' }
    ],
    hardwareUsed: ['Schneider Electric', 'Molex Premise Networks', 'CommScope Systimax', 'D-Link Enterprise'],
    faq: [
      { q: 'Will cable installation disrupt our normal working hours?', a: 'No. For active offices, our team does noisy drilling and cable pulling in the evenings or on weekends so your employees work without disturbance.' },
      { q: 'Should we choose Cat6 or Cat6A for our office?', a: 'Cat6 supports up to 1Gbps easily up to 100 meters, which is ideal for standard office PCs. For high-speed servers, video editing, or future-proofing for 10Gbps, Cat6A is recommended.' },
      { q: 'Can you clean up our existing server room without turning off the internet?', a: 'Yes. We plan a phased reorganization, tracing and relabeling lines one switch at a time during an agreed maintenance window.' }
    ]
  },
  {
    id: 'wifi',
    category: 'Core Infrastructure',
    title: 'Commercial Office Wi-Fi Solutions',
    tagline: 'High-Density Wi-Fi 6 with Seamless Roaming in Every Room',
    summary: 'Commercial-grade Wi-Fi designed specifically for corporate offices, co-working spaces, and conference halls. Walk between meeting rooms and floors without dropping Zoom calls, even when 100+ devices connect at once.',
    icon: Wifi,
    highlight: 'Zero Dead-Zone Wi-Fi',
    idealFor: 'Offices with 20 to 500+ employees, conference rooms, cafes, and open work floors.',
    problemsSolved: [
      'Wi-Fi signal drops when walking from your desk to the conference room',
      'Internet slowing down to a crawl during team all-hands meetings',
      'Dead zones in executive cabins, corner meeting rooms, or cafeteria areas',
      'Visitors asking for Wi-Fi passwords and accessing sensitive internal company files'
    ],
    whatWeDo: [
      'Radio frequency (RF) heat-mapping to place access points with zero blind spots',
      'Install ceiling-mounted Wi-Fi 6 access points with smart beamforming technology',
      'Configure seamless 802.11k/v/r roaming so laptops switch APs without dropping calls',
      'Create a branded guest portal with SMS or OTP login, completely separated from internal servers',
      'Bandwidth management so video calls get priority over personal video streaming'
    ],
    processSteps: [
      { step: '01', title: 'Wi-Fi Signal Survey', desc: 'We measure wall thickness and signal interference to calculate the exact number of APs needed.' },
      { step: '02', title: 'Ceiling Mounting & PoE Cabling', desc: 'Access points are neatly mounted to ceiling tiles and powered via network cable (PoE).' },
      { step: '03', title: 'Controller Configuration', desc: 'Setup of central cloud dashboard, guest portals, and VLAN separation.' },
      { step: '04', title: 'Walk-Through Roaming Test', desc: 'We conduct live video calls while walking across the entire floor to confirm zero dropped packets.' }
    ],
    hardwareUsed: ['HPE Aruba Instant On', 'Sophos AP6', 'Fortinet FortiAP', 'Ubiquiti UniFi Enterprise'],
    faq: [
      { q: 'Why is commercial Wi-Fi better than normal home routers?', a: 'Home routers freeze when more than 15-20 devices connect. Commercial access points are designed for 75 to 150 active devices simultaneously without overheating or slowing down.' },
      { q: 'Can we restrict social media or video streaming on office Wi-Fi?', a: 'Yes, we can configure rules to give full priority to Zoom, Teams, and CRM software while capping bandwidth for YouTube or entertainment sites.' }
    ]
  },
  {
    id: 'firewall',
    category: 'Cyber Defense',
    title: 'Next-Gen Firewall & Cyber Security',
    tagline: 'Protect Your Business from Ransomware, Viruses & Internet Downtime',
    summary: 'Supply, deployment, and ongoing management of Sophos, Fortinet, and SonicWall firewalls. We protect your company data from cyber attacks, provide safe work-from-home VPN access, and automatically switch internet lines if your primary ISP goes down.',
    icon: ShieldCheck,
    highlight: 'Active Cyber Defense',
    idealFor: 'Companies handling financial data, client files, accounting software, and remote staff.',
    problemsSolved: [
      'Ransomware encrypting server files and demanding ransom payments',
      'Office internet going completely dead when one service provider has a cable cut',
      'Employees accidentally clicking phishing emails and downloading malware',
      'Remote employees unable to access office servers securely from home'
    ],
    whatWeDo: [
      'Install enterprise firewall appliances with active intrusion prevention (IPS) and antivirus',
      'Set up dual-ISP automatic failover: if Airtel goes down, Tata takes over in under 2 seconds',
      'Configure secure SSL-VPN with multi-factor authentication (MFA) for remote employees',
      'Block dangerous, malicious, and non-work websites to protect bandwidth and productivity',
      'Provide monthly cyber security reports showing blocked attacks and top internet bandwidth users'
    ],
    processSteps: [
      { step: '01', title: 'Security Risk Audit', desc: 'We evaluate your current internet connections, open ports, and remote access vulnerabilities.' },
      { step: '02', title: 'Firewall Sizing & Supply', desc: 'We deliver genuine hardware with official manufacturer subscriptions (Sophos XGS / FortiGate).' },
      { step: '03', title: 'Policy Setup & Cutover', desc: 'We configure security rules, dual-WAN failover, and VPN accounts during scheduled non-working hours.' },
      { step: '04', title: 'Monitoring & Alert Setup', desc: 'We link alerts to your IT administrator and our support desk for 24/7 incident alerts.' }
    ],
    hardwareUsed: ['Sophos XGS Series', 'Fortinet FortiGate', 'SonicWall TZ Series', 'Cisco Firepower'],
    faq: [
      { q: 'What is dual-internet failover and do we need two internet lines?', a: 'Dual-internet failover connects two different providers (e.g. Airtel and Tata) to your firewall. If one line has an outage, the firewall automatically shifts all traffic to the other line without disconnecting your team.' },
      { q: 'How does work-from-home VPN work?', a: 'Employees install a secure app on their laptops. After entering their password and phone OTP, they can safely access Tally, office servers, and files as if they were sitting at their office desk.' }
    ]
  },
  {
    id: 'datacenter',
    category: 'Core Infrastructure',
    title: 'Server Rooms & Battery Power Backup',
    tagline: 'Safe, Continuous Operation for Your Business Software',
    summary: 'Turnkey setup of office server rooms and network hubs. We install heavy-duty server racks, online battery backups (UPS), environmental monitoring, and central network storage (NAS) so your accounting and ERP software never crashes.',
    icon: Server,
    highlight: 'Continuous 24/7 Uptime',
    idealFor: 'Offices hosting local Tally, ERP, database servers, or central file storage.',
    problemsSolved: [
      'Sudden power cuts corrupting Tally database files or causing server reboots',
      'Servers overheating inside closed cupboards with zero ventilation',
      'Unauthorized staff or visitors having physical access to sensitive company servers',
      'Expensive IT hardware damaged by electrical voltage fluctuations'
    ],
    whatWeDo: [
      'Install 18U, 24U, and 42U lockable server racks with tempered glass doors and cooling fans',
      'Supply and install double-conversion online UPS systems (APC / Schneider) for zero-switchover time',
      'Deploy central shared storage (NAS) with RAID disk redundancy to prevent data loss',
      'Install digital temperature and humidity monitors with automatic SMS/email alerts',
      'Provide neat cable distribution, power distribution units (PDU), and server earthing'
    ],
    processSteps: [
      { step: '01', title: 'Power & Heat Calculation', desc: 'We calculate total wattage, UPS runtime requirements, and heat output of all your equipment.' },
      { step: '02', title: 'Rack Assembly & Grounding', desc: 'We install the server rack, mount heavy equipment at the base, and verify proper earthing.' },
      { step: '03', title: 'UPS & Power Distribution', desc: 'Online UPS is connected with dedicated battery banks and dual-input power distribution units.' },
      { step: '04', title: 'Server Setup & Testing', desc: 'We install servers, configure RAID disk arrays, test power-cut failover, and verify thermal airflow.' }
    ],
    hardwareUsed: ['APC by Schneider Electric', 'Dell PowerEdge', 'HPE ProLiant', 'QNAP Enterprise NAS', 'Vertiv Liebert'],
    faq: [
      { q: 'What is the difference between offline and online UPS?', a: 'Standard offline UPS has a brief delay when power fails, which can shut down sensitive servers. Online UPS provides continuous clean power with zero switchover time, protecting your equipment completely.' }
    ]
  },
  {
    id: 'networking',
    category: 'Core Infrastructure',
    title: 'Office Network Switches & Routers',
    tagline: 'Fast, Stable Connections Linking Every Device',
    summary: 'High-performance commercial network switches from HPE Aruba and Cisco that link computers, printers, Wi-Fi points, intercoms, and CCTV cameras together with zero lag and maximum throughput.',
    icon: Cpu,
    highlight: 'Full-Speed Gigabit',
    idealFor: 'Multi-device offices, high-traffic computer floors, and media teams.',
    problemsSolved: [
      'Network lag and video buffering caused by unmanaged, cheap plastic switches',
      'Needing separate power adapters at every ceiling point for cameras and Wi-Fi',
      'Network broadcast storms bringing down the entire office internet',
      'Lack of separation between guest users and financial accounts computers'
    ],
    whatWeDo: [
      'Deploy 24-port and 48-port gigabit managed switches with 10G optical fiber uplinks',
      'Provide Power-over-Ethernet (PoE+) to power cameras, phones, and APs directly through network cables',
      'Configure VLANs to isolate sensitive departments (Accounts, Management, Guests, Staff)',
      'Set Quality of Service (QoS) rules so voice and video calls always get top network priority',
      'Implement redundant switch links to prevent single points of network failure'
    ],
    processSteps: [
      { step: '01', title: 'Network Topology Design', desc: 'We map out your core, distribution, and access switches for optimal traffic flow.' },
      { step: '02', title: 'Rack Mounting & Patching', desc: 'Switches are mounted in server racks and connected with labeled patch cables.' },
      { step: '03', title: 'VLAN & Security Setup', desc: 'We configure virtual networks, port security, and PoE power budgets.' },
      { step: '04', title: 'Throughput & Stress Testing', desc: 'We test maximum data transfer between floors and verify zero packet drop.' }
    ],
    hardwareUsed: ['HPE Aruba Instant On 1930 / 1960', 'Cisco Catalyst 1000', 'D-Link Smart Managed'],
    faq: [
      { q: 'What is PoE (Power over Ethernet)?', a: 'PoE delivers electric power through the network cable itself. This means your CCTV cameras, IP phones, and Wi-Fi access points do not need separate power plugs on the ceiling or wall.' }
    ]
  },
  {
    id: 'cctv',
    category: 'Smart Surveillance',
    title: 'CCTV Security Cameras & Surveillance',
    tagline: 'Clear HD & 4K Video with Live Mobile Viewing',
    summary: 'Professional high-definition security camera systems from Hikvision and CP Plus. Monitor your office reception, work floor, server room, and warehouse live on your smartphone or PC anytime, with 30 to 90 days of secure video recording.',
    icon: Video,
    highlight: 'Mobile Live View',
    idealFor: 'Offices, retail stores, warehouses, factories, and commercial buildings.',
    problemsSolved: [
      'Blurry, grainy camera video where faces or vehicle numbers cannot be identified',
      'Cameras stopping recording without anyone noticing until an incident happens',
      'Unable to view office camera video when traveling or working from home',
      'Cameras failing in dark rooms, corridors, or outdoor rain'
    ],
    whatWeDo: [
      'Install 4MP, 5MP, and 4K IP security cameras with crystal-clear night vision',
      'Deploy Network Video Recorders (NVR) with surveillance-grade Western Digital Purple hard drives',
      'Set up secure smartphone apps (Hik-Connect / CP Plus) for instant live view from anywhere',
      'Configure smart AI alerts for line crossing, motion detection after office hours, and intrusion',
      'Cover critical areas: entrance doors, reception desks, cash counters, server rooms, and parking'
    ],
    processSteps: [
      { step: '01', title: 'Camera Angle Planning', desc: 'We identify blind spots, optimal lens focal lengths, and lighting conditions at your site.' },
      { step: '02', title: 'Conduit & PoE Wiring', desc: 'Neat cabling through conduits to ensure no wires can be tampered with or cut.' },
      { step: '03', title: 'NVR & Hard Drive Setup', desc: 'Storage calculation to ensure you get your required 30, 60, or 90 days of playback.' },
      { step: '04', title: 'Mobile App Configuration', desc: 'We configure secure app access on management mobile phones with encrypted passwords.' }
    ],
    hardwareUsed: ['Hikvision Pro Series', 'CP Plus Coral', 'Dahua Technology', 'Western Digital Purple Storage'],
    faq: [
      { q: 'How many days of recording will the system store?', a: 'We calculate hard drive size based on your camera count and resolution. We typically configure 30 to 90 days of continuous recording before it safely loops.' },
      { q: 'Can I view cameras on multiple phones?', a: 'Yes. Authorized managers and business owners can install the app on their smartphones and view live or recorded video securely with individual logins.' }
    ]
  },
  {
    id: 'biometrics',
    category: 'Smart Surveillance',
    title: 'Biometric Attendance & Smart Door Locks',
    tagline: 'Accurate Staff Attendance & Secure Glass Door Entry',
    summary: 'Touchless facial recognition and fingerprint attendance systems integrated with automatic glass door locks and video door phones for your office front entrance.',
    icon: Fingerprint,
    highlight: 'Automated Attendance',
    idealFor: 'Offices, IT companies, clinics, warehouses, and corporate facilities.',
    problemsSolved: [
      'Buddy punching where employees clock in for absent colleagues',
      'Manual attendance registers that require hours of HR work each month for payroll',
      'Strangers or unauthorized sales people walking directly into your private office work area',
      'Employees losing physical door keys or getting locked out'
    ],
    whatWeDo: [
      'Install touchless face recognition and fingerprint biometric terminals with <0.5s recognition speed',
      'Install heavy-duty electromagnetic glass door locks with emergency exit buttons and remote key fobs',
      'Integrate attendance data directly with your HR, payroll, and salary calculation software',
      'Configure automatic door unlock during building fire alarms for complete employee safety',
      'Deploy two-way video door phones at reception to verify visitors before unlocking the door'
    ],
    processSteps: [
      { step: '01', title: 'Door & Lock Assessment', desc: 'We inspect your glass, wooden, or aluminum door frame to select the exact right electromagnetic bracket.' },
      { step: '02', title: 'Lock & Machine Installation', desc: 'We neatly install the reader, internal release switch, emergency break-glass, and power supply.' },
      { step: '03', title: 'HR Software Setup', desc: 'We install the attendance management software and configure shifts, late marks, and holidays.' },
      { step: '04', title: 'Staff Enrollment & Training', desc: 'We help enroll employee faces/fingerprints and train your HR admin on generating reports.' }
    ],
    hardwareUsed: ['eSSL Security', 'ZKTeco', 'Hikvision Access Control', 'Realtime Biometrics'],
    faq: [
      { q: 'What happens to the door lock if the power goes out?', a: 'We connect a backup battery unit to the lock so it stays operational during outages. In case of an emergency, a manual break-glass unit or exit button ensures doors unlock instantly.' }
    ]
  },
  {
    id: 'epabx',
    category: 'Voice & Telecom',
    title: 'Office Intercom & Phone Systems (EPABX)',
    tagline: 'Clear Calling Between Desks & Professional Customer Greetings',
    summary: 'Modern telephone and intercom systems from Syntel and NEC. Easily call colleagues across desks, transfer customer calls smoothly, and greet incoming callers with a professional voice message.',
    icon: PhoneCall,
    highlight: 'Easy Office Calling',
    idealFor: 'Small offices, law firms, clinics, corporate offices, and customer service teams.',
    problemsSolved: [
      'Employees having to shout or walk across desks to speak with colleagues',
      'Incoming customer calls getting disconnected when trying to transfer them',
      'No professional welcome message when customers call your company number',
      'Missing important customer phone calls when key staff are away from their desk'
    ],
    whatWeDo: [
      'Install Syntel NEO DX and NEC SL2100 intercom systems for 6 to 200+ employee desk phones',
      'Configure multi-level welcome voice menu (IVR): "Press 1 for Sales, Press 2 for Support"',
      'Set up call forwarding so unanswered desk calls ring on the employee’s mobile phone',
      'Support traditional telephone lines, PRI lines, and modern internet calling (VoIP)',
      'Provide call recording capability for training, quality, and customer service records'
    ],
    processSteps: [
      { step: '01', title: 'Line & Extension Sizing', desc: 'We count incoming external telephone lines and internal desk extensions needed.' },
      { step: '02', title: 'Telephony Wiring & Punching', desc: 'We lay telephone pairs or RJ45 network cabling to every desk position.' },
      { step: '03', title: 'EPABX Programming', desc: 'We record your custom company welcome greeting, configure hunt groups, and set speed dials.' },
      { step: '04', title: 'Testing & Handover', desc: 'We test call transfers, conference calling, and voice clarity across every desk instrument.' }
    ],
    hardwareUsed: ['Syntel NEO DX Series', 'NEC SL2100', 'Panasonic Telephony', 'Grandstream IP PBX'],
    faq: [
      { q: 'Can we record our own custom company greeting message?', a: 'Yes. You can record a message with your company name and department options (e.g., "Welcome to LNK IT Infra. Press 1 for Sales..."), which we upload into the system.' }
    ]
  },
  {
    id: 'ill-mpls',
    category: 'Voice & Telecom',
    title: 'Dedicated Leased Line Internet',
    tagline: 'Guaranteed 100% Symmetrical Speed with 99.9% Uptime',
    summary: 'Enterprise leased line internet connections with equal upload and download speeds, backed by a 99.9% uptime SLA and multi-branch network links connecting your Pune office with regional branches through partnerships with Airtel, Tata, and Jio.',
    icon: Radio,
    highlight: '99.9% Uptime SLA',
    idealFor: 'Offices requiring guaranteed fast internet for video conferencing, ERP, and cloud software.',
    problemsSolved: [
      'Broadband internet slowing down during peak evening and afternoon hours',
      'Broadband having fast download but very slow upload speeds that make video meetings lag',
      'Waiting 24 to 48 hours for broadband fiber cuts to be repaired by local cable operators',
      'Connecting branch offices securely with high-latency internet'
    ],
    whatWeDo: [
      'Provide dedicated 1:1 symmetrical internet bandwidth (never shared with other buildings)',
      'Deliver guaranteed 99.9% uptime with legally backed Service Level Agreements (SLA)',
      'Offer round-the-clock proactive monitoring that detects line cuts before your office notices',
      'Set up secure point-to-point and MPLS links between headquarters and factory branches',
      'Coordinate turnkey fiber pulling, terminal box installation, and live IP configuration'
    ],
    processSteps: [
      { step: '01', title: 'Feasibility & Sizing', desc: 'We check fiber feasibility at your building address across top telecom carriers (Airtel, Tata, Jio).' },
      { step: '02', title: 'Direct Fiber Provisioning', desc: 'Dedicated armored fiber line is brought directly into your office server rack.' },
      { step: '03', title: 'Static IP & Router Handover', desc: 'We configure static IP blocks on your firewall and test symmetrical upload/download speeds.' },
      { step: '04', title: '24/7 SLA Monitoring', desc: 'Your connection is monitored 24/7 with a dedicated enterprise relationship manager.' }
    ],
    hardwareUsed: ['Tata Teleservices', 'Airtel Business', 'Jio Enterprise', 'Vodafone Idea Business'],
    faq: [
      { q: 'How is a leased line different from normal commercial broadband?', a: 'Broadband is shared with neighbors (asymmetrical, slow upload). A leased line is an exclusive 1:1 dedicated fiber cable reserved only for your company with equal upload/download speeds and guaranteed 4-hour repair SLA.' }
    ]
  },
  {
    id: 'cloud-backup',
    category: 'Cloud & Data',
    title: 'Automated Data Backup & Cloud Setup',
    tagline: 'Never Lose Your Important Accounting & Business Files',
    summary: 'Safe, automated daily cloud backups and official Microsoft 365 business email setup. Keep your accounting files (Tally), customer databases, and documents safe from computer crashes, accidental deletion, and ransomware.',
    icon: Cloud,
    highlight: 'Safe File Protection',
    idealFor: 'Small and medium businesses using Tally, accounting software, and business emails.',
    problemsSolved: [
      'Hard drive crashes wiping out years of Tally financial records and customer bills',
      'Ransomware viruses locking company files and demanding payment',
      'Staff using free personal Gmail/Yahoo addresses instead of professional company emails',
      'Losing critical files when an employee leaves the company or laptop is stolen'
    ],
    whatWeDo: [
      'Configure automated daily cloud backup for Tally, billing data, and key shared folders',
      'Create ransomware-proof, encrypted backup copies that cannot be altered or deleted',
      'Set up official Microsoft 365 or Google Workspace business emails (name@yourcompany.com)',
      'Quick file recovery: restore lost files or an entire computer in under 15 minutes',
      'Provide secure remote access so management can safely view files from any location'
    ],
    processSteps: [
      { step: '01', title: 'Data Audit', desc: 'We locate where your critical business data is stored (Tally folders, documents, databases).' },
      { step: '02', title: 'Backup Schedule Configuration', desc: 'We set up silent, automatic backups every evening to secure encrypted cloud vaults.' },
      { step: '03', title: 'Email Domain Setup', desc: 'We configure your official company domain with Microsoft 365, SPF, and DKIM anti-spam security.' },
      { step: '04', title: 'Disaster Recovery Drill', desc: 'We perform a test restore to verify that your company files can be recovered smoothly anytime.' }
    ],
    hardwareUsed: ['Veeam Backup & Replication', 'Acronis Cyber Protect', 'Microsoft 365 Business', 'Amazon Web Services (AWS)'],
    faq: [
      { q: 'Will the daily backup slow down our computers while working?', a: 'No. Backups are scheduled to run quietly in the background during lunch hours or after office closing at 8 PM, using minimal internet bandwidth.' },
      { q: 'If an office computer gets infected by ransomware, is our cloud backup safe?', a: 'Yes. Our backups use immutable storage, which means once a backup copy is saved in the cloud, it cannot be edited, encrypted, or deleted by any virus.' }
    ]
  },
  {
    id: 'server-installation',
    category: 'Server & IT Support',
    title: 'Server Installation & Active Directory Configuration',
    tagline: 'High-Availability Windows & Linux Servers with RAID Redundancy',
    summary: 'End-to-end server commissioning, operating system installation (Windows Server 2022/2025, Ubuntu, RHEL), Active Directory Domain Services (AD DS), Group Policy (GPO), DHCP/DNS, hardware RAID 1/5/10 configuration, and automated daily backup routines for corporate offices.',
    icon: HardDrive,
    highlight: 'Turnkey Server Setup',
    idealFor: 'Offices deploying new on-premise servers, database clusters, domain controllers, and virtualization environments.',
    problemsSolved: [
      'Data loss risks from operating without proper hardware RAID mirroring or striping',
      'Chaotic user access where employees share passwords or have unrestricted admin privileges',
      'Slow server file access due to unoptimized network cards and storage bottlenecks',
      'No disaster recovery plan if the main office server crashes or suffers hardware damage'
    ],
    whatWeDo: [
      'Install and commission rack-mount and tower servers (Dell PowerEdge, HPE ProLiant)',
      'Configure hardware RAID arrays (RAID 1, RAID 5, RAID 10) with hot-spare disk redundancy',
      'Deploy Windows Server 2022/2025 with Active Directory (AD DS), DNS, DHCP, and Group Policies (GPO)',
      'Setup virtual machines using Microsoft Hyper-V or VMware ESXi for optimal hardware utilization',
      'Configure automated local and off-site cloud backups with scheduled health monitoring'
    ],
    processSteps: [
      { step: '01', title: 'Workload Sizing', desc: 'We calculate CPU cores, RAM, and storage IOPS based on your active employee count and business applications.' },
      { step: '02', title: 'Hardware Staging & RAID', desc: 'Physical mounting in server rack, cabling redundant power supplies, and building the RAID storage pool.' },
      { step: '03', title: 'OS & Domain Architecture', desc: 'Clean installation of licensed Windows Server/Linux, establishing user organizational units, and setting folder permissions.' },
      { step: '04', title: 'Failover & Backup Testing', desc: 'Simulated disk pull test to verify zero downtime under hardware failure, followed by automated backup validation.' }
    ],
    hardwareUsed: ['Dell PowerEdge', 'HPE ProLiant', 'Microsoft Windows Server', 'VMware ESXi', 'Red Hat Enterprise Linux'],
    faq: [
      { q: 'Can you migrate our data from an old, aging server to a new server without downtime?', a: 'Yes. We run background file synchronization and database replication during working hours, scheduling the final IP and DNS switchover over a weekend or evening so users experience zero interruption.' },
      { q: 'What is RAID and why is it essential for an office server?', a: 'RAID combines multiple hard drives so that if one drive mechanically fails, the server continues running without any data loss or downtime while you replace the faulty drive.' }
    ]
  },
  {
    id: 'mail-domain-migration',
    category: 'Cloud & Migration',
    title: 'Business Email & Domain Migration Services',
    tagline: 'Zero-Downtime Migration to Microsoft 365 & Google Workspace',
    summary: 'Seamless, zero-data-loss migration of your corporate emails, calendars, contacts, and folders from legacy cPanel, webmail, or on-premise Exchange to Microsoft 365 Exchange Online or Google Workspace. We handle domain registrar transfers, DNSSEC, SPF, DKIM, DMARC security, and 2FA authentication.',
    icon: Mail,
    highlight: 'Zero-Downtime Cutover',
    idealFor: 'Businesses upgrading from basic webmail/cPanel to enterprise Microsoft 365 or Google Workspace with custom domain names.',
    problemsSolved: [
      'Important emails landing in clients spam or junk folders due to poor IP reputation',
      'Email storage constantly getting full on shared hosting or cPanel webmail',
      'Loss of historical emails, sent items, or folder structures during staff turnover or migrations',
      'CEO fraud, phishing, and email spoofing risks due to missing SPF, DKIM, and DMARC security records'
    ],
    whatWeDo: [
      'Migrate all mailboxes, folders, calendars, and contacts with 100% data integrity',
      'Execute delta synchronization to ensure not a single email is dropped during cutover',
      'Configure enterprise DNS records: MX, SPF (anti-spoofing), DKIM (digital signature), and DMARC policies',
      'Configure Microsoft Outlook, Web App, and mobile email sync across all employee devices',
      'Implement multi-factor authentication (MFA/2FA) and password security policies'
    ],
    processSteps: [
      { step: '01', title: 'Mailbox Discovery & Audit', desc: 'We audit total mailbox counts, mailbox sizes, archive requirements, and domain DNS ownership.' },
      { step: '02', title: 'Pre-Sync Migration', desc: 'We sync 99% of historical emails in the background while your team continues working on current email normally.' },
      { step: '03', title: 'DNS Cutover & Delta Sync', desc: 'We update MX records during off-hours, perform final delta sync, and verify incoming mail routing.' },
      { step: '04', title: 'Client Device Configuration', desc: 'Our team assists employees with Outlook profiles, smartphone setup, and 2FA authentication.' }
    ],
    hardwareUsed: ['Microsoft 365 Exchange Online', 'Google Workspace', 'Cloudflare DNS', 'GoDaddy / Namecheap Registrar'],
    faq: [
      { q: 'Will our employees lose any emails during the migration?', a: 'No. We use professional dual-sync migration tools that copy every single inbox, sent item, draft, subfolder, and calendar entry without deleting anything from your old server.' },
      { q: 'Will our email stop working while the migration takes place?', a: 'No. Both old and new email servers run simultaneously during the transition. The DNS cutover is scheduled off-hours so employees wake up in the morning with everything working.' }
    ]
  },
  {
    id: 'desktop-support',
    category: 'Server & IT Support',
    title: 'On-Site & Remote Desktop Support (L1/L2 Helpdesk)',
    tagline: 'Rapid Helpdesk, OS Re-imaging & PC Hardware Troubleshooting',
    summary: 'Comprehensive desktop and laptop technical support for your daily office operations. We provide on-site resident engineers or rapid remote helpdesk for operating system installation, hardware repairs, RAM/SSD upgrades, printer troubleshooting, and virus removal across Pune.',
    icon: Monitor,
    highlight: '15-Min Response Helpdesk',
    idealFor: 'Growing companies needing dedicated IT support without hiring full-time internal IT staff.',
    problemsSolved: [
      'Employees wasting productive hours waiting for slow, freezing computers or driver errors',
      'Network printer disconnections and scanner setup issues in shared office bays',
      'Malware, adware, or ransomware infections locking employee browsers and work files',
      'Delays in onboarding new employees due to unconfigured laptops or missing software licenses'
    ],
    whatWeDo: [
      'L1 & L2 remote desktop support via secure screen-sharing with 15-minute response SLA',
      'Regular on-site technician visits across Pune, Hinjewadi, Kharadi, Baner, and PCMC',
      'Clean OS re-imaging (Windows 10/11 Pro, macOS, Linux) with standardized company software suites',
      'Hardware troubleshooting, motherboard diagnostic, laptop screen replacement, and RAM/NVMe SSD upgrades',
      'Office network printer, scanner, and Wi-Fi client configuration on all employee machines'
    ],
    processSteps: [
      { step: '01', title: 'Asset Inventory & Tagging', desc: 'We catalog all company laptops, desktops, and printers with serial numbers and specs.' },
      { step: '02', title: 'Standard Image Creation', desc: 'We build an optimized corporate OS image pre-configured with required drivers, security, and VPN.' },
      { step: '03', title: 'Helpdesk Ticketing Setup', desc: 'Your staff can raise support tickets via email, phone, or WhatsApp with clear response SLAs.' },
      { step: '04', title: 'Preventive Maintenance', desc: 'Scheduled weekly health checks, temporary file cleanup, thermal paste re-application, and antivirus updates.' }
    ],
    hardwareUsed: ['Dell Latitude / OptiPlex', 'Lenovo ThinkPad', 'HP ProBook', 'Logitech Peripherals', 'Brother / HP Laser Printers'],
    faq: [
      { q: 'How fast do your desktop engineers respond to urgent computer issues?', a: 'Remote support requests are acknowledged and connected within 15 minutes. For issues requiring on-site parts or hands-on repair in Pune, our field engineer arrives within 1 to 2 hours.' },
      { q: 'Do you offer monthly IT support contracts for small offices?', a: 'Yes. We offer flexible monthly and annual AMC plans tailored for teams with as few as 10 PCs up to 500+ workstations.' }
    ]
  },
  {
    id: 'application-support',
    category: 'Server & IT Support',
    title: 'Business Application & Multi-User ERP Support',
    tagline: 'Multi-User Tally Prime, ERP, CRM & Business Software Setup',
    summary: 'Specialized enterprise application deployment, database performance optimization, and troubleshooting. We configure multi-user Tally Prime Server over LAN, secure remote access via VPN, accounting software client deployments, CRM setup, and automated database maintenance.',
    icon: Wrench,
    highlight: 'Optimized ERP Speed',
    idealFor: 'Finance teams, chartered accountants, distributors, and businesses using Tally Prime, Busy, or custom ERPs over office LAN.',
    problemsSolved: [
      'Tally Prime freezing or running extremely slow when 5+ users enter vouchers simultaneously',
      'Tally company data corruption caused by network disconnections or abrupt power cuts',
      'Employees unable to access accounting or ERP software securely from home or branch offices',
      'Failure to apply mandatory statutory compliance updates, security patches, or software renewals'
    ],
    whatWeDo: [
      'Install and optimize Tally Prime Multi-User Server (Gold) over dedicated gigabit LAN',
      'Set up daily automated multi-destination backups for Tally data folders with revision history',
      'Configure secure SSL VPN tunnels for authorized accountants to access ERP remotely with zero lag',
      'Diagnose and repair damaged or corrupted company data files with zero transaction loss',
      'Deploy and update business CRM, billing software, and PDF workflow tools across all client machines'
    ],
    processSteps: [
      { step: '01', title: 'Application Environment Audit', desc: 'We analyze host server storage speed, network latency, and client PC operating systems.' },
      { step: '02', title: 'Dedicated LAN Optimization', desc: 'We configure static IP addressing, jumbo frames, and antivirus exclusion paths for ERP databases.' },
      { step: '03', title: 'Multi-User Permissions', desc: 'We set granular read/write file permissions so users cannot accidentally delete master company folders.' },
      { step: '04', title: 'Automated Snapshot Routine', desc: 'We program hourly incremental snapshots so you can roll back to any point in time in seconds.' }
    ],
    hardwareUsed: ['Tally Prime Server', 'Microsoft SQL Server', 'Busy Accounting', 'Sophos SSL VPN', 'Synology NAS Storage'],
    faq: [
      { q: 'Why does our Tally get slow when multiple users connect over Wi-Fi?', a: 'Wi-Fi has inherent packet jitter and latency. For multi-user Tally, connecting client PCs via certified Cat6 copper LAN cable with gigabit switches delivers 10x faster response with zero data corruption.' },
      { q: 'Can our staff access Tally from home safely without exposing our server to the internet?', a: 'Yes. We configure an encrypted hardware firewall VPN. Remote employees log in via multi-factor authentication, keeping your accounting database 100% private and protected.' }
    ]
  }
];
