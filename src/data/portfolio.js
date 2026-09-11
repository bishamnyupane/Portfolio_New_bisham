/**
 * Centralized Portfolio Data for Bisham Neupane
 * Update all personal details, projects, experience, skills, and links here.
 */

export const personalInfo = {
  name: "Bisham Neupane",
  firstName: "bisham",
  lastName: "neupane",
  role: "Software Engineer · Full Stack Developer",
  tagline: "Software Engineer | Full Stack Software Developer | Data Engineer Enthusiast ",

  shortBio:
    "I build clean, maintainable software for the web and occasionally convince databases to behave.",
  aboutLong:
    "Bisham Neupane is a Software Engineer and Full Stack Software Developer focused on building practical web applications, backend systems and modern software products. He works across frontend and backend development and enjoys turning ideas into reliable, maintainable software.",
  location: "Kathmandu, Nepal",
  timezone: "Asia/Kathmandu",
  email: "bishamneupane800@gmail.com",
  resume: "/assets/resume/Bisham-Neupane-CV.pdf",
  profileImage: "/assets/images/profile/profile.webp",
  // availableForWork: true,
  // statusText: "available for projects & engineering roles"
};

export const socialLinks = {
  email: "mailto:bishamneupane800@gmail.com",
  github: "https://github.com/bishamnyupane",
  linkedin: "https://www.linkedin.com/in/bisham-neupane-05607741a/",
  // twitter: "https://twitter.com/bishamneupane"
};

export const heroStack = [
  { name: "React", label: "React", icon: "atom" },
  { name: "Node.js", label: "Node.js", icon: "server" },
  { name: "Next.js", label: "Next.js", icon: "globe" },
  { name: "Express", label: "Express", icon: "cpu" },
  { name: "MongoDB", label: "MongoDB", icon: "database" },
  { name: "TypeScript", label: "TypeScript", icon: "code" },
  { name: "Git", label: "Git", icon: "git-branch" }
];

export const stats = [
  {
    value: "4",
    suffix: "+",
    label: "featured full-stack platforms",
    sparkle: true
  },
  {
    value: "BE",
    suffix: "",
    label: "software engineering · NCIT",
    sparkle: true
  },
  {
    value: "MERN",
    suffix: "",
    label: "frontend, backend & databases",
    sparkle: true
  },
  {
    value: "100",
    suffix: "%",
    label: "clean code & pragmatic craft",
    sparkle: true
  }
];

export const bentoItems = [
  {
    span: 2,
    icon: "💼",
    label: "current role",
    value: "Full Stack Software Developer",
    description:
      "Developing practical software systems involving application architecture, modern frontend development, backend systems, databases, and secure APIs.",
    funFact: "☕ fun fact: yes, it actually works on my machine"
  },
  {
    span: 1,
    icon: "📍",
    label: "based in",
    value: "Kathmandu, Nepal",
    description: "The heart of the Himalayas.",
    funFact: "🏔️ yes, I can see mountains from here"
  },
  {
    span: 1,
    icon: "🎓",
    label: "education",
    value: "Bachelor of Engineering",
    description:
      "Nepal College of Information Technology (NCIT) — Software Engineering (2022 – 2026).",
    funFact: "⚡ algorithms, system design & distributed systems"
  },
  {
    span: 2,
    icon: "🧠",
    label: "what drives me",
    value: "Pragmatic Engineering & Modern Architecture",
    description:
      "Passionate about turning complex product requirements into robust, high-performance web applications. From resilient database schemas to snappy, accessible user interfaces.",
    funFact: "🛠️ probably refactoring an API or debugging right now"
  }
];

