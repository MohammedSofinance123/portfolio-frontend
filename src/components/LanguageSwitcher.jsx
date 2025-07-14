import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import profileImage from "../assets/profile.jpg"; // Mets la photo de Bensalem ici

const Home = () => {
  const cvFilePath = "/CV_BensalemRustom_FR.pdf"; // Place le CV à la racine "public" ou adapte

  return (
    <section id="home" className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 py-20 scroll-mt-20">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center gap-12 md:flex-row">
        {/* Photo */}
        <div className="md:w-1/3 w-full flex justify-center">
          <img
            src={profileImage}
            alt="Photo de Bensalem Rustom"
            className="rounded-3xl shadow-2xl w-[220px] md:w-[280px] lg:w-[300px] hover:scale-105 transition duration-300"
          />
        </div>
        {/* Texte & boutons */}
        <div className="md:w-2/3 text-center md:text-left">
          <h1 className="text-white text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
            Bachelier, spécialité Mathématiques & Physique-Chimie<br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Passionné d'informatique
            </span><br />
            Futur étudiant en école d’ingénieur
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            Je suis bachelier avec un bac général (spécialités Mathématiques et Physique-Chimie), passionné par l'informatique et les sciences. Je souhaite intégrer une école en France pour bénéficier d'opportunités et d'un enseignement de qualité. J’aspire à devenir ingénieur en informatique.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a href="#portfolio" className="group flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-6 py-3 rounded-md shadow-md hover:scale-105 transition-transform duration-300">
              Voir mes projets
              <MdKeyboardArrowRight className="group-hover:rotate-90 transition-transform duration-300" size={25} aria-hidden="true" />
            </a>
            <a href={cvFilePath} download target="_blank" rel="noreferrer" className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium px-6 py-3 rounded-md shadow-md hover:scale-105 transition-transform duration-300">
              Télécharger CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
