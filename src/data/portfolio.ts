/**
 * PORTFOLIO DATA CONFIGURATION
 * 
 * Central configuration file for Gaurav Deore's Data-Driven Engineering Portfolio.
 * Aligned with the verified data architecture & quantitative impact metrics.
 */

export interface Project {
  id: string;
  title: string;
  company?: string;
  category: 'XR / VR' | 'Games' | 'Web & Cloud' | 'AI';
  description: string;
  tags: string[];
  featured: boolean;
  link?: string;
  github?: string;
  metrics?: string;
  /** Optional video link: Supports YouTube URL or direct MP4 URL */
  videoUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
  sampleLink?: {
    label: string;
    url: string;
  };
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  year?: string;
  details?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface StatHighlight {
  id: string;
  metric: string;
  targetValue: string;
  rawNumber: number;
  prefix?: string;
  suffix: string;
  title: string;
  context: string;
  category: 'Scale & Cloud' | 'Graphics & 3D' | 'Tooling & CI' | 'XR Architecture' | 'Enterprise' | 'Track Record';
  badge: string;
  icon: string;
  trend?: string;
}

export interface LanguageExperience {
  name: string;
  years: number;
  level: string;
  summary: string;
  tags: string[];
  color: string;
  codeSnippet?: string;
}

export interface PlatformItem {
  platform: string;
  shippedStatus: string;
  executionDetails: string;
  category: 'XR' | 'Mobile' | 'Desktop' | 'Web';
  badgeType: 'success' | 'primary' | 'warning' | 'info';
  icon: string;
  scaleMetric: string;
}

export interface DomainExpertise {
  domain: string;
  score: number;
  label: string;
  description: string;
  competencies: string[];
  icon: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    headline: string;
    subheadline: string;
    location: string;
    email?: string;
    phone?: string;
    availableForHire: boolean;
    availabilityText: string;
    yearsOfExperience: string;
    completedProjects: string;
    avatar?: string;
    bio: string[];
    // Hero animated stat counters
    heroStats: {
      activeSubscribers: string;
      renderedObjects: string;
      workflowSpeedup: string;
      proceduralSims: string;
    };
  };
  socials: {
    github: string;
    linkedin: string;
    medium: string;
    youtube: string;
    website: string;
    resumeGoogleDocs?: string;
  };
  statHighlights: StatHighlight[];
  languageExperience: LanguageExperience[];
  platformMatrix: PlatformItem[];
  domainRadar: DomainExpertise[];
  skills: SkillCategory[];
  featuredProjects: Project[];
  experiences: Experience[];
  certifications: Certification[];
  education: Education[];
  featuredShowreel?: {
    enabled: boolean;
    title: string;
    subtitle: string;
    videoUrl: string;
  };
  visitorCounter?: {
    enabled: boolean;
    key?: string;
    label?: string;
    baseCount?: number;
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Gaurav Deore",
    headline: "XR Unity Developer",
    subheadline: "Quantitative engineering across high-scale distributed systems, spatial computing & XR simulations, and real-time interactive 3D engines.",
    location: "Mumbai, India",
    email: "devphotonsupport@gmail.com",
    availableForHire: true,
    availabilityText: "Open for Opportunities & Collaborations",
    yearsOfExperience: "5 Years",
    completedProjects: "16+ Shipped",
    avatar: "/images/profile.webp",
    bio: [
      "Senior XR Unity Developer with 5 years of verified engineering experience building cutting-edge VR/AR simulations, high-load European cloud systems, and cross-platform interactive applications.",
      "Engineered vector-driven interactive VR architectures powering 16+ enterprise production modules and 29+ procedural simulations on Meta Quest 3, deployed automated custom editor tooling delivering a 300% workflow speedup, and scaled high-volume media delivery across 22 European markets for SkyShowtime.",
      "Passionate about quantitative system optimization, low-latency client state synchronization, spatial computing, and agentic AI runtime integration."
    ],
    heroStats: {
      activeSubscribers: "10M+",
      renderedObjects: "4M+",
      workflowSpeedup: "+300%",
      proceduralSims: "29+"
    }
  },

