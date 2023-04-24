"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

let tabs = [
  { id: "/", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const AnimatedTabs = () => {
  let [activeTab, setActiveTab] = useState();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/about");
  };

  return (
    <div className="flex space-x-1">
      {tabs.map((tab) => (
        <Link
          to={`${tab.id}`}
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          key={tab.id}
          onClick={() => {
            setActiveTab(tab.id);
          }}
          className={`${
            activeTab === tab.id ? "" : "hover:text-black/60"
          } relative rounded-full px-3 py-1.5 text-sm bold  text-blue transition font-serif cursor-pointer `}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-white mix-blend-difference"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </Link>
      ))}
    </div>
  );
};

export default AnimatedTabs;
