import { AnimatePresence, motion } from "framer-motion";

const slideInVarient = {
  initial: {
    opacity: 0,
    y: -50,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

interface Props {
  className: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const SlideInDiv2: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}: Props) => {
  return (
    <>
      <AnimatePresence>
          <motion.div
            variants={slideInVarient}
            initial="initial"
            whileInView="animate"
            transition={{
              type: "spring",
              damping: 15,
              delay: 0.5
            }}
            viewport={{
              once: true,
            }}
            className={className}
          >
            {children}
          </motion.div>
      </AnimatePresence>
    </>
  );
};

export default SlideInDiv2;
