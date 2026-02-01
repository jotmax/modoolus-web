// src/data/courseData.ts

export interface Course {
  id: string;
  title: string;
  tagline: string;
  desc: string;
  image: string;
  icon: string;
  difficulty: string;
  duration: string;
  students: string;
  category: string;
  badge?: string;
  highlights: string[];
}

export const courses: Course[] = [
  {
    id: "intro-ai-tools",
    title: "Introduction to AI Tools",
    tagline: "Master 10+ AI Tools - No Coding Required",
    desc: "Master 10+ AI tools including ChatGPT, Claude, Midjourney for content creation and automation. No coding required!",
    image: "/images/course-ai-tools.png",
    icon: "🤖",
    difficulty: "Beginner",
    duration: "8 weeks",
    students: "New!",
    category: "AI & Productivity",
    badge: "NEW",
    highlights: [
      "Master ChatGPT, Claude, Midjourney",
      "No coding required",
      "10+ AI tools covered",
      "Build 8 portfolio projects"
    ]
  },
  {
    id: "frontend-engineering",
    title: "Frontend Software Engineering",
    tagline: "Build Beautiful, Responsive Web Applications",
    desc: "Build beautiful web apps with React, Next.js and AI tools. Master modern frontend development from scratch.",
    image: "/images/course-frontend.png",
    icon: "💻",
    difficulty: "Beginner",
    duration: "16 weeks",
    students: "180+",
    category: "Software Engineering",
    highlights: [
      "React & Next.js mastery",
      "GitHub Copilot included",
      "10+ real projects",
      "Production deployment"
    ]
  },
  {
    id: "backend-engineering",
    title: "Backend Software Engineering",
    tagline: "Build Scalable APIs & Server Applications",
    desc: "Master Node.js, databases, and APIs with AI assistance. Build scalable server applications.",
    image: "/images/course-backend.png",
    icon: "⚙️",
    difficulty: "Beginner",
    duration: "16 weeks",
    students: "150+",
    category: "Software Engineering",
    highlights: [
      "Node.js & Express",
      "SQL & NoSQL databases",
      "RESTful & GraphQL APIs",
      "Cloud deployment"
    ]
  },
  {
    id: "product-design-ai",
    title: "Product Design with AI",
    tagline: "Create Stunning User Experiences with AI Tools",
    desc: "Design stunning user experiences with Figma and AI tools. Build a professional portfolio in 12 weeks.",
    image: "/images/course-design.png",
    icon: "🎨",
    difficulty: "Beginner",
    duration: "12 weeks",
    students: "200+",
    category: "Design",
    highlights: [
      "Figma & AI design tools",
      "User research with AI",
      "Interactive prototyping",
      "Professional portfolio"
    ]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing with AI",
    tagline: "Master Modern Marketing with AI Automation",
    desc: "Master SEO, social media, and paid ads with AI automation. Create campaigns 10x faster.",
    image: "/images/course-marketing.png",
    icon: "📱",
    difficulty: "Beginner",
    duration: "10 weeks",
    students: "New!",
    category: "Marketing",
    badge: "NEW",
    highlights: [
      "SEO & content marketing",
      "AI-powered campaigns",
      "Social media mastery",
      "Google & Facebook Ads"
    ]
  },
  {
    id: "cybersecurity-appsec",
    title: "Cyber Security (AppSec Track)",
    tagline: "Beginner to Red Team Professional",
    desc: "Master penetration testing and application security. Qualify for red team roles from beginner level.",
    image: "/images/course-cybersecurity.png",
    icon: "🛡️",
    difficulty: "Beginner",
    duration: "20 weeks",
    students: "120+",
    category: "Cybersecurity",
    highlights: [
      "Penetration testing skills",
      "Red team preparation",
      "OWASP Top 10 mastery",
      "Industry certifications prep"
    ]
  }
];

// Helper function to get course by ID
export function getCourseById(id: string): Course | undefined {
  return courses.find(course => course.id === id);
}

// Helper function to get courses by category
export function getCoursesByCategory(category: string): Course[] {
  if (category === "all") return courses;
  return courses.filter(course => course.category === category);
}

// Course categories for filtering
export const courseCategories = [
  { id: "all", name: "All Courses", count: 6 },
  { id: "Software Engineering", name: "Software Engineering", count: 2 },
  { id: "AI & Productivity", name: "AI & Productivity", count: 1 },
  { id: "Design", name: "Design", count: 1 },
  { id: "Marketing", name: "Marketing", count: 1 },
  { id: "Cybersecurity", name: "Cybersecurity", count: 1 }
];

// Stats for homepage
export const courseStats = {
  totalCourses: 6,
  totalStudents: "650+",
  aiIntegrated: "100%",
  avgDuration: "8-20 weeks"
};