import React from 'react'
import {motion} from "framer-motion"

import SkillCard from './SkillCard';
import { slideFromLeftVariants, slideUpVariants } from './Animation';

const skillItem = [
    {
      imgSrc: '/images/figma.svg',
      label: 'Figma',
      desc: 'Design tool'
    },
    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/nodejs.svg',
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: '/images/expressjs.svg',
      label: 'ExpressJS',
      desc: 'Node Framework'
    },
    {
      imgSrc: '/images/mongodb.svg',
      label: 'MongoDB',
      desc: 'Database'
    },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
  ];

const Skills = () => {
  return (
 <section className='section'>
    <div className="container">
        <motion.h2 className='headline-2 reveal-up' initial="hidden" whileInView="visible"  variants={slideFromLeftVariants}>
            Essential Tools I use
        </motion.h2>
        <motion.p className='text-zinc-400 mt-3 mb-8 max-w-[50ch]' initial="hidden" whileInView="visible" variants={slideUpVariants}>
        Some of the tools I use to create visually stunning websites and
         applications include modern frameworks like React and TailwindCSS for 
         sleek UI design, along with backend technologies such as Node.js and MySQL for robust functionality.
        </motion.p>
        <motion.div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]" initial="hidden" whileInView="visible" variants={slideUpVariants}>
            {skillItem.map(({imgSrc, label,desc, },key)=>(
              <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} />
            ))}
        </motion.div>
    </div>

 </section>

  )
}

export default Skills