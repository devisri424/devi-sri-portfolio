import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Achievements from "@/components/portfolio/Achievements";
import CodingProfiles from "@/components/portfolio/CodingProfiles";
import Articles from "@/components/portfolio/Articles";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Devi Sri R — AI & ML Engineer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Devi Sri R — B.Tech AI & DS student and aspiring Machine Learning Engineer. Projects, skills, achievements and contact.",
      },
      { property: "og:title", content: "Devi Sri R — AI & ML Engineer Portfolio" },
      {
        property: "og:description",
        content: "AI/ML student portfolio showcasing projects, skills and achievements.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <CodingProfiles />
        <Articles />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
