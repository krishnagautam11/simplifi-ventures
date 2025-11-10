import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import { useAppContext } from "../../context/AppContext";
import "../../styles/base.css";

export const Header = () => {
  const { isMenuOpen, toggleMenu } = useAppContext();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 shadow-md header ${
        isScrolled ? "header--scrolled" : "header--default"
      }`}
    >
      <nav className="flex items-center desktop-navbar">
        {/* Desktop Menu */}
        <Link to="/" className="text-2xl font-bold desktop-logo">
          <img src={Logo} alt="Simplifi Ventures" />
        </Link>

        <div className="hidden md:flex items-center space-x-6 gap-4">
          <Link to="/team" className="hover:text-gray-300">Team</Link>
          <Link to="/studio" className="hover:text-gray-300">Studio</Link>
          <Link to="/resources" className="hover:text-gray-300">Resources</Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden mobile-nav">
          <Link to="/" className="text-2xl font-bold">
            <h3>Simplifi Ventures</h3>
          </Link>
          <button
            onClick={toggleMenu}
            className={`focus:outline-none hamburger ${isMenuOpen ? "open" : ""}`}
          >
            <span className="block w-6"></span>
            <span className="block w-6"></span>
            <span className="block w-6"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu md:hidden flex flex-col space-y-4 ${isMenuOpen ? "open" : ""}`}>
        <Link to="/team" onClick={toggleMenu} className="hover:text-gray-300">Team</Link>
        <Link to="/studio" onClick={toggleMenu} className="hover:text-gray-300">Studio</Link>
        <Link to="/resources" onClick={toggleMenu} className="hover:text-gray-300">Resources</Link>
      </div>
    </header>
  );
};
