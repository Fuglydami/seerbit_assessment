import React from "react";

const Footer = () => {
  const span = " px-2 cursor-pointer";
  return (
    <footer className="montserrat   z-10 bottom-0 bgdark w-full lg:px-56  px-0 lg:h-40 h-32 py-1">
      <div className="lg:flex block  items-center justify-between lg:py-16 py-6">
        <p className="text-white font-bold text-center">SEERBIT ®</p>
        <p className="flex items-center justify-center  text-gray-400 text-xs md:text-base ">
          <span className={span}>Shop</span>/ <span className={span}>Info</span>{" "}
          /<span className={span}>Service</span> /{" "}
          <span className={span}>Contact</span> /{" "}
          <span className={span}>Privacy Policy</span>
        </p>
        <div className="flex items-center justify-center text-xs md:text-base text-white text-gray-400 ">
          <span className={span}>Fb</span> / <span className={span}>In</span> /{" "}
          <span className={span}>Yt</span> / <span className={span}>Tw</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
