'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components/CustomTexts';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Me" textStyles="text-center" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-bold text-red-300 ">I</span> am a skilled and
        creative frontend developer, now a Master student from VU Amsterdam. <br />I bring a collaborative spirit to
        every project, ensuring that each task is handled with maximum
        efficiency and the end product meets the highest standards. My skills
        span various programming languages and tools, including but not limited
        to JavaScript, React, HTML, CSS, and Bootstrap. I am consistently
        responsive in my communications and believe that transparency, regular
        updates, and open dialogue are the bedrock of successful team projects.
        While I spend a lot of my time immersed in code, I also enjoy immersing
        myself in the world of video games, with Civilization 6 being a
        particular favorite. This hobby not only serves as a great way to
        unwind, but also fuels my creativity, helping me to think outside the
        box and come up with novel solutions to programming challenges.
      </motion.p>
      
      
      <motion.img
        src="https://media.giphy.com/media/WoztRT1FFeliwstmao/giphy.gif"
        alt="arrow down"
        className="w-[100px] h-[100px] object-contain mt-7"
      />
    </motion.div>
  </section>
);

export default About;
