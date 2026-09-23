# Vimlesh Tiwari - Portfolio 🚀

**Software Developer & AI/ML Engineer**

> *Crafting elegant software, building intelligent models, and uncovering insights from data. I transform complex problems into minimal, futuristic, and high-performance solutions.*

---

## 🛠️ Skills & Technologies

- **AI & Data Science:** AI-Assisted Software Development, Machine Learning, Prompt Engineering, Computer Vision, Data Analytics
- **Web Development:** Full-Stack Web Development, React.js, REST API Development
- **Backend & Databases:** Python, Firebase, MongoDB
- **BI & Design:** Power BI, Dashboard Development, UI/UX Design
- **Core Skills:** Problem Solving

---

## 💼 Featured Projects

### [HairCraft](https://hair-craft.vercel.app/) 
**Fullstack Platform** | *React.js, Vite, Firebase, Firestore, Framer Motion*
A premium salon management platform that enables customers to discover salons, book appointments, and select preferred stylists. Features a comprehensive dashboard for salon owners.
- [Live Demo](https://hair-craft.vercel.app/) | [GitHub](https://github.com/vimlesh/haircraft)

### [SmartCart.AI](https://smartcartai-xi.vercel.app/)
**AI/ML Development** | *React.js, Vite, Python, Flask, MongoDB Atlas, Web Scraping*
An intelligent shopping assistant that allows users to track product prices across e-commerce platforms and get automated email alerts.
- [Live Demo](https://smartcartai-xi.vercel.app/) | [GitHub](https://github.com/vimlesh/smartcart-ai)

### Safety Check
**Computer Vision** | *Python, YOLOv8, PyTorch, OpenCV, FastAPI, React.js, MySQL*
An AI-powered surveillance system that monitors workers in real-time to ensure compliance with workplace safety regulations regarding PPE.
- [GitHub](https://github.com/vimlesh/safety-monitoring)

### Traffic Accident Analysis
**Data Analytics & Visualization** | *Python, Pandas, NumPy, Matplotlib, Power BI*
Data analysis project identifying patterns, hotspots, and contributing factors of traffic accidents via interactive dashboards.
- [GitHub](https://github.com/vimlesh/traffic-analysis)

### Expense Tracker
**Personal Finance App** | *React.js, Vite, Firebase, Firestore, Chart.js*
A full-stack web application to help users manage their daily income and expenses with an interactive dashboard and real-time database sync.
- [GitHub](https://github.com/vimlesh/expense-tracker)

### Sales Tracker Dashboard
**Business Intelligence** | *Power BI, Power Query, DAX, Excel*
An interactive sales analytics dashboard to monitor business performance across products, regions, customers, and time periods.

---

## 📜 Certifications

- **Deloitte Data Analytics Virtual Internship** — Forage (2025)
- **Power BI Certification** — SAGE Winter school (2025)
- **Tata Group – Data Visualization Virtual Experience** — Forage (2025)

---

## 🚀 About This Repository

### Pages

The portfolio uses separate routes in this order:

1. `/` — name, portrait, and short introduction
2. `/about` — biography, B.Tech education, and certifications
3. `/projects` — project gallery, category filters, and project details
4. `/experience` — internship and work experience
5. `/tech-stack` — languages, frameworks, and tools

Every page includes the shared contact footer and previous/next navigation.
Edit personal details in `src/data/portfolio.ts` and navigation order in `src/data/navigation.ts`.

For production hosting, all page URLs must fall back to `index.html` so direct visits
and refreshes work with React Router. `vercel.json` provides this for Vercel;
configure the equivalent SPA fallback if using another host.

This repository hosts the source code for my interactive developer portfolio built with React, Tailwind CSS, and Framer Motion. 

### Running Locally

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

### Build for Production

```bash
npm run build
```
