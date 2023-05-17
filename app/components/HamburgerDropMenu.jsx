'use client';

import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HamburgerDropMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const variants = {
    open: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    closed: { opacity: 0, scale: 0.95, transition: { duration: 0.5 } },
  };
  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left smooth-scroll snap-both">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50   "
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image
            src="/Hamburger_icon.svg"
            width={25}
            height={25}
            alt="burger"
          />
        </button>
      </div>
      {isOpen && (
        <motion.div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          variants={variants}
        >
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            <Link
              to={`/`}
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              key={'about'}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={handleItemClick}
            >
              Home
            </Link>
            <Link
              to={`about`}
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              key={'about'}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={handleItemClick}
            >
              About
            </Link>
            <Link
              to={`skills`}
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              key={'skills'}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={handleItemClick}
            >
              Skills
            </Link>
            <Link
              to={`projects`}
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              key={'projects'}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={handleItemClick}
            >
              Projects
            </Link>
            <Link
              to={`contack`}
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              key={'contack'}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={handleItemClick}
            >
              Contact
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default HamburgerDropMenu;
