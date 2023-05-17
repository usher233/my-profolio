'use client';

import Hero from './Hero';
import AnimatedText from '../components/AnimatedText';
import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const IntroPage = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="grid grid-cols-2 w-full h-full "
    >
      <div className="gradient-01 z-0 overflow-hidden" />
      <Hero />
      <div
        id="Intro"
        className=" z-40 text-4xl md:text-7xl text-start lg:block pt-72 font-serif h-screen mb-12 md:mb-0  md:text-center "
      >
        <div className="block delay-500 first-letter:text-red-700 transition-all">
          Hello! I am Viktor.
        </div>
        <br />
        <div className="delay-75 first-letter:text-purple-700 transition-all ml-4">
          I am A
        </div>
        <br />
        <AnimatedText />
      </div>
    </motion.div>
  );
};

export default IntroPage;