  socials: {
    github: "https://github.com/deoregauravd",
    linkedin: "https://www.linkedin.com/in/deoregauravd/",
    medium: "https://medium.com/@backspaceBlog",
    youtube: "https://www.youtube.com/@gauravdeore1915",
    website: "https://devphoton.com",
    // Loaded safely from local .env (never committed to git)
    resumeGoogleDocs: import.meta.env.PUBLIC_RESUME_URL || undefined
  },

  // 1. STATISTICAL HIGHLIGHTS DASHBOARD
  statHighlights: [
    {
      id: "stat-subscribers",
      metric: "Active Subscribers",
      targetValue: "10M+",
      rawNumber: 10,
      suffix: "M+",
      title: "Active Subscribers",
      context: "Scalable content delivery for SkyShowtime OTT platform across 22 European markets (AWS & CI/CD).",
      category: "Scale & Cloud",
      badge: "High-Availability OTT",
      icon: "🌐",
      trend: "22 European Markets"
    },
    {
      id: "stat-objects",
      metric: "Real-Time Rendered Objects",
      targetValue: "4M+",
      rawNumber: 4,
      suffix: "M+",
      title: "Real-Time Rendered Objects",
      context: "Live interactive Hexagon Map rendering with dynamic backend data streaming.",
      category: "Graphics & 3D",
      badge: "Spatial Partitioning",
      icon: "⬡",
      trend: "Dynamic Streamed Data"
    },
    {
      id: "stat-workflow",
      metric: "Workflow Efficiency",
      targetValue: "+300%",
      rawNumber: 300,
      prefix: "+",
      suffix: "%",
      title: "Workflow Efficiency",
      context: "Development speed boost achieved via custom Unity editor reference management tools.",
      category: "Tooling & CI",
      badge: "Automation Boost",
      icon: "⚡",
      trend: "3x Iteration Cycle"
    },
    {
      id: "stat-simulations",
      metric: "Procedural Simulations",
      targetValue: "29+",
      rawNumber: 29,
      suffix: "+",
      title: "Procedural Simulations",
      context: "Interactive VR simulations engineered and deployed with robust state management systems.",
      category: "XR Architecture",
      badge: "Production XR",
      icon: "🥽",
      trend: "State-Driven Loops"
    },
    {
      id: "stat-modules",
      metric: "Enterprise VR Modules",
      targetValue: "16+",
      rawNumber: 16,
      suffix: "+",
      title: "Enterprise VR Modules",
      context: "Modular, vector-driven interactive architectures engineered from scratch at Feast Software.",
      category: "Enterprise",
      badge: "Meta Quest 3",
      icon: "🧩",
      trend: "Vector Troubleshooting"
    },
    {
      id: "stat-experience",
      metric: "Industry Experience",
      targetValue: "5 Years",
      rawNumber: 5,
      suffix: " Years",
      title: "Industry Experience",
      context: "Proven track record across Feast Software, Cyber Infrastructure, GameShastra, Globant, and Game App Studio.",
      category: "Track Record",
      badge: "Full-Stack & XR",
      icon: "🏆",
      trend: "5 Top Tech Firms"
    }
  ],

