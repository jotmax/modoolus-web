import Image from "next/image";
import Link from "next/link";

export default function Courses() {
  const courses = [
    {
      title: "UI/UX Design",
      desc: "Learn to design beautiful, user-friendly digital experiences from start to finish.",
      image: "/images/course-uiux.png",
      borderColor: "border-[#1E4ED8]",
      shadowColor: "shadow-[8px_8px_0px_0px_rgba(30,78,216,1)]",
      bgColor: "bg-[#1E4ED8]",
    },
    {
      title: "Cyber Security",
      desc: "Protect systems, networks, and data from digital attacks.",
      image: "/images/course-cyber.png",
      borderColor: "border-[#10B981]",
      shadowColor: "shadow-[8px_8px_0px_0px_rgba(16,185,129,1)]",
      bgColor: "bg-[#10B981]",
    },
    {
      title: "Software Engineering",
      desc: "Power the web with robust server-side and application logic.",
      image: "/images/course-software.png",
      borderColor: "border-[#F59E0B]",
      shadowColor: "shadow-[8px_8px_0px_0px_rgba(245,158,11,1)]",
      bgColor: "bg-[#F59E0B]",
    },
    {
      title: "Large Language Model (LLM)",
      desc: "Build and apply modern AI models that power intelligent products.",
      image: "/images/course-llm.png",
      borderColor: "border-[#7C3AED]",
      shadowColor: "shadow-[8px_8px_0px_0px_rgba(124,58,237,1)]",
      bgColor: "bg-[#7C3AED]",
    },
  ];

  return (
    <section id="courses" className="bg-[#F6F2E8] border-b-4 border-black">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-[#1E4ED8] md:text-5xl">
            Our Courses
          </h2>
          <p className="mt-4 text-base text-black md:text-lg">
            Explore and kick start your journey in one of our exciting courses.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <div
              key={course.title}
              className={`flex flex-col overflow-hidden border-4 ${course.borderColor} ${course.shadowColor} bg-white`}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className={`flex flex-1 flex-col p-6 ${course.bgColor}`}>
                <h3 className="text-xl font-extrabold uppercase text-white md:text-2xl">
                  {course.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/90">
                  {course.desc}
                </p>

                <Link
                  href="#"
                  className="mt-6 inline-block bg-white px-6 py-3 text-center text-sm font-bold text-black hover:bg-black/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
