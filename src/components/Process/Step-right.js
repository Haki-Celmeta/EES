import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const StepRight = ({ stepNumber, children }) => {
  const stepVariant = {
    visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeIn' }, x: 0 },
    hidden: { opacity: 0, x: '-20px' },
  }

  const control = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.8 });

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView])

  return (
    <motion.div
      ref={ref}
      variants={stepVariant}
      initial="hidden"
      animate={control}
      className="step-right-container step"
    >
      <h2>{stepNumber}</h2>
      <div></div>
      <div className="seperation"></div>
      <p>{children}</p>
    </motion.div>
  )
}

export default StepRight;