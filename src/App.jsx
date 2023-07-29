import { useState } from "react";
import { Switch } from "@legendapp/state/react";
import { motion, AnimatePresence } from "framer-motion";

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

export const App = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  function paginate(newDirection) {
    setPage([page + newDirection, newDirection]);
  }

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <Switch value={page}>
          {{
            0: () => (
              <MotionDiv key={0} direction={direction}>
                <p className="text">First Page</p>
              </MotionDiv>
            ),
            1: () => (
              <MotionDiv key={1} direction={direction}>
                <p className="text">Second Page</p>
              </MotionDiv>
            ),
            2: () => (
              <MotionDiv key={2} direction={direction}>
                <p className="text">Third Page</p>
              </MotionDiv>
            ),
          }}
        </Switch>
      </AnimatePresence>

      <div className="next" onClick={() => paginate(1)}>
        {"‣"}
      </div>

      <div className="prev" onClick={() => paginate(-1)}>
        {"‣"}
      </div>
    </>
  );
};
