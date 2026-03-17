import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Credentials from "@/components/Credentials";
import Portfolio from "@/components/Portfolio";
import Trainings from "@/components/Trainings";
import ProfessionalDevelopment from "@/components/ProfessionalDevelopment";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Credentials />
      <Portfolio />
      <Trainings />
      <ProfessionalDevelopment />
      <Contact />
      <Footer />
    </>
  );
}
