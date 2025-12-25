import Image from "next/image";
import Link from "next/link";

export default function Courses() {
  const courses = [
  {
    title: "UI/UX Design",
    desc: "Learn to design beautiful, user-friendly digital experiences from start to finish.",
    image: "/images/course-uiux.png",
  },
  {
    title: "Cyber Security",
    desc: "Protect systems, networks, and data from digital attacks.",
    image: "/images/course-cyber.png",
  },
  {
    title: "Large Language Model (LLM)",
    desc: "Build and apply modern AI models that power intelligent products.",
    image: "/images/course-llm.png",
  },
  {
    title: "Software Engineering",
    desc: "Power the web with robust server-side and application logic.",
    image: "/images/course-software.png",
  },
];


  return (
    <section id="courses" className="bg-[#F6F2E8]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-black md:text-3xl">
            Our Courses
          </h2>
          <p className="mt-2 text-sm text-black/70">
            Explore and kick start your journey in one of our exciting courses.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <div
              key={course.title}
              className="flex flex-col overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm"
            >
              <div className="relative h-40 w-full">
                <Image
                     src={course.image}
                     alt={course.title}
                      fill
                      className="object-cover"
                  />
                </div>


              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold text-black">
                  {course.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-black/70">
                  {course.desc}
                </p>

                <Link
                  href="#"
                  className="mt-4 inline-flex items-center text-sm font-semibold text-[#1E4ED8]"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
