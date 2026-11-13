"use client";

import { useState } from "react";
import Image from "next/image";
import { PROJECTS } from "../../constants";
import ProjectModal from "./ProjectModal";

const project = PROJECTS.find((p) => p.id === "strata-ui");

export default function StrataCard() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-2xl relative overflow-hidden"
      style={{ background: "rgba(242, 194, 77, 1)", gridArea: "strata" }}
    >
      <h2 className="absolute top-5 left-4 z-10 text-xl min-[560px]:text-2xl font-black text-gray-900 leading-none">
        Strata UI
      </h2>

      {/* Left edges use max() so the images never slide under the title on narrow cards */}
      <div className="absolute top-[8%] left-[max(9.5rem,52%)] h-[46%] aspect-[2/1] overflow-hidden shadow-lg">
        <Image
          src="/images/strata-2.png"
          alt=""
          fill
          sizes="(max-width: 560px) 50vw, (max-width: 900px) 30vw, 15vw"
          className="object-cover object-left-top"
        />
      </div>

      <div className="absolute top-[36%] left-[max(4.5rem,24%)] h-[80%] aspect-[3/2] overflow-hidden shadow-xl">
        <Image
          src="/images/strata-1.png"
          alt=""
          fill
          sizes="(max-width: 560px) 60vw, (max-width: 900px) 40vw, 20vw"
          className="object-cover object-left-top"
        />
      </div>

      <button
        onClick={() => setOpen(true)}
        aria-label="View Strata UI project details"
        className="absolute bottom-4 left-4 z-10 w-8 h-8 rounded-2xl bg-black/10 flex items-center justify-center font-bold text-xl text-gray-900 hover:bg-black/20 transition-colors"
      >
        +
      </button>

      {open && project && (
        <ProjectModal project={project} onClose={() => setOpen(false)} />
      )}
    </div>
  );
}
