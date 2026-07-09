export const portfolioData = {
  hero: {
    name: "Vimlesh Tiwari",
    title: "Software Developer | AI/ML Engineer | Data Analyst",
    description:
      "Crafting elegant software, building intelligent models, and uncovering insights from data. I transform complex problems into minimal, futuristic, and high-performance solutions.",
  },
  about: {
    title: "About Me",
    description: [
      "I am an AI & Data Science undergraduate with a deep passion for software engineering.",
      "My expertise spans full-stack development, artificial intelligence, machine learning, and data analytics. I enjoy building seamless, user-centric applications powered by cutting-edge AI.",
      "As a continuous learner, I actively integrate AI-assisted development workflows to deliver production-ready code with maximum efficiency.",
    ],
  },
  skills: {
    programming: ["Python", "JavaScript", "TypeScript", "C", "SQL"],
    frontend: ["React", "HTML", "CSS", "Tailwind CSS", "Framer Motion"],
    backend: ["Flask", "REST APIs", "Node.js"],
    databases: ["MongoDB", "Firebase", "MySQL"],
    aiml: ["OpenCV", "YOLO", "TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
    tools: ["Git", "GitHub", "VS Code", "Postman", "Vercel"],
    core: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
    ],
  },
  projects: [
    {
      id: "haircraft",
      title: "HairCraft",
      category: "Software Development",
      description: "A comprehensive salon management platform with real-time booking and analytics.",
      features: [
        "Real-time appointment scheduling",
        "Role-based dashboards",
        "Automated notifications",
      ],
      technologies: ["React", "Firebase", "Tailwind CSS", "Vite"],
      githubUrl: "https://github.com/vimlesh/haircraft",
      liveUrl: "https://haircraft-app.web.app",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop",
      challenges: "Managing real-time state synchronization across different user roles effectively.",
      learnings: "Deepened understanding of Firebase Firestore rules and React context for state management.",
    },
    {
      id: "smartcart-ai",
      title: "SmartCart AI",
      category: "Machine Learning",
      description: "An AI-powered automated checkout system for retail stores.",
      features: [
        "Real-time object detection",
        "Automated billing generation",
        "Inventory synchronization",
      ],
      technologies: ["Python", "YOLO", "OpenCV", "Flask"],
      githubUrl: "https://github.com/vimlesh/smartcart-ai",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=1974&auto=format&fit=crop",
      challenges: "Optimizing the YOLO model for low-latency inference on edge devices.",
      learnings: "Mastered computer vision pipelines and model optimization techniques.",
    },
    {
      id: "workplace-safety",
      title: "AI Workplace Safety Monitoring",
      category: "Machine Learning",
      description: "A computer vision system that monitors worksite safety compliance in real-time.",
      features: [
        "PPE detection",
        "Hazard zone intrusion alerts",
        "Analytics dashboard",
      ],
      technologies: ["TensorFlow", "OpenCV", "React", "Python"],
      githubUrl: "https://github.com/vimlesh/safety-monitoring",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop",
      challenges: "Handling varying lighting conditions in industrial environments.",
      learnings: "Improved dataset augmentation strategies and robust model evaluation.",
    },
    {
      id: "traffic-dashboard",
      title: "Traffic Accident Analysis Dashboard",
      category: "Data Analytics",
      description: "An interactive dashboard visualizing traffic accident trends and identifying high-risk zones.",
      features: [
        "Interactive geospatial heatmaps",
        "Time-series trend analysis",
        "Predictive modeling",
      ],
      technologies: ["Pandas", "Scikit-learn", "Plotly", "Streamlit"],
      githubUrl: "https://github.com/vimlesh/traffic-analysis",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop",
      challenges: "Cleaning and merging large, disparate government datasets.",
      learnings: "Advanced data wrangling techniques and spatial data visualization.",
    },
    {
      id: "expense-tracker",
      title: "Expense Tracker",
      category: "Software Development",
      description: "A personal finance application for tracking expenses and visualizing spending habits.",
      features: [
        "Custom category management",
        "Monthly budget goals",
        "Interactive spending charts",
      ],
      technologies: ["React", "Chart.js", "Tailwind CSS", "Node.js"],
      githubUrl: "https://github.com/vimlesh/expense-tracker",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
      challenges: "Designing an intuitive mobile-first UI for quick expense entry.",
      learnings: "Enhanced UI/UX design skills and responsive layout implementation.",
    },
  ],
  experience: [
    {
      id: 1,
      role: "Software Developer Intern",
      company: "Tech Solutions Inc.",
      duration: "June 2024 - Present",
      description: "Developed and maintained full-stack web applications, improving system performance by 20%.",
    }
  ],
  certifications: [
    {
      id: 1,
      title: "Machine Learning Specialization",
      issuer: "Coursera / Stanford",
      date: "2023",
    },
    {
      id: 2,
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
    },
  ],
  achievements: [
    {
      id: 1,
      title: "First Place - University Hackathon",
      date: "2023",
      description: "Built an AI-powered study assistant in 48 hours."
    }
  ],
  socials: {
    github: "https://github.com/vimlesh",
    linkedin: "https://linkedin.com/in/vimlesh",
    email: "contact@vimlesh.com",
  },
};
