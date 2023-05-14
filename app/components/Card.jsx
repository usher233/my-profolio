'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn } from '../utils/motion';

const Card = ({ id, imgUrl, contents, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px]
  h-[700px] transition-[flex] duration-[0.7s] ease-out-flex  cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <motion.img
      src={imgUrl}
      alt={title}
      className={`${active === id ? 'object-contain' : 'object-cover'} absolute transform transition duration-300 ease-in-out w-full h-full rounded-[24px]`}
    />
    
    {active !== id ? (
      
      <h3
        className="font-semibold sm:text-[26px]
        text-[18] text-blue-400
      absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]"
      >
        {title}
      </h3>
    ) : (
      <div className="absolute top-0 h-full glassmorphism p-8 transform transition duration-300 ease-in-out justify-start w-full flex-col  rounded-b-[24px] ">
        
        
        <h2 className="mt-[24px]  font-semibold sm:text-4xl md:text-6xl text-[24px] text-blue-400 ">
          {title}
        </h2>
        <ul>
      {contents.map((content, index) => (
        <li key={id} className='text-black py-3 md:p-6 md:text-4xl font-semibold text-bold'>{content}</li>
      ))}
    </ul>
      </div>
    )}
    
  </motion.div>
);


export default Card;