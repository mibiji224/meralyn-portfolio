import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const About = lazy(() => import("@/components/About"));
const Education = lazy(() => import("@/components/Education"));
const Skills = lazy(() => import("@/components/Skills"));
const Credentials = lazy(() => import("@/components/Credentials"));
const Portfolio = lazy(() => import("@/components/Portfolio"));
const Trainings = lazy(() => import("@/components/Trainings"));
const ProfessionalDevelopment = lazy(() => import("@/components/ProfessionalDevelopment"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <About />
        <Education />
        <Skills />
        <Credentials />
        <Portfolio />
        <Trainings />
        <ProfessionalDevelopment />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}
