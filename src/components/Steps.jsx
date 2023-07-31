import { Switch } from "@legendapp/state/react";
import { motion, AnimatePresence } from "framer-motion";

import { store$ } from "../store";
import { StepNavigation } from "./StepNavigation";
import { Step1 } from "../steps/Step1";
import { Step2 } from "../steps/Step2";
import { Step3 } from "../steps/Step3";
import { Step4 } from "../steps/Step4";
import { FinalStep } from "../steps/FinalStep";
import { useNavigation } from "../hooks/useNavigation";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const transition = {
  x: {
    type: "spring",
    stiffness: 300,
    damping: 30,
  },
  opacity: {
    duration: 0.2,
  },
};

function MotionDiv({ children, direction }) {
  return (
    <motion.div
      className="h-full"
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

export function Steps() {
  const { currentStep } = useNavigation();
  const currentDirection = store$.direction.use();

  return (
    <section className="flex h-[500px] w-[600px] flex-col overflow-hidden px-16 py-6">
      <AnimatePresence initial={false} custom={currentDirection}>
        <Switch value={currentStep?.number}>
          {{
            1: () => (
              <MotionDiv key={1} direction={currentDirection}>
                <Step1 />
              </MotionDiv>
            ),
            2: () => (
              <MotionDiv key={2} direction={currentDirection}>
                <Step2 />
              </MotionDiv>
            ),
            3: () => (
              <MotionDiv key={3} direction={currentDirection}>
                <Step3 />
              </MotionDiv>
            ),
            4: () => (
              <MotionDiv key={4} direction={currentDirection}>
                <Step4 />
              </MotionDiv>
            ),
            default: () => (
              <MotionDiv key="default" direction={currentDirection}>
                <FinalStep />
              </MotionDiv>
            ),
          }}
        </Switch>
      </AnimatePresence>

      <StepNavigation />
    </section>
  );
}
