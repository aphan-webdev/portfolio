import type { Metadata } from "next";
import Nav from "./components/Nav";
import PhotoCard from "./components/PhotoCard";
import ThemepackCard from "./components/ThemepackCard";
import WebdocsCard from "./components/WebdocsCard";
import IdentityCard from "./components/IdentityCard";
import StrataCard from "./components/StrataCard";
import CourseBuilderCard from "./components/CourseBuilderCard";
import AboutMeCard from "./components/AboutMeCard";
import CodeCleanerCard from "./components/CodeCleanerCard";
import ToolsCard from "./components/ToolsCard";

export const metadata: Metadata = {
  title: "Anh-Thu Phan — Front-End Dev",
  description: "Portfolio of Anh-Thu Phan, Front-End Developer at Pima Community College.",
};

export default function Home() {
  return (
    <main
      className="min-h-screen p-5"
      style={{ fontFamily: "var(--font-inter)" }}
    >
      <Nav />
      <div className="bento-grid">
        <div className="flex flex-col" style={{ gridArea: "left" }}>
          <PhotoCard />
          <IdentityCard />
        </div>
        <ThemepackCard />
        <WebdocsCard />
        <StrataCard />
        <CourseBuilderCard />
        <AboutMeCard />
        <CodeCleanerCard />
        <ToolsCard />
      </div>
    </main>
  );
}
