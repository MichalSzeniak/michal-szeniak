"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
}

const DivAnimation = ({ children }: Props) => {
  return (
    <motion.div
      className="flex"
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{
        delay: 0.2,
        opacity: {
          ease: "easeInOut",
          duration: 0.5,
        },
        y: {
          duration: 0.2,
        },
      }}
    >
      {children}
    </motion.div>
  );
};
export default DivAnimation;
