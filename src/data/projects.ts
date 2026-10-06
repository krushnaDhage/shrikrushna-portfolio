import type { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'mcdm-intelligence-platform',
    title: 'MCDM Intelligence Platform',
    tagline: 'Multi-Criteria Decision Making & Analytical Evaluation Engine',
    category: 'Decision Support & Backend Architecture',
    status: 'Completed',
    description:
      'A specialized decision-support platform designed to solve complex multi-criteria evaluation problems. It mathematically aggregates quantitative and qualitative criteria across competing alternatives to provide objective, data-backed rankings.',
    problem:
      'Organizations and evaluators frequently face decision paralysis when weighing conflicting criteria (e.g., cost, performance, risk, scalability) across multiple candidate options without an objective mathematical model.',
    solution:
      'Engineered an intelligent decision-support system implementing verified MCDM algorithmic techniques (such as AHP and TOPSIS principles). Provided a clean RESTful API to parameterize criteria weights, score alternatives, and produce rank matrices with sensitivity metrics.',
    architecture:
      'Decoupled architecture featuring a Spring Boot REST backend processing matrix computations, backed by a relational PostgreSQL schema designed for normalized criteria definition, candidate storage, and deterministic computation logs.',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'RESTful APIs', 'Spring Data JPA', 'React'],
    keyFeatures: [
      'Configurable criteria matrix with customizable weighting schemes',
      'Mathematical MCDM algorithm execution with consistency validation',
      'Normalized PostgreSQL schema for storing evaluation runs and alternatives',
      'Interactive decision dashboard with comparative visual breakdowns',
      'Deterministic output calculation with audit-friendly report generation'
    ],
    githubUrl: 'https://github.com/krushnaDhage',
    liveDemoUrl: undefined,
    featured: true
  },
  {
    id: 'student-internship-evaluation-system',
    title: 'Student Internship Evaluation System',
    tagline: 'Academic Internship Lifecycle & Rubric Assessment Platform',
    category: 'Institutional Enterprise System',
    status: 'Completed',
    description:
      'A structured academic and institutional workflow platform built to streamline the tracking, mentor reviews, milestone verification, and comprehensive evaluation of student internships.',
    problem:
      'Academic institutions struggle with fragmented, manual spreadsheet tracking for hundreds of student internships, leading to delayed faculty reviews, lost documentation, and subjective assessment discrepancies.',
    solution:
      'Developed a centralized institutional management platform that establishes standardized evaluation rubrics, automated progress submission pipelines, and secure role-based portals for students, faculty mentors, and academic administrators.',
    architecture:
      'Modular full-stack application with strict role-based access control (RBAC), multi-step evaluation forms, relational database integrity for rubric tracking, and transactional submission logs.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'Spring Security', 'REST APIs', 'React'],
    keyFeatures: [
      'Multi-tier role management (Students, Faculty Mentors, Academic Evaluators)',
      'Standardized milestone submission and document upload tracking',
      'Configurable evaluation rubrics with automated grade computation',
      'Real-time administrative progress dashboard and batch performance exports',
      'Secure token-based authentication and audit-logged evaluations'
    ],
    githubUrl: 'https://github.com/krushnaDhage',
    liveDemoUrl: undefined,
    featured: true
  },
  {
    id: 'apna-shopy-ecommerce',
    title: 'Apna Shopy E-Commerce',
    tagline: 'Full-Stack Modern E-Commerce Platform with Scalable Backend',
    category: 'Full-Stack Web Application',
    status: 'Completed',
    description:
      'A comprehensive full-stack digital commerce platform featuring seamless product catalog browsing, cart lifecycle management, relational database integration, and authenticated customer checkout workflows.',
    problem:
      'Modern commerce demands responsive frontend interfaces backed by resilient backend services that maintain data consistency during concurrent cart updates, stock deductions, and user order placements.',
    solution:
      'Built a complete e-commerce solution with responsive React client interfaces communicating with structured REST endpoints. Handled stateful shopping carts, filtered catalog search, transactional order persistence, and user security.',
    architecture:
      'Layered service architecture with REST controller layer, business logic validation services, JPA persistence layer, and relational database schema supporting product categorization, inventory, and order items.',
    technologies: ['React', 'JavaScript', 'Java', 'Spring Boot', 'MySQL', 'REST APIs'],
    keyFeatures: [
      'Dynamic product catalog with instant search, filters, and categories',
      'Persistent cart state with quantity adjustment and price aggregation',
      'Secure user registration, authentication, and profile order history',
      'Transaction-safe checkout flow with stock level synchronization',
      'Clean administrative endpoints for catalog and order management'
    ],
    githubUrl: 'https://github.com/krushnaDhage',
    liveDemoUrl: undefined,
    featured: true
  },
  {
    id: 'kindness-cabinet',
    title: 'Kindness Cabinet',
    tagline: 'Community Need Matching & Impact Redistribution Application',
    category: 'Social Impact Application',
    status: 'Completed',
    description:
      'A purpose-driven application connecting community donors with local organizations and individuals in need, facilitating transparent donation requests, resource tracking, and community distribution.',
    problem:
      'Donations of essential supplies (books, clothes, necessities) frequently fail to reach relevant recipients due to lack of a centralized, transparent channel between willing donors and grassroots requests.',
    solution:
      'Created a digital coordination hub where community organizers post verified resource requests and donors pledge contributions, ensuring clear visibility into fulfilled vs. pending needs.',
    architecture:
      'Clean client-server architecture with RESTful endpoints managing need categories, donor pledge tracking, status updates, and lightweight database storage.',
    technologies: ['React', 'JavaScript', 'CSS3', 'REST APIs', 'Node / Java Backend'],
    keyFeatures: [
      'Transparent categorized listing of ongoing community needs',
      'Intuitive donor pledge workflows with status progression updates',
      'Location and category filtering for local grassroots discovery',
      'Impact tracking view highlighting fulfilled items and community contributions',
      'Clean, accessible UI built for fast loading across low-bandwidth devices'
    ],
    githubUrl: 'https://github.com/krushnaDhage',
    liveDemoUrl: undefined,
    featured: false
  },
  {
    id: 'online-examination-system',
    title: 'Online Examination System',
    tagline: 'Secure Assessment, Question Bank & Automated Scoring Engine',
    category: 'Assessment & Educational Tech',
    status: 'Completed',
    description:
      'An automated testing environment supporting structured question authoring, timed exam sessions, real-time response persistence, and instant score evaluation.',
    problem:
      'Conducting assessments manually or via unstructured tools leads to vulnerabilities such as time overrun, loss of student response data during connection drops, and cumbersome manual grading.',
    solution:
      'Engineered an exam management engine featuring timed sessions, client-side auto-save synchronization, randomized question delivery from pooled categories, and immediate evaluation upon submission.',
    architecture:
      'Backend controller-service architecture handling exam timers, secure answer key isolation until submission, and relational schema mapping tests, questions, options, and student attempt logs.',
    technologies: ['Java', 'MySQL', 'Spring Boot / Servlets', 'HTML5', 'CSS3', 'JavaScript'],
    keyFeatures: [
      'Administrator question management with multiple-choice rubric support',
      'Candidate exam interface with synchronized timer countdown',
      'Per-question response recording with navigation matrix',
      'Automated grading engine calculating results and instant score feedback',
      'Candidate attempt history and administrative test performance summaries'
    ],
    githubUrl: 'https://github.com/krushnaDhage',
    liveDemoUrl: undefined,
    featured: false
  },
  {
    id: 'banking-transaction-management-system',
    title: 'Banking Transaction Management System',
    tagline: 'High-Integrity Financial Transaction Processing & Ledger Core',
    category: 'Financial Systems & Concurrency',
    status: 'In Progress',
    description:
      'A robust backend system architected for financial ledger operations, atomic account transfers, and audit-compliant transaction history with strict ACID consistency guarantees.',
    problem:
      'Financial workflows require zero tolerance for race conditions, dirty reads, or partial failures during cross-account fund transfers and high-concurrency balance mutations.',
    solution:
      'Designing a transaction-oriented core with Spring Boot and relational database locks (optimistic/pessimistic locking) to ensure idempotent API requests, atomic debits and credits, and complete ledger traceability.',
    architecture:
      'Domain-driven transactional architecture employing Spring Transactional boundaries, double-entry bookkeeping ledger models, encrypted customer data access, and structured audit logs.',
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'Docker', 'REST APIs'],
    keyFeatures: [
      'Atomic fund transfer API with strict transactional boundary rollback',
      'Immutable transaction audit ledger tracking debit/credit journals',
      'Role-based access control isolating teller and customer capabilities',
      'Optimistic locking mechanisms to prevent concurrent balance anomalies',
      'Comprehensive error handling returning standard RFC 7807 problem details'
    ],
    githubUrl: 'https://github.com/krushnaDhage',
    liveDemoUrl: undefined,
    featured: true
  }
];
