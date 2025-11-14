import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
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
        <NavLink to="/"  className=" desktop-logo">
          <img src={Logo} alt="Simplifi Ventures" />
        </NavLink>

        <div className="hidden md:flex items-center space-x-6 gap-4">
          <NavLink to="/team"   activeClassName="active">Team</NavLink>
          <NavLink to="/studio" activeClassName="active">Studio</NavLink>
          <NavLink to="/resources" activeClassName="active">Resources</NavLink>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden mobile-nav">
          <NavLink to="/" className="text-2xl font-bold">
            <h3>Simplifi Ventures</h3>
          </NavLink>
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
        <NavLink to="/team" onClick={toggleMenu} activeClassName="active">Team</NavLink>
        <NavLink to="/studio" onClick={toggleMenu} activeClassName="active">Studio</NavLink>
        <NavLink to="/resources" onClick={toggleMenu} activeClassName="active">Resources</NavLink>
      </div>
    </header>
  );
};