  // 2. LANGUAGE STACK EXPERIENCE (Bar Chart / Graph Data)
  languageExperience: [
    {
      name: "C#",
      years: 6,
      level: "Primary Core Stack",
      summary: "Unity 3D engine, modular software architecture, custom editor tools, custom shader development, complex state systems, and AI logic.",
      tags: ["Unity 3D", ".NET", "Custom Shaders", "Editor Tooling", "State Machines", "AI Logic"],
      color: "#1a73e8"
    },
    {
      name: "Python",
      years: 1,
      level: "Automation & AI Pipelines",
      summary: "Workflow automation, build scripting, and integration of AI/ML developer pipelines.",
      tags: ["Workflow Automation", "Build Scripts", "AI/ML Pipelines", "Data Parsing"],
      color: "#9b72cb"
    },
    {
      name: "Java",
      years: 1,
      level: "Native & Cloud Microservices",
      summary: "Android native integration, plugin development, and enterprise backend service integration.",
      tags: ["Spring Boot", "Android Native", "Microservices", "JNI Plugins"],
      color: "#d96570"
    },
    {
      name: "C++",
      years: 1,
      level: "Low-Level Optimization",
      summary: "Low-level system performance optimization, memory management, and core engine profiling.",
      tags: ["Memory Profiling", "Performance Tuning", "Low-Latency Logic", "Engine Internals"],
      color: "#0284c7"
    },
    {
      name: "REST API + JSON + JS",
      years: 1,
      level: "Cross-Platform WebXR",
      summary: "Cross-platform WebXR solutions, web services integration, and responsive UI/UX web interfaces.",
      tags: ["WebXR", "REST APIs", "JSON Streaming", "JavaScript", "Async Pipelines"],
      color: "#0f9d58"
    }
  ],

  // 3. PLATFORM MATRIX & SHIPPED PRODUCT SUMMARY
  platformMatrix: [
    {
      platform: "iOS",
      shippedStatus: "2 Shipped Apps",
      executionDetails: "Scaled to 1M+ active iOS users in the EdTech domain; optimized mobile performance.",
      category: "Mobile",
      badgeType: "success",
      icon: "🍎",
      scaleMetric: "1M+ iOS Users"
    },
    {
      platform: "Windows",
      shippedStatus: "Proprietary Desktop",
      executionDetails: "Shipped native desktop products featuring high-performance local rendering logic.",
      category: "Desktop",
      badgeType: "primary",
      icon: "🪟",
      scaleMetric: "Native Local Rendering"
    },
    {
      platform: "Steam",
      shippedStatus: "Client Release",
      executionDetails: "Cross-platform client product with integrated multi-platform compatibility layers.",
      category: "Desktop",
      badgeType: "primary",
      icon: "🎮",
      scaleMetric: "Cross-Compatibility Layers"
    },
    {
      platform: "tvOS / iPadOS",
      shippedStatus: "Multi-Device UI",
      executionDetails: "Specialized UI/UX layouts optimized for multi-device touch and controller inputs.",
      category: "Mobile",
      badgeType: "info",
      icon: "📱",
      scaleMetric: "Touch & Gamepad Responsive"
    },
    {
      platform: "Web / WebXR",
      shippedStatus: "Browser Engine",
      executionDetails: "Pioneer cross-platform WebXR integration in Unity for mobile and desktop web browsers.",
      category: "Web",
      badgeType: "info",
      icon: "🌐",
      scaleMetric: "Zero-Install WebVR"
    },
    {
      platform: "Android",
      shippedStatus: "Play Store Apps",
      executionDetails: "Mobile games, native plugins, and mobile web VR experiences released on Play Store.",
      category: "Mobile",
      badgeType: "success",
      icon: "🤖",
      scaleMetric: "1M+ Play Store Downloads"
    },
    {
      platform: "Meta Quest 3",
      shippedStatus: "Standalone VR",
      executionDetails: "High-fidelity VR simulations, procedural environments, and standalone device profiling.",
      category: "XR",
      badgeType: "success",
      icon: "🥽",
      scaleMetric: "90 FPS Fixed Foveated"
    },
    {
      platform: "Custom Enterprise",
      shippedStatus: "Custom XR Stack",
      executionDetails: "Architected modular framework powering 16+ enterprise production VR modules at Feast Software.",
      category: "XR",
      badgeType: "primary",
      icon: "🏢",
      scaleMetric: "16+ Enterprise Modules"
    },
    {
      platform: "Google Cardboard",
      shippedStatus: "Lightweight VR",
      executionDetails: "Mobile WebVR integration engineered for lightweight accessible web experiences.",
      category: "XR",
      badgeType: "warning",
      icon: "📦",
      scaleMetric: "Accessible WebXR"
    }
  ],

