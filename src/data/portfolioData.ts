import { CertificationItem, EducationItem, Experience, Project, SkillItem, TestimonialItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Saabiq Al Hajar',
  title: {
    id: 'Senior Full-Stack Engineer & Product Architect',
    en: 'Senior Full-Stack Engineer & Product Architect',
  },
  shortBio: {
    id: 'Rekayasawan perangkat lunak yang berfokus pada pembangunan sistem web berskala tinggi, arsitektur aplikasi modern, serta pengalaman digital yang mulus, cepat, dan berkinerja unggul.',
    en: 'Software engineer specializing in building high-scale web systems, resilient product architectures, and high-performance digital experiences with seamless usability.',
  },
  longBio: {
    id: 'Dengan pengalaman lebih dari 4 tahun dalam rekayasa perangkat lunak modern, saya telah merancang dan mengimplementasikan sistem berskala enterprise, platform SaaS, serta aplikasi mobile berkinerja tinggi. Saya mengombinasikan ketajaman teknis dalam React, TypeScript, Node.js, dan arsitektur cloud dengan fokus mendalam pada kepuasan pengguna akhir dan efisiensi bisnis.',
    en: 'With over 4 years of hands-on experience in modern software engineering, I have architected and deployed enterprise-grade systems, SaaS platforms, and high-performance mobile applications. I bridge deep technical proficiency in React, TypeScript, Node.js, and cloud architectures with rigorous product sensibility and business velocity.',
  },
  email: 'saabiqalhajar825@gmail.com',
  phone: '+62 821-3456-7890',
  location: 'Jakarta, Indonesia',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  whatsapp: 'https://wa.me/6282134567890',
  avatarImage: '/src/assets/images/saabiq_real_photo.jpg',
  stats: [
    { value: '4+', label: { id: 'Tahun Pengalaman', en: 'Years Experience' } },
    { value: '28+', label: { id: 'Proyek Selesai', en: 'Delivered Projects' } },
    { value: '99.8%', label: { id: 'Ketersediaan Sistem', en: 'System Uptime SLA' } },
    { value: '120k+', label: { id: 'Pengguna Aktif', en: 'Monthly Active Users' } },
  ],
  coreValues: [
    {
      title: { id: 'Kualitas Kode & Standar Tinggi', en: 'Code Craftsmanship & Standards' },
      description: {
        id: 'Mengutamakan kode bersih (clean code), arsitektur modular, dan dokumentasi yang mudah dirawat oleh tim lintas disiplin.',
        en: 'Prioritizing clean architectures, modular typing, maintainable patterns, and comprehensive automated test suites.',
      },
    },
    {
      title: { id: 'Orientasi Performa & Latensi Rendah', en: 'Performance & Low Latency' },
      description: {
        id: 'Optimasi Core Web Vitals, caching berlapis, dan efisiensi query basis data untuk waktu respon sub-100 milidetik.',
        en: 'Deep optimization of Core Web Vitals, edge caching strategies, and lean database queries for sub-100ms response targets.',
      },
    },
    {
      title: { id: 'Fokus Solusi Bisnis & Pengguna', en: 'Product & Business Alignment' },
      description: {
        id: 'Setiap baris kode dibangun untuk menyelesaikan masalah nyata, menekan biaya infrastruktur, dan mempercepat pertumbuhan produk.',
        en: 'Every architectural choice solves tangible user friction, optimizes operational cost, and accelerates feature velocity.',
      },
    },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'fintek-analytics',
    title: 'FinTek Enterprise Analytics',
    category: 'web',
    categoryLabel: { id: 'Aplikasi Web & SaaS', en: 'Web App & SaaS' },
    tagline: {
      id: 'Platform analitik portofolio finansial institusional berbasis real-time.',
      en: 'Real-time institutional financial portfolio telemetry and intelligence platform.',
    },
    description: {
      id: 'Dasbor analitik keuangan real-time yang memproses aliran data pasar, kalkulasi alokasi aset, serta pemantauan risiko investasi.',
      en: 'Real-time financial analytics dashboard handling continuous market streaming, portfolio risk models, and asset allocation telemetry.',
    },
    fullDescription: {
      id: 'FinTek Enterprise dirancang untuk analis finansial dan manajer aset. Aplikasi ini menampilkan visualisasi grafik interaktif dengan pembaruan data sub-detik melalui WebSockets, kalkulasi rasio risiko kuantitatif, dan pelaporan otomatis multi-format.',
      en: 'FinTek Enterprise was architected for financial analysts and portfolio managers. Features sub-second websocket telemetry, interactive canvas charts, quantitative risk distribution modeling, and automated multi-format compliance reporting.',
    },
    role: 'Lead Frontend & Data Visualization Engineer',
    year: '2025',
    image: '/src/assets/images/project_fintech_analytics_1792383356327.jpg',
    metrics: '+45% Kecepatan Analisis Portofolio',
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'D3.js', 'WebSocket', 'Node.js', 'PostgreSQL'],
    keyFeatures: {
      id: [
        'Visualisasi grafik interaktif berkecepatan tinggi dengan D3.js & Canvas',
        'Pembaruan harga saham dan aset kripto instan melalui streaming WebSocket',
        'Export ringkasan eksekutif ke PDF & format Excel terenkripsi',
        'Model kalkulasi risiko portofolio otomatis dengan akurasi 99.9%',
      ],
      en: [
        'High-frequency interactive data charts using optimized D3.js and Canvas rendering',
        'Instant multi-asset price telemetry and alert triggers via secure WebSockets',
        'Encrypted batch export to executive PDF reports and formatted spreadsheets',
        'Automated quantitative portfolio risk modeling with 99.9% calculation fidelity',
      ],
    },
    challengesSolved: {
      id: 'Menangani lonjakan 15.000 titik data per detik tanpa menyebabkan frame-drop di browser dengan menerapkan virtualized rendering dan offscreen worker canvas.',
      en: 'Resolved client rendering bottlenecks under 15,000 tick-per-second websocket streams via virtualized rendering and offscreen Web Workers.',
    },
    liveUrl: 'https://example.com/demo/fintek',
    githubUrl: 'https://github.com/saabiqalhajar/fintek-analytics',
    featured: true,
  },
  {
    id: 'aeterna-luxury-commerce',
    title: 'Aeterna Luxury Commerce',
    category: 'fullstack',
    categoryLabel: { id: 'Full-Stack E-Commerce', en: 'Full-Stack E-Commerce' },
    tagline: {
      id: 'Platform belanja headless e-commerce kurasi busana mewah dengan transisi visual mulus.',
      en: 'Headless luxury curation e-commerce storefront with zero-latency visual micro-interactions.',
    },
    description: {
      id: 'Sistem e-commerce terintegrasi dengan checkout instan, filter multi-dimensi, dan optimasi performa berkecepatan tinggi.',
      en: 'High-conversion headless storefront featuring sub-second page transitions, dynamic multi-faceted filtering, and secure payment processing.',
    },
    fullDescription: {
      id: 'Membangun toko daring modern dari perancangan arsitektur headless hingga integrasi payment gateway. Dilengkapi manajemen inventaris terpusat, analitik konversi keranjang belanja, dan responsivitas sempurna di seluruh perangkat.',
      en: 'Engineered a modern digital storefront from headless architecture to automated multi-currency checkout. Incorporates real-time inventory synchronizers, checkout drop-off telemetry, and bespoke editorial typography.',
    },
    role: 'Full-Stack Software Engineer',
    year: '2024',
    image: '/src/assets/images/project_ecommerce_store_1792383356683.jpg',
    metrics: '+38% Peningkatan Conversion Rate',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Stripe API', 'Prisma', 'Redis Cache'],
    keyFeatures: {
      id: [
        'Checkout instan dengan integrasi gateway pembayaran global dan lokal',
        'Sistem caching Redis multi-layer untuk respon katalog produk di bawah 80ms',
        'Manajemen stok dan variasi produk otomatis secara real-time',
        'Skor Google Lighthouse 98+ untuk Performance dan SEO',
      ],
      en: [
        'Instant multi-tier checkout supporting both regional and global payment providers',
        'Multi-layer edge Redis cache maintaining catalog responses under 80ms',
        'Real-time automated stock level reconciliations across regional warehouses',
        'Google Lighthouse 98+ audit score across Performance, SEO, and Accessibility',
      ],
    },
    challengesSolved: {
      id: 'Menghilangkan lag pada filter multi-kategori saat katalog mencapai 20.000 SKU dengan memanfaatkan indexing Elasticsearch dan server-side filtering.',
      en: 'Eliminated product filtration latency across 20,000+ active catalog SKUs using Elasticsearch indexing and debounced edge mutations.',
    },
    liveUrl: 'https://example.com/demo/aeterna',
    githubUrl: 'https://github.com/saabiqalhajar/aeterna-commerce',
    featured: true,
  },
  {
    id: 'aethercloud-devops-platform',
    title: 'AetherCloud Infrastructure Hub',
    category: 'cloud',
    categoryLabel: { id: 'Cloud & Platform DevOps', en: 'Cloud & Platform DevOps' },
    tagline: {
      id: 'Pusat kontrol orkestrasi pipeline CI/CD dan monitoring kontainer microservices.',
      en: 'Unified developer operations console for container lifecycle and continuous delivery pipelines.',
    },
    description: {
      id: 'Konsol orkestrasi infrastruktur cloud yang menyederhanakan peluncuran kontainer, audit log terpusat, dan evaluasi kesehatan server.',
      en: 'Developer-first infrastructure platform unifying automated CI/CD stage deployments, log stream inspection, and cluster pod health metrics.',
    },
    fullDescription: {
      id: 'AetherCloud dibangun untuk mempermudah tim rekayasa perangkat lunak mengelola siklus rilis. Menyediakan antarmuka visual untuk pelacakan build, deploy otomatis ke Kubernetes, pemantauan konsumsi memori/CPU secara visual, dan pengalihan traffic canary deployment.',
      en: 'Designed to streamline containerized releases for distributed engineering teams. Features visual pipeline graphs, Kubernetes pod lifecycle managers, CPU/memory telemetry inspectors, and automated canary traffic rollouts.',
    },
    role: 'Full-Stack & DevOps Engineer',
    year: '2024',
    image: '/src/assets/images/project_cloud_devops_flow_1792383357457.jpg',
    metrics: '-62% Waktu Siklus Deployment',
    technologies: ['TypeScript', 'React', 'Docker', 'Kubernetes', 'Express', 'Prometheus', 'Tailwind CSS'],
    keyFeatures: {
      id: [
        'Visualisasi tahapan CI/CD secara real-time (Build, Test, Dockerize, Deploy, Validate)',
        'Streaming terminal log langsung dengan pencarian log cepat',
        'Pemantauan utilisasi CPU & Memory per kontainer',
        'Rollback instan satu-klik bila terdeteksi kegagalan kesehatan pod',
      ],
      en: [
        'Real-time visual CI/CD pipeline state inspection (Build, Test, Dockerize, Deploy, Validate)',
        'Live terminal log streaming with instant text filter and timestamp bookmarks',
        'Granular CPU and memory allocation graph telemetry per pod',
        'One-click automated instant rollback upon health probe degradation',
      ],
    },
    challengesSolved: {
      id: 'Mengatur orkestrasi log berukuran gigabyte per jam dengan streaming buffer gRPC dan pengarsipan kompresi berbasis cloud storage.',
      en: 'Engineered high-throughput log ingestion through gRPC streaming buffers and tiered cloud object storage archival.',
    },
    liveUrl: 'https://example.com/demo/aethercloud',
    githubUrl: 'https://github.com/saabiqalhajar/aethercloud-ops',
    featured: true,
  },
  {
    id: 'apex-mobile-banking',
    title: 'Apex Financial & Logistics App',
    category: 'mobile',
    categoryLabel: { id: 'Aplikasi Mobile & Finansial', en: 'Mobile & Financial App' },
    tagline: {
      id: 'Aplikasi perbankan dan logistik terpadu dengan proteksi biometrik dan pelacakan live GPS.',
      en: 'Integrated mobile banking and shipment logistics client with biometric security and live GPS tracking.',
    },
    description: {
      id: 'Aplikasi mobile cross-platform yang menyatukan transaksi finansial instan, mutasi rekening, serta pelacakan pengiriman kargo dalam satu antarmuka intuitif.',
      en: 'Cross-platform mobile application combining peer-to-peer financial transfers, card controls, and real-time shipment courier routing.',
    },
    fullDescription: {
      id: 'Apex Mobile dirancang dengan standar keamanan perbankan tinggi, autentikasi biometrik ganda, dan enkripsi ujung-ke-ujung (E2EE). Terintegrasi dengan sensor GPS untuk rute kurir dan estimasi kedatangan paket secara akurat.',
      en: 'Built with enterprise banking security protocols, biometric authentication gates, and E2EE payload verification. Synchronizes live GPS telemetry for delivery couriers and dynamic ETA calculations.',
    },
    role: 'Lead Mobile Application Engineer',
    year: '2023',
    image: '/src/assets/images/project_mobile_superapp_1792383357549.jpg',
    metrics: '4.9★ Rating di App Store & Play Store',
    technologies: ['React Native', 'TypeScript', 'Redux Toolkit', 'FastAPI', 'PostgreSQL', 'Mapbox SDK'],
    keyFeatures: {
      id: [
        'Autentikasi biometrik FaceID dan Fingerprint dengan failover PIN',
        'Peta pelacakan paket interaktif dengan kalkulasi ETA dinamis',
        'Histori transaksi instan dengan pencarian pintar dan kategori otomatis',
        'Dukungan mode luring (offline-first) dengan sinkronisasi otomatis saat online',
      ],
      en: [
        'Hardware biometric FaceID and Fingerprint authentication with encrypted PIN fallback',
        'Interactive route tracking map with dynamic traffic-aware ETA calculations',
        'Instant transaction ledger with smart keyword filtering and expense categories',
        'Offline-first SQLite local persistence with automatic cloud conflict resolution',
      ],
    },
    challengesSolved: {
      id: 'Memastikan sinkronisasi data transaksi offline tanpa duplikasi dengan arsitektur Event Sourcing dan UUID idempotensi unik.',
      en: 'Guaranteed zero transaction duplication during spotty mobile connectivity using event-sourcing ledgers and idempotent mutation keys.',
    },
    liveUrl: 'https://example.com/demo/apex-mobile',
    githubUrl: 'https://github.com/saabiqalhajar/apex-mobile-suite',
    featured: false,
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    role: {
      id: 'Senior Full-Stack Engineer / Tech Lead',
      en: 'Senior Full-Stack Engineer / Tech Lead',
    },
    company: 'Nusa Digital Solusindo',
    location: 'Jakarta, Indonesia (Hybrid)',
    period: '2024 — Sekarang',
    employmentType: { id: 'Penuh Waktu', en: 'Full-time' },
    summary: {
      id: 'Memimpin arsitektur teknis produk inti, mengarahkan tim beranggotakan 6 rekayasawan perangkat lunak, dan mengakselerasi siklus rilis fitur dari hitungan minggu menjadi beberapa hari.',
      en: 'Directing the core software architecture, mentoring 6 cross-functional engineers, and accelerating release cadence from bi-weekly sprints to continuous daily deployments.',
    },
    responsibilities: {
      id: [
        'Memimpin perancangan arsitektur microservices dan komponen frontend modular skala enterprise.',
        'Mengimplementasikan pipeline CI/CD modern dan penjaminan kualitas kode melalui automated testing.',
        'Melakukan review kode menyeluruh, standardisasi konvensi TypeScript, dan bimbingan teknis junior.',
        'Berkolaborasi erat dengan Product Manager, UI/UX Designer, dan Stakeholder bisnis.',
      ],
      en: [
        'Spearheading enterprise microservices architecture and reusable modular frontend design systems.',
        'Establishing modern continuous delivery pipelines with comprehensive automated testing suites.',
        'Conducting rigorous code reviews, enforcing strict TypeScript standards, and mentoring junior engineers.',
        'Collaborating with product management, UX designers, and executive leadership on strategic roadmaps.',
      ],
    },
    achievements: {
      id: [
        'Meningkatkan performa web aplikasi inti hingga 55% lebih cepat berdasarkan metrik Core Web Vitals.',
        'Menurunkan insiden regresi sistem produksi sebesar 70% dengan integrasi automated unit & E2E tests.',
        'Memimpin migrasi monolitik lawas ke modular micro-frontend tanpa downtime.',
      ],
      en: [
        'Boosted core web app performance by 55% across all Core Web Vitals benchmarks.',
        'Reduced production regression incidents by 70% via rigorous automated test coverage.',
        'Successfully migrated legacy monolithic services into modular micro-frontends with zero customer downtime.',
      ],
    },
    technologies: ['React 19', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
  },
  {
    id: 'exp-2',
    role: {
      id: 'Full-Stack Software Engineer',
      en: 'Full-Stack Software Engineer',
    },
    company: 'Karya Prima Inovasi',
    location: 'Bandung / Remote',
    period: '2022 — 2024',
    employmentType: { id: 'Penuh Waktu', en: 'Full-time' },
    summary: {
      id: 'Mengembangkan solusi perangkat lunak end-to-end untuk klien institusi perbankan, logistik, dan retail, dari perancangan API RESTful/GraphQL hingga antarmuka pengguna interaktif.',
      en: 'Engineered end-to-end software solutions for banking, logistics, and retail partners, spanning RESTful/GraphQL API design to responsive user interfaces.',
    },
    responsibilities: {
      id: [
        'Mengembangkan modul transaksi finansial dengan enkripsi data ketat dan standar kepatuhan regulasi.',
        'Membangun antarmuka pengguna responsif menggunakan React, TypeScript, dan Tailwind CSS.',
        'Mengintegrasikan payment gateway, SMS OTP provider, dan sistem pengiriman kargo pihak ketiga.',
        'Mengoptimasi skema database PostgreSQL dan caching Redis untuk menangani traffic puncak promo.',
      ],
      en: [
        'Engineered secure financial transaction modules adhering to strict regulatory compliance standards.',
        'Crafted responsive, accessible client interfaces leveraging React, TypeScript, and modern CSS.',
        'Integrated third-party payment rails, SMS OTP providers, and automated shipping carrier logistics.',
        'Tuned PostgreSQL relational schemas and implemented Redis caching layers for high-traffic promotional spikes.',
      ],
    },
    achievements: {
      id: [
        'Mengurangi waktu tunggu respon API rata-rata dari 450ms menjadi 95ms melalui optimasi query dan caching.',
        'Merilis 8 proyek aplikasi klien sesuai jadwal dengan tingkat kepuasan klien 100%.',
        'Mengembangkan komponen UI internal yang digunakan kembali di 5 proyek berbeda, menghemat 200+ jam kerja.',
      ],
      en: [
        'Cut average API round-trip latency from 450ms to 95ms through query optimization and caching.',
        'Delivered 8 client software systems strictly on schedule with a 100% stakeholder satisfaction rating.',
        'Authored an internal reusable UI component kit adopted across 5 distinct products, saving 200+ engineering hours.',
      ],
    },
    technologies: ['React', 'TypeScript', 'Express.js', 'PostgreSQL', 'Redis', 'Tailwind CSS', 'GraphQL'],
  },
  {
    id: 'exp-3',
    role: {
      id: 'Frontend Developer & UI Specialist',
      en: 'Frontend Developer & UI Specialist',
    },
    company: 'Studio Digital Kreatif',
    location: 'Jakarta, Indonesia',
    period: '2020 — 2022',
    employmentType: { id: 'Penuh Waktu', en: 'Full-time' },
    summary: {
      id: 'Fokus pada penerjemahan desain visual ke dalam kode website interaktif yang pixel-perfect, aksesibel, dan berkecepatan tinggi.',
      en: 'Specialized in translating high-fidelity visual mockups into accessible, pixel-perfect, and ultra-fast web interfaces.',
    },
    responsibilities: {
      id: [
        'Mengembangkan landing page interaktif dan web portofolio dengan animasi micro-interaction halus.',
        'Memastikan kompatibilitas lintas peramban (Chrome, Safari, Firefox, Edge) dan responsivitas mobile.',
        'Menerapkan prinsip aksesibilitas web (WCAG AA standard) dan SEO semantik yang ramah mesin pencari.',
      ],
      en: [
        'Developed interactive web applications and portfolio showcases with fluid micro-interactions.',
        'Ensured comprehensive cross-browser fidelity and responsive performance across all mobile viewports.',
        'Enforced web accessibility fundamentals (WCAG AA) and semantic SEO markup structures.',
      ],
    },
    achievements: {
      id: [
        'Meningkatkan rata-rata retensi pengguna web sebesar 32% berkat navigasi yang lebih intuitif dan cepat.',
        'Menghasilkan 15+ website komersial dengan nilai performa audit Google PageSpeed di atas 95/100.',
      ],
      en: [
        'Increased client average user dwell time by 32% through intuitive navigation and fluid interactions.',
        'Shipped 15+ commercial client web apps maintaining Google PageSpeed scores above 95/100.',
      ],
    },
    technologies: ['JavaScript ES6+', 'React', 'HTML5/CSS3', 'Git', 'Webpack', 'Figma to Code'],
  },
];

