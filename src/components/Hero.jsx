import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import { MdOutlineBadge } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PROFILE_DATA } from "../utils/data";
import { motion } from "motion/react";
import { easeInOut } from "motion";

const PROFILE_PIC = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_xq6rYPnsINHjdtiNusaPCaUXavcurRWyntKcrvwPPDQFhvnuRox36CrDCqVPD6sQnPA&usqp=CAU";

const Hero = () => {
  const {
    name,
    tagline,
    jobTitle,
    yearsOfExperience,
    location,
    email,
    skills,
  } = PROFILE_DATA;

  return (
    <section
      className="max-w-screen-xl flex flex-col gap-14 md:flex-row md:items-center pt-16 md:pt-28 pb-20 px-6 mx-auto"
      id="hero"
    >
      <motion.div 
      animate= {{y: [0, 100, 0, -100, 0]}}
      transition={{
        duration: 2, 
        ease: "easeInOut", 
        repeat: Infinity
      }}
      className="flex-1 text-center md:text-left z-[1]">
        <span className="text-xs md:text-sm text-black font-thin">
          A UM Enigma Developer
        </span>

        <h2 className="text-3xl mt-3 md:text-5xl text-black md:mt-5">{name}</h2>
        <p className="w-full text-black text-xs font-light leading-5 my-6 lg:w-[38vw] md:text-sm md:leading-6 md:my-8">{tagline}</p>

        <button className="primary-btn text-white" onClick={() => window.scrollTo({ top: document.getElementById('contact').offsetTop - 80, behavior: 'smooth' })}> Contact Me </button>



      </motion.div>

      <motion.div 
      animate={{
        rotate: [90, 180, 0]
      }}
      transition={{
        duration: 3, 
        ease: "easeIn",
        repeat: Infinity
      }}
      className="flex gap-5 justify-center md:gap-3 lg:gap-5 z-[1]">
        <div className="w-[403px] bg-gradient-to-br from-white-950 to-slate-900 rounded-lg border border-white-950 p-6">
          <div className="flex items-center justify-center">
            <img className="hero-img" src={PROFILE_PIC} alt="img one" />
          </div>

          <div className="bg-cardbg rounded-md text-center mt-3 p-4 ">
            <h5 className="text-sm md:text-base text-white">{name}</h5>
            <p className="text-slate-500 text-xs md:font-medium mt-1">
              {jobTitle}
            </p>

            <div className="flex items-center justify-center gap-2 text-slate-500 text-xs mt-1 text-white">
              <HiOutlineLocationMarker />
              <p className="font-medium">{location}</p>
            </div>
          </div>

          <InfoTile
            icon={<FiMail size={20} className="text-sky-400" />}
            text={email}
          />

          <InfoTile
            icon={<MdOutlineBadge size={22} className="text-sky-400" />}
            text={`${yearsOfExperience} Years of Experience`}
          />

          <div className="flex items-center gap-2 flex-wrap my-3">
            {skills.map((item) => (
              <div
                key={item}
                className="text-[12px] text-black bg-blue-800/30 rounded md:text-xs px-3 py-1 "
              >
                {item}
              </div>
            ))}
          </div>


          <div className="flex justify-center items-center gap-4 flex-wrap text-black">
          <div className="bg-blue-800/30 p-2 rounded">
          <div className="flex justify-center items-center gap-4 flex-wrap text-black">
          
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <div className="bg-blue-800/30 p-2 rounded">
              <FaGithub className="text-lg md:text-xl" />
            </div>
          </a>

          <a href="https://www.linkedin.com/in/altheae-owe/" target="_blank" rel="noopener noreferrer">
            <div className="bg-blue-800/30 p-2 rounded">
              <FaLinkedin size={20} />
            </div>
          </a>

          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <div className="bg-blue-800/30 p-2 rounded">
              <FaXTwitter size={20} />
            </div>
          </a>
        </div>

  </div>
</div>

        </div>
      </motion.div>

      <div class="ui-circle absolute top-6 md:top-10 -left-10 md:left-0"></div>
    </section>
  );
};

export default Hero;

const InfoTile = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-4 bg-cardbg p-4 mt-3 rounded-md">
      {icon}
      <p className="text-xs md:text-sm font-normal">{text}</p>
    </div>
  );
};
