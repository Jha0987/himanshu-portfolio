export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  badge: string;
  domain: string;
  description: string;
  tags: string[];
  features: string[];
  demoUrl?: string;
  githubUrl?: string;
  images: string[];
  featured?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  type?: string;
  location?: string;
  bullets: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  details: string;
  year?: string;
  category: "all" | "certifications" | "research";
  iconType: "shield" | "award" | "network" | "cpu" | "code" | "file";
  credentialUrl?: string;
}

export interface SkillGroup {
  name: string;
  discipline: string;
  description: string;
  skills: string[];
  thinkingSteps: { step: string; text: string }[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Himanshu Kumar Jha",
    shortName: "Himanshu",
    surname: "Jha",
    role: "Software Engineer | Full-Stack Developer",
    tagline: "PRACTICAL ARCHITECTURE & RELIABLE APIS",
    headline: "ENGINEER. DEVELOPER. BUILDER.",
    toplineLocation: "BASED IN INDIA · THINKING BEYOND",
    introduction:
      "I build practical web applications and backend systems using modern JavaScript technologies, with a focus on clean architecture, reliable APIs, and useful user experiences.",
    summary:
      "I am a software developer focused on building full-stack web applications, reliable backend APIs, and practical software systems. My experience includes React, Next.js, Node.js, Express.js, relational and NoSQL databases, authentication, and real-time application workflows. I enjoy turning real-world requirements into maintainable, user-focused software.",
    email: "hjha8609@gmail.com",
    github: "https://github.com/Jha0987",
    linkedin: "https://www.linkedin.com/in/himanshu-kumar-jha-48b568351",
    deployedUrl: "https://himanshu-portfolio-him-e35c.vercel.app/",
    resumeUrl: "/resume.pdf",
    location: "India",
  },

  proofStrip: [
    {
      stat: "3+",
      label: "full-stack systems built & deployed",
      unit: "+",
    },
    {
      stat: "8.7",
      label: "CGPA · Parul Institute of Technology",
      unit: "",
    },
    {
      stat: "1",
      label: "research paper published on AI systems",
      unit: "st",
    },
  ],

  disciplines: [
    {
      id: "build",
      label: "Build",
      shape: "shape-structure",
      centerLabel: "STRUCTURE",
      heading: "Give an idea structure.",
      description:
        "Full-stack web applications, clean component trees, and responsive user interfaces that connect real user needs to working software.",
      linkText: "Explore the systems ↗",
      linkHref: "#work",
    },
    {
      id: "architect",
      label: "Architect",
      shape: "shape-ripples",
      centerLabel: "ARCHITECTURE",
      heading: "Design reliable backends.",
      description:
        "REST APIs, Socket.IO live streams, relational PostgreSQL schemas with Drizzle ORM, and secure JWT authentication pipelines.",
      linkText: "Inspect technical depth ↗",
      linkHref: "#expertise",
    },
    {
      id: "ship",
      label: "Ship",
      shape: "shape-connected",
      centerLabel: "DELIVERY",
      heading: "Ship maintainable code.",
      description:
        "Dockerized environments, CI/CD automated deployment on Vercel, rigorous endpoint testing, and clean software engineering practices.",
      linkText: "See the journey ↗",
      linkHref: "#journey",
    },
  ],

