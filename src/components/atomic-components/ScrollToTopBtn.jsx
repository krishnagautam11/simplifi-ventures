import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (

    <>
      {visible && (
        <button
          className="
        scroll-to-top
        fixed bottom-8 right-8
        flex items-center justify-center
      "
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FontAwesomeIcon icon={faArrowUp} size={32} />
        </button>
      )}
    </>

    // <>
    //   {visible && (
    //     <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
    //       <FontAwesomeIcon icon={faArrowUp} size={32} />
    //     </button>
    //   )}
    // </>
  );
};
