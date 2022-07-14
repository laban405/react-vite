import React from "react";
import { motion } from "framer-motion";
import { pageTransition, pageVariants } from "../../utils/page-transitions";


function HomePage() {
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
        <h1>Home page</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, qui.
          Hic animi distinctio et maiores, ab nostrum at neque. Iusto minus
          perspiciatis vitae unde? In quibusdam nulla perspiciatis laboriosam ex.
        </p>
      </div>
    </motion.div>
  );
}

export default HomePage;