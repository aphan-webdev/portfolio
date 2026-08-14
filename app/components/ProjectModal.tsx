"use client";

import { useEffect, useState } from "react";
import type { Project } from "../../constants";

const TRANSITION_MS = 200;

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [visible, setVisible] = useState(false);

  // Mount closed, then flip to visible a frame later so the transition actually plays.
  useEffect(() => {
    const raf = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, TRANSITION_MS);
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <button
        aria-label="Close"
        onClick={handleClose}
        className={`absolute inset-0 bg-black/50 transition-opacity duration-200 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        style={{ background: "rgba(28, 28, 28, 1)" }}
        className={`relative rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 shadow-xl transition-all duration-200 ease-out ${
          visible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-3"
        }`}
      >
        <button
          onClick={handleClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 rounded-2xl bg-white/10 flex items-center justify-center font-bold text-xl text-white hover:bg-white/20 transition-colors"
        >
          ×
        </button>

        <h2 id="project-modal-title" className="text-3xl font-black text-white pr-10">
          {project.title}
        </h2>
        <p className="text-base font-medium text-gray-300 mt-2">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-white/10 text-gray-200 text-sm font-semibold px-2.5 py-1 rounded-2xl"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.role && (
          <p className="text-sm font-semibold text-gray-400 mt-4">{project.role}</p>
        )}

        {project.highlights && project.highlights.length > 0 && (
          <ul className="mt-4 space-y-2 list-disc list-outside pl-5 text-gray-200">
            {project.highlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}

        {(project.repoUrl || project.npmUrl) && (
          <div className="flex flex-wrap gap-3 mt-5">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 text-sm font-bold px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                GitHub
              </a>
            )}
            {project.npmUrl && (
              <a
                href={project.npmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 text-sm font-bold px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                npm
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
