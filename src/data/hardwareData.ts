export interface HardwareItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  categorySlug: 'firewalls' | 'switches' | 'wireless' | 'telephony' | 'surveillance' | 'rentals' | 'servers' | 'peripherals' | 'lan';
  shortDesc: string;
  specs: string[];
  bestFor: string;
  warranty: string;
  inStock: boolean;
}

export const HARDWARE_CATALOG: HardwareItem[] = [
  // Firewalls
  {
    id: 'sophos-xgs-116',
    name: 'Sophos XGS 116 / 126',
    brand: 'Sophos',
    category: 'Next-Gen Firewall',
    categorySlug: 'firewalls',
    shortDesc: 'High-speed security firewall engineered for small to medium corporate offices.',
    specs: [
      'Recommended for 20 to 120 active office users',
      'Dual internet lines with automatic failover in <2 seconds',
      'Stops ransomware, phishing emails, and malicious downloads',
      'Includes secure remote VPN client for work-from-home staff',
      '8 Gigabit copper ports + 2 SFP optical fiber ports'
    ],
    bestFor: 'Corporate offices, finance teams, retail headquarters, and branch offices',
    warranty: '3 to 5 Years Official Manufacturer Warranty with Next Business Day Replacement',
    inStock: true
  },
  {
    id: 'sophos-xgs-2100',
    name: 'Sophos XGS 2100',
    brand: 'Sophos',
    category: 'Enterprise Firewall',
    categorySlug: 'firewalls',
    shortDesc: 'Enterprise-grade firewall with dedicated Xstream processors for high-density traffic.',
    specs: [
      'Recommended for 150 to 600 active office users',
      'Deep packet inspection with zero network slowdown',
      'Redundant dual internal power supply for continuous operation',
      '14 Gigabit ports + 6 10G SFP+ high-speed optical fiber ports',
      'Advanced zero-day threat defense and synchronized heartbeat protection'
    ],
    bestFor: 'Headquarters, multi-floor corporate buildings, and manufacturing campuses',
    warranty: '3 to 5 Years Enterprise Support with 24/7 Sophos TAC Access',
    inStock: true
  },
  {
    id: 'fortinet-fg-60f',
    name: 'Fortinet FortiGate FG-60F / 80F',
    brand: 'Fortinet',
    category: 'Next-Gen Firewall',
    categorySlug: 'firewalls',
    shortDesc: 'Industry-leading SD-WAN security firewall known for speed and smooth routing.',
    specs: [
      'Recommended for 25 to 150 active employees',
      'Built-in secure SD-WAN to connect branch offices efficiently',
      'Stops unauthorized external intrusions and hacking attempts',
      'Fast SSL inspection so encrypted web traffic is scanned without lag',
      'Central cloud management dashboard for all branch locations'
    ],
    bestFor: 'Growing businesses, retail chains, and regional branch networks',
    warranty: 'FortiCare 24/7 Gold Support with Advance Hardware Replacement',
    inStock: true
  },
  {
    id: 'sonicwall-tz470',
    name: 'SonicWall TZ470',
    brand: 'SonicWall',
    category: 'Office Firewall',
    categorySlug: 'firewalls',
    shortDesc: 'Multi-gigabit security appliance designed for high-speed fiber internet.',
    specs: [
      'Recommended for 20 to 90 employees',
      'Multi-gigabit 2.5Gbps network interfaces',
      'Real-time automated virus and malware scanning',
      'Safe encrypted internet connections and remote office management',
      'Zero-Touch Deployment for quick, remote branch setup'
    ],
    bestFor: 'Modern corporate offices, design studios, and technology teams',
    warranty: 'SonicWall 24/7 Dynamic Support with Hardware Warranty',
    inStock: true
  },

  // Switches
  {
    id: 'aruba-1930-24p',
    name: 'HPE Aruba Instant On 1930 (24-Port PoE+)',
    brand: 'HPE Aruba',
    category: 'Smart Managed Switch',
    categorySlug: 'switches',
    shortDesc: 'Gigabit smart-managed switch delivering high-speed data and PoE power.',
    specs: [
      '24 Gigabit 10/100/1000 computer ports',
      'Powers CCTV cameras and IP phones directly (195W / 370W PoE budget)',
      '4 Dedicated SFP/SFP+ optical fiber uplink ports (1G/10G)',
      'Manage easily via smartphone mobile app or web browser',
      'Fanless, silent operation option available for meeting rooms'
    ],
    bestFor: 'Standard office floors, connecting desk PCs, IP phones, and Wi-Fi access points',
    warranty: 'HPE Aruba Limited Lifetime Warranty with 24/7 Phone Support',
    inStock: true
  },
  {
    id: 'aruba-1960-48p',
    name: 'HPE Aruba Instant On 1960 (48-Port PoE+)',
    brand: 'HPE Aruba',
    category: 'High-Capacity Stackable Switch',
    categorySlug: 'switches',
    shortDesc: 'Heavy-duty 48-port enterprise switch with stackable clustering.',
    specs: [
      '48 Gigabit ports + 2 10GBase-T ports + 2 10G SFP+ fiber ports',
      'Stack up to 4 switches together as a single managed system',
      'Heavy-duty 600W power delivery for cameras, biometric readers, and Wi-Fi',
      'Engineered for zero network lag and heavy business usage',
      'Advanced VLAN, voice QoS, and access control lists (ACLs)'
    ],
    bestFor: 'Large office floors, IT engineering teams, and high-density computer centers',
    warranty: 'HPE Aruba Limited Lifetime Warranty with Next Business Day Advance Exchange',
    inStock: true
  },
  {
    id: 'cisco-catalyst-1000',
    name: 'Cisco Catalyst 1000 Series (24 & 48 Port)',
    brand: 'Cisco',
    category: 'Enterprise Switch',
    categorySlug: 'switches',
    shortDesc: 'World-famous Cisco enterprise reliability for continuous, mission-critical operations.',
    specs: [
      'Proven Cisco IOS enterprise software architecture',
      'Runs non-stop 24/7/365 without needing rebooting or maintenance restarts',
      'Strict 802.1X network security, port authentication, and threat defense',
      'High MTBF (Mean Time Between Failures) exceeding 2,000,000 hours',
      'Compact, energy-efficient design with intelligent power management'
    ],
    bestFor: 'Banks, corporate headquarters, hospitals, and mission-critical networks',
    warranty: 'Cisco Enhanced Limited Lifetime Hardware Warranty (E-LLW)',
    inStock: true
  },

  // Wi-Fi Access Points
  {
    id: 'aruba-ap22',
    name: 'HPE Aruba Instant On AP22 (Wi-Fi 6)',
    brand: 'HPE Aruba',
    category: 'Commercial Wi-Fi 6 AP',
    categorySlug: 'wireless',
    shortDesc: 'Sleek, high-speed Wi-Fi 6 access point designed for modern corporate workplaces.',
    specs: [
      'Wi-Fi 6 (802.11ax) delivers combined speeds up to 1.7 Gbps',
      'Handles 75+ active laptops and smartphones simultaneously without lag',
      'Walk anywhere in the office without losing connection (Fast Roaming)',
      'Clean ceiling tile or wall mount design with built-in antennas',
      'Easy central setup and guest voucher portal via smartphone app'
    ],
    bestFor: 'Offices, conference rooms, clinics, law firms, and design studios',
    warranty: 'HPE Aruba 2-Year Hardware Warranty with Chat/Phone Support',
    inStock: true
  },
  {
    id: 'aruba-ap505',
    name: 'HPE Aruba AP-505 Campus AP',
    brand: 'HPE Aruba',
    category: 'High-Density Campus Wi-Fi',
    categorySlug: 'wireless',
    shortDesc: 'High-density enterprise access point engineered for crowded floors and tech campuses.',
    specs: [
      'Handles 150+ concurrent active video calls and laptop sessions',
      'ClientMatch smart steering directs devices to the fastest frequency band',
      'AI-powered radio frequency optimization stops neighbor channel interference',
      'Built-in Bluetooth 5 and Zigbee for IoT and office beacon tracking',
      'Enterprise WPA3 security encryption to prevent wireless eavesdropping'
    ],
    bestFor: 'Software engineering offices, co-working spaces, colleges, and event halls',
    warranty: 'HPE Aruba Limited Lifetime Warranty',
    inStock: true
  },
  {
    id: 'sophos-ap6-420',
    name: 'Sophos AP6 420 (Wi-Fi 6)',
    brand: 'Sophos',
    category: 'Secure Cloud Wi-Fi AP',
    categorySlug: 'wireless',
    shortDesc: 'Cloud-managed Wi-Fi 6 access point that syncs directly with Sophos firewalls.',
    specs: [
      'High-speed 4x4 Wi-Fi 6 radio architecture with 2.5G Ethernet uplink',
      'Synchronizes directly with Sophos firewall to quarantine infected laptops',
      'Cloud management via Sophos Central console alongside firewall and antivirus',
      'Automatic firmware updates and channel optimization',
      'Zero-Touch Deployment: plug into power and it auto-configures'
    ],
    bestFor: 'Companies using Sophos firewalls seeking a unified single-pane security setup',
    warranty: 'Sophos Limited Lifetime Warranty with Active Support Subscription',
    inStock: true
  },

  // Intercom & EPABX
  {
    id: 'syntel-neodx-206',
    name: 'Syntel NEO DX 206 / 308',
    brand: 'Syntel',
    category: 'Small Office Intercom (EPABX)',
    categorySlug: 'telephony',
    shortDesc: 'Affordable, reliable office intercom and telephone system for small teams.',
    specs: [
      'Connects 2 to 3 external telephone lines + 6 to 8 desk extensions',
      'Caller ID display on all desk phone instruments',
      'Automatic welcome greeting message (DISA)',
      'Flexible extension numbering (e.g. 21 to 28)',
      'Barge-in, call transfer, and boss-secretary intercom features'
    ],
    bestFor: 'Small offices, clinics, law firms, chartered accountants, and branch desks',
    warranty: '1 Year Syntel Official On-Site Warranty with Local Spare Parts',
    inStock: true
  },
  {
    id: 'syntel-neodx-312',
    name: 'Syntel NEO DX 312 / 416',
    brand: 'Syntel',
    category: 'Expandable Office Intercom',
    categorySlug: 'telephony',
    shortDesc: 'Feature-rich intercom system for medium-sized businesses and departments.',
    specs: [
      'Supports up to 4 incoming lines and 16 desk extensions',
      'Multi-level Interactive Voice Response (IVR) greeting menu',
      '3-Party conference calling for remote team discussions',
      'Forward incoming office calls directly to employee mobile phones',
      'Optional call recording and customer call tracking software'
    ],
    bestFor: 'Medium-sized offices, sales departments, and multi-desk workplaces',
    warranty: '1 Year Official Syntel Manufacturer Warranty',
    inStock: true
  },
  {
    id: 'nec-sl2100',
    name: 'NEC SL2100 Smart PBX',
    brand: 'NEC',
    category: 'Hybrid Smart Telephone System',
    categorySlug: 'telephony',
    shortDesc: 'Scalable hybrid telephone system supporting standard analog lines and VoIP internet calling.',
    specs: [
      'Scalable from 8 up to 120+ desk extension instruments',
      'Hybrid: works with standard landlines, PRI lines, and SIP internet VoIP',
      'Built-in voicemail and audio conferencing bridge',
      'Mobile extension feature: employee smartphones ring with office desk extension',
      'Low power consumption and wall-mountable rack enclosure'
    ],
    bestFor: 'Corporate offices, call centers, multi-floor buildings, and schools',
    warranty: 'NEC Official 1 Year Warranty with AMC Extension Options',
    inStock: true
  },

  // CCTV Surveillance
  {
    id: 'hikvision-4mp-dome',
    name: 'Hikvision 4MP ColorVu IP Camera',
    brand: 'Hikvision',
    category: '24/7 Color Security Camera',
    categorySlug: 'surveillance',
    shortDesc: 'High-definition 4MP security camera that records full-color video even in total darkness.',
    specs: [
      '4 Megapixel ultra-crisp resolution (2560 × 1440)',
      'ColorVu technology: vivid color video 24 hours a day without infrared grain',
      'Built-in microphone for clean audio recording',
      'Weatherproof IP67 casing resistant to dust and rain',
      'Power over Ethernet (PoE) for clean single-cable installation'
    ],
    bestFor: 'Office receptions, hallways, cash counters, entrances, and server rooms',
    warranty: '2 Years Hikvision Replacement Warranty',
    inStock: true
  },
  {
    id: 'hikvision-nvr-16ch',
    name: 'Hikvision 16-Channel 4K NVR (with WD Purple)',
    brand: 'Hikvision',
    category: 'Network Video Recorder',
    categorySlug: 'surveillance',
    shortDesc: 'Professional 16-channel video recorder with surveillance-grade continuous storage.',
    specs: [
      'Supports up to 16 4K security cameras simultaneously',
      'Fitted with Western Digital Purple 24/7 surveillance hard drives',
      'HDMI 4K video output for reception or security guard monitors',
      'Instant mobile viewing on smartphone via encrypted Hik-Connect app',
      'Smart playback: skip empty video to find motion events in seconds'
    ],
    bestFor: 'Offices, commercial floors, warehouses, and factories requiring reliable 30-90 day storage',
    warranty: '2 Years Manufacturer Warranty + 3 Years WD Drive Warranty',
    inStock: true
  },

  // 6. Laptops on Rent (Corporate Laptop Rentals)
  {
    id: 'rental-dell-latitude',
    name: 'Dell Latitude 5430 / 5440 (On Rent)',
    brand: 'Dell',
    category: 'Corporate Laptop Rental',
    categorySlug: 'rentals',
    shortDesc: 'Enterprise-grade corporate laptops on flexible monthly or annual rental with free maintenance.',
    specs: [
      'Intel Core i5 12th/13th Gen, 16GB DDR4/DDR5 RAM, 512GB NVMe SSD',
      '14-inch Full HD Anti-Glare IPS display with backlit keyboard',
      'Pre-loaded with genuine Windows 11 Pro, Office tools & corporate antivirus',
      'Zero maintenance headaches: same-day hardware replacement in Pune & PCMC',
      'Flexible rental tenure from 1 month to 36 months for startups and enterprises'
    ],
    bestFor: 'Corporate employees, software developers, IT projects, startups, and temporary contractors',
    warranty: 'Includes 100% Free Hardware Maintenance & Instant Standby Replacement',
    inStock: true
  },
  {
    id: 'rental-lenovo-thinkpad',
    name: 'Lenovo ThinkPad T14 / L14 (On Rent)',
    brand: 'Lenovo',
    category: 'Business Laptop Rental',
    categorySlug: 'rentals',
    shortDesc: 'Legendary military-tested durability and ergonomic keyboards for demanding business professionals.',
    specs: [
      'Intel Core i7 / AMD Ryzen 7 PRO, 16GB to 32GB RAM, 512GB / 1TB SSD',
      '14-inch WUXGA 400-nit low power display, spill-resistant keyboard',
      'Built-in webcam privacy shutter and fingerprint biometric login',
      'Pre-configured with enterprise VPN, Microsoft 365, and company policies',
      'Immediate bulk dispatch: ready-to-deploy batches of 5 to 100+ units'
    ],
    bestFor: 'Software engineers, consulting teams, finance audits, and corporate training programs',
    warranty: 'Comprehensive On-Site Service & Standby Unit Guarantee within 2 Hours',
    inStock: true
  },
  {
    id: 'rental-apple-macbook',
    name: 'Apple MacBook Pro & Air M2 / M3 (On Rent)',
    brand: 'Apple',
    category: 'Premium Laptop Rental',
    categorySlug: 'rentals',
    shortDesc: 'High-performance Apple Silicon laptops on rent for creative teams and leadership.',
    specs: [
      'Apple M2 / M3 Chip with 8-core CPU and 10-core GPU',
      '16GB Unified Memory, 512GB high-speed SSD storage',
      'Stunning Liquid Retina display with True Tone technology',
      'All-day battery life (up to 18 hours continuous productivity)',
      'Available with genuine Apple MagSafe power adapters and protective sleeves'
    ],
    bestFor: 'UI/UX designers, video editors, iOS mobile app developers, and CXOs',
    warranty: '100% Genuine Apple Hardware with Technical Support & Replacement',
    inStock: true
  },
  {
    id: 'rental-hp-probook',
    name: 'HP ProBook 640 G9 (On Rent)',
    brand: 'HP',
    category: 'Commercial Laptop Rental',
    categorySlug: 'rentals',
    shortDesc: 'Dependable and sleek business laptops designed for daily office operations and call centers.',
    specs: [
      'Intel Core i5 12th Gen, 16GB RAM, 512GB PCIe NVMe SSD',
      'Durable aluminum-reinforced chassis with full numeric connectivity',
      'HP Wolf Pro Security with hardware-enforced PC protection',
      'Fast-charging battery reaching 50% in just 30 minutes',
      'Custom image pre-loading with your company ERP and software bundle'
    ],
    bestFor: 'BPO teams, sales professionals, back-office operations, and remote workforces',
    warranty: 'Free Preventive Maintenance and Dedicated Technician Support',
    inStock: true
  },

  // 7. Enterprise Servers
  {
    id: 'server-dell-r750',
    name: 'Dell PowerEdge R750 / R650 Rack Server',
    brand: 'Dell',
    category: 'Enterprise 2U Rack Server',
    categorySlug: 'servers',
    shortDesc: 'Dual-socket enterprise workhorse server built for database hosting, ERP, and virtualization.',
    specs: [
      'Dual 3rd/4th Gen Intel Xeon Silver/Gold Scalable Processors (up to 64 cores)',
      '64GB to 512GB ECC DDR4/DDR5 Registered Server Memory',
      'PERC H755 Hardware RAID Controller with 8GB NV Cache (RAID 0, 1, 5, 6, 10, 50, 60)',
      'Up to 16x 2.5-inch SAS/SATA/NVMe Hot-Plug Drive Bays with Western Digital / Seagate Enterprise drives',
      'Dual Redundant 1400W Platinum Hot-Plug Power Supplies and iDRAC9 Enterprise Remote Management'
    ],
    bestFor: 'SAP / ERP hosting, VMware ESXi / Hyper-V clusters, Microsoft SQL Server, and large corporate networks',
    warranty: '3 to 5 Years Dell ProSupport with 4-Hour On-Site Mission Critical Response',
    inStock: true
  },
  {
    id: 'server-hpe-dl380',
    name: 'HPE ProLiant DL380 Gen10 / Gen11 Server',
    brand: 'HPE',
    category: 'High-Density Rack Server',
    categorySlug: 'servers',
    shortDesc: 'Industry-standard 2U rack server offering exceptional uptime and secure remote management.',
    specs: [
      'Dual Intel Xeon Scalable Processors with advanced thermal design',
      '64GB to 256GB HPE SmartMemory with Fast Fault Tolerance',
      'HPE Smart Array P408i-a SR Gen10 12G SAS Modular Controller',
      'Quad 1GbE + Dual 10GbE SFP+ optical fiber network daughter cards',
      'HPE iLO 5 Silicon Root of Trust for impenetrable firmware-level cyber defense'
    ],
    bestFor: 'Multi-branch headquarters, centralized file and application storage, and virtual desktop infrastructure (VDI)',
    warranty: '3 Years HPE Foundation Care 24/7 with Next Business Day Parts Replacement',
    inStock: true
  },
  {
    id: 'server-dell-t350',
    name: 'Dell PowerEdge T350 Quiet Tower Server',
    brand: 'Dell',
    category: 'Office Tower Server',
    categorySlug: 'servers',
    shortDesc: 'Whisper-quiet tower server engineered for offices without a dedicated server room.',
    specs: [
      'Intel Xeon E-2300 Series Processor (up to 8 cores)',
      '32GB to 64GB DDR4 UDIMM with ECC memory protection',
      '4x 3.5-inch Enterprise SATA/SAS Hot-Plug Hard Drive Bays',
      'Hardware RAID 1 (Mirrored) ensuring zero data loss if a hard drive fails',
      'Acoustically quiet design operating under 28dB — can sit right beside employee desks'
    ],
    bestFor: 'Small & medium corporate offices, Tally Prime Multi-User Server, domain controller, and centralized file backup',
    warranty: '3 Years Dell Official On-Site Warranty with Next Business Day Support',
    inStock: true
  },

  // 8. Monitors, Mouse, Keyboards & Desktops
  {
    id: 'monitor-dell-p2422h',
    name: 'Dell Professional P2422H / P2722H Commercial Monitor',
    brand: 'Dell',
    category: 'Commercial IPS Monitor',
    categorySlug: 'peripherals',
    shortDesc: 'Ergonomic commercial IPS monitor with ultra-thin bezels, height adjustment, and full pivot.',
    specs: [
      '24-inch / 27-inch Full HD (1920 × 1080) IPS display with 178° wide viewing angles',
      'Fully ergonomic stand: 150mm height adjustment, 90° pivot for vertical coding, tilt & swivel',
      'ComfortView Plus built-in low blue light filter reduces eye fatigue during 8+ hour workdays',
      'Versatile connectivity: DisplayPort 1.2, HDMI 1.4, VGA, and 4x USB 3.2 Gen 1 downstream ports',
      '3-sided ultrathin bezel ideal for seamless dual-monitor desk installations'
    ],
    bestFor: 'Corporate workstations, software engineers, accountants, graphic teams, and back-office staff',
    warranty: '3 Years Dell Advanced Exchange Service with Premium Panel Guarantee',
    inStock: true
  },
  {
    id: 'monitor-lg-ultrawide',
    name: 'LG 34-Inch UltraWide Curved Productivity Monitor',
    brand: 'LG',
    category: 'UltraWide Curved Display',
    categorySlug: 'peripherals',
    shortDesc: 'Panoramic 21:9 curved display replacing dual monitors with a single seamless workspace.',
    specs: [
      '34-inch QHD (3440 × 1440) Curved IPS display with sRGB 99% color accuracy',
      'USB-C 90W power delivery: charge your laptop and transmit video over one single cable',
      'Dual Controller software: control two separate PCs using one single mouse and keyboard',
      'Picture-by-Picture (PBP) and OnScreen Control screen splitting into 4 customized quadrants',
      'Built-in 7W stereo speakers with Waves MaxxAudio for video conferencing'
    ],
    bestFor: 'Financial analysts, stock traders, software architects, UI/UX designers, and executive desks',
    warranty: '3 Years Official Manufacturer Warranty with On-Site Service',
    inStock: true
  },
  {
    id: 'peripheral-logitech-mk295',
    name: 'Logitech MK295 Silent Wireless Keyboard & Mouse Combo',
    brand: 'Logitech',
    category: 'Silent Wireless Desktop Combo',
    categorySlug: 'peripherals',
    shortDesc: 'Whisper-quiet enterprise wireless keyboard and mouse combo eliminating 90% of office clicking noise.',
    specs: [
      'SilentTouch technology removes distracting typing and clicking sounds in open-plan offices',
      'Reliable 2.4GHz wireless connection up to 10 meters with tiny plug-and-forget USB receiver',
      'Spill-resistant durable construction with sturdy tilt legs and abrasion-proof key lettering',
      'Industry-leading battery life: 36 months for keyboard and 18 months for mouse',
      'Full-size layout with numeric keypad and 8 dedicated multimedia shortcut keys'
    ],
    bestFor: 'Open-plan offices, conference desks, executive cabins, and shared workstation pods',
    warranty: '3 Years Logitech Official Hardware Replacement Warranty',
    inStock: true
  },
  {
    id: 'peripheral-dell-km5221w',
    name: 'Dell Pro KM5221W Wireless Keyboard & Optical Mouse',
    brand: 'Dell',
    category: 'Enterprise Wireless Combo',
    categorySlug: 'peripherals',
    shortDesc: 'Heavy-duty enterprise wireless combo with programmable hotkeys and precision 4000 DPI mouse.',
    specs: [
      'Discreet chiclet keys designed for high-speed typing and long-lasting durability',
      'High-precision optical mouse with adjustable DPI (1000, 1600, 2400, up to 4000 DPI)',
      '12 programmable keys to launch corporate applications, browser tabs, or custom macros',
      'AES 128-bit encryption protects keyboard keystrokes from unauthorized wireless snooping',
      'Up to 36 months battery lifespan with convenient battery status indicator LED'
    ],
    bestFor: 'Corporate enterprises, banking and financial desks, call centers, and reception counters',
    warranty: '3 Years Dell Advanced Exchange Service',
    inStock: true
  },
  {
    id: 'desktop-dell-optiplex',
    name: 'Dell OptiPlex Small Form Factor (SFF) Desktop',
    brand: 'Dell',
    category: 'Commercial Desktop PC',
    categorySlug: 'peripherals',
    shortDesc: 'Compact, power-efficient commercial desktop PC built for 24/7 continuous business productivity.',
    specs: [
      'Intel Core i5 13th / 14th Gen Processor with Intel UHD Graphics',
      '16GB DDR4 / DDR5 RAM (expandable to 64GB) and 512GB PCIe NVMe SSD',
      'Genuine Windows 11 Pro 64-bit with TPM 2.0 enterprise hardware security chip',
      'Supports dual 4K monitors out of the box via native DisplayPort and HDMI outputs',
      'Compact tool-less chassis with quiet thermals taking minimal desk space'
    ],
    bestFor: 'Corporate employees, accounting departments, CAD viewing, and front-office reception',
    warranty: '3 Years Dell ProSupport with Next Business Day On-Site Service',
    inStock: true
  },

  // 9. LAN & Structured Networking Hardware
  {
    id: 'lan-cat6-patch-panel',
    name: 'Schneider Actassi / Molex 24-Port & 48-Port Cat6 Patch Panel',
    brand: 'Schneider / Molex',
    category: 'Structured Cabling Patch Panel',
    categorySlug: 'lan',
    shortDesc: 'High-density 19-inch rack-mount patch panels with 50-micron gold plated contacts and rear cable management.',
    specs: [
      'Available in 24-Port (1U) and 48-Port (2U) standard 19-inch server rack configurations',
      'Universal dual-block wiring: supports both T568A and T568B color coding schemes',
      'Heavy-duty cold-rolled steel construction with integrated rear strain relief bar',
      '50-micron gold plated phosphor bronze contacts certified for 750+ insertion cycles',
      'Tested and certified for PoE+ (IEEE 802.3at) and Gigabit Ethernet transmission'
    ],
    bestFor: 'Server rack cable termination, network closets, data centers, and multi-floor telecom rooms',
    warranty: '25-Year Component & Performance System Warranty',
    inStock: true
  },
  {
    id: 'lan-cat6-cable-drum',
    name: 'CommScope Systimax / Schneider Cat6 & Cat6A LSZH Copper Cable (305m)',
    brand: 'CommScope / Schneider',
    category: 'Solid Bare Copper Network Cable',
    categorySlug: 'lan',
    shortDesc: 'Premium 23 AWG pure electrolytic bare copper network cable with flame-retardant LSZH outer jacket.',
    specs: [
      '100% Solid Bare Electrolytic Copper conductors (23 AWG) — Zero Copper-Clad Aluminum (CCA)',
      'Tested up to 250MHz (Cat6) and 500MHz (Cat6A) for flawless 1G and 10G transmission',
      'Low Smoke Zero Halogen (LSZH) outer sheath emits zero toxic fumes in case of fire',
      'Internal polyethylene star separator (cross spline) minimizes NEXT and alien crosstalk',
      'Sequential meter markings on 305-meter easy-pull dispenser box for accurate cable auditing'
    ],
    bestFor: 'Office underfloor raceways, ceiling cable trays, riser backbones, and workstation points',
    warranty: '25-Year Certified Channel Performance Warranty',
    inStock: true
  },
  {
    id: 'lan-patch-cords-io',
    name: 'Factory-Molded Cat6 Patch Cords & Dual-Port Faceplate I/O Boxes',
    brand: 'Schneider / D-Link',
    category: 'LAN Patch Cords & Wall Plates',
    categorySlug: 'lan',
    shortDesc: 'Component-rated factory-molded snagless patch cords and modular dual-port desktop I/O faceplates.',
    specs: [
      'Snagless molded strain-relief boots protect RJ45 clip from bending or snapping during moves',
      'Available in 1m, 2m, 3m, 5m, and 10m color-coded lengths (Blue, Yellow, Red, Green, Grey)',
      'Dual-port modular faceplates equipped with spring-loaded dust shutters to protect keystones',
      'Unbreakable flame-retardant ABS faceplate casing with transparent label windows for desk numbering',
      '100% factory tested for wire-map, impedance, and return loss'
    ],
    bestFor: 'Connecting desk PCs, IP phones, Wi-Fi APs, and network switches in server racks',
    warranty: '5 Years Manufacturer Replacement Warranty',
    inStock: true
  }
];
