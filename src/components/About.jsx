import React from 'react'
import { slideUpVariants, zoomInVariants } from './Animation';
import {motion} from "framer-motion"





const aboutItems = [
    {
        label:'Project done',
        number:32
    },
    {
        label:'Years of experience',
        number:3
    }
];


const About = () => {
  return (
   <section id="about" className='section'>
    <motion.div className="container">
        <motion.div className="bg-zinc-800/50 p-7 rounded-2xl" initial="hidden" whileInView="visible"  variants={zoomInVariants}>
            <p className='text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]'>
            Welcome! I&apos;am Royd, a professional web & app developer 
            with a knack for crafting visually stunning and highly 
            functional websites & application. Combining creativity and technical 
            expertise. I transform your vision into digital masterpiece 
            that excels in both appearance and performance.

            </p>
            <div className="flex flex-wrap items-center gap-4 md:gap-7">
                {aboutItems.map(({label,number},key)=>(
                    <div key={key} className="">
                        <div className="flex items-center md:mb-2">
                            <span className='text-2xl font-semibold md:text-4xl'>{number}</span>
                            <span className='text-sky-400 font-bold md:text-3xl'>+</span>
                        </div>
                        <p className='text-sm text-zinc-400 '>{label}</p>
                    </div>
                ))}
                <img src='/images/j.png ' alt='logo' width={30} height={30} className='ml-auto md:w-[40px] md:h-[40px]'/>
            </div>
        </motion.div>

    </motion.div>

   </section>
  )
}

export default About