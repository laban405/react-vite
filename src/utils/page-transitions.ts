export const pageVariants = {
    initial: {
      opacity: 0,
      x: "-50vw",
      scale: 0.8
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      x: "100vw",
      scale: 0.8
    }
  };

  export const pageTransition = {
    type: "tween",
    ease: "linear",
    duration: 0.3
  };
  
  