export const SKILLS: SkillItem[] = [
  // Frontend
  { name: 'React & React 19', level: 96, experience: '4+ Tahun', category: 'frontend' },
  { name: 'TypeScript', level: 94, experience: '4 Tahun', category: 'frontend' },
  { name: 'Next.js & Server Components', level: 90, experience: '3+ Tahun', category: 'frontend' },
  { name: 'Tailwind CSS', level: 98, experience: '4+ Tahun', category: 'frontend' },
  { name: 'Motion / Framer Animation', level: 88, experience: '3 Tahun', category: 'frontend' },
  { name: 'State Management (Zustand/Redux)', level: 92, experience: '4 Tahun', category: 'frontend' },

  // Backend
  { name: 'Node.js & Express', level: 92, experience: '4 Tahun', category: 'backend' },
  { name: 'PostgreSQL & Drizzle/Prisma', level: 88, experience: '3+ Tahun', category: 'backend' },
  { name: 'RESTful API & GraphQL', level: 94, experience: '4 Tahun', category: 'backend' },
  { name: 'Redis Caching & PubSub', level: 84, experience: '2+ Tahun', category: 'backend' },
  { name: 'WebSockets & Event Streams', level: 86, experience: '3 Tahun', category: 'backend' },
  { name: 'Authentication & OAuth 2.0', level: 90, experience: '3+ Tahun', category: 'backend' },

  // DevOps & Cloud
  { name: 'Docker & Containerization', level: 88, experience: '3 Tahun', category: 'devops' },
  { name: 'CI/CD Pipelines (GitHub Actions)', level: 89, experience: '3 Tahun', category: 'devops' },
  { name: 'AWS & Cloud Infrastructure', level: 82, experience: '2+ Tahun', category: 'devops' },
  { name: 'Git & Linux Administration', level: 92, experience: '4+ Tahun', category: 'devops' },

  // Architecture & Engineering Practices
  { name: 'Clean Architecture & Design Patterns', level: 92, experience: '4 Tahun', category: 'architecture' },
  { name: 'Automated Testing (Jest / Vitest)', level: 86, experience: '3 Tahun', category: 'architecture' },
  { name: 'Web Security (OWASP & E2EE)', level: 88, experience: '3 Tahun', category: 'architecture' },
  { name: 'Performance Optimization & Core Vitals', level: 95, experience: '4 Tahun', category: 'architecture' },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: {
      id: 'Sarjana Ilmu Komputer (S.Kom) / Teknik Informatika',
      en: 'Bachelor of Science in Computer Science',
    },
    institution: 'Universitas Komputama (UNIKMA)',
    location: 'Indonesia',
    period: '2020 — 2024',
    description: {
      id: 'Fokus studi pada Rekayasa Perangkat Lunak, Struktur Data & Algoritma, Basis Data Terdistribusi, serta Interaksi Manusia dan Komputer (HCI). Lulus dengan predikat Sangat Memuaskan.',
      en: 'Curriculum focused on Software Engineering, Data Structures & Algorithms, Distributed Systems, and Human-Computer Interaction (HCI). Graduated with honors distinction.',
    },
    gpa: '3.82 / 4.00',
    honors: {
      id: 'Lulusan Terbaik Program Studi Teknik Informatika',
      en: 'Top Graduate Honors in Computer Science Department',
    },
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services (AWS)',
    year: '2024',
    credentialId: 'AWS-ARCH-849204',
    skillsCovered: ['VPC Architecture', 'EC2 & ECS Auto-scaling', 'S3 & RDS Security', 'High Availability Design'],
  },
  {
    title: 'Meta Certified Professional Front-End Developer',
    issuer: 'Meta (via Coursera)',
    year: '2023',
    credentialId: 'META-FED-99217',
    skillsCovered: ['Advanced React Patterns', 'Web Accessibility (a11y)', 'UI/UX Principles', 'Testing & Optimization'],
  },
  {
    title: 'Google Professional Cloud Developer',
    issuer: 'Google Cloud Platform (GCP)',
    year: '2023',
    credentialId: 'GCP-DEV-730192',
    skillsCovered: ['Cloud Run & Kubernetes', 'Cloud SQL Management', 'IAM Roles & Secrets', 'Observability'],
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: 'Budi Pratama',
    role: 'Head of Engineering',
    company: 'Nusa Digital Solusindo',
    quote: {
      id: 'Saabiq adalah engineer langka yang menguasai arsitektur backend yang kokoh sekaligus memiliki mata desain yang sangat teliti untuk frontend. Kemampuannya memecahkan masalah performa sistem sangat berdampak bagi pertumbuhan tim kami.',
      en: 'Saabiq is a rare engineer who commands solid backend architecture while maintaining an exceptional eye for frontend detail. His ability to solve complex performance bottlenecks dramatically accelerated our core product.',
    },
    context: 'Atasan langsung di Nusa Digital',
  },
  {
    name: 'Clarissa Salim',
    role: 'Product Lead',
    company: 'FinTek Venture Labs',
    quote: {
      id: 'Bekerja bersama Saabiq sangat menyenangkan. Komunikasinya sangat lugas, selalu menyelesaikan sprint tepat waktu, dan kode yang dihasilkan sangat rapi sehingga tim kami dapat melakukan iterasi dengan cepat.',
      en: 'Collaborating with Saabiq has been an outstanding experience. He communicates clearly, always delivers sprints on schedule, and writes exceptionally modular code that enables lightning-fast product iterations.',
    },
    context: 'Kolaborator proyek FinTek Analytics',
  },
];
