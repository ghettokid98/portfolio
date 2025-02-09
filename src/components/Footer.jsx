import React from 'react'
import { ButtonPrimary } from './Button';
import { MdKeyboardArrowRight } from "react-icons/md";
import {motion} from "framer-motion"
import {slideFromLeftVariants, slideFromRightVariants,slideUpVariants} from "./Animation"
const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Work',
      href: '#work'
    },
    {
      label: 'Reviews',
      href: '#reviews'
    },
    {
      label: 'Contact me',
      href: '#contact'
    }
  ];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://www.github.com/codewithsadee-org'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/codewithsadee'
    },
    {
      label: 'Twitter X',
      href: 'https://x.com/codewithsadee_'
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/codewithsadee'
    },
    {
      label: 'CodePen',
      href: 'https://codepen.io/codewithsadee'
    }
  ];

const Footer = () => {
  return (
    <footer className='section'>
        <div className="container">

            <div className="lg:grid lg:grid-cols-2">

                <motion.div className="mb-10 " initial="hidden" whileInView="visible" variants={slideFromLeftVariants}>
                    <motion.h2 className='headline-1 mb-8 lg:max-w-[12ch]' >
                        Let&apos; work together today
                    </motion.h2>

                    <ButtonPrimary href="contact" label="start a project" icon={<MdKeyboardArrowRight />}/>
                </motion.div>

                <motion.div className="grid grid-cols-2 gap-4 lg:pl-20" initial="hidden" whileInView="visible" variants={slideFromLeftVariants}>
                    <div>
                        <p className='mb-2'>sitemap</p>

                        <ul>
                            {sitemap.map(({label,href},key)=>(
                                <li key={key}><a href={href} className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200'>{label}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className='mb-2'>social</p>

                        <ul>
                            {socials.map(({label,href},key)=>(
                                <li key={key}><a href={href} target='_black' className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200'>{label}</a></li>
                            ))}
                        </ul>
                    </div>



                </motion.div>

            </div>

            <div className="flex items-center justify-baseline pt-10 mb-8">
                <a href="" className='text-zinc-500 text-sm'> <img src="/images/j.png" width={40} height={40} alt='logo'/></a>
                <motion.p className='text-zinc-200' initial="hidden" whileInView="visible" variants={slideUpVariants}>&copy; 2024 <span>TechVersion</span></motion.p>
            </div>

        </div>

    </footer>
  )
}

export default Footer