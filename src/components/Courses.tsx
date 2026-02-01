import Link from "next/link";

export default function Courses() {
  const courses = [
    {
      id: "intro-ai-tools",
      title: "Introduction to AI Tools",
      description: "Master 10+ AI tools including ChatGPT, Claude, and Midjourney. No coding required - perfect for creators and professionals.",
      duration: "8 weeks",
      students: "New!",
      icon: "🤖",
      color: "from-purple-400 to-pink-400",
      badge: "NEW"
    },
    {
      id: "frontend-engineering",
      title: "Frontend Software Engineering",
      description: "Build beautiful web applications with React, Next.js, and AI tools. From beginner to job-ready developer.",
      duration: "16 weeks",
      students: "180+",
      icon: "💻",
      color: "from-blue-400 to-cyan-400"
    },
    {
      id: "backend-engineering",
      title: "Backend Software Engineering",
      description: "Master Node.js, databases, and APIs. Build scalable server applications with AI assistance.",
      duration: "16 weeks",
      students: "150+",
      icon: "⚙️",
      color: "from-green-400 to-emerald-400"
    },
    {
      id: "product-design-ai",
      title: "Product Design with AI",
      description: "Design stunning user experiences with Figma and AI tools. Build a professional portfolio in 12 weeks.",
      duration: "12 weeks",
      students: "200+",
      icon: "🎨",
      color: "from-pink-400 to-rose-400"
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing with AI",
      description: "Master SEO, social media, and paid ads with AI automation. Create campaigns 10x faster.",
      duration: "10 weeks",
      students: "New!",
      icon: "📱",
      color: "from-orange-400 to-amber-400",
      badge: "NEW"
    },
    {
      id: "cybersecurity-appsec",
      title: "Cyber Security (AppSec)",
      description: "Master penetration testing and application security. Qualify for red team roles from beginner level.",
      duration: "20 weeks",
      students: "120+",
      icon: "🛡️",
      color: "from-red-400 to-orange-400"
    }
  ];

  return (
    <section className="py-20 bg-[#40C7DD]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-[#0B2447] mb-4">
            Our AI-Integrated Courses
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Transform your career with industry-relevant tech skills. All courses include AI tools training for accelerated learning.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div 
              key={course.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Decorative Top Border */}
              <div className={`h-2 bg-gradient-to-r ${course.color}`} />
              
              <div className="p-6 relative">
                {/* Icon */}
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-md">
                    <span className="text-3xl">{course.icon}</span>
                  </div>
                </div>

                {/* Badge */}
                {course.badge && (
                  <div className="absolute top-6 right-6">
                    <span className="px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg animate-pulse">
                      {course.badge}
                    </span>
                  </div>
                )}

                {/* Title */}
                <h3 className="text-xl font-bold text-[#0B2447] mb-3 group-hover:text-[#19376D] transition-colors">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {course.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-semibold">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span className="font-semibold">{course.students}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href={`/courses/${course.id}`}
                  className="block w-full text-center px-6 py-3 bg-[#0B2447] hover:bg-[#19376D] text-white font-bold rounded-lg transition-colors shadow-md"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16">
          <Link
            href="/courses"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#FDB813] hover:bg-[#e5a711] text-[#0B2447] font-bold rounded-lg transition-colors text-lg shadow-lg hover:shadow-xl"
          >
            VIEW ALL COURSES & CURRICULUM
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}