"use client";

import { useState } from "react";
import Image from "next/image";
import { PROJECTS } from "../../constants";
import ProjectModal from "./ProjectModal";

const project = PROJECTS.find((p) => p.id === "code-cleaner");

export default function CodeCleanerCard() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-2xl relative overflow-hidden"
      style={{ background: "rgba(156, 127, 214, 1)", gridArea: "code-cleaner" }}
    >
      <button
        onClick={() => setOpen(true)}
        aria-label="View Code Cleaner project details"
        className="absolute top-4 right-4 z-10 w-8 h-8 rounded-2xl bg-black/10 flex items-center justify-center font-bold text-xl text-gray-900 hover:bg-black/20 transition-colors"
      >
        +
      </button>

      <h2 className="absolute bottom-5 left-4 z-10 [writing-mode:vertical-rl] rotate-180 text-xl min-[560px]:text-2xl font-black text-gray-900 leading-none">
        Code
        <br />
        Cleaner
      </h2>

      <div className="absolute top-[30%] left-[32%] right-0 aspect-[3/2] overflow-hidden shadow-lg min-[900px]:top-[20%] min-[900px]:left-[34%] min-[900px]:right-auto min-[900px]:h-[85%]">
        <Image
          src="/images/code-cleaner-1.png"
          alt=""
          fill
          sizes="(max-width: 560px) 70vw, (max-width: 900px) 35vw, 40vw"
          className="object-cover object-left-top"
        />
      </div>

      {open && project && (
        <ProjectModal project={project} onClose={() => setOpen(false)} />
      )}
    </div>
  );
}
