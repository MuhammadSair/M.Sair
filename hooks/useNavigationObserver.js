import { useEffect, useState } from "react";

const sectionIds = ["home", "about", "skills", "projects", "awards", "certification", "contact"];

export default function useNavigationObserver() {
  const [viewedSection, setViewedSection] = useState("#home");
  const [isVertical, setIsVertical] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY < 100) {
        setViewedSection("#home");
        setIsVertical(false);
        return;
      }

      let closestSection = "";
      let minDistance = Infinity;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        const middle = window.innerHeight / 2;
        const sectionMiddle = rect.top + rect.height / 2;
        const distance = Math.abs(middle - sectionMiddle);

        if (distance < minDistance) {
          minDistance = distance;
          closestSection = `#${id}`;
        }
      }

      setViewedSection((prev) => (prev !== closestSection ? closestSection : prev));
      setIsVertical(scrollY > 150);
    };

    // Use passive listeners to avoid blocking scroll
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    handleScroll(); // initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return { viewedSection, isVertical };
}
