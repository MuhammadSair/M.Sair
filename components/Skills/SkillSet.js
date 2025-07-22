"use client";
import {
  FaCode,
  FaCogs,
  FaPalette,
  FaTools,
  FaDatabase,
  FaServer,
  FaBug,
  FaPaintBrush,
} from "react-icons/fa";
import {
  SiBootstrap,
  SiSass,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiGitlab,
  SiDocker,
  SiJest,
  SiTestinglibrary,
  SiCypress,
  SiFigma,
  SiCanva,
  SiWebpack,
  SiBabel,
  SiEslint,
  SiPrettier,
  SiHtml5,
  SiCss3,
  SiC,
  SiTensorflow,
  SiKeras,
  SiMaterialdesign,
  SiPython,
} from "react-icons/si";
import { motion } from "framer-motion";

const skillData = [
  {
    title: "Languages",
    icon: <FaCode size={28} />,
    color: "bg-purple-500",
    skills: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "C", icon: <SiC /> },
      {
        name: "Java",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#fffbfb"
              d="m15.638 4.566l.056.032c-.758.4-2.924 1.69-2.924 3.332c0 .554.317 1.088.614 1.59c.262.442.509.858.509 1.238c0 .957-.933 1.7-1.46 2.042l-.1-.058c.199-.243.444-.65.444-1.084c0-.598-.307-1.076-.618-1.561c-.322-.501-.648-1.01-.648-1.67c0-2.292 3.115-3.522 4.127-3.861m-4.095 1.212c1.253-1.12 2.622-2.344 2.622-4.185c0-.833-.341-1.365-.51-1.578L13.6.046c.04.166.1.472.1.872c0 1.676-1.422 2.85-2.798 3.988C9.611 5.974 8.36 7.008 8.36 8.392c0 1.985 1.958 3.206 2.785 3.722l.063.04l.05-.03q-.067-.074-.142-.152c-.636-.677-1.602-1.704-1.602-3.275c0-1.103.974-1.974 2.03-2.919m-.452 9.908c1.764 0 2.998-.253 3.546-.408l.832.48c-.793.403-2.551.71-4.382.71c-2.153 0-4.507-.462-4.514-1.078c-.005-.34.765-.566 1.595-.712l.05.029s-.281.101-.278.333c.004.35 1.42.646 3.15.646m-3.529 2.171c0-.407.839-.6 1.223-.677l.05.03c-.066.049-.102.116-.102.173c0 .267.93.511 2.356.511c1.278 0 1.988-.157 2.41-.258l.99.573c-.045.032-1.02.645-3.402.645c-1.731 0-3.525-.432-3.525-.997m8.529-1.728c1.18-.673 2.361-1.469 2.428-2.747c.044-.839-.727-1.454-1.57-1.29l.045-.112v-.002c.212-.064.474-.116.767-.116c.943 0 1.666.565 1.758 1.356c.186 1.586-2.062 2.618-3.321 2.973zm1.975 2.988c.01 1.09-3.698 1.738-7.012 1.767c-2.861.025-7.474-.515-7.484-1.605c-.006-.753 2-1.274 3.09-1.424l.115.065s-1.625.377-1.62 1.062c.006.683 3.425 1.274 5.894 1.253c3.825-.034 6.414-.657 6.72-1.502l.054-.031c.112.082.24.217.243.415M6.43 21.337a26 26 0 0 0 4.279.325c6.208-.054 7.96-1.58 8.23-1.912l.047.028c-.064 1.208-3.347 2.212-7.396 2.247c-2.061.018-3.937-.22-5.285-.615zm2.602-9.283c-1.079.083-3.396.426-3.396 1.036c0 .462 2.124 1.113 5.452 1.113c2.994 0 4.884-.565 5.325-.78l-.643-.375c-.46.125-2.169.506-4.682.506c-1.48 0-4.03-.273-4.03-.69c0-.374 1.591-.662 2.048-.745l.029-.005z"
            />
          </svg>
        ),
      },
      { name: "python", icon: <SiPython /> },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: <FaServer size={28} />,
    color: "bg-green-500",
    skills: [
      { name: "React.js", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "Tensorflow", icon: <SiTensorflow /> },
      { name: "Keras", icon: <SiKeras /> },
    ],
  },
  {
    title: "Styling & UI",
    icon: <FaPaintBrush size={28} />,
    color: "bg-pink-500",
    skills: [
      { name: "Mui", icon: <SiMaterialdesign /> },
      { name: "Sass", icon: <SiSass /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
    ],
  },
  {
    title: "Databases",
    icon: <FaDatabase size={28} />,
    color: "bg-yellow-500",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },
  {
    title: "Version Control & DevOps",
    icon: <FaTools size={28} />,
    color: "bg-blue-500",
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "GitLab", icon: <SiGitlab /> },
      { name: "Docker", icon: <SiDocker /> },
    ],
  },
  {
    title: "Build Tools",
    icon: <FaCogs size={28} />,
    color: "bg-orange-500",
    skills: [
      { name: "Babel", icon: <SiBabel /> },
      { name: "Webpack", icon: <SiWebpack /> },
      { name: "ESLint", icon: <SiEslint /> },
      { name: "Prettier", icon: <SiPrettier /> },
    ],
  },
  {
    title: "Testing Tools",
    icon: <FaBug size={28} />,
    color: "bg-red-500",
    skills: [
      { name: "Jest", icon: <SiJest /> },
      { name: "React Testing Library", icon: <SiTestinglibrary /> },
      { name: "Cypress", icon: <SiCypress /> },
    ],
  },
  {
    title: "Design Tools",
    icon: <FaPalette size={28} />,
    color: "bg-pink-600",
    skills: [
      { name: "Figma", icon: <SiFigma /> },

      { name: "Canva", icon: <SiCanva /> },
    ],
  },
  {
    title: "Methodologies",
    icon: <FaCogs size={28} />,
    color: "bg-teal-500",
    skills: [{ name: "Agile" }, { name: "Scrum" }],
  },
];

export default function SkillSet() {
  return (
    <div className="container" id="skills">
      <div className="title">
        <p>Skills</p>
      </div>
      <div className="skill-set container mx-auto px-4 py-10 grid gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        {skillData.map((set, index) => (
          <div
            key={index}
            className={`rounded-xl shadow-lg p-4 sm:p-5 md:p-6 transition-all duration-300 ${set.color} bg-opacity-10 backdrop-blur-sm`}
          >
            <div className="flex flex-wrap items-center mb-4 min-w-0">
              <div className="flex items-center gap-4 min-w-0 w-full">
                <div
                  className={`rounded-full w-12 h-12 flex-shrink-0 flex items-center justify-center text-white ${set.color}`}
                >
                  {set.icon}
                </div>

                <h3 className="text-xl font-bold text-white break-words whitespace-normal w-full max-w-full min-w-0">
                  {set.title}
                </h3>
              </div>
            </div>

            {/* ✅ Skills with word break support */}
            <div className="flex flex-wrap gap-2 mt-4">
              {set.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="group cursor-pointer px-4 py-2 text-sm font-medium rounded-full border border-white text-white hover:border-dashed hover:border-white flex items-center gap-2 break-words whitespace-normal max-w-full"
                >
                  {skill.icon && <span className="text-lg">{skill.icon}</span>}
                  <span className="break-words whitespace-normal">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
