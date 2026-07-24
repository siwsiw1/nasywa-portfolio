import { createFileRoute } from "@tanstack/react-router";
import { SiteProvider } from "@/components/site/theme-provider";
import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Journey } from "@/components/site/journey";
import { Projects } from "@/components/site/projects";
import { Footer } from "@/components/site/footer";
import { CustomCursor } from "@/components/site/cursor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nasywa Chonifahtun Fiqrihiyah — Digital Explorer & Builder" },
      {
        name: "description",
        content:
          "A quiet digital field journal by Nasywa — Informatics student exploring AI, Data, and Software by building things to understand how they work.",
      },
      { property: "og:title", content: "Nasywa — Digital Explorer & Builder" },
      {
        property: "og:description",
        content: "Personal field journal: exploration, experiments, and things built while learning.",
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
        <Footer />
      </main>
    </SiteProvider>
  );
}
