'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import skills from '../skills';
import Card from '../components/Card';
import { TypingText } from '../components/CustomTexts';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';

const Skills = () => {
  const [active, setActive] = useState('skill-2');
  return (
    <section className={`${styles.paddings} h-screen`} id="skills">
      {/* <div className="gradient-03" /> */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Skills" textStyles="text-center" />

        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {skills.map((skills, index) => (
            <Card
              key={skills.id}
              {...skills}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
