"use client";

import { useState } from "react";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Image from "next/image";
import {
  FaReact,
  FaChartBar,
  FaProjectDiagram,
  FaDatabase,
  FaTools,
  FaGripLines,
  FaSignInAlt,
  FaCloud,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import ProjectDetails from "./ProjectDetails";

const techIcons = {
  React: <FaReact />,
  "Chart.js": <FaChartBar />,
  "Microfrontend Architecture": <FaProjectDiagram />,
  "Google Analytics": <FaChartBar />,
  Redux: <FaGripLines />,
  "REST API": <FaDatabase />,
  "React Testing Library": <FaTools />,
  GraphQL: <FaProjectDiagram />,
  JWT: <FaSignInAlt />,
  "Next.js": <SiNextdotjs />,
  "Tailwind CSS": <SiTailwindcss />,
  Cloudinary: <FaCloud />,
};

const projects = [
  {
    name: "TerraMark – Field Boundary Identification via Satellite Imagery",
    description:
      "TerraMark is a geospatial intelligence system designed to identify and segment agricultural field boundaries from high-resolution satellite imagery. It aims to assist in resolving land disputes in Pakistan using deep learning and remote sensing techniques.",
    preview: "/Terramark.png", // Replace with actual preview image path
    link: "https://github.com/MuhammadSair/Terramark", // Replace with actual repo or remove if private
    tech: [
      "Next.js",
      "MUI",
      "Flask",
      "TensorFlow",
      "Keras",
      "GEE",
      "Supabase",
      "OpenEo",
      "MUI",
    ],
    isInternal: true,
    type: "Ai & ML",
    features: [
      "Developed a full-stack geospatial platform using Next.js (frontend), Flask (API backend), and MUI (UI components)",
      "Trained CNN models including ResNet50, ResNet101, and SEResNet50V2 for semantic segmentation of croplands",
      "Processed EuroCrops 2018 dataset and satellite imagery with Google Earth Engine and OpenEO",
      "Automated field boundary extraction from satellite images using semantic masks",
      "Evaluated spatial accuracy using Jaccard Coefficient and IoU metrics",
      "Focused on improving land dispute resolution and agricultural monitoring in Pakistan",
    ],
  },

  {
    name: "CalorieQuest – Nutrition Tracking App",
    description:
      "A Flutter-based mobile application for tracking daily nutrition and managing calorie intake. Designed as part of my Mobile Development coursework, NutriQuest helps users monitor their diet and meet personalized health goals.",
    preview: "/NutriQuest.jpeg", // replace with actual screenshot
    link: "https://github.com/MuhammadSair/CalorieQuest", // optional if not public
    tech: ["Flutter", "Dart", "Firebase"],
    isInternal: false, // true if private or academic-only
    type: "mobile app",
    features: [
      "Built with Flutter and Dart for cross-platform compatibility (Android & iOS)",
      "Integrated food database with automatic calorie computation for each logged item",
      "User-friendly UI to simplify meal tracking and nutritional insights",
      "Real-time nutrition logging and daily calorie goal progress tracking",
      "Allows setting personalized dietary goals based on fitness objectives",
      "Includes bar charts or progress rings to visualize intake trends",
      "Secure data storage using Firebase for seamless user experience",
    ],
  },
  {
    name: "Mudrsec – Arabic Learning Management System",
    description:
      "A full-stack Arabic LMS developed during my internship at TKTurners. The platform supports right-to-left (RTL) Arabic content, internationalized routing, and dynamic course management using headless CMS integration.",
    preview: "/Mudrsec.png", // replace with your actual image
    link: "https://mudrsec.vercel.app/en/", // optional or internal
    tech: ["Next.js", "MUI", "Strapi CMS", "i18n"],
    isInternal: false, // set to true if it's not publicly accessible
    type: "webapp",
    features: [
      "Built with Next.js and Tailwind CSS for a responsive, scalable frontend",
      "Implemented full RTL layout support for native Arabic reading experience",
      "Dynamic routing and content internationalization using Next.js i18n features",
      "Integrated Strapi CMS for structured and flexible backend content management",
      "Built reusable components for courses, lessons, and instructor profiles",
      "Customized multilingual UI to support seamless switching between Arabic and English",
      "Designed and developed under TKTurners as part of a professional internship",
    ],
  },
  {
    name: "SparkHost – Rental Management Platform",
    description:
      "An Airbnb-style rental platform for managing property listings, bookings, and user roles. Designed to streamline the rental experience for both hosts and guests.",
    preview: "/SparkHost.png", // Replace with an actual image or mockup
    link: "https://github.com/your-github/sparkhost", // Optional: public repo or demo link
    tech: ["Next.js", "Strapi", "PostgreSQL", "Tailwind CSS"],
    isInternal: true, // Set to true if not publicly accessible
    type: "webapp",
    features: [
      "Built with Next.js and Tailwind CSS for modern UI and fast performance",
      "Utilized Strapi CMS for backend API development and admin dashboard",
      "PostgreSQL used for structured data storage and relational queries",
      "Users can register as hosts or guests with different roles and permissions",
      "Hosts can create and manage property listings with images, availability, and pricing",
      "Guests can browse listings, view details, and book properties",
      "Built-in authentication and authorization for secure access control",
      "Dashboard for both hosts and guests to track bookings and listings",
    ],
  },

  {
    name: "Swift Auto Transport – Instant Vehicle Shipping Quotes",
    description:
      "A professional, responsive web application built for a logistics company to help users get instant auto shipping quotes and schedule transport services. Delivered within a strict 7-day timeline to replace their previous site, which had gone offline.",
    preview: "/SwiftAutoTransport.png", // replace with actual screenshot
    link: "https://swiftautotransport.com", // use actual deployed link if available
    tech: ["Next.js", "React", "CSS", "MUI", "Resend", "Three.js"],
    isInternal: false, // set to false if it's public and open-source
    type: "web app",
    features: [
      "Built with Next.js and React for fast, SEO-friendly performance",
      "Responsive layout designed with Material UI for cross-device compatibility",
      "Interactive landing page with custom quote form (city, ZIP code, vehicle info)",
      "3D vehicle visuals using Three.js for added user engagement",
      "Integrated Resend for reliable email communication and quote confirmations",
      "Mobile-first design for seamless experience on all screen sizes",
      "Delivered end-to-end (design, development, deployment) in under 7 days",
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div id="projects" className="container px-4 py-16 max-w-6xl mx-auto">
      <div className="title mb-8">
        <p>Recent</p>
        <p>Projects</p>
      </div>

      <div className="projects-container flex flex-col gap-6 md:gap-8  ">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="project flex flex-col sm:flex-row justify-between items-start text-white cursor-default rounded-[16px] transition duration-300 px-[10px] py-[16px] border border-transparent shadow-md hover:-translate-y-1 hover:bg-[#1a1817] hover:shadow-lg hover:border-[#f46c38] hover:border-l-[8px] bg-[#f7b092]"
          >
            <div className="inner-container flex flex-col md:flex-row items-center gap-5 w-full">
              {/* Image */}
              <div className="project-preview flex items-center justify-center overflow-hidden h-[160px] w-full sm:w-[92%] md:h-[93px] md:w-[160px] rounded-lg">
                <Image
                  src={project.preview}
                  alt={project.name}
                  width={300}
                  height={200}
                  className="object-contain w-full h-full"
                />
              </div>

              {/* Info */}
              <div className="project-info flex flex-col gap-2 w-full">
                <div className="flex justify-between">
                  <p className="text-xl font-bold">{project.name}</p>

                  {/* External Link (for public projects) */}
                  {project.link && !project.isInternal && (
                    <div className="mt-2 flex justify-end sm:justify-start px-2">
                      <Link
                        href={project.link}
                        target="_blank"
                        alt={project.name}
                        className="text-xs text-[#f46c38] hover:underline flex items-center gap-1"
                        aria-label={`${project.name} link`}
                      >
                        <FaArrowUpRightFromSquare
                          alt="openlink"
                          className="text-[10px]"
                        />
                      </Link>
                    </div>
                  )}
                </div>
                <p className="text-[white] text-sm line-clamp-2">
                  {project.description}
                </p>

                {project.isInternal && (
                  <p className="text-xs text-yellow-400 mt-1 italic">
                    ⚠️ Internal Project – accessible only via official owner
                    Account - Haven&apos;t been deployed yet.
                  </p>
                )}

                {project.link && project.isInternal && (
                  <p className="text-xs text-gray-400 break-all mt-1">
                    URL: {project.link}
                  </p>
                )}

                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 px-2 py-0.5 text-[10px] bg-white/10 text-white border border-white/30 rounded-full"
                    >
                      {techIcons[tech] || null} {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-2 flex justify-end">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-sm text-[#f46c38] hover:underline flex items-center gap-1"
                  >
                    View Details{" "}
                    <FaArrowUpRightFromSquare className="text-xs" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for details */}
      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          techIcons={techIcons}
        />
      )}
    </div>
  );
}
