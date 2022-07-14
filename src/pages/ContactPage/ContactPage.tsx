import { motion } from "framer-motion";
import React from "react";
import { pageTransition, pageVariants } from "../../utils/page-transitions";

function Contact() {
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
      <h1>Contact us</h1>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio mollitia
        in minima architecto odit sunt enim quidem blanditiis voluptates,
        provident veritatis labore. Natus pariatur eos at nemo, officia
        voluptatibus accusamus.
      </p>
    </div>
    </motion.div>
  );
}

export default Contact;