  // 4. SPECIALIZATION FIELDS & INDUSTRY DOMAINS (Radar Chart Breakdown)
  domainRadar: [
    {
      domain: "Mobile Gaming",
      score: 92,
      label: "Mobile Gaming",
      description: "Core gameplay engineering, procedural AI behaviors, C# business logic, frame rate optimization, custom shader pipeline implementation, and automated build pipelines.",
      competencies: [
        "Core Gameplay & Physics Engines",
        "Procedural AI Behaviors & State Logic",
        "Automated CI Build & Verification",
        "URP Shader Optimization & 60+ FPS"
      ],
      icon: "🕹️"
    },
    {
      domain: "Computer Applications",
      score: 88,
      label: "Computer Applications",
      description: "Native desktop utility software, high-availability data systems, system performance profiling, memory optimization, and workflow automation tooling.",
      competencies: [
        "Native Desktop Runtime Execution",
        "High-Availability Data Processing",
        "Memory Profiling & GC Allocation Elimination",
        "Workflow Automation & Tooling"
      ],
      icon: "💻"
    },
    {
      domain: "EdTech & XR Simulations",
      score: 98,
      label: "EdTech & XR Simulations",
      description: "26+ interactive educational modules, open-ended procedural VR simulations, state-driven user telemetry, and emotional intelligence apps.",
      competencies: [
        "26+ Interactive Educational Modules",
        "Open-Ended Procedural Simulation Loops",
        "State-Driven Telemetry & Analytics",
        "Cognitive & Emotional Skill Engines"
      ],
      icon: "🎓"
    },
    {
      domain: "Virtual Reality",
      score: 96,
      label: "Virtual Reality (XR)",
      description: "Standalone 6DoF VR simulation engineering, procedural environments, Meta Quest 3 & HTC Vive hardware profiling, and zero-latency physics.",
      competencies: [
        "Meta Quest 3 & HTC Vive 6DoF Runtimes",
        "Vector-Driven Troubleshooting Architecture",
        "Procedural Environment Generation",
        "Strict 90 FPS Thermal & GPU Budgeting"
      ],
      icon: "🥽"
    }
  ],

  // 🎬 FEATURED VIDEO / SHOWREEL
  featuredShowreel: {
    enabled: true,
    title: "Cosmos Eye 3D Interactive Wallpaper",
    subtitle: "Real-time interactive 3D graphics, dynamic shader effects, and high-performance simulation showcase.",
    videoUrl: "https://youtu.be/EWxAQ0wtgw8"
  },

  skills: [
    {
      name: "XR & Game Engines",
      icon: "🥽",
      skills: ["Unity 3D (6 yrs)", "WebXR", "Meta Quest 3 / Quest 2", "HTC Vive", "SteamVR", "Google Cardboard", "URP / Shaders"]
    },
    {
      name: "Programming Languages",
      icon: "💻",
      skills: ["C# (6 yrs)", ".NET", "Python", "Java", "C++", "JavaScript", "HTML/CSS", "SQL"]
    },
    {
      name: "Backend, Cloud & AI",
      icon: "⚡",
      skills: ["AWS Cloud", "Spring Boot", "REST APIs", "Agentic AI", "CI/CD Pipelines", "Photon Multiplayer", "Microservices"]
    },
    {
      name: "Tools & 3D Workflows",
      icon: "🛠️",
      skills: ["Unity Editor Tooling", "Blender 3D", "Android Studio", "Xcode", "Git / GitHub", "JSON Streaming", "Performance Profiling"]
    }
  ],

