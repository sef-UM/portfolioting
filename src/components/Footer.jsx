import React from "react";
import {motion} from "motion/react"

const Footer = () => {
  return <div 
  animate={{ x: 100 }}
  transition={{ duration: 0.3, delay: 1, ease: "linear" }}
   className="bg-slate-900 text-xs text-center p-5">© Orion jl. 2024
   </div>;
};

export default Footer;
