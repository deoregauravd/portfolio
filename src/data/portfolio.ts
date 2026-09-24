/**
 * PORTFOLIO DATA CONFIGURATION
 * 
 * Edit this single file to update all information across your entire portfolio!
 * No need to touch HTML, CSS, or component code.
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
  };
  socials: {
    github: string;
    linkedin: string;
    medium: string;
    youtube: string;
    resumeGoogleDocs?: string;
  };
  skills: SkillCategory[];
  featuredProjects: Project[];
  experiences: Experience[];
  certifications: Certification[];
  education: Education[];
  /** Optional Showreel / Featured Video (Set enabled: true whenever you want to display it) */
  featuredShowreel?: {
    enabled: boolean;
    title: string;
    subtitle: string;
    /** YouTube URL (e.g. "https://www.youtube.com/watch?v=...") or local MP4 path ("/videos/demo.mp4") */
    videoUrl: string;
  };
  /** Optional Site Visitor Counter configuration */
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
    headline: "Software Developer & XR / Unity Engineer",
    subheadline: "Crafting immersive XR/VR simulations, high-performance 3D games, scalable cloud systems, and agentic AI workflows.",
    location: "Mumbai, India",
    availableForHire: true,
    availabilityText: "Open for Opportunities & Collaborations",
    yearsOfExperience: "5.5+",
    completedProjects: "15+",
    avatar: "/images/profile.jpg",
    bio: [
      "Software Developer and XR/Unity specialist with over 5.5 years of experience building cutting-edge VR/AR, WebXR, and interactive 3D applications.",
      "Specialized in architecting scalable solutions for Meta Quest 2/3, HTC Vive, and WebXR, optimizing high-load OTT media pipelines (SkyShowtime Europe), and streamlining development pipelines by building dynamic automated tools to boost team productivity by up to 300%.",
      "Passionate about blending game engine mechanics, spatial computing, and Agentic AI to forge the next generation of interactive software."
    ]
  },

  socials: {
    github: "https://github.com/deoregauravd",
    linkedin: "https://www.linkedin.com/in/deoregauravd/",
    medium: "https://medium.com/@backspaceBlog",
    youtube: "https://www.youtube.com/@gauravdeore1915",
    // Loaded safely from local .env (never committed to git)
    resumeGoogleDocs: import.meta.env.PUBLIC_RESUME_URL || undefined
  },

  // 🎬 FEATURED VIDEO / SHOWREEL
  // Turn enabled to true whenever you want to display your video on your portfolio!
  featuredShowreel: {
    enabled: true,
    title: "Cosmos Eye 3D Interactive Wallpaper",
    subtitle: "Real-time interactive 3D graphics, dynamic shader effects, and high-performance simulation showcase.",
    // Supports YouTube URLs (e.g., "https://www.youtube.com/watch?v=VIDEO_ID") or local MP4 files placed in public/
    videoUrl: "https://youtu.be/EWxAQ0wtgw8"
  },

  skills: [
    {
      name: "XR & Game Engines",
      icon: "🥽",
      skills: ["Unity 3D", "WebXR", "Meta Quest 3 / Quest 2", "HTC Vive", "SteamVR", "Google Cardboard", "URP / Shaders"]
    },
    {
      name: "Programming Languages",
      icon: "💻",
      skills: ["C#", ".NET", "C++", "Java", "Python", "JavaScript", "HTML/CSS", "SQL"]
    },
    {
      name: "Backend, Cloud & AI",
      icon: "⚡",
      skills: ["AWS Cloud", "Spring Boot", "REST APIs", "Agentic AI", "Machine Learning", "CI/CD Pipelines", "Photon Multiplayer"]
    },
    {
      name: "Tools & 3D Workflows",
      icon: "🛠️",
      skills: ["Blender 3D", "Android Studio", "Xcode", "Git / GitHub", "JSON / Data Management", "Performance Profiling"]
    }
  ],

  featuredProjects: [
    {
      id: "feast-vr",
      title: "Interactive Open-Ended VR Simulations",
      company: "Feast Software",
      category: "XR / VR",
      description: "Architected a vector-driven interactive simulation architecture and open-ended troubleshooting engine powering 16+ production VR modules on Meta Quest. Programmed and deployed 29+ procedural interactive modules from the ground up, with custom automated editor pipelines boosting production speed by 300%.",
      tags: ["Unity3D", "Meta Quest 2/3", "C#", "Custom Tooling", "VR Simulation", "Troubleshooting", "Procedural Systems"],
      featured: true,
      link: "https://enggonline.com/",
      metrics: "16+ troubleshooting & 29+ procedural modules"
    },
    {
      id: "skyshowtime",
      title: "SkyShowtime OTT Platform",
      company: "Globant",
      category: "Web & Cloud",
      description: "High-scale European OTT streaming service serving millions of active users. Managed high-volume incident resolution, monitored critical production releases, and ensured seamless streaming stability across cloud microservices.",
      tags: ["AWS", "Java", "Spring Boot", "Incident Management", "Release Ops", "CI/CD"],
      featured: true,
      link: "https://www.skyshowtime.com/",
      metrics: "Millions of European streaming viewers"
    },
    {
      id: "webxr-cardboard",
      title: "Cross-Platform WebXR Experience",
      company: "Cyber Infrastructure",
      category: "XR / VR",
      description: "Pioneered lightweight WebXR deployment running seamlessly inside mobile browsers and Google Cardboard with Meta Quest 3 backward compatibility.",
      tags: ["WebXR", "Unity3D", "WebGL", "Mobile Optimization", "JavaScript"],
      featured: true,
      metrics: "Zero-install browser VR"
    },
    {
      id: "luvbug",
      title: "LuvBug: Emotional Growth App",
      company: "Game App Studio",
      category: "Games",
      description: "Interactive educational game title with custom AI behavior, complex game rules, and high-fidelity Universal Render Pipeline (URP) visuals on iOS.",
      tags: ["Unity3D", "C#", "iOS", "URP", "App Store"],
      featured: true,
      link: "https://apps.apple.com/us/app/luvbug-emotional-growth/id1585519683",
      metrics: "Featured educational title on App Store"
    },
    {
      id: "hungama-games",
      title: "Movie Master: Bollywood Games & Cricket",
      company: "GameShastra / Hungama",
      category: "Games",
      description: "High-octane mobile casual & sports gaming experience featuring dynamic camera systems, rigorous gameplay performance profiling, CI build automation, and multi-threaded game state logic.",
      tags: ["Unity3D", "C#", "Google Play", "Android", "Profiling", "CI/CD"],
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
      tags: ["Unity3D", "Automated Testing", "CI/CD", "Quality Engineering", "Android", "Google Play"],
      featured: false,
      link: "https://play.google.com/store/apps/details?id=com.hungamagamestudio.desibeats&hl=en&gl=US",
      metrics: "Automated QA & test pipelines"
    },
    {
      id: "photon-multiplayer",
      title: "Real-Time Strategy Multiplayer Game",
      company: "Globant",
      category: "Games",
      description: "Internal engineering excellence and training project developed at Globant to master strict enterprise quality standards and architecture. Implemented low-latency multiplayer battle strategy mechanics using Photon Engine, state synchronization, client prediction, and a top-down tactical UI.",
      tags: ["Photon Engine", "Multiplayer", "C#", "Networking", "Architecture Standards"],
      featured: false
    },
    {
      id: "agentic-ai",
      title: "Agentic AI & Spatial Computing Experiments",
      company: "Independent R&D",
      category: "AI",
      description: "Explorations combining autonomous LLM agents, spatial reasoning, and dynamic Unity procedural generation for responsive virtual environments.",
      tags: ["Python", "Agentic AI", "LLMs", "Unity3D", "Prompt Eng"],
      featured: false,
      github: "https://github.com/deoregauravd"
    }
  ],

  experiences: [
    {
      company: "Feast Software",
      role: "Unity Developer (VR Developer)",
      location: "Mumbai, Maharashtra",
      period: "01/2025 - 09/2026",
      description: [
        "Architected a vector-driven interactive simulation architecture and open-ended troubleshooting engine powering 16+ production VR modules on Meta Quest 2 and 3.",
        "Programmed and deployed 29+ procedural interactive modules from the ground up, guaranteeing high visual fidelity, seamless state management, and strict frame-budget compliance.",
        "Automated asset reference management and prefab assembly workflows, boosting development iteration speed by 300% via intuitive, designer-friendly Unity editor tools.",
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
      company: "Cyber Infrastructure",
      role: "Junior Software Developer",
      location: "Indore, Madhya Pradesh",
      period: "08/2023 - 11/2024",
      description: [
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
        "Contributed to SkyShowtime, a premier pan-European streaming OTT platform serving millions of subscribers.",
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
        "Engineered robust game logic, rule engines, and AI behaviors using C# for diverse titles including LuvBug on iOS.",
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
        "Conceptualized, designed, and prototyped indie gameplay mechanics, player progression systems, and level designs using Unity and C#.",
        "Authored custom 3D game assets, environmental models, and interactive props leveraging Blender and texture authoring workflows.",
        "Implemented responsive character controllers, physics-based interactions, and fluid UI systems.",
        "Iteratively conducted player playtests, gathered user feedback, and tuned core gameplay balance and mechanics."
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