  // 5. PROJECT GALLERY WITH QUANTIFIED METRICS
  featuredProjects: [
    {
      id: "skyshowtime",
      title: "SkyShowtime OTT Platform",
      company: "Globant",
      category: "Web & Cloud",
      description: "Pan-European high-scale OTT streaming platform serving 10M+ active subscribers across 22 European markets. Managed high-volume incident resolution, monitored critical production releases, and ensured uninterrupted video streaming stability across AWS microservices.",
      tags: ["AWS Cloud", "Java", "Spring Boot", "CI/CD", "Incident Ops", "Microservices"],
      featured: true,
      link: "https://www.skyshowtime.com/",
      metrics: "10M+ Active Subscribers across 22 Markets"
    },
    {
      id: "hexagon-map",
      title: "Real-Time Hexagon Map Engine",
      company: "Cyber Infrastructure (CIS)",
      category: "XR / VR",
      description: "High-performance interactive 3D Hexagon Map rendering engine capable of displaying 4M+ real-time rendered objects simultaneously with dynamic backend streaming, spatial chunking, and GPU instancing.",
      tags: ["Unity 3D", "C#", "GPU Instancing", "Spatial Partitioning", "Data Streaming", "Performance Profiling"],
      featured: true,
      metrics: "4M+ Real-Time Rendered Objects"
    },
    {
      id: "feast-vr",
      title: "Interactive Open-Ended VR Simulations",
      company: "Feast Software",
      category: "XR / VR",
      description: "Architected a vector-driven interactive simulation architecture and open-ended troubleshooting engine powering 16+ production VR modules on Meta Quest 2 and 3. Programmed and deployed 29+ procedural interactive modules from the ground up, with custom editor reference tools boosting workflow iteration speed by 300%.",
      tags: ["Unity 3D", "Meta Quest 3", "C#", "Custom Tooling", "VR Simulation", "Procedural Systems"],
      featured: true,
      link: "https://enggonline.com/",
      metrics: "29+ Procedural Simulations · 16+ Modules"
    },
    {
      id: "htc-vive-car",
      title: "HTC Vive Car Showcase & Spatial VR Experience",
      company: "Cyber Infrastructure (CIS)",
      category: "XR / VR",
      description: "High-fidelity spatial vehicle configurator and interior inspection simulation built for HTC Vive. Features physically based lighting shaders, 6DoF tracked controller interactions, real-time material swapping, and strict zero-latency framerate budgeting.",
      tags: ["HTC Vive", "SteamVR", "Unity 3D", "Custom Shaders", "6DoF Interaction", "Zero-Latency"],
      featured: true,
      metrics: "Sub-millisecond 90 FPS Spatial Tracking"
    },
    {
      id: "luvbug",
      title: "LuvBug: Emotional Growth App",
      company: "Game App Studio",
      category: "Games",
      description: "Interactive educational title scaled to 1M+ active iOS users in the EdTech domain. Engineered custom AI behavior, complex game rules, and high-fidelity Universal Render Pipeline (URP) visuals on iOS and iPadOS.",
      tags: ["Unity 3D", "C#", "iOS", "iPadOS", "URP", "App Store"],
      featured: true,
      link: "https://apps.apple.com/us/app/luvbug-emotional-growth/id1585519683",
      metrics: "Scaled to 1M+ active iOS users"
    },
    {
      id: "webxr-cardboard",
      title: "Cross-Platform WebXR Experience",
      company: "Cyber Infrastructure",
      category: "XR / VR",
      description: "Pioneered lightweight WebXR deployment running seamlessly inside mobile browsers and Google Cardboard with Meta Quest 3 backward compatibility, eliminating app store barriers.",
      tags: ["WebXR", "Unity 3D", "WebGL", "Mobile Optimization", "JavaScript"],
      featured: true,
      metrics: "Zero-install cross-platform WebVR"
    },
    {
      id: "hungama-games",
      title: "Movie Master: Bollywood Games & Cricket",
      company: "GameShastra / Hungama",
      category: "Games",
      description: "High-octane mobile casual & sports gaming experience featuring dynamic camera systems, rigorous gameplay performance profiling, CI build automation, and multi-threaded game state logic on Google Play.",
      tags: ["Unity 3D", "C#", "Google Play", "Android", "Profiling", "CI/CD"],
      featured: false,
      link: "https://play.google.com/store/apps/details?id=com.hungamagamestudio.bb&hl=en&gl=US",
      metrics: "1M+ downloads on Google Play"
    },
    {
      id: "desibeats",
      title: "Desibeats: Indian Music Game",
      company: "GameShastra / Hungama",
      category: "Games",
      description: "Fast-paced rhythm-action mobile game featuring chart-topping Indian tracks. Contributed as part of the core engineering team responsible for architecting automated testing frameworks, performance regression suites, and build verification pipelines.",
      tags: ["Unity 3D", "Automated Testing", "CI/CD", "Quality Engineering", "Android"],
      featured: false,
      link: "https://play.google.com/store/apps/details?id=com.hungamagamestudio.desibeats&hl=en&gl=US",
      metrics: "Automated QA & test pipelines"
    },
    {
      id: "cosmos-eye",
      title: "Cosmos Eye 3D Interactive Wallpaper",
      company: "Independently Developed",
      category: "XR / VR",
      description: "Independently designed and developed proprietary Windows desktop product featuring real-time interactive 3D graphics, dynamic shader effects, and high-performance local rendering logic.",
      tags: ["Windows Desktop", "Unity 3D", "Custom Shaders", "3D Simulation"],
      featured: false,
      videoUrl: "https://youtu.be/EWxAQ0wtgw8",
      metrics: "Independently Developed Desktop Product"
    },
    {
      id: "photon-multiplayer",
      title: "Real-Time Strategy Multiplayer Game",
      company: "Globant",
      category: "Games",
      description: "Enterprise engineering excellence project developed at Globant to master strict architecture standards. Implemented low-latency multiplayer battle strategy mechanics using Photon Engine, state synchronization, client prediction, and tactical UI.",
      tags: ["Photon Engine", "Multiplayer", "C#", "Networking", "Architecture Standards"],
      featured: false,
      metrics: "Client-side prediction & state sync"
    },
    {
      id: "agentic-ai",
      title: "Agentic AI & Spatial Computing Experiments",
      company: "Independent R&D",
      category: "AI",
      description: "Explorations combining autonomous LLM agents, spatial reasoning, and dynamic Unity procedural generation for responsive virtual environments.",
      tags: ["Python", "Agentic AI", "LLMs", "Unity 3D", "Prompt Eng"],
      featured: false,
      github: "https://github.com/deoregauravd",
      metrics: "Autonomous Agent Tooling"
    }
  ],

