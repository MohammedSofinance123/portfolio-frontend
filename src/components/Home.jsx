import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import profileImage from "../assets/PROFILE.png";

const cvFilePath = "/CV_Bensalem_Rustom.docx";

const supinfoViolet = "#2b174d";

const Home = () => (
  <section
    id="home"
    className="min-h-screen w-full flex items-center py-24 font-montserrat bg-white"
  >
    <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-14 w-full">
      {/* PHOTO avec contour violet */}
      <div className="flex-shrink-0 rounded-2xl p-2 bg-white" style={{ border: `4px solid ${supinfoViolet}` }}>
        <img
          src={profileImage}
          alt="Bensalem Rustom"
          className="rounded-xl object-cover w-[230px] h-[270px] shadow-md"
        />
      </div>
      {/* TEXTE */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-1" style={{ color: supinfoViolet }}>
          Bensalem Rustom
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-1" style={{ color: supinfoViolet }}>
          Bachelier – Mathématiques & Physique-Chimie
        </h2>
        <h3 className="text-xl md:text-2xl font-medium mt-2 mb-4" style={{ color: supinfoViolet, opacity: 0.85 }}>
          Passionné par l’informatique et les sciences
        </h3>
        <p className="text-lg md:text-xl max-w-2xl mx-auto md:mx-0 mb-8 font-medium" style={{ color: supinfoViolet, opacity: 0.75 }}>
          Jeune bachelier motivé par l’innovation et la technologie, je souhaite poursuivre des études en informatique en France afin de devenir ingénieur et concevoir les solutions de demain.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
          <a
            href="#portfolio"
            className="group flex items-center justify-center gap-2 bg-[#ff6e5b] text-white text-lg font-bold px-7 py-3 rounded-lg shadow hover:bg-[#2b174d] hover:text-white transition-colors duration-300"
          >
            Portfolio <MdKeyboardArrowRight size={22} />
          </a>
          <a
            href={cvFilePath}
            download
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center bg-white border-2 border-[#ff6e5b] text-[#ff6e5b] text-lg font-bold px-7 py-3 rounded-lg shadow hover:bg-[#ff6e5b] hover:text-white transition-colors duration-300"
          >
            Télécharger CV
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
