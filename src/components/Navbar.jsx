import React, { useState, useEffect } from "react";

const links = [
  { id: "home", label: "Accueil" },
  { id: "about", label: "À propos" },
  { id: "skills", label: "Compétences" },
  { id: "experience", label: "Expérience" },
  { id: "portfolio", label: "Projets" },
  { id: "contact", label: "Contact" }
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 font-montserrat transition-all duration-300 bg-[#2b174d] ${scrolled ? "h-14 shadow-xl" : "h-20"} flex items-center`}>
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 md:px-12 w-full">
        <h1 className="text-white font-extrabold select-none text-2xl md:text-3xl font-montserrat tracking-wide">
          Portfolio
        </h1>
        <ul className="hidden md:flex space-x-10 font-semibold text-white text-lg">
          {links.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="capitalize py-1 hover:text-[#ff6e5b] transition-colors duration-200">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button onClick={() => setNavOpen(!navOpen)} className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-2" aria-label="Menu">
          <span className={`block w-8 h-0.5 bg-white rounded-sm transition-all duration-300 ${navOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-8 h-0.5 bg-white rounded-sm transition-all duration-300 ${navOpen ? "opacity-0" : "opacity-100"}`}></span>
          <span className={`block w-8 h-0.5 bg-white rounded-sm transition-all duration-300 ${navOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>
      <div className={`fixed top-20 left-0 right-0 bg-[#2b174d] md:hidden overflow-hidden transition-[max-height] duration-500 ${navOpen ? "max-h-screen py-6" : "max-h-0"}`}>
        <ul className="flex flex-col items-center space-y-6 font-semibold text-lg text-white">
          {links.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} onClick={() => setNavOpen(false)} className="capitalize hover:text-[#ff6e5b] transition-colors duration-200">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
