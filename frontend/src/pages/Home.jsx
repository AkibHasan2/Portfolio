import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import Hero from "../components/sections/Hero.jsx";
import About from "../components/sections/About.jsx";
import Expertise from "../components/sections/Expertise.jsx";
import Skills from "../components/sections/Skills.jsx";
import Projects from "../components/sections/Projects.jsx";
import Capabilities from "../components/sections/Capabilities.jsx";
import Experience from "../components/sections/Experience.jsx";
import Architecture from "../components/sections/Architecture.jsx";
import OtherProjects from "../components/sections/OtherProjects.jsx";
import Contact from "../components/sections/Contact.jsx";
import { useFetch } from "../hooks/useFetch.js";
import { api } from "../services/api.js";
import {
  staticProfile,
  staticSkills,
  staticProjects,
  staticExperience,
  otherProjects,
  expertiseAreas,
  capabilities,
  architectureDiagrams,
} from "../data/static.js";

export default function Home() {
  const { data: profile } = useFetch(api.getProfile, staticProfile, []);
  const { data: skills } = useFetch(api.getSkills, staticSkills, []);
  const { data: projects } = useFetch(api.getProjects, staticProjects, []);
  const { data: experience } = useFetch(api.getExperience, staticExperience, []);

  const featured = (projects?.length ? projects : staticProjects).filter((p) => p.Featured ?? p.featured ?? p.Slug);

  return (
    <div className="grain relative min-h-screen bg-ink">
      <Navbar name={profile?.fullName?.split(" ")[0] || profile?.FullName?.split(" ")[0] || "Akib"} />
      <main>
        <Hero profile={profile || staticProfile} />
        <About profile={profile || staticProfile} />
        <Expertise areas={expertiseAreas} />
        <Projects projects={featured.length ? featured : staticProjects} />
        <Capabilities items={capabilities} />
        <Architecture diagrams={architectureDiagrams} />
        <Experience experience={experience?.length ? experience : staticExperience} />
        <Skills skills={skills?.length ? skills : staticSkills} />
        <OtherProjects projects={otherProjects} />
        <Contact profile={profile || staticProfile} />
      </main>
      <Footer profile={profile || staticProfile} />
    </div>
  );
}
