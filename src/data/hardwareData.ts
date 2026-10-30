export interface HardwareItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  categorySlug: 'firewalls' | 'switches' | 'wireless' | 'telephony' | 'surveillance';
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
  }
];
