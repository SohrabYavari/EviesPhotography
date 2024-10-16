import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const fadeInVarient = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

interface Props {
  className: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}
const FadeComp: React.FC<React.PropsWithChildren<Props>> = ({
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
          type: "spring",
          damping: 15,
          delay: 0.75,
          duration: 2,
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

export default FadeComp;