  projects: [
    {
      id: "ai-mock-interviewer",
      number: "01",
      title: "AI Mock Interviewer",
      tagline:
        "Adaptive interview platform with dynamic question generation and automated feedback analysis",
      category: "Full-Stack & AI Integration",
      badge: "CURRENT PRODUCTION DEPLOYMENT",
      domain: "ai-mock-interviewer.vercel.app",
      description:
        "A full-stack interview preparation application that helps candidates practice technical interviews using dynamic Gemini AI question generation and automated feedback scoring.",
      tags: ["Next.js", "React", "PostgreSQL", "Drizzle ORM", "Clerk", "Gemini API", "Tailwind CSS"],
      features: [
        "Dynamic interview-question generation through the Gemini API",
        "AI-assisted answer evaluation, sentiment feedback, and scoring",
        "Interview history and performance progress tracking",
        "Secure user authentication with Clerk",
        "PostgreSQL database persistence with Drizzle ORM",
      ],
      demoUrl: "https://ai-mock-interviewer-kappa-green.vercel.app",
      githubUrl: "https://github.com/Jha0987/AI-Mock-Interviewer",
      images: [
        "/images/ai-home.png",
        "/images/ai-dashboard.png",
        "/images/ai-interview.png",
      ],
      featured: true,
    },
    {
      id: "kanad-telecom-noc",
      number: "02",
      title: "Telecom Deployment & NOC Management System",
      tagline:
        "Telecom infrastructure operations suite with real-time telemetry, alarm monitoring, and RBAC",
      category: "Telecom Operations & Real-Time Monitoring",
      badge: "DEPLOYED OPERATIONS SUITE",
      domain: "kanad-network.vercel.app",
      description:
        "A telecom operations management system designed to support site installation, commissioning, configuration auditing, alarm monitoring, and troubleshooting workflows.",
      tags: ["React", "Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT", "Docker"],
      features: [
        "Site installation, lifecycle tracking, and commissioning checklists",
        "Real-time fault alerts and telemetry streaming powered by Socket.IO",
        "Role-Based Access Control (RBAC) and JWT with refresh tokens",
        "Optimized MongoDB data schemas for high-frequency logs",
        "Containerized with Docker for staging and deployment",
      ],
      demoUrl: "https://kanad-network-g65jaunad-him-e35c.vercel.app",
      githubUrl: "https://github.com/Jha0987/Kanad-Network",
      images: [
        "/images/kanad-dashboard.png",
        "/images/kanad-alarms.png",
      ],
      featured: true,
    },
    {
      id: "job-search-portal",
      number: "03",
      title: "Job Search Portal",
      tagline:
        "Modern career opportunity portal with multi-criteria filtering and application management",
      category: "Frontend & API Integration",
      badge: "WEB APPLICATION",
      domain: "jobsearch-portal.dev",
      description:
        "A responsive job-search application focused on discovering relevant openings, browsing job details, and supporting application workflows.",
      tags: ["React", "Vite", "JavaScript", "Tailwind CSS", "REST APIs"],
      features: [
        "Search and filtering by role, location, and experience",
        "Interactive job-listing interfaces with inline application workflows",
        "Robust REST API client integration with form validation",
        "Mobile-first responsive design across all viewports",
      ],
      githubUrl: "https://github.com/Jha0987/JobSearchPortal",
      images: [],
      featured: true,
    },
  ] as Project[],

  moreWork: [
    {
      number: "04",
      category: "ACADEMIC RESEARCH & SYSTEM DESIGN",
      title: "AI-Based Adaptive Mock Interview System",
      emphasis: "PAPER",
      description:
        "Published research analyzing NLP prompt engineering, scoring rubrics, and automated candidate feedback loops.",
      link: "https://www.ijset.in/wp-content/uploads/IJSRET_V12_issue2_471.pdf",
      isExternal: true,
    },
    {
      number: "05",
      category: "DISTRIBUTED WORKFLOWS",
      title: "Kanad Telecom Telemetry & Docker Pipeline",
      emphasis: "PIPELINE",
      description:
        "Architecture patterns for WebSocket subscriptions, fault recovery, and microservice containerization.",
      link: "https://github.com/Jha0987/Kanad-Network",
      isExternal: true,
    },
  ],

  expertise: [
    {
      id: "fullstack",
      number: "01",
      title: "Full-Stack & Frontend Architecture",
      lead: "Build with modularity and clean abstractions.",
      description:
        "I build user interfaces and web applications that connect complex backend operations to intuitive, accessible user workflows using React, Next.js, and TypeScript.",
      strengths:
        "React · Next.js · TypeScript · SCSS / Tailwind · State Management · Responsive Design",
      steps: [
        { step: "01", text: "Analyze user workflows & component tree" },
        { step: "02", text: "Structure modular, type-safe interfaces" },
        { step: "03", text: "Optimize bundle, rendering & accessibility" },
      ],
    },
    {
      id: "backend",
      number: "02",
      title: "Robust Backend & Real-Time APIs",
      lead: "Reliable data flows, authentication, and live sockets.",
      description:
        "I design and implement backend services with Express.js and Node.js, focusing on predictable API contracts, secure JWT authorization, and WebSocket event streams.",
      strengths:
        "Node.js · Express.js · RESTful APIs · Socket.IO · JWT Authentication · Middleware",
      steps: [
        { step: "01", text: "Establish API contracts & error schemas" },
        { step: "02", text: "Implement auth middleware & socket channels" },
        { step: "03", text: "Verify edge-cases, validation & status codes" },
      ],
    },
    {
      id: "database",
      number: "03",
      title: "Data Modeling & Production Deployment",
      lead: "Structured persistence, relational integrity, and containerization.",
      description:
        "I work with relational schemas in PostgreSQL via Drizzle ORM and document stores in MongoDB, deploying containerized applications with Docker and Vercel.",
      strengths:
        "PostgreSQL · MongoDB · Drizzle ORM · Prisma · Docker · Git · Vercel CI/CD",
      steps: [
        { step: "01", text: "Model normalized schemas & relations" },
        { step: "02", text: "Write efficient query filters & migrations" },
        { step: "03", text: "Package with Docker & deploy to Vercel" },
      ],
    },
  ],

