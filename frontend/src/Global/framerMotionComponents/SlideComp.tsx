import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const fadeInVarient = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

interface Props {
  className: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}
const SlideComp: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}: Props) => {
  return (
    <AnimatePresence>
      <motion.div
        variants={fadeInVarient}
        initial="initial"
        whileInView="animate"
        transition={{
          type: "just",
          damping: 10,
          delay: 0.75,
          duration: 0.75,
        }}
        viewport={{
          once: true,
        }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default SlideComp;
