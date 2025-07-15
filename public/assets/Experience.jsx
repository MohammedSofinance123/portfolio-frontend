import React from "react";

const supinfoViolet = "#2b174d";

const experienceData = [
  {
    title: "Stage découverte en entreprise",
    company: "Extra Wood",
    date: "Été 2024",
    points: [
      "Découverte du fonctionnement d’une PME.",
      "Initiation à la gestion d’équipe et à la logistique."
    ],
    doc: "/assets/extrawood.pdf"
  },
  {
    title: "Stage observation",
    company: "Cabinet d’Avocat",
    date: "Printemps 2024",
    points: [
      "Découverte du métier d’avocat.",
      "Observation des procédures juridiques et rédactionnelles."
    ],
    doc: "/assets/avocat.pdf"
  },
  {
    title: "Stage chez notaire",
    company: "Office Public Notarial - Maître Irbouh",
    date: "Été 2023",
    points: [
      "Découverte de la profession de notaire.",
      "Observation des services extérieurs et fonctionnement de l'étude."
    ],
    doc: "/assets/notaire.pdf"
  }
];

const Experience = () => (
  <section id="experience" className="w-full bg-white py-20 font-montserrat">
    <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
      <div className="pb-10">
        <h2 className="text-4xl font-extrabold mb-8" style={{ color: supinfoViolet }}>
          Mon parcours & expériences
        </h2>
        <p className="text-xl mb-8" style={{ color: supinfoViolet, opacity: 0.87 }}>
          Aperçu de mes expériences scolaires, projets personnels et stages.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {experienceData.map((item, index) => (
          <a
            key={index}
            href={item.doc}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl shadow-lg p-6 border-t-4 hover:shadow-xl transition-all"
            style={{ borderTopColor: supinfoViolet }}
          >
            <h3 className="text-xl font-bold mb-1" style={{ color: supinfoViolet }}>
              {item.title} – <span className="font-normal">{item.company}</span>
            </h3>
            <p className="text-sm mb-4" style={{ color: supinfoViolet, opacity: 0.7 }}>{item.date}</p>
            <ul className="list-disc ml-5 space-y-1 text-base" style={{ color: supinfoViolet, opacity: 0.8 }}>
              {item.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm font-semibold text-blue-600">
              📄 Télécharger l'attestation
            </p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
