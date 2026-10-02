export const softwareCategories = [
  { id: 'all', label: 'All Developer Utilities' },
  { id: 'cleaner', label: 'Workstation Cleaners & Tuning' },
  { id: 'dev-cloud', label: 'Cloud & Compute Infrastructure' }
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
    id: 'vultr-cloud',
    category: 'dev-cloud',
    name: 'High-Frequency Cloud Infrastructure',
    badge: 'Top Pick: SaaS Hosting',
    rating: 4.8,
    reviewsCount: 1120,
    price: '$6.00/mo',
    originalPrice: '$10.00/mo',
    discount: 'Direct Developer Plan',
    affiliateUrl: 'https://vultr.com',
    logo: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=200',
    description: 'High-frequency NVMe cloud servers powered by 3GHz+ processors across 32 global datacenters for hosting custom SaaS applications.',
    highlights: [
      'NVMe SSD storage arrays deliver up to 3.2 GB/s read benchmarks',
      'Deploy Docker, PostgreSQL, or custom Linux environments in under 60 seconds',
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
