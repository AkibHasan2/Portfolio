import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import Hero from "../components/sections/Hero.jsx";
import About from "../components/sections/About.jsx";
import Skills from "../components/sections/Skills.jsx";
import Projects from "../components/sections/Projects.jsx";
import OtherProjects from "../components/sections/OtherProjects.jsx";
import Experience from "../components/sections/Experience.jsx";
import Contact from "../components/sections/Contact.jsx";
import { useFetch } from "../hooks/useFetch.js";
import { api } from "../services/api.js";
import { staticProfile, staticSkills, staticProjects, staticExperience, otherProjects } from "../data/static.js";

export default function Home() {
  const { data: profile } = useFetch(api.getProfile, staticProfile, []);
  const { data: skills } = useFetch(api.getSkills, staticSkills, []);
  const { data: projects } = useFetch(api.getProjects, staticProjects, []);
  const { data: experience } = useFetch(api.getExperience, staticExperience, []);

  const featured = (projects?.length ? projects : staticProjects).filter((p) => p.Featured ?? p.featured ?? p.Slug);

  return (
    <div className="grain relative min-h-screen bg-ink">
      <Navbar
        name={(profile || staticProfile).fullName?.split(" ")[0]}
        fullName={(profile || staticProfile).fullName}
        githubUrl={(profile || staticProfile).githubUrl}
        linkedinUrl={(profile || staticProfile).linkedinUrl}
        email={(profile || staticProfile).email}
      />
      <main>
        <Hero profile={profile || staticProfile} />
        <About profile={profile || staticProfile} />
        <Projects projects={featured.length ? featured : staticProjects} />
        <OtherProjects projects={otherProjects} />
        <Skills skills={skills?.length ? skills : staticSkills} />
        <Experience experience={experience?.length ? experience : staticExperience} />
        <Contact profile={profile || staticProfile} />
      </main>
      <Footer profile={profile || staticProfile} />
    </div>
  );
}
