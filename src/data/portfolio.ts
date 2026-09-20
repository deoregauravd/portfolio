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
      "Specialized in architecting scalable solutions for Meta Quest 2/3, HTC Vive, and WebXR, optimizing high-load OTT media pipelines (SkyShowtime Europe), and streamlining game development pipelines by up to 300%.",
      "Passionate about blending game engine mechanics, spatial computing, and Agentic AI to forge the next generation of interactive software."
    ]
  },

  socials: {
    github: "https://github.com/deoregauravd",
    linkedin: "https://www.linkedin.com/in/deoregauravd/",
    medium: "https://medium.com/@backspaceBlog",
    youtube: "https://www.youtube.com/@gauravdeore1915"
  },

  // 🎬 FEATURED VIDEO / SHOWREEL
  // Turn enabled to true whenever you want to display your video on your portfolio!
  featuredShowreel: {
    enabled: false,
    title: "Featured XR / Unity Demo Reel",
    subtitle: "A visual showcase of my virtual reality simulations, interactive mechanics, and shaders.",
    // Supports YouTube URLs (e.g., "https://www.youtube.com/watch?v=VIDEO_ID") or local MP4 files placed in public/
    videoUrl: ""
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
      description: "Custom VR educational simulation pipelines and editor tools built for Meta Quest, accelerating team production speeds by 300% with automated prefab and reference systems.",
      tags: ["Unity3D", "Meta Quest 2/3", "C#", "Custom Tooling", "VR Simulation"],
      featured: true,
      link: "https://enggonline.com/",
      metrics: "300% faster asset workflow"
    },
    {
      id: "skyshowtime",
      title: "SkyShowtime OTT Platform",
      company: "Globant",
      category: "Web & Cloud",
      description: "High-scale European OTT streaming service backend integration, leveraging AWS cloud infrastructure, microservices, and continuous deployment pipelines.",
      tags: ["AWS", "Java", "Spring Boot", "CI/CD", "High Availability"],
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
      title: "Hungama BB Cricket / Sports Titles",
      company: "GameShastra",
      category: "Games",
      description: "High-octane mobile sports game with dynamic camera systems, rigorous gameplay profiling, CI automation, and multi-threaded game state logic.",
      tags: ["Unity3D", "C#", "Google Play", "Android", "Profiling"],
      featured: false,
      link: "https://play.google.com/store/apps/details?id=com.hungamagamestudio.bb&hl=en&gl=US",
      metrics: "1M+ downloads on Google Play"
    },
    {
      id: "photon-multiplayer",
      title: "Real-Time Strategy Multiplayer Game",
      company: "Globant",
      category: "Games",
      description: "Low-latency multiplayer battle strategy mechanics using Photon Engine, state synchronization, client prediction, and top-down tactical UI.",
      tags: ["Photon Engine", "Multiplayer", "C#", "Networking"],
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
        "Architected scalable, production-ready VR applications and open-ended simulations on Meta Quest 2 and 3.",
        "Automated asset reference management and prefab assembly workflows, increasing development iteration speeds by 300%.",
        "Engineered intuitive custom Unity editor tools and designer-friendly pipelines for non-technical team members.",
        "Mentored developers on VR performance optimization, frame rate budgets, and code standards."
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
        "Engineered continuous integration (CI) automation tools to streamline builds and accelerate QA deployment cycles.",
        "Collaborated cross-functionally with designers and QA to refine core mechanics and resolve complex gameplay bugs.",
        "Co-developed high-profile mobile games published on the Google Play Store with over 1M+ downloads."
      ],
      sampleLink: {
        label: "View Play Store Title",
        url: "https://play.google.com/store/apps/details?id=com.hungamagamestudio.bb&hl=en&gl=US"
      }
    },
    {
      company: "Globant",
      role: "Associate Software Developer",
      location: "Pune, Maharashtra",
      period: "06/2022 - 12/2022",
      description: [
        "Contributed to SkyShowtime, a premier pan-European streaming OTT platform serving millions of subscribers.",
        "Built and deployed scalable, high-availability microservices using Java, Spring Boot, and AWS cloud services.",
        "Spearheaded technical proofs-of-concept (PoCs) to validate new architectural patterns and accelerate feature rollout."
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
      location: "India"
    },
    {
      degree: "Bachelor of Mechanical Engineering",
      institution: "Sinhgad Institute of Technology",
      location: "Savitribai Phule Pune University, Pune",
      year: "Graduated",
      details: "First Class with Distinction"
    }
  ]
};
