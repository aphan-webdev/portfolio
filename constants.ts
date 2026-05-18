export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "themepack",
    title: "Themepack",
    description: "A customizable theming solution for modern web apps.",
    tags: ["design", "themes", "ui"],
  },
  {
    id: "webdocs",
    title: "Webdocs",
    description: "An online documentation platform for managing and publishing docs.",
    tags: ["documentation", "web", "tools"],
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