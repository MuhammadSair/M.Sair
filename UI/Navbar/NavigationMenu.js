"use client";

import Image from "next/image";
import Link from "next/link";
import { MdOutlineVerifiedUser, MdEmojiEvents } from "react-icons/md";
const navLinks = [
  {
    href: "#about",
    name: "Home",
    icon: "https://res.cloudinary.com/djivuystd/image/upload/v1752600673/home-icon_g2arab.svg",
    activeIcon:
      "https://res.cloudinary.com/djivuystd/image/upload/v1752610486/home-active-icon_dzxjsu.svg",
  },

  {
    href: "#skills",
    name: "Skills",
    icon: "https://res.cloudinary.com/djivuystd/image/upload/v1752600672/skill-icon_bvaghq.svg",
    activeIcon:
      "https://res.cloudinary.com/djivuystd/image/upload/v1752604746/skill-active-icon_pyljif.svg",
  },
  {
    href: "#projects",
    name: "Projects",
    icon: "https://res.cloudinary.com/djivuystd/image/upload/v1752600672/project-icon_igpxvy.svg",
    activeIcon:
      "https://res.cloudinary.com/djivuystd/image/upload/v1752604745/project-active-icon_hjzxb1.svg",
  },
  {
    href: "#awards",
    name: "Awards",
    icon: MdEmojiEvents,
  },
  // {
  //   href: "#certification",
  //   name: "Certification",
  //   icon: MdOutlineVerifiedUser,
  // },
  {
    href: "#contact",
    name: "Contact",
    icon: "https://res.cloudinary.com/djivuystd/image/upload/v1752600672/contact-icon_e7fttf.svg",
    activeIcon:
      "https://res.cloudinary.com/djivuystd/image/upload/v1752604746/active-contact-icon_wg1byd.svg",
  },
];

export default function NavigationMenu({ viewedSection, vertical }) {
  return (
    <nav
      id="navigation"
      className={`z-[1000] bg-[#1C1A19] px-5 py-2.5 text-white
        ${
          vertical
            ? "fixed right-0 top-[40px] flex-col justify-between h-[230px] rounded-tl-[14px] rounded-bl-[14px] mx-auto my-[30px] flex"
            : "flex justify-between items-center rounded-[14px] w-[300px] mx-auto my-[30px]"
        }
      `}
    >
      {navLinks.map((nav) => (
        <Link
          key={nav.name}
          href={nav.href}
          className="group relative flex items-center justify-center"
          aria-label={nav.name}
        >
          {typeof nav.icon === "string" ? (
            <Image
              src={
                viewedSection === nav.href && nav.activeIcon
                  ? nav.activeIcon
                  : nav.icon
              }
              alt={`${nav.name} icon`}
              width={24}
              height={21}
              className="transition-transform duration-200 group-hover:scale-110"
            />
          ) : (
            <nav.icon
              size={24}
              className={`transition-transform duration-200 group-hover:scale-110 ${
                viewedSection === nav.href ? "text-[#f46c38]" : "text-white"
              }`}
            />
          )}

          <span
            className={`absolute z-10 whitespace-nowrap rounded-[12px] bg-white/20 text-white text-xs px-3 py-2 backdrop-bl-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300
                ${
                  vertical
                    ? "top-1/2 right-[calc(100%+30px)] -translate-y-1/2"
                    : "top-[150%] left-1/2 -translate-x-1/2"
                }
              `}
          >
            {nav.name}
          </span>
        </Link>
      ))}
    </nav>
  );
}
