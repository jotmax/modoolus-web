import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ValueProps from "@/components/ValueProps";
import Courses from "@/components/Courses";
import WhyModoolus from "@/components/WhyModoolus";
import Events from "@/components/Events";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />
      <ValueProps />
      <Courses />
      <WhyModoolus />
      <Events />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </>
  );
}
