import React from 'react'
import { IoStar } from "react-icons/io5";
import {motion} from "framer-motion"
import { slideUpVariants } from './Animation';


import PropTypes from 'prop-types'

const ratings = new Array(4);
ratings.fill({
    icon: <IoStar />,
    style:{fontVariationSettings: '"FILL" 1'}
});



const ReviewCard = ({
    content,
    imgSrc,
    name,
    company

}) => {
  return (
    <motion.div className='bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px] ' initial="hidden"  whileInView="visible" variants={slideUpVariants}>
           <div className="flex items-center gap-2 mt-auto">
            <figure className='img-box rounded-full w-11 h-11 overflow-hidden' >
                <img src={imgSrc} alt={name} className='image-cover w-full h-full object-cover rounded-full' width={44} height={44} loading="lazy"/>
            </figure>
            <div className="">
                <p className=''>{name}</p>
                <p className='text-xs text-zinc-400 tracking-wider'>{company}</p>
            </div>
        </div>
        <p className='text-zinc-400 mb-8'>{content}</p>
        
        <div className="flex items-center gap-1 mb-3">
            {ratings.map(({icon,style},key)=>(
                <span className='material-symbols-rounded text-yellow-300 text-[18px]' key={key}>{icon}</span>
            ))}

        </div>
   

     

    </motion.div>
  )
}

ReviewCard.propTypes = {
    content: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
}

export default ReviewCard