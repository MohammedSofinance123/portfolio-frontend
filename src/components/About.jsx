import React from "react";

const supinfoViolet = "#2b174d";

const education = [
  {
    year: "2023",
    niveau: "1ère année lycée (programme algérien)",
    ecole: "Lycée Les Frères Hamia, Kouba"
  },
  {
    year: "2024",
    niveau: "2ème année lycée (algérien) / 1ère programme français (épreuves anticipées)",
    ecole: "École Privée Ennajah"
  },
  {
    year: "2025",
    niveau: "Terminale (algérien et français)",
    ecole: "Lycée Kateb Yacine"
  }
];

const About = () => (
  <section id="about" className="w-full bg-white py-20 font-montserrat">
    <div className="max-w-screen-lg mx-auto p-6 flex flex-col justify-center h-full">
      <h2 className="text-4xl font-extrabold mb-8" style={{ color: supinfoViolet }}>
        À propos de moi
      </h2>
      <p className="text-xl leading-relaxed mb-4" style={{ color: supinfoViolet }}>
        Bachelier scientifique avec un parcours entre le programme algérien et le programme français. J’ai développé une grande curiosité pour les sciences, la logique, et les nouvelles technologies.
      </p>
      <p className="text-xl leading-relaxed mb-8" style={{ color: supinfoViolet, opacity: 0.85 }}>
        Mon objectif est d'intégrer une grande école d’ingénieur, de développer des projets innovants et d’acquérir des compétences avancées en informatique, data science et intelligence artificielle.
      </p>

      <div className="mt-10">
        <h3 className="text-2xl font-bold mb-6" style={{ color: supinfoViolet }}>
          Parcours scolaire
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {education.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white shadow-xl border-t-4"
              style={{ borderTopColor: supinfoViolet }}
            >
              <div className="p-6 flex flex-col items-start">
                <span className="font-semibold text-lg mb-2" style={{ color: supinfoViolet }}>{item.year}</span>
                <div className="font-semibold text-md mb-1" style={{ color: supinfoViolet }}>{item.niveau}</div>
                <div className="text-base" style={{ color: supinfoViolet, opacity: 0.8 }}>{item.ecole}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
