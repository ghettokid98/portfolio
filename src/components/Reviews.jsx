import React from 'react'
import ReviewCard from './ReviewCard';
import {motion} from "framer-motion"
import { slideFromRightVariants } from './Animation';

const reviews = [
  {
    content: 'Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.',
    name: 'Rabecca Samukonga',
    imgSrc: '/images/ra.jpg',
    company: 'PixelForge'
  },
  {
    content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
    name: 'Situmbeko Lubosi',
    imgSrc: '/images/si.jpg',
    company: 'NexaWave'
  },
  {
    content: 'Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.',
    name: 'wise',
    imgSrc: '/images/wa.JPG',
    company: 'CodeCraft'
  },
  {
    content: 'Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.',
    name: 'Dalitso Phiri',
    imgSrc: '/images/da.jpg',
    company: 'BrightWeb'
  },
  {
    content: 'Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.',
    name: 'Mukumbi Sikenanu',
    imgSrc: '/images/mu.jpg',
    company: 'TechMosaic'
  },
  {
    content: 'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
    name: 'Simasiku Lubosi',
    imgSrc: '/images/siku.jpg',
    company: 'Skyline Digital'
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="section overflow-hidden lg:px-10 items-center justify-center">
      <div className="container m-auto">
        <motion.h2 className="headline-2 mb-8 text-center" initial="hidden" whileInView="visible" variants={slideFromRightVariants}>Clients comment on our projects</motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  justify-center items-center">
          {reviews.map(({ content, name, imgSrc, company }, key) => (
            <ReviewCard key={key} name={name} imgSrc={imgSrc} company={company} content={content} />
          ))}
        </div>
      </div>
    </section>
  );
};


export default Reviews