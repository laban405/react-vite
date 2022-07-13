import { motion } from "framer-motion";
import React from "react";

function About() {
  return (
    <motion.div
      className="container text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
    <div className="container text-center">
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