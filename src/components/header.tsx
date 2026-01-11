import { useState } from "react";
import { Link } from "react-router";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { cn } from "../lib/utils";
import { Cross as Hamburger } from "hamburger-react";

const Header = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [toggled, setToggled] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? latest;
    const delta = latest - previous;

    if (delta > 0) {
      setHidden(true);
    } else if (delta < 0) {
      setHidden(false);
    }
  });

  return (
    <motion.header
      className={cn(
        "fixed h-16 w-full top-4 left-0 px-4 desktop:px-10 py-1.5 z-9999 transition-transform duration-300 ",
        hidden && !toggled && "-translate-y-full top-0"
      )}
    >
      <div className="relative h-full flex items-center justify-between">
        <Link to={"/"} className="h-7.5 desktop:h-9">
          <img src="/logo.svg" alt="logo" className="h-full" />
        </Link>
        <div className="py-2 px-5 inset-shadow-sm drop-shadow-sm hidden desktop:flex items-center justify-center gap-2.5 bg-white rounded-full absolute left-1/2 -translate-x-1/2 *:h-10 *:font-medium *:px-4 *:flex *:items-center">
          <Link to={"/#features"}>Features</Link>
          <Link to={"/#howItWorks"}>How it works</Link>
        </div>
        <Link
          to={""}
          className="h-full aspect-2/1 bg-primary rounded-full hidden desktop:flex justify-center items-center drop-shadow-sm font-semibold border border-primary hover:bg-white"
        >
          Sign Up
        </Link>

        <div
          className={cn("rounded-full border-primary border z-9999 bg-white desktop:hidden")}
        >
          <Hamburger
            direction="left"
            size={25}
            toggle={setToggled}
            toggled={toggled}
          />
        </div>
        <AnimatePresence>
          {toggled && (
            <motion.span
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              exit={{ height: 0 }}
              transition={{ ease: "linear", duration: 0.3 }}
              className="fixed top-0 left-0 bg-linear-to-b from-primary to-white w-full pt-10"
            >
              <img src="/logo.svg" alt="logo" className="h-11 mx-auto" />

              <div className="mt-5 relative flex mx-auto flex-col items-center justify-center gap-y-4">
                <Link to={"/#features"} className="font-semibold">Features</Link>
                <Link to={"/#howItWorks"} className="font-semibold">How it works</Link>
              </div>
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