export const projects = [
  {
    number: "01",
    id: "qaventis",
    title: "Qaventis",
    subtitle: "Engineering Confidence",
    category: "Full-Stack Startup Platform",
    description:
      "A full-stack startup website with a responsive public interface and an administration system for managing content and business operations.",
    features: [
      "Services, portfolio, blog, and case study showcase",
      "Careers, FAQ, testimonials, and consultation booking modules",
      "Robust inquiry and candidate application management",
      "Secure admin JWT authentication and media file upload pipeline"
    ],
    technologies: [
      "Next.js",
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB"
    ],
    github: "https://github.com/bishamnyupane/Qaventis",
    demo: "", // Configurable: if non-empty, shows Live Demo button
    image: "/assets/images/projects/qaventis.webp"
  },
  {
    number: "02",
    id: "yakkitchen",
    title: "YakKitchen",
    subtitle: "Modern Restaurant Ordering & Delivery",
    category: "Restaurant Ordering Platform",
    description:
      "A complete MERN-stack food ordering platform supporting customers and restaurant owners with authentication, restaurant discovery, menu management, shopping cart functionality and a complete order workflow.",
    features: [
      "JWT authentication with role-based access control",
      "Separate dashboards for customers and restaurant managers",
      "Real-time menu catalog management & cart checkout",
      "RESTful API architecture with robust validation"
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST API"
    ],
    github: "https://github.com/bishamnyupane/YakKitchen",
    demo: "", // Configurable: if non-empty, shows Live Demo button
    image: "/assets/images/projects/yakkitchen.webp"
  },
  {
    number: "03",
    id: "shopflow",
    title: "ShopFlow",
    subtitle: "POS & Inventory Management",
    category: "POS & Inventory Management System",
    description:
      "A MERN-based POS and inventory management system designed for managing products, checkout, sales, invoices and inventory analytics from one dashboard.",
    features: [
      "Role-based access control and secure JWT authentication",
      "Product tracking, catalog search, and low-stock alert signals",
      "Fast checkout flow with automated invoice generation",
      "Analytics dashboard for revenue, transactions, and inventory monitoring"
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT"
    ],
    github: "https://github.com/bishamnyupane/POS",
    demo: "", // No confirmed live demo URL: explicitly show only GitHub ↗
    image: "/assets/images/projects/shopflow.webp"
  },
  {
    number: "04",
    id: "learnsphere",
    title: "LearnSphere",
    subtitle: "University Course Management",
    category: "University Course Platform",
    description:
      "A responsive university course platform for browsing programs, semesters, subjects and syllabus resources through a clean and structured interface.",
    features: [
      "Program, semester, and individual subject breakdown pages",
      "Instant syllabus access and curriculum resources",
      "Fast client-side search across subjects and modules",
      "Reusable component architecture with full mobile responsiveness"
    ],
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS"
    ],
    github: "https://github.com/bishamnyupane/learnsphere",
    demo: "", // Configurable: if non-empty, shows Live Demo button
    image: "/assets/images/projects/learnsphere.webp"
  }
];

export const experience = [
  {
    id: "janaki",
    role: "Full Stack Software Developer",
    company: "Janaki Digital Solution / Freelance",
    period: "June 2026 – Present",
    current: true,
    logo: "💼",
    description:
      "Developing practical software systems involving application architecture, frontend development, backend systems, databases and APIs.",
    bullets: [
      "Architecting scalable frontend interfaces with React and Next.js, prioritizing performance and user experience.",
      "Building resilient Node.js and Express RESTful APIs integrated with MongoDB and PostgreSQL schemas.",
      "Implementing end-to-end authentication, role-based authorization, and robust state management."
    ]
  },
  // {
  //   id: "animweb",
  //   role: "Software Developer — Full Stack",
  //   company: "Animweb Technologies",
  //   period: "April 2025 – March 2026",
  //   current: false,
  //   logo: "🌐",
  //   description:
  //     "Developed and maintained full-stack applications using modern frontend, backend and database technologies.",
  //   bullets: [
  //     "Engineered responsive, accessible user interfaces and reusable component systems.",
  //     "Collaborated on backend service integration, database query optimization, and REST API endpoints.",
  //     "Participated in agile sprints, code reviews, and Git-driven deployment pipelines."
  //   ]
  // },
  {
    id: "ncit",
    role: "Bachelor of Engineering",
    company: "Nepal College of Information Technology (NCIT)",
    period: "2022 – 2026",
    current: false,
    logo: "🏫",
    description:
      "Software Engineering — built rigorous core foundations across data structures, system design, software architecture, and modern programming paradigms.",
    bullets: [
      "Graduated with a comprehensive Software Engineering focus and hands-on system building.",
      "Built full-stack capstone projects spanning MERN architectures and machine learning experiments."
    ]
  }
];

export const skills = {
  programming: {
    title: "Programming",
    items: ["C", "C++", "Python", "Java", "JavaScript", "TypeScript", "Rust"]
  },
  frontend: {
    title: "Frontend",
    items: ["React", "Next.js", "Vite", "Tailwind CSS", "Redux", "HTML5 & CSS3"]
  },
  backend: {
    title: "Backend",
    items: ["Node.js", "Express", "Django", "REST APIs", "WebSockets", "JWT Auth"]
  },
  databasesAndEngineering: {
    title: "Databases & Systems",
    items: ["MongoDB", "PostgreSQL", "System Design", "Database Design", "API Design", "Git", "GitHub"]
  }
};

// export const experiments = [
//   {
//     title: "Tensor-Based Detection of Indirect Prompt Injection in RAG Systems",
//     microcopy: "because apparently normal CRUD wasn't enough.",
//     description:
//       "Exploring indirect prompt injection attacks in retrieval-augmented generation systems and approaches for identifying malicious retrieved context before it contaminates language model outputs.",
//     tags: ["AI Security", "RAG", "Python", "Vector Tensors", "Adversarial NLP"]
//   }
// ];

export const quote = {
  text: "Exploring the world through ",
  highlight: "data",
  suffix: ", data to data",
  attribution: "— bisham"
};
 