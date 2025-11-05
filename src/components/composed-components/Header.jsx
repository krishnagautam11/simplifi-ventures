import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/images/Logo.png'

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-transparent text-white fixed w-full z-50 shadow-md header">
            <nav className="  flex items-center  desktop-navbar">
                {/* Logo */}


                {/* Desktop Menu */}
                <Link to="/" className="text-2xl font-bold desktop-logo">
                    <img src={Logo} alt="" />
                </Link>
                <div className="hidden md:flex items-center space-x-6 gap-4">
                    <Link to="/" className="hover:text-gray-300">Team</Link>
                    <Link to="/movies" className="hover:text-gray-300">Studio</Link>
                    <Link to="/tv" className="hover:text-gray-300">Resources</Link>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden mobile-nav">
                    <Link to="/" className="text-2xl font-bold">
                        <h3>Simplifi Ventures</h3>
                    </Link>
                    <button onClick={() => setIsOpen(!isOpen)} className={`focus:outline-none hamburger ${isOpen ? "open" : ""}`}>

                        <span className="block w-6  "></span>
                        <span className="block w-6  "></span>
                        <span className="block w-6  "></span>

                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden flex flex-col space-y-4  mobile-nav navbar">
                    <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-gray-300">
                        Team
                    </Link>
                    <Link to="/favorites" onClick={() => setIsOpen(false)} className="hover:text-gray-300">
                        Studio
                    </Link>
                    <Link to="/favorites" onClick={() => setIsOpen(false)} className="hover:text-gray-300">
                        Resources
                    </Link>



                </div>
            )}
        </header>
    );
};
