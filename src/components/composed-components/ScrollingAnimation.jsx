import { useEffect } from "react";

export const ScrollingAnimation = (selector = ".reveal", offset = 100) => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight - offset;
        if (inView) {
          el.classList.add("in-view");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [selector, offset]);
};
