"use client";

import { useState } from "react";
import Image from "next/image";
import { PROJECTS } from "../../constants";
import ProjectModal from "./ProjectModal";

const project = PROJECTS.find((p) => p.id === "themepack");

export default function ThemepackCard() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-2xl p-5 relative overflow-hidden flex flex-col"
      style={{ background: "rgba(141, 199, 106, 1)", gridArea: "themepack" }}
    >
      <button
        onClick={() => setOpen(true)}
        aria-label="View Themepack project details"
        className="absolute top-4 left-4 z-10 w-8 h-8 rounded-2xl bg-black/10 flex items-center justify-center font-bold text-xl text-gray-900 hover:bg-black/20 transition-colors"
      >
        +
      </button>

      <div className="absolute top-0 right-2 h-[115%] w-[55%] min-[900px]:w-[72%] flex flex-col gap-2 min-[900px]:gap-4">
        <div className="grid grid-cols-2 gap-2 h-8 shrink-0">
          <div className="relative overflow-hidden shadow-md">
            <Image src="/images/themepack-1.png" alt="" fill sizes="20vw" className="object-cover" />
          </div>
          <div className="relative overflow-hidden shadow-md">
            <Image src="/images/themepack-2.png" alt="" fill sizes="20vw" className="object-cover" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 flex-1">
          <div className="relative overflow-hidden shadow-md">
            <Image src="/images/themepack-3.png" alt="" fill sizes="20vw" className="object-cover" />
          </div>
          <div className="relative overflow-hidden shadow-md">
            <Image src="/images/themepack-4.png" alt="" fill sizes="20vw" className="object-cover" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 flex-1">
          <div className="relative overflow-hidden shadow-md">
            <Image src="/images/themepack-5.png" alt="" fill sizes="20vw" className="object-cover" />
          </div>
          <div className="relative overflow-hidden shadow-md">
            <Image src="/images/themepack-6.png" alt="" fill sizes="20vw" className="object-cover" />
          </div>
        </div>
      </div>

      <div className="flex-[2]" />
      <div className="flex-1 shrink-0 relative z-10">
        <h2 className="text-xl min-[560px]:text-2xl font-black text-gray-900 -rotate-90 min-[560px]:rotate-0 min-[900px]:-rotate-90 min-[1300px]:rotate-0 -translate-x-6 -translate-y-4 min-[560px]:translate-x-0 min-[560px]:translate-y-0 min-[900px]:-translate-x-6 min-[900px]:-translate-y-4 min-[1300px]:translate-x-0 min-[1300px]:translate-y-0 inline-block">
          Themepack
        </h2>
      </div>

      {open && project && (
        <ProjectModal project={project} onClose={() => setOpen(false)} />
      )}
    </div>
  );
}
