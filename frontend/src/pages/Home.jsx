import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import Hero from "../components/sections/Hero.jsx";
import About from "../components/sections/About.jsx";
import Skills from "../components/sections/Skills.jsx";
import Projects from "../components/sections/Projects.jsx";
import Experience from "../components/sections/Experience.jsx";
import Contact from "../components/sections/Contact.jsx";
import CursorGlow from "../components/ui/CursorGlow.jsx";
import { useFetch } from "../hooks/useFetch.js";
import { api } from "../services/api.js";
import {
  staticProfile,
  staticSkills,
  staticProjects,
  staticExperience,
} from "../data/static.js";

export default function Home() {
  const { data: profile } = useFetch(api.getProfile, staticProfile, []);
  const { data: skills } = useFetch(api.getSkills, staticSkills, []);
  const { data: projects } = useFetch(api.getProjects, staticProjects, []);
  const { data: experience } = useFetch(api.getExperience, staticExperience, []);

  return (
    <div className="grain relative min-h-screen bg-ink">
      <CursorGlow />
      <Navbar name={profile?.fullName?.split(" ")[0] || profile?.FullName?.split(" ")[0] || profile?.fullName} />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Experience experience={experience} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </div>
  );
}
