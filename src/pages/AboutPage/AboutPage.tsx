import { motion } from "framer-motion";
import React from "react";
import { pageVariants, pageTransition } from "../../utils/page-transitions";

function About() {
  return (
    <motion.div
      className="page"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
    <div className="text-center">
      <h1>About Page</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quasi
        debitis fuga deserunt, placeat qui optio totam perspiciatis error.
        Repudiandae, enim veniam. Dolorum officiis recusandae consequuntur
        veritatis magni aliquam itaque.
      </p>
    </div>
    </motion.div>
  );
}

export default About;