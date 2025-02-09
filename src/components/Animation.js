export const slideUpVariants = {
    hidden: { y: 50, opacity: 0 }, 
    visible: {
      y: 0, 
      opacity: 1, 
      transition: {
        staggerChildern: 2,
        duration: 1.5, 
        ease: "easeOut",
      },
    },
  };
  
  export const zoomInVariants = {
    hidden: { scale: 0.5, opacity: 0 }, 
    visible: {
      scale: 1, 
      opacity: 1, 
      transition: {
        staggerChildern: 2,
        duration: 1.2, 
        ease: "easeOut",
      },
    },
  };

  export const slideFromRightVariants = {
    hidden: { x: 50, opacity: 0 },  // Start off-screen to the right
    visible: {
      x: 0,  // Move to original position
      opacity: 1,
      transition: {
        staggerChildren: 0.5,  // Adjust stagger time if needed
        duration: 1.5,          // Duration for the animation
        ease: "easeOut",        // Smooth ease-out transition
      },
    },
  };

  export const slideFromLeftVariants = {
    hidden: { x: -50, opacity: 0 },  // Start off-screen to the left
    visible: {
      x: 0,  // Move to original position
      opacity: 1,
      transition: {
        staggerChildren: 0.5,  // Adjust stagger time if needed
        duration: 1.5,          // Duration for the animation
        ease: "easeOut",        // Smooth ease-out transition
      },
    },
  };