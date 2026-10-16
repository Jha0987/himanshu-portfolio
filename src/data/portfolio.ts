export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  features: string[];
  demoUrl?: string;
  githubUrl?: string;
  images?: string[];
  featured?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  type?: string;
  period: string;
  location?: string;
  bullets: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  details: string;
  initial: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Himanshu Kumar Jha",
    shortName: "Himanshu Kumar",
    initials: "HJ",
    headline: "Software Engineer & Full-Stack Developer",
    subheadline: "I build high-impact web apps and scalable systems with clean architecture.",
    bio: "Computer Science graduate with hands-on experience building modern full-stack web applications using React, Next.js, Node.js, Express.js, MongoDB, and PostgreSQL. Experienced in authentication, real-time workflows (Socket.io), REST APIs, and generative AI integrations. Passionate about turning complex real-world requirements into clean, performant products.",
    statusBadge: "Available for new opportunities",
    email: "hjha8609@gmail.com",
    github: "https://github.com/Jha0987",
    linkedin: "https://www.linkedin.com/in/himanshu-kumar-jha-48b568351",
    resumeUrl: "/resume.pdf",
    location: "India",
  },

  skills: [
    {
      category: "Languages",
      skills: ["JavaScript (ES6+)", "TypeScript", "Python", "C++", "Java", "SQL"],
    },
    {
      category: "Frontend",
      skills: ["React.js", "Next.js", "Vite", "Tailwind CSS", "HTML5", "CSS3 / Sass"],
    },
    {
      category: "Backend & Cloud",
      skills: ["Node.js", "Express.js", "REST APIs", "Socket.io", "JWT Auth", "Docker"],
    },
    {
      category: "Databases & ORM",
      skills: ["PostgreSQL", "MongoDB", "Drizzle ORM"],
    },
    {
      category: "Tools & Ecosystem",
      skills: ["Git", "GitHub", "Postman", "Vercel", "VS Code"],
    },
    {
      category: "AI & Integrations",
      skills: ["Gemini API", "Clerk Authentication", "Webhook & REST API Integration"],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "ai-mock-interviewer",
      number: "01",
      title: "AI Mock Interviewer",
      tagline: "Adaptive AI interview preparation platform with automated feedback and scoring",
      description:
        "A full-stack AI-assisted interview platform enabling candidates to customize technical interviews, generate real-time dynamic questions via Gemini AI, submit answers, and receive detailed analytical feedback with actionable ratings.",
      tags: ["Next.js", "PostgreSQL", "Drizzle ORM", "Clerk", "Gemini API", "Tailwind CSS"],
      features: [
        "AI Question Generation powered by Gemini API",
        "Automated answer evaluation with ratings & constructive feedback",
        "Secure user authentication and session management via Clerk",
        "Relational schema & interview history persistence using PostgreSQL & Drizzle ORM",
        "Fully responsive interactive dashboard",
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
      tagline: "Enterprise telecom infrastructure and real-time Network Operations Center management",
      description:
        "A full-stack operations management suite designed for telecom workflows, including site installation, remote commissioning, configuration auditing, real-time alarm monitoring, and end-to-end troubleshooting pipelines.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT", "Docker"],
      features: [
        "Granular Role-Based Access Control (RBAC) and JWT with refresh tokens",
        "Instant live alarm streaming and status updates powered by Socket.io",
        "Site lifecycle management: installation, commissioning & diagnostics",
        "Containerized with Docker for predictable production staging and deployments",
        "Optimized MongoDB data schemas for high-frequency telemetry",
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
      tagline: "Career exploration and application management interface",
      description:
        "A collaborative modern frontend interface for career seekers, featuring multi-filter job search, detailed listings, application workflows, and recruiter-candidate application tracking states.",
      tags: ["React", "Vite", "Tailwind CSS", "REST APIs", "JavaScript"],
      features: [
        "Instant multi-criteria search and filter by role, experience, and location",
        "Dynamic job listing cards with inline application drawers",
        "REST API client integration with robust form validation and error handling",
        "Mobile-first responsive design",
      ],
      githubUrl: "https://github.com/Jha0987/JobSearchPortal",
      featured: false,
    },
  ] as Project[],

  experience: [
    {
      company: "DoorPay",
      role: "Software Development Intern",
      type: "Part-time",
      period: "May 2026 – Present",
      bullets: [
        "Engineered responsive administrative dashboard features using Next.js and React.js, enhancing operational visibility for platform admins.",
        "Integrated backend RESTful endpoints, implemented reactive state management, and streamlined API error-handling patterns.",
        "Collaborated in sprint cycles to resolve defects, review code, and optimize client-side rendering bottlenecks.",
      ],
    },
    {
      company: "Kanad Networks Pvt. Ltd.",
      role: "Software Engineering Intern",
      type: "Internship",
      period: "Jan 2026 – Apr 2026",
      bullets: [
        "Contributed to engineering a telecom NOC management system supporting site commissioning, configuration, alarms, and network troubleshooting.",
        "Built modular frontend components and backend services with robust authentication and granular role-based permissions.",
        "Implemented real-time event streaming for telemetry and fault alerts using Socket.io and MongoDB.",
        "Participated in automated testing, bug remediation, and continuous containerized deployments.",
      ],
    },
  ] as Experience[],

  research: {
    title:
      "Design and Evaluation of an AI Based Adaptive Mock Interview System Using NLP and Real-Time Feedback Analysis",
    description:
      "Published academic research paper documenting the design, algorithmic pipeline, and empirical evaluation of generative AI and NLP feedback loops in technical mock interview scenarios.",
    paperUrl:
      "https://www.ijset.in/wp-content/uploads/IJSRET_V12_issue2_471.pdf",
    venue: "IJSRET Journal (Volume 12, Issue 2)",
  },

  certifications: [
    {
      title: "Computer Networks and Internet Protocol",
      issuer: "NPTEL",
      details: "Elite Certificate • Score: 76%",
      initial: "N",
    },
    {
      title: "Introduction to Internet of Things (IoT)",
      issuer: "NPTEL",
      details: "Elite Certificate • Score: 77%",
      initial: "N",
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      details: "Foundational Security Principles & Defense",
      initial: "C",
    },
    {
      title: "Discovering Entrepreneurship",
      issuer: "Cisco Networking Academy",
      details: "Technology Innovation & Product Ideation",
      initial: "C",
    },
    {
      title: "Vadodara Hackathon 4.0",
      issuer: "Parul University",
      details: "Certificate of Participation & Technical Innovation",
      initial: "H",
    },
  ] as Certification[],
};
