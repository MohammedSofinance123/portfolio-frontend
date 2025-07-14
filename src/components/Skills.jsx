import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import python from "../assets/python.png";
import flstudio from "../assets/flstudio.png";
import office from "../assets/office.png";

const supinfoViolet = "#2b174d";

const techs = [
  { id: 1, src: html, title: "HTML" },
  { id: 2, src: css, title: "CSS" },
  { id: 3, src: javascript, title: "JavaScript" },
  { id: 4, src: python, title: "Python" },
  { id: 5, src: flstudio, title: "FL Studio" },
  { id: 6, src: office, title: "Microsoft Office" },
];

const Skills = () => (
  <section id="skills" className="w-full bg-white py-20 font-montserrat">
    <div className="max-w-screen-lg mx-auto p-4">
      <div className="pb-8 text-center">
        <h2 className="text-4xl font-extrabold mb-6" style={{ color: supinfoViolet }}>
          Compétences techniques
        </h2>
        <p className="text-lg mb-8" style={{ color: supinfoViolet, opacity: 0.87 }}>
          Technologies et outils que j’utilise pour concevoir des solutions robustes, évolutives et performantes :
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-4 sm:px-0">
        {techs.map(({ id, src, title }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center shadow-lg rounded-xl bg-white p-6 border-t-4 hover:scale-105 transition-transform duration-300"
            style={{ borderTopColor: supinfoViolet }}
          >
            <img src={src} alt={title} className="w-16 h-16 mb-4" />
            <p className="text-lg font-semibold" style={{ color: supinfoViolet }}>{title}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
