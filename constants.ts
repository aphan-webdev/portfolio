export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  role?: string;
  highlights?: string[];
  images?: string[];
  repoUrl?: string;
  npmUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "themepack",
    title: "Themepack",
    description: "Theming toolkit powering 60+ course designs in D2L Brightspace.",
    tags: ["TypeScript", "D2L Brightspace", "Accessibility", "SCSS"],
    role: "Introduced Stylelint and cleaned up CSS specificity across every theme, refactored DOM mutation observers into a shared manager, and built the steps widget, banner animations, and a dark-mode-only view option.",
    highlights: [
      "63 interchangeable per-program themes built on one shared component library",
      "30+ self-initializing, accessible widgets — accordions, tabs, persistent checklists, dark mode, and more",
      "Zero-dependency vanilla TypeScript, so courses never ship a framework runtime to students",
      "Dark mode and other accessibility features injected directly into D2L's shadow DOM",
    ],
    repoUrl: "https://github.com/franreyn/pimaonline-themepack",
    npmUrl: "https://www.npmjs.com/package/@pimaonline/pimaonline-themepack",
  },
  {
    id: "webdocs",
    title: "Webdocs",
    description: "Documentation site for building D2L Brightspace courses with the Themepack.",
    tags: ["Next.js", "React", "Documentation", "CSS"],
    role: "Built the site's foundation — navbar, homepage carousel, docs grid with sticky sidebar and TOC highlighting, and the widgets, utilities, and getting-started pages — then added premade templates and docs for the animation library and new widgets.",
    highlights: [
      "Live, interactive demos of 28 widgets, 10 plugins, and 7 utilities, each with a show-and-copy code snippet",
      "Gallery of 52 program themes with screenshots, descriptions, and layout previews",
      "14 ready-to-paste page templates across one-column, two-column, and statement-of-work layouts",
      "Help guides that walk instructional designers and faculty through adding templates, Panopto, and YouTube to D2L",
    ],
    repoUrl: "https://github.com/franreyn/pimaonline-webdocs",
  },
  {
    id: "code-cleaner",
    title: "Code Cleaner",
    description: "A tool to automatically clean and format your source code.",
    tags: ["code", "tools", "productivity"],
  },
  {
    id: "course-builder",
    title: "Course Builder",
    description: "A platform for creating and managing online courses.",
    tags: ["education", "courses", "platform"],
  },
  {
    id: "strata-ui",
    title: "Strata UI",
    description: "A collection of UI components for rapid app development.",
    tags: ["ui", "components", "library"],
  },
];

export interface Tool {
  name: string;
  bg: string;
  text: string;
  abbr: string;
}

export const TOOLS: Tool[] = [
  { name: "Sass", bg: "rgba(207, 100, 154, 1)", text: "rgba(255, 255, 255, 1)", abbr: "Sass" },
  { name: "GitHub", bg: "rgba(36, 41, 46, 1)", text: "rgba(255, 255, 255, 1)", abbr: "GH" },
  { name: "React", bg: "rgba(32, 35, 42, 1)", text: "rgba(97, 218, 251, 1)", abbr: "⚛" },
  { name: "Next.js", bg: "rgba(0, 0, 0, 1)", text: "rgba(255, 255, 255, 1)", abbr: "N" },
  { name: "Tailwind", bg: "rgba(14, 165, 233, 1)", text: "rgba(255, 255, 255, 1)", abbr: "TW" },
  { name: "Neovim", bg: "rgba(87, 161, 67, 1)", text: "rgba(255, 255, 255, 1)", abbr: "NV" },
  { name: "TypeScript", bg: "rgba(49, 120, 198, 1)", text: "rgba(255, 255, 255, 1)", abbr: "TS" },
  { name: "JavaScript", bg: "rgba(247, 223, 30, 1)", text: "rgba(0, 0, 0, 1)", abbr: "JS" },
  { name: "HTML5", bg: "rgba(227, 79, 38, 1)", text: "rgba(255, 255, 255, 1)", abbr: "H5" },
  { name: "Vite", bg: "rgba(100, 108, 255, 1)", text: "rgba(255, 255, 255, 1)", abbr: "⚡" },
  { name: "Figma", bg: "rgba(162, 89, 255, 1)", text: "rgba(255, 255, 255, 1)", abbr: "F" },
  { name: "CSS3", bg: "rgba(41, 101, 241, 1)", text: "rgba(255, 255, 255, 1)", abbr: "CSS" },
];
