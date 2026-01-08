import Image from "next/image";
import Link from "next/link";

export default function Courses() {
  const courses = [
    {
      title: "UI/UX Design",
      desc: "Learn to design beautiful, user-friendly digital experiences from start to finish.",
      image: "/images/course-uiux.png",
      difficulty: "Beginner",
      duration: "12 weeks",
      students: "200+",
      gradient: "from-primary-400 to-secondary-400",
    },
    {
      title: "Cyber Security",
      desc: "Protect systems, networks, and data from digital attacks.",
      image: "/images/course-cyber.png",
      difficulty: "Intermediate",
      duration: "16 weeks",
      students: "150+",
      gradient: "from-error-400 to-warning-400",
    },
    {
      title: "Large Language Model (LLM)",
      desc: "Build and apply modern AI models that power intelligent products.",
      image: "/images/course-llm.png",
      difficulty: "Advanced",
      duration: "20 weeks",
      students: "100+",
      gradient: "from-success-400 to-info-500",
    },
    {
      title: "Software Engineering",
      desc: "Power the web with robust server-side and application logic.",
      image: "/images/course-software.png",
      difficulty: "Beginner",
      duration: "24 weeks",
      students: "180+",
      gradient: "from-info-400 to-secondary-400",
    },
  ];

  const difficultyColors = {
    Beginner: "badge-primary",
    Intermediate: "badge-warning",
    Advanced: "badge-error",
  };

  return (
    <section id="courses" className="bg-beige">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        {/* Section Header */}
        <div className="text-center">
          <h6 className="text-xs font-semibold tracking-widest text-primary-600 uppercase mb-3">
            Our Courses
          </h6>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900">
            Explore Our Courses
          </h2>
          <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto">
            Kick start your journey in one of our exciting, industry-relevant courses
            designed by experts.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <div
              key={course.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg hover:border-primary-300 hover:-translate-y-1 transition-all duration-200"
            >
              {/* Course Image */}
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </div>

              {/* Course Content */}
              <div className="flex flex-1 flex-col p-5">
                {/* Badges */}
                <div className="flex gap-2 mb-3">
                  <span className={`badge ${difficultyColors[course.difficulty as keyof typeof difficultyColors]}`}>
                    {course.difficulty}
                  </span>
                  <span className="badge badge-info">
                    {course.duration}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-display font-bold text-gray-900 mb-2">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="flex-1 text-sm leading-relaxed text-gray-600 mb-4">
                  {course.desc}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span className="font-medium">{course.students} Students</span>
                  </div>

                  <Link
                    href="#"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700 group-hover:gap-2 transition-all"
                  >
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-10 text-center">
          <Link
            href="#courses"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-primary-600 bg-transparent px-6 py-3 text-base font-semibold text-primary-600 hover:bg-primary-50 transition-all duration-200"
          >
            View All Courses
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
