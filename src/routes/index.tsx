import { createFileRoute } from "@tanstack/react-router";
import { SiteProvider } from "@/components/site/theme-provider";
import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Journey } from "@/components/site/journey";
import { Projects } from "@/components/site/projects";
import { Toolkit } from "@/components/site/toolkit";
import { Proof } from "@/components/site/proof";
import { Connect } from "@/components/site/connect";
import { Footer } from "@/components/site/footer";
import { CustomCursor } from "@/components/site/cursor";
import { ResumeModal } from "@/components/site/resume-modal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nasywa Chonifahtun Fiqrihiyah — I Learn by Building Things." },
      {
        name: "description",
        content:
          "Personal digital field journal of Nasywa Chonifahtun Fiqrihiyah — Informatics student exploring AI, Data, Software, and Robotics by building real systems.",
      },
      { property: "og:title", content: "Nasywa — I Learn by Building Things." },
      {
        property: "og:description",
        content: "Exploring AI, data, and software development through real projects, experiments, and problems worth solving.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteProvider>
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Journey />
        <Projects />
        <Toolkit />
        <Proof />
        <Connect />
        <Footer />
      </main>
      <ResumeModal />
    </SiteProvider>
  );
}
