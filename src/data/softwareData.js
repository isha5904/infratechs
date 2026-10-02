export const softwareCategories = [
  { id: 'all', label: 'All Software' },
  { id: 'cleaner', label: 'PC Cleaners & Utilities' },
  { id: 'vpn', label: 'VPNs & Privacy' },
  { id: 'antivirus', label: 'Antivirus & Security' },
  { id: 'passwords', label: 'Password Managers' },
  { id: 'dev-tools', label: 'Developer SaaS & Cloud' },
];

export const featuredSoftware = [
  {
    id: 'wise-care-365',
    category: 'cleaner',
    name: 'Wise Care 365 & Wise Disk Cleaner',
    badge: 'Top Pick: Windows Optimizer',
    rating: 4.9,
    reviewsCount: 1420,
    price: '$29.95/yr',
    originalPrice: '$39.95',
    discount: '25% OFF Direct Vendor Special',
    affiliateUrl: 'https://www.wisecleaner.com',
    logo: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=200',
    description: 'Lightweight, lightning-fast system tuning and disk cleanup suite with zero background telemetry lag.',
    highlights: [
      'Cleared 18.4 GB of system bloat in our benchmark run',
      'Advanced startup manager cuts boot time by up to 48%',
      'Safe deep registry cleaner with automatic restore point backup',
      'Built-in real-time hardware monitor & privacy eraser'
    ],
    pros: [
      'Minimal CPU footprint (~14MB RAM during idle)',
      'No bundled third-party adware or persistent nag screens',
      'One-click multi-user profile cleaning'
    ],
    cons: [
      'Interface has classic Windows utility aesthetics',
      'Free version lacks automatic scheduled background scans'
    ],
    editorVerdict: 'The safest and most granular disk cleaner for Windows 10/11. Unlike bulky competitors, Wise Cleaner does not slow down your workstation.',
    testedBy: 'Isha Patharia',
    testDate: 'June 2026'
  },
  {
    id: 'nordvpn',
    category: 'vpn',
    name: 'NordVPN Enterprise & Dev Protection',
    badge: 'Best VPN for Devs & Speed',
    rating: 4.8,
    reviewsCount: 3820,
    price: '$3.09/mo',
    originalPrice: '$11.59/mo',
    discount: '71% OFF Direct Promotional Rate',
    affiliateUrl: 'https://nordvpn.com',
    logo: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=200',
    description: 'High-speed WireGuard (NordLynx) protocol with dedicated IP options, Threat Protection, and Meshnet.',
    highlights: [
      'Average download speed retention of 94.2% across global servers',
      'Audited zero-logs policy by PwC and Deloitte',
      'Meshnet feature allows secure peer-to-peer developer staging',
      'Dark web monitor & real-time ad/tracker blocker'
    ],
    pros: [
      'Fastest WireGuard implementation tested',
      'Meshnet is completely free and ideal for remote dev setups',
      'Dedicated IP available in 18 countries'
    ],
    cons: [
      'Desktop client can take a few seconds to initialize on startup',
      'Renewal pricing increases after promotional period'
    ],
    editorVerdict: 'The benchmark standard for privacy and remote developer staging tunnels with verified zero-logs.',
    testedBy: 'Isha Patharia',
    testDate: 'May 2026'
  },
  {
    id: 'bitdefender',
    category: 'antivirus',
    name: 'Bitdefender Total Security 2026',
    badge: '100% Malware Catch Rate',
    rating: 4.9,
    reviewsCount: 2950,
    price: '$39.99/yr',
    originalPrice: '$89.99',
    discount: '55% OFF Special Vendor Deal',
    affiliateUrl: 'https://bitdefender.com',
    logo: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=200',
    description: 'Multi-layer ransomware defense, behavioral anomaly detection, and cloud-assisted real-time threat shield.',
    highlights: [
      'Zero false positives in our 500-sample zero-day malware battery',
      'Multi-layer ransomware remediation automatically recovers modified files',
      'Silent Autopilot mode avoids interrupting coding or gaming sessions',
      'Cross-platform protection for Windows, macOS, iOS, and Android'
    ],
    pros: [
      'Industry-leading detection engines tested against zero-day exploits',
      'Extremely low system resource drag',
      'Comprehensive vulnerability scanner checks outdated libraries'
    ],
    cons: [
      'Included basic VPN is capped at 200MB/day without addon',
      'Initial full disk scan can take 35-45 minutes'
    ],
    editorVerdict: 'Hands-down the most resilient endpoint security engine with zero false alerts and rock-solid defense.',
    testedBy: 'Isha Patharia',
    testDate: 'June 2026'
  },
  {
    id: 'onepassword',
    category: 'passwords',
    name: '1Password for Teams & Individuals',
    badge: 'Best Dev & Secret Vault',
    rating: 4.9,
    reviewsCount: 1890,
    price: '$2.99/mo',
    originalPrice: '$4.99/mo',
    discount: '14-Day Free Trial Direct',
    affiliateUrl: 'https://1password.com',
    logo: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=200',
    description: 'End-to-end encrypted secret management with developer CLI, SSH key agent, and granular access controls.',
    highlights: [
      'Dual-key encryption with 128-bit Secret Key generated locally on device',
      'First-class Developer CLI (`op`) for injecting API keys directly into env files',
      'Biometric authentication and passkey sync across all platforms',
      'Watchtower real-time breach detection and compromised password alerts'
    ],
    pros: [
      'Unrivaled developer ergonomics with native SSH agent & CLI',
      'Secret Key ensures even server compromises cannot decrypt vaults',
      'Smooth autofill and passkey management'
    ],
    cons: [
      'No free tier (only 14-day full feature trial)',
      'Exporting encrypted vault backups requires desktop application'
    ],
    editorVerdict: 'The gold standard for engineering teams and individuals needing uncompromising password and secret hygiene.',
    testedBy: 'Isha Patharia',
    testDate: 'April 2026'
  },
  {
    id: 'vultr-cloud',
    category: 'dev-tools',
    name: 'Vultr High-Frequency Cloud Compute',
    badge: 'Top Pick: SaaS Hosting',
    rating: 4.7,
    reviewsCount: 1120,
    price: '$6.00/mo',
    originalPrice: '$10.00/mo',
    discount: '$100 Free Credit Direct',
    affiliateUrl: 'https://vultr.com',
    logo: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=200',
    description: 'High-frequency NVMe cloud servers powered by 3GHz+ Intel & AMD processors in 32 global datacenter locations.',
    highlights: [
      'NVMe SSD storage arrays deliver up to 3.2 GB/s read benchmarks',
      'Deploy Docker, Kubernetes, or custom Linux ISOs in under 60 seconds',
      'Native DDoS protection up to 100 Gbps available on demand',
      'Predictable pricing with zero hidden egress bandwidth traps'
    ],
    pros: [
      'Significantly faster single-thread speeds than standard AWS EC2',
      'Worldwide low-latency edge presence',
      'Robust API and Terraform provider support'
    ],
    cons: [
      'Requires server administration knowledge (unmanaged by default)',
      'Customer support ticket response times vary on basic tier'
    ],
    editorVerdict: 'Exceptional compute density and raw NVMe performance for running modern Next.js, Node.js and PostgreSQL SaaS stacks.',
    testedBy: 'Isha Patharia',
    testDate: 'March 2026'
  }
];
