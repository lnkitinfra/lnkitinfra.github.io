export type HardwareCategorySlug =
  | 'servers'
  | 'server-installation'
  | 'ssd'
  | 'ram'
  | 'processor'
  | 'cpu'
  | 'laptops'
  | 'monitors'
  | 'firewalls'
  | 'switches'
  | 'wireless'
  | 'telephony'
  | 'surveillance'
  | 'lan';

export interface HardwareItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  categorySlug: HardwareCategorySlug;
  image: string;
  shortDesc: string;
  specs: string[];
  bestFor: string;
  warranty: string;
  inStock: boolean;
}

export const HARDWARE_CATALOG: HardwareItem[] = [
  // ==========================================
  // 1. SERVERS (Enterprise Compute)
  // ==========================================
  {
    id: 'dell-poweredge-r750',
    name: 'Dell PowerEdge R750 2U Rack Server',
    brand: 'Dell',
    category: 'Enterprise Rack Server',
    categorySlug: 'servers',
    image: '/images/products/server.jpg',
    shortDesc: 'Dual-socket 2U enterprise workhorse engineered for mission-critical virtualization, SQL databases, and ERP.',
    specs: [
      'Dual 3rd/4th Gen Intel Xeon Scalable Processors (Up to 32 cores/socket)',
      'Up to 2TB DDR4/DDR5 Registered ECC RDIMM memory (32 DIMM slots)',
      'Up to 24 x 2.5-inch hot-swap NVMe/SAS/SATA drive backplane with PERC H755 RAID',
      'Dual hot-plug redundant power supplies (800W - 1400W Platinum/Titanium)',
      'iDRAC9 Enterprise with OpenManage for out-of-band remote console management'
    ],
    bestFor: 'Medium to large enterprises, multi-user Tally/SAP ERP, VMware ESXi virtualization, and corporate datacenters',
    warranty: '3 to 5 Years Dell ProSupport Next Business Day On-Site Service with 24/7 Mission Critical SLA',
    inStock: true
  },
  {
    id: 'hpe-proliant-dl380-gen11',
    name: 'HPE ProLiant DL380 Gen11 Server',
    brand: 'HPE',
    category: 'Enterprise 2U Server',
    categorySlug: 'servers',
    image: '/images/products/server.jpg',
    shortDesc: 'Industry benchmark 2U server offering extreme compute density, high memory bandwidth, and silicon root of trust security.',
    specs: [
      'Dual 4th/5th Gen Intel Xeon Scalable processors with PCIe Gen5 acceleration',
      'Up to 32 DDR5 DIMM slots delivering up to 4800 MT/s throughput',
      'HPE Smart Array Tri-Mode RAID controller supporting U.3 NVMe and SAS SSDs',
      'HPE iLO 6 Advanced remote server lights-out monitoring and remote KVM console',
      'Redundant Hot-Plug Flex Slot 800W/1000W 80 PLUS Platinum power supplies'
    ],
    bestFor: 'Enterprise cloud hosting, containerized workloads, big data analytics, and virtual desktop infrastructure (VDI)',
    warranty: '3 Years HPE Pointnext Complete Care with On-Site Hardware Replacement',
    inStock: true
  },
  {
    id: 'dell-poweredge-t350',
    name: 'Dell PowerEdge T350 Tower Server',
    brand: 'Dell',
    category: 'Small Office Tower Server',
    categorySlug: 'servers',
    image: '/images/products/server.jpg',
    shortDesc: 'Acoustically quiet, compact tower server designed specifically for small offices without a dedicated server rack.',
    specs: [
      'Single-socket Intel Xeon E-2300 series processor (Up to 8 cores)',
      'Up to 128GB DDR4 ECC UDIMM memory (4 DIMM slots)',
      'Up to 8 x 3.5-inch hot-swap SAS/SATA drives with hardware RAID 0, 1, 5, 10',
      'Whisper-quiet fan profile suitable for open office floor deployment',
      'iDRAC9 Basic/Express for automated remote server health monitoring'
    ],
    bestFor: 'Small offices (10 to 50 users), branch offices, Tally Prime Gold multi-user server, and localized file sharing',
    warranty: '3 Years Dell Basic Next Business Day On-Site Hardware Support',
    inStock: true
  },

  // ==========================================
  // 2. SERVER INSTALLATION & DEPLOYMENT
  // ==========================================
  {
    id: 'turnkey-server-installation',
    name: 'Turnkey Server Rack Mounting & Installation',
    brand: 'LNK IT Infra',
    category: 'Server Engineering & Setup',
    categorySlug: 'server-installation',
    image: '/images/products/server_installation.jpg',
    shortDesc: 'Professional on-site server unboxing, 42U/24U rack mounting, dual-PDU power dressing, and clean structured cabling.',
    specs: [
      'Sliding rail kit assembly and secure floor-standing server rack mounting',
      'Dual redundant PDU clean cabling with labeled A/B power source connections',
      'Patch panel to server NIC dressing with snagless Cat6 molded patch cords',
      'iDRAC / iLO static IP configuration and out-of-band management network integration',
      'Comprehensive thermal and acoustic baseline test prior to production handover'
    ],
    bestFor: 'New office server room buildouts, server migrations, and floor-standing rack installations across Pune & PCMC',
    warranty: '100% Workmanship Warranty with Complete Server Rack Documentation & Port Labeling',
    inStock: true
  },
  {
    id: 'virtualization-raid-deployment',
    name: 'Hardware RAID & Virtualization Deployment',
    brand: 'LNK IT Infra',
    category: 'Server OS & Hypervisor Setup',
    categorySlug: 'server-installation',
    image: '/images/products/server_installation.jpg',
    shortDesc: 'Hardware RAID array initialization, VMware ESXi / Microsoft Hyper-V installation, and automated snapshot backup scheduling.',
    specs: [
      'PERC / Smart Array hardware RAID 1 (OS mirror), RAID 5 / 10 (data arrays)',
      'VMware ESXi 8.0 or Microsoft Windows Server 2022/2025 Standard / Datacenter deployment',
      'Virtual machine sizing for Tally Prime, Active Directory Domain Controller, and File Server',
      'Veeam Backup & Replication automated daily snapshot runbook setup',
      'APC Smart-UPS clean automatic shutdown daemon integration over network'
    ],
    bestFor: 'Corporate offices requiring high availability, automated disaster recovery, and zero server downtime',
    warranty: 'Includes 30-Day Post-Installation Support & Comprehensive Virtualization Blueprint',
    inStock: true
  },

  // ==========================================
  // 3. SOLID STATE DRIVES (SSD)
  // ==========================================
  {
    id: 'samsung-pm9a3-nvme',
    name: 'Samsung PM9A3 Enterprise U.2 / M.2 NVMe SSD',
    brand: 'Samsung',
    category: 'Enterprise Data Center SSD',
    categorySlug: 'ssd',
    image: '/images/products/ssd.jpg',
    shortDesc: 'Enterprise PCIe Gen4 x4 NVMe SSD with Power Loss Protection (PLP) engineered for 24/7 server workloads.',
    specs: [
      'Capacities available: 960GB, 1.92TB, 3.84TB, and 7.68TB',
      'Sequential Read speeds up to 6,900 MB/s, Random Read up to 1,000,000 IOPS',
      'Hardware-based Power Loss Protection (PLP) preventing data corruption on power cuts',
      '1.3 DWPD (Drive Writes Per Day) endurance rating for heavy transaction processing',
      'Form factors: U.2 2.5-inch hot-swap and standard 22110 M.2 PCIe'
    ],
    bestFor: 'Dell & HPE server drive upgrades, high-traffic SQL databases, virtualization datastores, and ERP servers',
    warranty: '5 Years Official Samsung Enterprise Manufacturer Warranty',
    inStock: true
  },
  {
    id: 'samsung-990-pro-nvme',
    name: 'Samsung 990 PRO NVMe M.2 SSD',
    brand: 'Samsung',
    category: 'High-Speed Workstation SSD',
    categorySlug: 'ssd',
    image: '/images/products/ssd.jpg',
    shortDesc: 'Blisteringly fast PCIe 4.0 NVMe SSD with nickel-coated controller and intelligent thermal control.',
    specs: [
      'Capacities: 1TB, 2TB, and 4TB with optional integrated heatsink',
      'Blazing read/write speeds up to 7,450 / 6,900 MB/s',
      'V-NAND TLC technology with Samsung in-house Pascal memory controller',
      'Up to 2,400 TBW endurance rating for data-intensive CAD and software compiling',
      'Samsung Magician software support for health monitoring and firmware updates'
    ],
    bestFor: 'Engineering laptops, CAD/BIM workstations, executive desktops, and high-speed local scratch disks',
    warranty: '5 Years Official Samsung India Warranty',
    inStock: true
  },
  {
    id: 'kingston-dc600m-sata',
    name: 'Kingston DC600M 2.5" Enterprise SATA SSD',
    brand: 'Kingston',
    category: 'Enterprise Mixed-Use SSD',
    categorySlug: 'ssd',
    image: '/images/products/ssd.jpg',
    shortDesc: '6Gbps SATA 3.0 enterprise server SSD engineered for mixed-use workloads with strict QoS latency consistency.',
    specs: [
      'Capacities available: 480GB, 960GB, 1.92TB, and 3.84TB',
      'Consistent low latency and predictable IOPS under 100% full-duty server load',
      'On-board hardware power loss protection (PLP) with tantalum capacitors',
      'AES 256-bit hardware encryption with TCG Opal 2.0 self-encrypting drive (SED)',
      'Direct plug-and-play replacement for legacy mechanical SAS/SATA spinning hard drives'
    ],
    bestFor: 'Upgrading older Dell PowerEdge / HPE Gen9/Gen10 servers from slow HDDs to 10x faster SSD storage',
    warranty: '5 Years Kingston Enterprise Warranty with Free Technical Support',
    inStock: true
  },
  {
    id: 'crucial-t500-nvme',
    name: 'Crucial T500 PCIe 4.0 NVMe M.2 SSD',
    brand: 'Crucial',
    category: 'Commercial Desktop & Laptop SSD',
    categorySlug: 'ssd',
    image: '/images/products/ssd.jpg',
    shortDesc: 'High-reliability PCIe Gen4 NVMe SSD with Microsoft DirectStorage acceleration for fast booting and application loading.',
    specs: [
      'Capacities available: 500GB, 1TB, and 2TB M.2 2280',
      'Sequential reads up to 7,400 MB/s and writes up to 7,000 MB/s',
      'Micron 232-layer 3D TLC NAND technology for cool, energy-efficient operation',
      'Integrated dynamic thermal throttling to maintain peak speed in slim laptops',
      'Drop-in compatibility with Dell Latitude, ThinkPad, HP ProBook, and commercial desktops'
    ],
    bestFor: 'Office laptop speed upgrades, upgrading employee machines with fast boot and instantaneous file opening',
    warranty: '5 Years Official Crucial / Micron Manufacturer Warranty',
    inStock: true
  },

  // ==========================================
  // 4. RAM & MEMORY (Server & Desktop)
  // ==========================================
  {
    id: 'kingston-server-ecc-ddr4',
    name: 'Kingston Server Premier 32GB / 64GB DDR4 ECC RDIMM',
    brand: 'Kingston',
    category: 'Server ECC Registered RAM',
    categorySlug: 'ram',
    image: '/images/products/ram.jpg',
    shortDesc: 'Enterprise-grade DDR4-3200 Registered DIMM memory module with Error-Correcting Code (ECC) preventing blue-screen crashes.',
    specs: [
      'Capacities: 16GB, 32GB, and 64GB DDR4-3200MHz PC4-25600',
      'Registered RDIMM with on-module register buffer for signal integrity across multi-slot boards',
      'Real-time ECC single-bit error detection and automatic correction',
      'Locked Bill of Materials (BOM) validated across Dell, HPE, Cisco, and Supermicro servers',
      'Thermal sensor on-DIMM for automated server fan speed management'
    ],
    bestFor: 'Dell PowerEdge R740/R640/R540, HPE Gen10 servers, multi-tenant Hyper-V hosts, and Tally multi-user servers',
    warranty: 'Lifetime Manufacturer Warranty with Advance Replacement Support',
    inStock: true
  },
  {
    id: 'crucial-micron-ecc-ddr5',
    name: 'Crucial / Micron 32GB / 64GB DDR5 ECC Server RAM',
    brand: 'Crucial',
    category: 'Next-Gen DDR5 Server Memory',
    categorySlug: 'ram',
    image: '/images/products/ram.jpg',
    shortDesc: 'Next-generation DDR5-4800 / DDR5-5600 Registered ECC server memory delivering 2x memory bandwidth over DDR4.',
    specs: [
      'Capacities: 32GB and 64GB DDR5-4800MHz / 5600MHz ECC RDIMM',
      'Dual 32-bit subchannels per module for dramatically reduced latency',
      'On-die power management IC (PMIC) for high energy efficiency and thermal balance',
      'Side-band ECC and on-die ECC providing double-layer reliability',
      'Compatible with Intel 4th/5th Gen Xeon and AMD EPYC 9004 server platforms'
    ],
    bestFor: 'Dell PowerEdge R760/R660, HPE Gen11 servers, high-density cloud compute, and massive database caches',
    warranty: 'Limited Lifetime Warranty backed by Micron Technology',
    inStock: true
  },
  {
    id: 'kingston-desktop-ddr4-ddr5',
    name: 'Kingston FURY 16GB / 32GB Desktop RAM',
    brand: 'Kingston',
    category: 'Commercial Desktop Memory',
    categorySlug: 'ram',
    image: '/images/products/ram.jpg',
    shortDesc: 'High-speed, rock-solid desktop memory modules featuring low-profile aluminum heat spreaders for workstation reliability.',
    specs: [
      'Options in DDR4-3200MHz and DDR5-5200MHz (16GB, 32GB single and dual kits)',
      'Plug N Play automatic overclocking at standard JEDEC voltages (1.2V / 1.1V)',
      'Intel XMP 2.0 / 3.0 certified and AMD EXPO ready for modern office PCs',
      'Tested 100% at speed for zero-defect guarantee and continuous office multitasking',
      'Slim low-profile height fits easily into small form factor (SFF) office desktop towers'
    ],
    bestFor: 'Upgrading corporate desktop PCs, accounting workstations running heavy Excel/Tally, and graphic design PCs',
    warranty: 'Lifetime Official Warranty with Direct Brand RMA Support',
    inStock: true
  },
  {
    id: 'crucial-laptop-ddr4-ddr5',
    name: 'Crucial 16GB / 32GB Laptop SO-DIMM RAM',
    brand: 'Crucial',
    category: 'Business Laptop RAM Upgrade',
    categorySlug: 'ram',
    image: '/images/products/ram.jpg',
    shortDesc: 'Premium 260-pin and 262-pin laptop memory modules engineered to speed up business laptops with zero compatibility issues.',
    specs: [
      'Capacities: 8GB, 16GB, and 32GB in DDR4-3200 and DDR5-4800 / 5600',
      'Dramatically reduces laptop freezing during multi-tab browser work and video calls',
      'Standard 1.2V / 1.1V operation maximizing employee laptop battery longevity',
      'Directly certified for Dell Latitude, Lenovo ThinkPad, HP ProBook, and ASUS commercial laptops',
      'Fast 10-minute on-site RAM installation and memory diagnostic check in Pune'
    ],
    bestFor: 'Upgrading sluggish 8GB employee laptops to 16GB or 32GB for seamless multitasking without buying new laptops',
    warranty: 'Limited Lifetime Warranty by Micron',
    inStock: true
  },

  // ==========================================
  // 5. PROCESSORS & CPUS
  // ==========================================
  {
    id: 'intel-xeon-scalable-silver',
    name: 'Intel Xeon Silver 4410Y / Gold 6426Y Scalable Processor',
    brand: 'Intel',
    category: 'Enterprise Server Processor',
    categorySlug: 'processor',
    image: '/images/products/processor.jpg',
    shortDesc: '4th Gen Intel Xeon Scalable server CPU featuring built-in workload accelerators and high PCIe 5.0 lane counts.',
    specs: [
      '12 to 16 Cores, 24 to 32 Threads with base clock 2.00 GHz and Turbo up to 3.90 GHz',
      'Built-in Intel Advanced Matrix Extensions (AMX) and QuickAssist Technology (QAT)',
      'Supports 8-channel DDR5 memory with ECC and Intel Optane persistent memory',
      '80 lanes of PCIe Gen 5 per socket for ultra-fast NVMe storage and 100G network adapters',
      'Hardware-level Intel Software Guard Extensions (SGX) memory encryption'
    ],
    bestFor: 'Dell PowerEdge R750/R650, HPE DL380, multi-VM hosting, accounting ERP servers, and database engines',
    warranty: '3 Years Official Intel Boxed / Tray Manufacturer Warranty',
    inStock: true
  },
  {
    id: 'amd-epyc-7003-9004',
    name: 'AMD EPYC 7003 / 9004 Series Server CPU',
    brand: 'AMD',
    category: 'High-Density Server Processor',
    categorySlug: 'processor',
    image: '/images/products/processor.jpg',
    shortDesc: 'World-record performance per socket delivering up to 64 cores, 12-channel DDR5, and maximum cloud consolidation.',
    specs: [
      '16 to 64 Zen 4 server cores with up to 128 threads per single socket',
      'Up to 256MB L3 cache for hyper-speed database queries and zero bottlenecking',
      '128 lanes of PCIe Gen 5 delivering immense storage bandwidth',
      'AMD Infinity Guard with Secure Encrypted Virtualization (SEV-SNP)',
      'Lowest power consumption per compute core in modern server architecture'
    ],
    bestFor: 'Private cloud virtualization, software development builds, hyper-converged infrastructure, and high-seat VDI',
    warranty: '3 Years Official AMD Enterprise Hardware Warranty',
    inStock: true
  },
  {
    id: 'intel-core-i7-14700-desktop',
    name: 'Intel Core i7-14700 / i9-14900 14th Gen Processor',
    brand: 'Intel',
    category: 'Commercial Desktop & Workstation CPU',
    categorySlug: 'processor',
    image: '/images/products/processor.jpg',
    shortDesc: 'Hybrid performance architecture combining P-cores and E-cores for extreme office productivity and workstation rendering.',
    specs: [
      '20 Cores (8 Performance + 12 Efficient cores), 28 Threads up to 5.40 GHz Max Turbo',
      '33MB Intel Smart Cache with integrated Intel UHD Graphics 770',
      'Dual-channel DDR4 and DDR5 memory support with Intel Deep Learning Boost',
      'Intel Thermal Velocity Boost and hardware-level Intel Thread Director',
      'Compatible with LGA1700 commercial motherboards (B760 / Q670 chipset)'
    ],
    bestFor: 'Engineering workstations, software development compilers, financial modeling, and 4K video editing',
    warranty: '3 Years Official Intel India Warranty',
    inStock: true
  },

  // ==========================================
  // 6. DESKTOP CPU & COMMERCIAL COMPUTERS
  // ==========================================
  {
    id: 'dell-optiplex-7010-sff',
    name: 'Dell OptiPlex 7010 Small Form Factor (SFF) PC',
    brand: 'Dell',
    category: 'Commercial Desktop Computer',
    categorySlug: 'cpu',
    image: '/images/products/desktop_cpu.jpg',
    shortDesc: 'Space-saving commercial office desktop PC engineered for durability, silent operation, and long hardware lifecycles.',
    specs: [
      'Intel Core i5-13500 / i7-13700 13th/14th Gen Processor (14 cores)',
      '16GB / 32GB DDR4/DDR5 RAM with 512GB / 1TB NVMe PCIe SSD storage',
      'Compact Small Form Factor chassis designed for horizontal or vertical under-desk placement',
      'Dual DisplayPort 1.4a and HDMI outputs for seamless multi-monitor productivity',
      'TPM 2.0 security chip, Kensington lock slot, and pre-activated Windows 11 Pro'
    ],
    bestFor: 'Corporate office workstations, accounts departments, bank branches, and customer service desks',
    warranty: '3 Years Dell ProSupport Next Business Day On-Site Service across Pune & PCMC',
    inStock: true
  },
  {
    id: 'hp-prodesk-400-g9-tower',
    name: 'HP ProDesk 400 / 600 G9 Microtower PC',
    brand: 'HP',
    category: 'Commercial Tower Desktop',
    categorySlug: 'cpu',
    image: '/images/products/desktop_cpu.jpg',
    shortDesc: 'Expandable commercial tower PC offering toolless access, multiple PCIe slots, and enterprise security management.',
    specs: [
      'Intel Core i5 / i7 processor with Intel Q670 commercial chipset',
      'Up to 64GB DDR4/DDR5 RAM and dual M.2 SSD + 3.5-inch SATA drive support',
      'HP Wolf Security for Business hardware-enforced endpoint protection',
      'Multiple front USB 3.2 Gen 2 ports, SD card reader, and Gigabit Ethernet',
      '80 PLUS Platinum high-efficiency energy-saving internal power supply'
    ],
    bestFor: 'Offices needing PCIe expansion cards (extra NICs, graphics cards, COM ports) and high longevity',
    warranty: '3 Years HP Commercial On-Site Hardware Warranty',
    inStock: true
  },

  // ==========================================
  // 7. LAPTOPS (Sales & Corporate Rentals)
  // ==========================================
  {
    id: 'dell-latitude-5440-laptop',
    name: 'Dell Latitude 5440 14" Business Laptop',
    brand: 'Dell',
    category: 'Commercial Business Laptop',
    categorySlug: 'laptops',
    image: '/images/products/laptop.jpg',
    shortDesc: 'The gold standard in enterprise corporate laptops. Built with magnesium-reinforced chassis and all-day battery life.',
    specs: [
      '13th Gen Intel Core i5-1345U / i7-1365U vPro Enterprise Processor',
      '16GB / 32GB DDR5 RAM with 512GB / 1TB PCIe NVMe SSD',
      '14.0" Full HD (1920x1080) Anti-Glare IPS display with narrow bezels',
      'Thunderbolt 4 / USB-C with Power Delivery, HDMI 2.0, RJ-45 LAN, and Wi-Fi 6E',
      'Spill-resistant backlit keyboard, FHD IR webcam with privacy shutter, and fingerprint sensor'
    ],
    bestFor: 'Corporate employees, traveling executives, software engineers, and flexible monthly office rentals in Pune',
    warranty: '3 Years Dell ProSupport with Complete Cover Accidental Damage Protection',
    inStock: true
  },
  {
    id: 'lenovo-thinkpad-t14-gen4',
    name: 'Lenovo ThinkPad T14 Gen 4 Business Laptop',
    brand: 'Lenovo',
    category: 'Rugged Commercial Laptop',
    categorySlug: 'laptops',
    image: '/images/products/laptop.jpg',
    shortDesc: 'Legendary ThinkPad ergonomics, military-spec durability (MIL-STD-810H), and world-renowned precision keyboard.',
    specs: [
      'Intel Core i5 / i7 or AMD Ryzen 7 PRO enterprise processor',
      'Up to 32GB LPDDR5x RAM and 1TB M.2 PCIe Gen4 Performance SSD',
      '14.0" 16:10 WUXGA (1920x1200) IPS display with Eyesafe low blue light',
      'Dual Thunderbolt 4 ports, RJ45 Gigabit Ethernet port, and HDMI 2.1',
      'ThinkShield security suite with dTPM 2.0 and webcam physical privacy cover'
    ],
    bestFor: 'Demanding corporate environments, software developers, finance teams, and corporate lease programs',
    warranty: '3 Years Lenovo Premier Support with On-Site Next Business Day Repair',
    inStock: true
  },
  {
    id: 'apple-macbook-pro-14-m3',
    name: 'Apple MacBook Pro 14" (Apple M3 / M3 Pro)',
    brand: 'Apple',
    category: 'Creative & Executive Laptop',
    categorySlug: 'laptops',
    image: '/images/products/laptop.jpg',
    shortDesc: 'Extraordinary battery life up to 22 hours, Liquid Retina XDR display, and unified memory for executive and creative teams.',
    specs: [
      'Apple M3 / M3 Pro chip with up to 12-core CPU and 18-core GPU',
      '18GB / 36GB Unified Memory with 512GB / 1TB ultra-fast SSD',
      '14.2" Liquid Retina XDR display (3024x1964) with ProMotion 120Hz refresh',
      'Three Thunderbolt 4 ports, HDMI port, SDXC card slot, and MagSafe 3 charging',
      'Six-speaker sound system with force-cancelling woofers and studio-quality mics'
    ],
    bestFor: 'C-suite executives, UI/UX designers, iOS mobile developers, and creative marketing teams in Pune',
    warranty: '1 Year Apple International Warranty with optional AppleCare+ Enterprise Protection',
    inStock: true
  },

  // ==========================================
  // 8. COMMERCIAL MONITORS
  // ==========================================
  {
    id: 'dell-p2422h-24-inch-monitor',
    name: 'Dell 24" P2422H Full HD Commercial IPS Monitor',
    brand: 'Dell',
    category: 'Ergonomic Commercial Monitor',
    categorySlug: 'monitors',
    image: '/images/products/monitor.jpg',
    shortDesc: 'Workplace ergonomic champion with ComfortView Plus low-blue-light technology and fully adjustable height/pivot stand.',
    specs: [
      '23.8-inch Full HD (1920 x 1080) at 60Hz with 178°/178° wide viewing angles',
      'In-Plane Switching (IPS) panel with 99% sRGB color gamut coverage',
      'Full ergonomics: Height-adjustable (150mm), Tilt (-5°/+21°), Swivel (-45°/+45°), and 90° Pivot rotation',
      'Extensive connectivity: DisplayPort 1.2, HDMI 1.4, VGA, and 4 x USB 3.2 Gen 1 downstream ports',
      'Ultra-thin 3-sided bezel ideal for seamless dual-monitor desk setups'
    ],
    bestFor: 'Daily corporate office work, financial spreadsheet analysis, multi-screen desk setups, and BPO operations',
    warranty: '3 Years Dell Advanced Exchange Service and Premium Panel Guarantee',
    inStock: true
  },
  {
    id: 'dell-ultrasharp-u2724d-27-inch',
    name: 'Dell UltraSharp 27" U2724D QHD IPS Black Monitor',
    brand: 'Dell',
    category: 'High-Resolution Professional Display',
    categorySlug: 'monitors',
    image: '/images/products/monitor.jpg',
    shortDesc: 'IPS Black technology delivering 2000:1 contrast ratio, 120Hz smooth refresh rate, and factory color calibration.',
    specs: [
      '27.0-inch Quad HD (2560 x 1440) resolution with 120Hz refresh rate',
      'IPS Black panel with deep blacks (2000:1 contrast) and 100% sRGB / 98% DCI-P3 color',
      'Built-in ambient light sensor that automatically optimizes brightness and color temperature',
      'DisplayPort 1.4 (with MST daisy-chaining), HDMI 2.1, and high-speed USB-C 10Gbps hub',
      'Full 4-way ergonomic stand with premium platinum silver finish and internal cable management'
    ],
    bestFor: 'Software developers, UI/UX designers, architectural CAD drawings, and executive desk offices',
    warranty: '3 Years Dell ProSupport with Zero Bright Dot Guarantee and Advance Replacement',
    inStock: true
  },

  // ==========================================
  // 9. NEXT-GEN FIREWALLS
  // ==========================================
  {
    id: 'sophos-xgs-116',
    name: 'Sophos XGS 116 / 126 Next-Gen Firewall',
    brand: 'Sophos',
    category: 'Next-Gen Firewall',
    categorySlug: 'firewalls',
    image: '/images/products/firewall.jpg',
    shortDesc: 'High-speed security firewall engineered for small to medium corporate offices with dual-engine Xstream architecture.',
    specs: [
      'Recommended for 20 to 120 active office users',
      'Dual internet lines with automatic failover in <2 seconds',
      'Stops ransomware, phishing emails, and malicious downloads',
      'Includes secure remote SSL-VPN client for work-from-home staff',
      '8 Gigabit copper ports + 2 SFP optical fiber ports'
    ],
    bestFor: 'Corporate offices, finance teams, retail headquarters, and branch offices',
    warranty: '3 to 5 Years Official Manufacturer Warranty with Next Business Day Replacement',
    inStock: true
  },
  {
    id: 'sophos-xgs-2100',
    name: 'Sophos XGS 2100 Enterprise Firewall',
    brand: 'Sophos',
    category: 'Enterprise Firewall',
    categorySlug: 'firewalls',
    image: '/images/products/firewall.jpg',
    shortDesc: 'Enterprise-grade firewall with dedicated Xstream flow processors for high-density traffic without latency.',
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
    name: 'Fortinet FortiGate FG-60F / 80F Firewall',
    brand: 'Fortinet',
    category: 'Next-Gen Firewall & SD-WAN',
    categorySlug: 'firewalls',
    image: '/images/products/firewall.jpg',
    shortDesc: 'Industry-leading SD-WAN security firewall powered by SOC4 security processing units.',
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
    id: 'sonicwall-tz470-tz570',
    name: 'SonicWall TZ470 / TZ570 Multi-Gigabit Firewall',
    brand: 'SonicWall',
    category: 'Multi-Gigabit Security Appliance',
    categorySlug: 'firewalls',
    image: '/images/products/firewall.jpg',
    shortDesc: 'Multi-gigabit 2.5GbE/5GbE security appliance designed for high-speed fiber internet and real-time deep inspection.',
    specs: [
      'Recommended for 30 to 250 active employees',
      'Multi-gigabit 2.5Gbps / 5Gbps network interfaces',
      'Real-time automated virus and malware scanning with Capture ATP',
      'Safe encrypted internet connections and remote office management',
      'Zero-Touch Deployment via SonicWall Capture Security Center'
    ],
    bestFor: 'Modern corporate offices, design studios, and technology teams',
    warranty: 'SonicWall 24/7 Dynamic Support with Hardware Warranty',
    inStock: true
  },

  // ==========================================
  // 10. NETWORK SWITCHES
  // ==========================================
  {
    id: 'aruba-instant-on-1930',
    name: 'HPE Aruba Instant On 1930 / 1960 24G PoE+ Switch',
    brand: 'HPE Aruba',
    category: 'Managed Gigabit PoE+ Switch',
    categorySlug: 'switches',
    image: '/images/products/switch.jpg',
    shortDesc: 'Cloud-managed 24-port Gigabit switch with Power over Ethernet (PoE+) for powering Wi-Fi access points and IP cameras.',
    specs: [
      '24 x 10/100/1000Base-T PoE+ ports delivering up to 370W total power budget',
      '4 x 10G SFP+ optical fiber uplink ports for high-speed server and core switch uplinks',
      'VLAN segmentation, Voice VLAN, Link Aggregation (LACP), and Spanning Tree protocol',
      'Free mobile app and web-based cloud dashboard with zero recurring subscription fees',
      'Fanless acoustic option on lower wattage models for quiet office cabinet installations'
    ],
    bestFor: 'Powering office Wi-Fi 6 access points, desk IP phones, and CCTV cameras on a single cable',
    warranty: 'HPE Aruba Instant On Limited Lifetime Warranty with Next Business Day Part Exchange',
    inStock: true
  },
  {
    id: 'cisco-catalyst-1000',
    name: 'Cisco Catalyst 1000 / 9200 Series Switch',
    brand: 'Cisco',
    category: 'Enterprise Managed Switch',
    categorySlug: 'switches',
    image: '/images/products/switch.jpg',
    shortDesc: 'Carrier-grade enterprise switch with Cisco IOS software, Layer 2/3 features, and legendary hardware reliability.',
    specs: [
      '24 or 48 Gigabit Ethernet ports with full PoE+ (up to 740W power budget)',
      '4 x 10G SFP+ uplink ports with hardware stacking capabilities',
      'Comprehensive security: 802.1X port security, DHCP snooping, and IP Source Guard',
      'Enterprise command-line interface (CLI) and intuitive web-based on-box management',
      'Mean Time Between Failures (MTBF) exceeding 2,000,000 hours of continuous uptime'
    ],
    bestFor: 'Corporate campuses, banks, hospitals, and high-security enterprise server rooms in Pune',
    warranty: 'Cisco Enhanced Limited Lifetime Warranty (E-LLW) with 90-day TAC Support',
    inStock: true
  },

  // ==========================================
  // 11. COMMERCIAL WI-FI 6
  // ==========================================
  {
    id: 'sophos-ap6-420-wifi6',
    name: 'Sophos AP6 420 / 840 Wi-Fi 6 Access Point',
    brand: 'Sophos',
    category: 'Commercial Wi-Fi 6 AP',
    categorySlug: 'wireless',
    image: '/images/products/wifi_ap.jpg',
    shortDesc: 'Enterprise Wi-Fi 6 access point delivering multi-gigabit throughput and synchronized zero-trust security.',
    specs: [
      'Wi-Fi 6 (802.11ax) dual-band 2x2:2 and 4x4:4 MU-MIMO with OFDMA technology',
      '2.5Gbps Multi-Gigabit Ethernet uplink port with 802.3at PoE+ power',
      'Supports up to 250 concurrent client devices per access point without throughput drop',
      'Seamless 802.11k/v/r roaming preventing call drops on WhatsApp and Microsoft Teams',
      'Centralized cloud management via Sophos Central with automated RF channel tuning'
    ],
    bestFor: 'High-density modern offices, co-working spaces, conference halls, and multi-floor buildings',
    warranty: 'Sophos Limited Lifetime Hardware Warranty',
    inStock: true
  },
  {
    id: 'aruba-instant-on-ap22',
    name: 'HPE Aruba Instant On AP22 / AP25 Wi-Fi 6 AP',
    brand: 'HPE Aruba',
    category: 'Office Wi-Fi 6 Access Point',
    categorySlug: 'wireless',
    image: '/images/products/wifi_ap.jpg',
    shortDesc: 'Ceiling-mounted commercial Wi-Fi 6 access point with smart mesh networking and built-in guest portal.',
    specs: [
      'Blazing Wi-Fi 6 speeds up to 1.77 Gbps aggregate throughput',
      'Built-in wireless mesh allowing APs to link without running new Ethernet cables',
      'WPA2 / WPA3-Personal and WPA3-Enterprise advanced wireless encryption',
      'Customizable branded guest Wi-Fi captive portal with bandwidth limiting per user',
      'Simple 2-minute setup via Aruba Instant On smartphone mobile app'
    ],
    bestFor: 'Startups, growing corporate offices, clinics, retail showrooms, and design agencies',
    warranty: '2 Years HPE Aruba Hardware Warranty with Phone Support',
    inStock: true
  },

  // ==========================================
  // 12. OFFICE TELEPHONY & EPABX INTERCOM
  // ==========================================
  {
    id: 'syntel-neo-dx-206-308',
    name: 'Syntel NEO DX 206 / 308 EPABX Intercom',
    brand: 'Syntel',
    category: 'Office Intercom EPABX',
    categorySlug: 'telephony',
    image: '/images/products/telephony.jpg',
    shortDesc: 'Reliable analog and digital intercom system connecting executive cabins, reception, and workstations seamlessly.',
    specs: [
      'Configuration: 2 Main Trunk Lines with 6 Extensions (206) or 3 Lines with 8 Extensions (308)',
      'Built-in Auto Attendant with professional welcome greeting (Welcome to our office...)',
      'Call forwarding, internal extension dialing, call transfer, and 3-party conferencing',
      'CLI (Caller Line Identification) support for internal and external phone calls',
      'Compact wall-mountable chassis with battery backup interface for power cut protection'
    ],
    bestFor: 'Small offices, law firms, chartered accountants, clinics, and factory security gates',
    warranty: '1 Year Manufacturer Warranty with Free On-Site Programming in Pune',
    inStock: true
  },
  {
    id: 'syntel-neo-dx-312-416',
    name: 'Syntel NEO DX 312 / 416 Hybrid IP-PBX',
    brand: 'Syntel',
    category: 'Enterprise Office IP-PBX',
    categorySlug: 'telephony',
    image: '/images/products/telephony.jpg',
    shortDesc: 'Higher capacity hybrid intercom supporting analog lines, PRI digital lines, and SIP VoIP calling for corporate desks.',
    specs: [
      'Expandable up to 4 Trunk lines and 16 to 32 extension desks',
      'Direct Inward Dialing (DID) allowing outside callers to ring specific employee desks directly',
      'Flexible voice-guided IVR menu system for department routing (Press 1 for Sales...)',
      'Compatible with standard push-button analog phones and digital executive consoles',
      'Seamless integration with door phone and electronic access control'
    ],
    bestFor: 'Growing medium corporate offices, multi-department facilities, and hospitals across Pune',
    warranty: '1 Year Syntel Official Warranty with On-Site Maintenance AMC Options',
    inStock: true
  },

  // ==========================================
  // 13. STRUCTURED LAN CABLING & RACKS
  // ==========================================
  {
    id: 'commscope-schneider-cat6',
    name: 'CommScope Systimax / Schneider Cat6/Cat6A Pure Copper Cable',
    brand: 'CommScope / Schneider',
    category: 'Certified Network Cabling',
    categorySlug: 'lan',
    image: '/images/products/lan_cable.jpg',
    shortDesc: '305-meter box of 100% solid bare electrolytic copper Cat6/Cat6A LSZH network cable delivering full Gigabit throughput.',
    specs: [
      '23 AWG 4-pair solid pure bare copper conductors (zero copper-clad aluminum CCA)',
      'Low Smoke Zero Halogen (LSZH) fire-retardant outer sheath for indoor safety',
      'Tested and certified to 250MHz (Cat6) and 500MHz (Cat6A 10-Gigabit)',
      'Exceeds ANSI/TIA-568-C.2 and ISO/IEC 11801 transmission channel performance standards',
      'Fluke DSX-8000 CableAnalyzer permanent link test pass guaranteed'
    ],
    bestFor: 'Workstation desk points, server rack interconnects, IP surveillance, and Wi-Fi access point drops',
    warranty: '25-Year Manufacturer System Performance Warranty when installed by certified LNK technicians',
    inStock: true
  },
  {
    id: 'rack-patch-panel-dressing',
    name: '24-Port / 48-Port Cat6 Patch Panel & Floor Racks',
    brand: 'Schneider / D-Link',
    category: 'Rack Termination & Dressing',
    categorySlug: 'lan',
    image: '/images/products/lan_cable.jpg',
    shortDesc: 'High-density 1U/2U loaded patch panels, 1U horizontal cable managers, and 42U/24U server rack assemblies.',
    specs: [
      '24 or 48 RJ45 ports with 50-micron gold-plated contact pins for corrosion resistance',
      'Dual IDC punch-down blocks compatible with 110 and Krone termination tools',
      'Numbered front ports with writable label fields for clean office port mapping',
      '1U horizontal finger-duct cable organizers preventing cable tangles and strain',
      'Includes rear cable support tie-bar for organized conduit bundle strain relief'
    ],
    bestFor: 'Small and large server rooms, network distribution closets, and office communication racks',
    warranty: '5 Years Hardware Replacement Warranty',
    inStock: true
  },

  // ==========================================
  // 14. CCTV SURVEILLANCE & SECURITY
  // ==========================================
  {
    id: 'hikvision-4k-colorvu-cctv',
    name: 'Hikvision 4K Ultra-HD ColorVu IP Dome & Bullet Cameras',
    brand: 'Hikvision',
    category: '4K Commercial Security Camera',
    categorySlug: 'surveillance',
    image: '/images/products/cctv.jpg',
    shortDesc: '24/7 full-color security surveillance cameras with smart AcuSense human and vehicle detection algorithms.',
    specs: [
      '8MP (4K 3840x2160) resolution at 20fps for crystal-clear license plate and face capture',
      'ColorVu technology with F1.0 super-aperture delivering vivid full-color video even in pitch dark',
      'AcuSense AI deep-learning engine filtering out false alarms caused by rain or leaves',
      'IP67 weatherproof bullet for outdoor perimeters and IK10 vandal-resistant dome for indoor offices',
      'Built-in microphone for real-time audio monitoring and Power over Ethernet (PoE) support'
    ],
    bestFor: 'Office entrances, reception desks, server rooms, warehouse floors, and parking lots in Pune',
    warranty: '2 to 3 Years Official Hikvision India Manufacturer Warranty',
    inStock: true
  },
  {
    id: 'wd-purple-surveillance-nvr',
    name: 'Western Digital Purple NVR Storage & 16/32-Ch NVR',
    brand: 'Western Digital',
    category: 'Surveillance NVR & Storage',
    categorySlug: 'surveillance',
    image: '/images/products/cctv.jpg',
    shortDesc: 'Purpose-built 24/7 surveillance hard drives engineered with AllFrame technology to eliminate video frame drops.',
    specs: [
      'Capacities available: 2TB, 4TB, 6TB, 8TB, and 10TB surveillance-rated SATA drives',
      'Engineered for 24/7 always-on high-definition security camera recording systems',
      'Supports up to 64 single-stream HD cameras per drive with 180TB/year workload rating',
      '16-Channel / 32-Channel 4K NVR with dual HDMI outputs and mobile app remote viewing',
      'Tarnish-resistant internal components for harsh industrial and server room environments'
    ],
    bestFor: 'Continuous 30 to 60-day CCTV video retention for legal compliance and office security',
    warranty: '3 Years Western Digital Purple Manufacturer Warranty',
    inStock: true
  }
];
