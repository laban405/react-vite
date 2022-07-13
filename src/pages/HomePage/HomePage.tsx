import React from "react";
import { motion } from "framer-motion";


function HomePage() {
    return (
        <motion.div
      className="container text-center  bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <div className="container text-center">
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