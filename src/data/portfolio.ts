export const portfolioData = {
  // --- New UI Schema using Original Content ---
  hero: {
    title: "VIMLESH",
    greeting: "Hello, I'm",
    name: "Vimlesh\nTiwari",
    role: "SOFTWARE DEVELOPER & AI/ML ENGINEER",
    description: "Crafting elegant software, building intelligent models, and uncovering insights from data. I transform complex problems into minimal, futuristic, and high-performance solutions.",
    availability: "Available Worldwide",
    tagline: "DESIGN. ENGINEER. DELIVER.",
    stats: [
      { value: "3+", label: "Certifications" },
      { value: "8+", label: "Projects Completed" },
      { value: "5+", label: "Core Skills" },
    ]
  },
  projects: [
    {
      id: "01",
      title: "HairCraft",
      category: "Fullstack Platform",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop",
      link: "https://github.com/vimlesh/haircraft",
      liveLink: "https://hair-craft.vercel.app/",
      techStack: ["React.js", "Vite", "Firebase", "Firestore", "Framer Motion"],
      brief: "HairCraft is a premium salon management platform that enables customers to discover salons, book appointments, select preferred stylists, and make secure online payments. It also provides salon owners with tools to manage appointments, staff, and customer records through an intuitive dashboard.",
      keyFeatures: [
        "Online appointment booking",
        "Stylist selection",
        "Secure login",
        "Customer dashboard",
        "Salon management panel",
        "Premium UI animations"
      ],
      learned: [
        "Authentication",
        "Cloud database management",
        "Real-time data synchronization",
        "Modern UI/UX design",
        "User role management"
      ]
    },
    {
      id: "02",
      title: "SmartCart.AI",
      category: "AI/ML Development",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop",
      link: "https://github.com/vimlesh/smartcart-ai",
      liveLink: "https://smartcartai-xi.vercel.app/",
      techStack: ["React.js", "Vite", "Python", "Flask", "MongoDB Atlas", "Web Scraping"],
      brief: "SmartCart.AI is an intelligent shopping assistant that allows users to track product prices across e-commerce platforms. Users can set a target price, and the system continuously monitors product prices and automatically notifies them via email when the desired price is reached. It helps users make cost-effective purchasing decisions.",
      keyFeatures: [
        "Product price tracking",
        "Target price alerts",
        "Automated email notifications",
        "Responsive UI",
        "Real-time price monitoring"
      ],
      learned: [
        "REST API development",
        "Database integration",
        "Automation & scheduling",
        "Frontend-backend communication",
        "Deployment on cloud platforms"
      ]
    },
    {
      id: "03",
      title: "Safety Check",
      category: "Computer Vision",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop",
      link: "https://github.com/vimlesh/safety-monitoring",
      techStack: ["Python", "YOLOv8", "PyTorch", "OpenCV", "FastAPI", "React.js", "MySQL"],
      brief: "Safety Check is an AI-powered surveillance system that monitors workers in real time using CCTV cameras or webcams to ensure compliance with workplace safety regulations. The system detects whether workers are wearing the required Personal Protective Equipment (PPE)—such as helmets, safety vests, gloves, masks, goggles, and safety shoes—and instantly raises alerts whenever a violation is detected. It also logs incidents and provides analytics to improve workplace safety.",
      keyFeatures: [
        "Real-time PPE detection",
        "Automated violation alerts",
        "Incident logging & analytics",
        "CCTV & webcam integration"
      ],
      learned: [
        "Object detection with YOLOv8",
        "Transfer learning",
        "Computer vision pipelines",
        "Real-time video processing"
      ]
    },
    {
      id: "04",
      title: "Traffic Accident Analysis",
      category: "Data Analytics & Visualization",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop",
      link: "https://github.com/vimlesh/traffic-analysis",
      techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Power BI"],
      brief: "Analyzed traffic accident data to identify patterns, accident hotspots, and contributing factors. Built interactive dashboards to help derive actionable insights for improving road safety and decision-making.",
      keyFeatures: [
        "Data cleaning",
        "Exploratory Data Analysis (EDA)",
        "Trend analysis",
        "Interactive dashboards",
        "Insight generation"
      ],
      learned: [
        "Data preprocessing",
        "Data visualization",
        "Statistical analysis",
        "Dashboard creation",
        "Business insight generation"
      ]
    },
    {
      id: "05",
      title: "Expense Tracker",
      category: "Personal Finance App",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
      link: "https://github.com/vimlesh/expense-tracker",
      techStack: ["React.js", "Vite", "Firebase", "Firestore", "Chart.js"],
      brief: "Expense Tracker is a full-stack web application that helps users manage their daily income and expenses in one place. Users can securely log in, record transactions, categorize expenses, monitor their financial activities through an interactive dashboard, and gain insights into their spending habits to make better financial decisions.",
      keyFeatures: [
        "Secure user authentication",
        "Add, edit, and delete records",
        "Expense categorization",
        "Dashboard with spending insights",
        "Interactive charts and graphs",
        "Real-time database synchronization"
      ],
      learned: [
        "Full-stack web development",
        "Firebase Authentication",
        "Firestore database integration",
        "CRUD operations",
        "State management in React",
        "Data visualization"
      ]
    },
    {
      id: "06",
      title: "Sales Tracker Dashboard",
      category: "Business Intelligence",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      link: "#",
      techStack: ["Power BI", "Power Query", "DAX", "Excel"],
      brief: "Designed an interactive sales analytics dashboard to monitor business performance across products, regions, customers, and time periods. The dashboard enables stakeholders to track key performance indicators, identify sales trends, evaluate profitability, and support data-driven business decisions.",
      keyFeatures: [
        "Sales, Profit & Orders KPIs",
        "Sales Trend Analysis",
        "Region & Product Analysis",
        "Customer-wise Sales Tracking",
        "Interactive Slicers & Filters"
      ],
      learned: [
        "Data Modeling (Star Schema)",
        "DAX Measures",
        "KPI Dashboard Design",
        "Interactive Reporting",
        "Business Intelligence"
      ]
    }
  ],
  education: [
    {
      degree: "Deloitte Data Analytics Virtual Internship",
      institution: "Forage",
      years: "2025"
    },
    {
      degree: "Power BI Certification",
      institution: "SAGE Winter school",
      years: "2025"
    },
    {
      degree: "Tata Group – Data Visualization Virtual Experience",
      institution: "Forage",
      years: "2025"
    }
  ],
  skills: [
    {
      category: "AI & Data Science",
      items: ["AI-Assisted Software Development", "Machine Learning", "Prompt Engineering", "Computer Vision", "Data Analytics"]
    },
    {
      category: "Web Development",
      items: ["Full-Stack Web Development", "React.js", "REST API Development"]
    },
    {
      category: "Backend & DB",
      items: ["Python", "Firebase", "MongoDB"]
    },
    {
      category: "BI & Design",
      items: ["Power BI", "Dashboard Development", "UI/UX Design"]
    },
    {
      category: "Core Skills",
      items: ["Problem Solving"]
    }
  ],
  process: [
    {
      step: "01",
      title: "Analyze",
      description: "Understanding the problem, gathering data, and identifying core requirements."
    },
    {
      step: "02",
      title: "Model",
      description: "Designing the architecture, database schema, or machine learning model."
    },
    {
      step: "03",
      title: "Develop",
      description: "Writing clean, scalable code and integrating AI solutions where applicable."
    },
    {
      step: "04",
      title: "Evaluate",
      description: "Testing model accuracy, application performance, and user experience."
    },
    {
      step: "05",
      title: "Deploy",
      description: "Shipping the final product to production and monitoring real-world usage."
    }
  ],
  quote: {
    text: "I am an AI & Data Science undergraduate with a deep passion for software engineering. I enjoy building seamless, user-centric applications powered by cutting-edge AI.",
    author: "Vimlesh Tiwari",
    signatureName: "V. Tiwari"
  },
  contact: {
    email: "vimleshtiwari2005@gmail.com",
    linkedin: "vimleshtiwari2005",
    github: "8vimlesh",
    location: "Global Remote"
  },

  // --- Original Full Content Backups (for your reference) ---
  original_about: {
    title: "About Me",
    description: [
      "I am an AI & Data Science undergraduate with a deep passion for software engineering.",
      "My expertise spans full-stack development, artificial intelligence, machine learning, and data analytics. I enjoy building seamless, user-centric applications powered by cutting-edge AI.",
      "As a continuous learner, I actively integrate AI-assisted development workflows to deliver production-ready code with maximum efficiency.",
    ],
  },
  original_skills: {
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
};
