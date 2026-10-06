import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Backend Engineering',
    icon: 'Server',
    description: 'Core expertise in building enterprise-grade, high-throughput, and secure server applications.',
    skills: [
      {
        name: 'Java',
        description: 'Core OOP, multi-threading, concurrency, functional streams, and memory management.',
        tag: 'Core Language',
        iconName: 'Code'
      },
      {
        name: 'Spring Boot',
        description: 'Rapid microservice creation, auto-configuration, dependency injection, and production readiness.',
        tag: 'Framework',
        iconName: 'Flame'
      },
      {
        name: 'Spring Security',
        description: 'Role-based access control (RBAC), JWT authentication, OAuth2, and endpoint protection.',
        tag: 'Security',
        iconName: 'ShieldCheck'
      },
      {
        name: 'Spring Data JPA',
        description: 'Object-relational mapping, custom repository patterns, pagination, and transaction boundaries.',
        tag: 'Persistence',
        iconName: 'Database'
      },
      {
        name: 'Hibernate',
        description: 'Entity lifecycle management, query caching, lazy loading optimization, and schema mapping.',
        tag: 'ORM',
        iconName: 'Layers'
      },
      {
        name: 'REST APIs',
        description: 'Stateless API design, OpenAPI/Swagger documentation, error schemas, and standard HTTP methods.',
        tag: 'API Architecture',
        iconName: 'Network'
      }
    ]
  },
  {
    title: 'Frontend Development',
    icon: 'Layout',
    description: 'Constructing modern, type-safe, and visually engaging user interfaces.',
    skills: [
      {
        name: 'React',
        description: 'Component lifecycle, custom hooks, context state management, and virtual DOM rendering.',
        tag: 'Library',
        iconName: 'Boxes'
      },
      {
        name: 'HTML5',
        description: 'Semantic markup, accessible standards (a11y), responsive structures, and SEO readiness.',
        tag: 'Markup',
        iconName: 'FileCode'
      },
      {
        name: 'CSS3 / Modern CSS',
        description: 'Responsive flexbox/grid layouts, animations, transitions, and clean design systems.',
        tag: 'Styling',
        iconName: 'Palette'
      },
      {
        name: 'JavaScript (ES6+)',
        description: 'Modern asynchronous programming, promises, DOM manipulation, and functional patterns.',
        tag: 'Language',
        iconName: 'Cpu'
      }
    ]
  },
  {
    title: 'Database Management',
    icon: 'Database',
    description: 'Relational data modeling, ACID transactions, and index query optimization.',
    skills: [
      {
        name: 'PostgreSQL',
        description: 'Advanced relational modeling, ACID guarantees, complex joins, JSONB, and indexing strategies.',
        tag: 'RDBMS',
        iconName: 'Database'
      },
      {
        name: 'MySQL',
        description: 'Relational schema design, stored procedures, transaction management, and query tuning.',
        tag: 'RDBMS',
        iconName: 'HardDrive'
      }
    ]
  },
  {
    title: 'DevOps & Cloud',
    icon: 'Cloud',
    description: 'Containerization, cloud infrastructure, and modern version control workflows.',
    skills: [
      {
        name: 'Docker',
        description: 'Containerizing applications, multi-stage builds, Docker Compose, and image optimization.',
        tag: 'Containers',
        iconName: 'Container'
      },
      {
        name: 'Kubernetes',
        description: 'Pod management, deployments, services, scaling, and container orchestration concepts.',
        tag: 'Orchestration',
        iconName: 'Workflow'
      },
      {
        name: 'AWS',
        description: 'Foundational cloud compute, storage, and server deployment architectures.',
        tag: 'Cloud',
        iconName: 'CloudRain'
      },
      {
        name: 'Git & GitHub',
        description: 'Distributed version control, branch management, pull request reviews, and collaborative workflows.',
        tag: 'VCS',
        iconName: 'GitBranch'
      }
    ]
  },
  {
    title: 'AI / Data Exploration',
    icon: 'Sparkles',
    description: 'Leveraging machine learning principles to empower intelligent software solutions.',
    skills: [
      {
        name: 'AI / ML Fundamentals',
        description: 'Data preprocessing, supervised & unsupervised algorithms, and model evaluation metrics.',
        tag: 'Intelligence',
        iconName: 'Brain'
      },
      {
        name: 'Machine Learning Concepts',
        description: 'Feature engineering, decision analysis algorithms, and intelligent workflow automation.',
        tag: 'Theory & Applied',
        iconName: 'Activity'
      }
    ]
  }
];
