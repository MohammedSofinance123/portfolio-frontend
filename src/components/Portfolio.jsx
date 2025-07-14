import React from "react";
import mathProjectImg from "../assets/math.png";
import physicsProjectImg from "../assets/phisique.png";

const supinfoViolet = "#2b174d";

const projects = [
  {
    img: mathProjectImg,
    title: "Probabilités et Affaire Dreyfus",
    description: "Projet croisant mathématiques et histoire : comment une meilleure compréhension des probabilités aurait pu changer le destin de l’affaire Dreyfus."
  },
  {
    img: physicsProjectImg,
    title: "Déploiement des airbags",
    description: "Projet Physique-Chimie : comprendre le fonctionnement ultra-rapide des airbags lors d’un accident automobile."
  }
];

const Portfolio = () => (
  <section id="portfolio" className="w-full min-h-screen py-20 font-montserrat bg-white">
    <div className="max-w-screen-lg mx-auto px-6">
      <div className="pb-8 text-center md:text-left">
        <h2 className="text-4xl font-extrabold mb-6" style={{ color: supinfoViolet }}>
          Mes projets
        </h2>
        <p className="text-xl mb-10" style={{ color: supinfoViolet, opacity: 0.87 }}>
          Projets réalisés pendant ma scolarité ou à titre personnel, mêlant sciences, mathématiques et informatique.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map(({ img, title, description }, i) => (
          <article
            key={i}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-105 transition duration-300 border border-gray-200"
          >
            <img
              src={img}
              alt={title}
              className="rounded-t-xl object-cover w-full h-56"
              loading="lazy"
              decoding="async"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: supinfoViolet }}>
                {title}
              </h3>
              <p className="text-base text-center mb-6" style={{ color: supinfoViolet, opacity: 0.75 }}>
                {description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
