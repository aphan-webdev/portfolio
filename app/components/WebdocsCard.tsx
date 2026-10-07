"use client";

import { useState } from "react";
import Image from "next/image";
import { PROJECTS } from "../../constants";
import ProjectModal from "./ProjectModal";

const project = PROJECTS.find((p) => p.id === "webdocs");

const SCREENSHOTS = [
  { src: "/images/webdocs-1.png", mobile: "top-[2%] -left-[6%]", desktop: "min-[900px]:-ml-[6%]" },
  { src: "/images/webdocs-2.png", mobile: "top-[27%] right-[16%]", desktop: "min-[900px]:ml-[32%]" },
  { src: "/images/webdocs-3.png", mobile: "top-[54%] left-[2%]", desktop: "min-[900px]:-ml-[6%]" },
];

export default function WebdocsCard() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-2xl relative overflow-hidden"
      style={{ background: "rgb(223, 116, 54)", gridArea: "webdocs" }}
    >
      <h2 className="absolute top-5 right-4 z-10 [writing-mode:vertical-rl] text-xl min-[560px]:text-2xl font-black text-gray-900 leading-none">
        Webdocs
      </h2>

      <div className="absolute inset-0 min-[900px]:top-[10%] min-[900px]:-bottom-4 min-[900px]:flex min-[900px]:flex-col min-[900px]:justify-between">
        {SCREENSHOTS.map(({ src, mobile, desktop }) => (
          <div
            key={src}
            className={`absolute ${mobile} h-[52%] aspect-[2/1] overflow-hidden shadow-lg min-[900px]:relative min-[900px]:top-auto min-[900px]:left-auto min-[900px]:right-auto min-[900px]:h-auto min-[900px]:w-[78%] min-[900px]:self-start ${desktop}`}
          >
            <Image src={src} alt="" fill sizes="(max-width: 900px) 50vw, 25vw" className="object-cover object-left-top" />
          </div>
        ))}
      </div>

      <button
        onClick={() => setOpen(true)}
        aria-label="View Webdocs project details"
        className="absolute bottom-4 right-4 z-10 w-8 h-8 rounded-2xl bg-black/10 flex items-center justify-center font-bold text-xl text-gray-900 hover:bg-black/20 transition-colors"
      >
        +
      </button>

      {open && project && (
        <ProjectModal project={project} onClose={() => setOpen(false)} />
      )}
    </div>
  );
}