  impactStats: {
    leadStat: "100%",
    leadUnit: "",
    leadTitle: "Reliable API endpoints. Verified workflows.",
    leadDescription:
      "Across full-stack production deployments and telecom operations suites. Building software where correctness, security, and uptime matter.",
    pairs: [
      {
        value: "8.7",
        unit: "CGPA",
        title: "Academic & Engineering Foundation",
        description:
          "B.Tech in Computer Science and Engineering from Parul Institute of Technology.",
      },
      {
        value: "2",
        unit: "Roles",
        title: "Industry Engineering Internships",
        description:
          "Practical software development experience at DoorPay and Kanad Networks Pvt. Ltd.",
      },
    ],
    principle: {
      eyebrow: "THE CORE PHILOSOPHY",
      line1: "Build practical software.",
      line2: "Prioritize clean architecture.",
      line3: "Give it room to scale.",
    },
    milestones: [
      {
        year: "2024",
        bold: "Core Systems & Real-Time Engineering.",
        text: "Engineered telecom operations management systems with Socket.IO, JWT, and MongoDB at Kanad Networks.",
      },
      {
        year: "2025",
        bold: "Generative AI Research & Next.js Platforms.",
        text: "Authored academic research paper on adaptive mock interview systems and built AI interview platforms with Gemini API & Drizzle ORM.",
        link: "https://www.ijset.in/wp-content/uploads/IJSRET_V12_issue2_471.pdf",
        linkText: "Published paper record",
      },
      {
        year: "Present",
        bold: "Software Development at DoorPay.",
        text: "Developing responsive administrative dashboards, integrating REST APIs, and handling robust state management in Next.js & React.",
      },
    ],
  },

  credentials: [
    {
      id: "research-paper",
      title: "Design and Evaluation of an AI Based Adaptive Mock Interview System Using NLP and Real-Time Feedback Analysis",
      issuer: "IJSRET Journal · Volume 12, Issue 2",
      details: "Published academic research paper on generative AI questions, scoring rubrics, and automated candidate feedback loops.",
      category: "research",
      iconType: "file",
      credentialUrl: "https://www.ijset.in/wp-content/uploads/IJSRET_V12_issue2_471.pdf",
    },
    {
      id: "nptel-cn",
      title: "Computer Networks and Internet Protocol",
      issuer: "NPTEL (IIT Kharagpur)",
      details: "Elite Certificate • Score: 76% · TCP/IP, Routing Protocols, Subnetting, Socket Programming & Flow Control.",
      category: "certifications",
      iconType: "network",
    },
    {
      id: "nptel-iot",
      title: "Introduction to Internet of Things (IoT)",
      issuer: "NPTEL",
      details: "Elite Certificate • Score: 77% · Sensor Networking, Protocols (MQTT, HTTP), Edge Compute & Data Pipelines.",
      category: "certifications",
      iconType: "cpu",
    },
    {
      id: "cisco-cyber",
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      details: "Network Defense, Threat Analysis, Cryptography & Secure System Architectures.",
      category: "certifications",
      iconType: "shield",
    },
    {
      id: "cisco-entrepreneur",
      title: "Discovering Entrepreneurship",
      issuer: "Cisco Networking Academy",
      details: "Technology Product Lifecycle, Problem Identification & Solution Validation.",
      category: "certifications",
      iconType: "award",
    },
    {
      id: "hackathon",
      title: "Vadodara Hackathon 4.0",
      issuer: "Parul University",
      details: "Certificate of Technical Innovation & Hackathon Participation.",
      category: "certifications",
      iconType: "code",
    },
  ] as Certification[],

  journeyTimeline: [
    {
      year: "JAN 2026",
      title: "Kanad Networks — Software Engineering Intern",
      text: "Contributed to building a telecom NOC management system for site commissioning, remote auditing, real-time alarms with Socket.IO, and JWT role-based access control.",
    },
    {
      year: "MAY 2026",
      title: "DoorPay — Software Development Intern",
      text: "Developing responsive administrative dashboard functionality with Next.js and React, integrating REST endpoints, and improving client-side data flows.",
    },
    {
      year: "ACADEMICS",
      title: "B.Tech in Computer Science — Parul Institute of Technology",
      text: "Graduated with 8.7 CGPA, solidifying foundational strengths in Data Structures, Algorithms, Computer Networks, Operating Systems, and Database Management.",
    },
    {
      year: "NEXT",
      title: "Full-Time Software Engineering Opportunities",
      text: "Ready to contribute to high-impact teams building reliable full-stack applications, scalable backend services, and clean developer experiences.",
    },
  ],
};