  // 6. EXPERIENCE TIMELINE (5 Years Proven Track Record)
  experiences: [
    {
      company: "Feast Software",
      role: "Unity Developer (VR Developer)",
      location: "Mumbai, Maharashtra",
      period: "01/2025 - 09/2026",
      description: [
        "Architected a modular vector-driven interactive simulation architecture powering 16+ production VR modules on Meta Quest 2 and 3.",
        "Programmed and deployed 29+ procedural interactive modules from the ground up, guaranteeing strict 90 FPS compliance and robust state management.",
        "Engineered custom Unity editor reference management tools, accelerating developer and designer iteration cycles by +300%.",
        "Upgraded enterprise assessment frameworks by engineering advanced evaluation features and modular test templates for learner skill verification.",
        "Bridged modern scalable architectures with legacy systems to enhance long-term system stability in a high-velocity production environment.",
        "Mentored engineering peers on VR performance profiling, frame rate budgets, and clean architectural standards."
      ],
      sampleLink: {
        label: "View Company / Work Context",
        url: "https://enggonline.com/"
      }
    },
    {
      company: "Cyber Infrastructure (CIS)",
      role: "Junior Software Developer",
      location: "Indore, Madhya Pradesh",
      period: "08/2023 - 11/2024",
      description: [
        "Engineered the Real-Time Hexagon Map 3D engine capable of rendering 4M+ objects with dynamic backend streaming and GPU instancing.",
        "Developed HTC Vive Car Showcase spatial VR experience with sub-millisecond 90 FPS 6DoF tracking, PBR lighting, and custom shaders.",
        "Pioneered Google Cardboard compatibility for mobile web applications via Unity WebXR integration.",
        "Authored custom shaders and lighting profiles achieving high visual fidelity without compromising frame rates.",
        "Optimized core codebase architecture, systematically profiling bottlenecks to deliver stable 60+ FPS game builds.",
        "Conducted thorough peer code reviews and mentored junior engineers on clean code and design patterns."
      ]
    },
    {
      company: "GameShastra",
      role: "Junior Game Developer",
      location: "Hyderabad, Telangana",
      period: "01/2023 - 07/2023",
      description: [
        "Co-developed high-profile mobile games including Movie Master: Bollywood Games & Cricket and Desibeats: Indian Music Game on Google Play.",
        "Architected automated testing suites and CI build pipelines to streamline release verification and accelerate QA turnaround times.",
        "Collaborated cross-functionally with designers and QA to refine core mechanics, dynamic camera systems, and resolve complex gameplay bugs."
      ],
      sampleLink: {
        label: "View on Google Play",
        url: "https://play.google.com/store/apps/details?id=com.hungamagamestudio.desibeats&hl=en&gl=US"
      }
    },
    {
      company: "Globant",
      role: "Associate Software Developer",
      location: "Pune, Maharashtra",
      period: "06/2022 - 12/2022",
      description: [
        "Contributed to SkyShowtime, a premier pan-European streaming OTT platform serving 10M+ active subscribers across 22 European markets.",
        "Monitored release deployments and swiftly resolved high-volume production incidents to ensure uninterrupted playback smoothness and platform reliability.",
        "Built and maintained scalable microservices using Java, Spring Boot, and AWS cloud infrastructure with automated CI/CD pipelines.",
        "Spearheaded technical proofs-of-concept (PoCs) to validate architectural patterns and accelerate feature rollout."
      ],
      sampleLink: {
        label: "View SkyShowtime Platform",
        url: "https://www.skyshowtime.com/"
      }
    },
    {
      company: "Game App Studio",
      role: "Game Developer",
      location: "Mohali, Punjab (Remote)",
      period: "10/2021 - 05/2022",
      description: [
        "Engineered robust game logic, rule engines, and AI behaviors using C# for diverse titles including LuvBug on iOS (scaled to 1M+ active users).",
        "Designed and implemented fluid UI/UX systems leveraging Unity's Universal Render Pipeline (URP).",
        "Collaborated closely with US-based stakeholders to meet aggressive launch schedules."
      ],
      sampleLink: {
        label: "View App Store Title",
        url: "https://apps.apple.com/us/app/luvbug-emotional-growth/id1585519683"
      }
    },
    {
      company: "Self-employed",
      role: "Game Designer & Independent Developer",
      location: "India",
      period: "08/2019 - 10/2021",
      description: [
        "Authored comprehensive Game Design Documents (GDDs) from the ground up, notably designing an innovative multi-planetary, open-world space concept with novel systemic progression loops.",
        "Designed and prototyped a narrative text-based time-travel game featuring branching decision trees and dynamic timeline state management.",
        "Researched and benchmarked game engines and toolchains (LibGDX, Android Studio, Unreal Engine, Unity) to architect a streamlined independent development pipeline.",
        "Documented detailed core game mechanics, economy balance formulas, and technical prototypes bridging high-concept game design with production pipelines."
      ]
    }
  ],

  certifications: [
    {
      name: "Unity Certified Associate Game Developer (UI and 2D Games)",
      issuer: "Unity / LinkedIn Learning",
      date: "Dec 2022"
    },
    {
      name: "Product Management: Building a Product Roadmap",
      issuer: "LinkedIn Learning",
      date: "Dec 2022"
    },
    {
      name: "Agile Foundations",
      issuer: "LinkedIn Learning",
      date: "Feb 2024"
    }
  ],

  education: [
    {
      degree: "Postgraduate Degree, International Business Operations",
      institution: "Indira Gandhi National Open University",
      location: "India",
      year: "Discontinued / Dropout",
      details: "Discontinued to pursue software & game engineering full-time"
    },
    {
      degree: "Bachelor of Mechanical Engineering",
      institution: "Sinhgad Institute of Technology",
      location: "Savitribai Phule Pune University, Pune",
      year: "Graduated",
      details: "First Class with Distinction"
    }
  ],

  visitorCounter: {
    enabled: true,
    key: "gaurav-deore-portfolio-visits",
    label: "Total Site Visits",
    baseCount: 0
  }
};
