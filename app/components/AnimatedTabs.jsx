"use client"

import { motion } from "framer-motion";
import { useState } from "react";


let tabs = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const AnimatedTabs = () => {
  let [activeTab, setActiveTab] = useState(tabs[0].id);


  const handleClick = (e) => {
    e.preventDefault();
    router.push('/about');
  };


  return (
    <div className="flex space-x-1">
      {tabs.map((tab) => (
        <button
        href={'/about'}
          key={tab.id}
          onClick={() => {
            setActiveTab(tab.id)
        }}
          className={`${
            activeTab === tab.id ? "" : "hover:text-black/60"
          } relative rounded-full px-3 py-1.5 text-sm bold  text-blue transition font-serif `}
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
        </button>
      ))}
    </div>
  );
}


export default AnimatedTabs