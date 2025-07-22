"use client";

import React, { useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import ProjectKeyFeatures from "./ProjectKeyFeatures";

export default function ProjectDetails({ project, onClose, techIcons }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside, {
      passive: true,
    });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-center items-center px-4 py-8">
      <div
        ref={modalRef}
        className="relative bg-zinc-900 text-white rounded-xl w-full max-w-2xl p-6 shadow-2xl overflow-y-auto max-h-[90vh]"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-white text-xl"
          aria-label="Close"
        >
          <FaTimes />
        </button>

        {/* Preview Image */}
        {project.preview && (
          <div className="w-full mt-3 mb-4 rounded-lg overflow-hidden border border-white/10">
            <Image
              src={project.preview}
              alt={`${project.name} preview`}
              width={600}
              height={300}
              className="rounded-md object-contain w-full max-h-[250px] mx-auto"
            />
          </div>
        )}

        <div className="mt-5 space-y-6">
          {/* Header */}
          <div className="flex flex-start items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-zinc-400 dark:bg-zinc-600" />
                <span className="text-xs uppercase text-zinc-500 dark:text-zinc-400">
                  {project.type || "webapp"}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-zinc-100 text-[clamp(24px, 6vw, 35px)]">
                {project.name}
              </h2>
            </div>

            {/* External Link */}
            {project.link && !project.isInternal && (
              <div className="flex gap-2 items-center">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors duration-300"
                  aria-label={`${project.name} link`}
                >
                  <FaArrowUpRightFromSquare className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
                </Link>
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-zinc-400 font-light">{project.description}</p>

          {/* Internal Tag */}
          {project.isInternal && (
            <p className="text-xs text-yellow-400 italic mb-2">
              ⚠️ Internal Project – accessible only via VPN
            </p>
          )}

          {/* Technologies */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <h4 className="text-lg font-light text-zinc-100 tracking-tight">
                Technologies:
              </h4>
              <div className="flex-1 h-px bg-zinc-800" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3">
              {project.tech.map((tech, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700"
                >
                  <div className="w-5 h-5 flex-shrink-0 text-zinc-900 dark:text-white flex items-center justify-center">
                    {techIcons[tech] &&
                      React.isValidElement(techIcons[tech]) &&
                      React.cloneElement(techIcons[tech], {
                        className: "w-5 h-5",
                      })}
                  </div>
                  <span className="text-sm text-zinc-700 dark:text-zinc-300 font-light">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <div className="flex items-center gap-4 mb-4"></div>
            <ProjectKeyFeatures features={project.features} />
          </div>
        </div>
      </div>
    </div>
  );
}
