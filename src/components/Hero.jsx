import React from "react";
import {useTypewriter } from "react-simple-typewriter";
import { ButtonPrimary, ButtonOutline } from "./Button";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { HiMiniArrowSmallDown } from "react-icons/hi2";
import {
  zoomInVariants,
  slideUpVariants,
  slideFromLeftVariants,
  slideFromRightVariants,
} from "./Animation";
import { motion } from "framer-motion";

const Hero = () => {
const [typeEffect] = useTypewriter({
    words:['colaboration!','work!'],
    loop:{},
    typeSpeed:100,
    deleteSpeed:40
})

  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10 ">
        <div>
          <motion.div
            className="flex items-center gap-3"
            initial="hidden"
            whileInView="visible"
            variants={slideUpVariants}
          >
            <figure className=" img-box w-9 h-9 rounded-lg">
              <img
                src="/images/p.png"
                alt="Royd nyambe"
                width={40}
                height={40}
                className="img-cover"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for
              <span className="text-sky-400">{typeEffect}</span>
            
            </div>
          </motion.div>
          <motion.h2
            className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10 "
            initial="hidden"
            whileInView="visible"
            variants={slideUpVariants}
          >
            Building Scalable Modern Websites & Applications for the future
          </motion.h2>
          <motion.div
            className=" flex items-center  gap-3 "
            initial="hidden"
            whileInView="visible"
            variants={slideUpVariants}
          >
            <ButtonPrimary
              label="Download CV"
              icon={<IoCloudDownloadOutline />}
            />

            <ButtonOutline
              href="#about"
              label="Scroll down"
              icon={<HiMiniArrowSmallDown />}
            />
          </motion.div>
        </div>

        <motion.div
          className=" mt-10"
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
        >
          <figure className=" w-full max-w-[480px]  ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
            <img
              src="/images/p.png"
              alt="Royd nyambe"
              width={656}
              height={800}
              className="w-full"
            />
          </figure>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
