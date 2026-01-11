import { motion } from "motion/react";

const FeaturesHeader = () => {
  return (
    <div className="grid desktop:grid-cols-2 gap-10">
      <motion.h2
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: "linear" }}
        className="text-[38px] tablet:text-[52px] font-medium leading-none overflow-hidden max-h-[2em]"
      >
        Your Body, Your Story <span className="hidden tablet:block">– Understood Anytime</span>
      </motion.h2>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: "linear", delay: 0.3 }}
        className="text-[#411a74] text-lg tablet:text-xl"
      >
        Every phase of your cycle tells a story. LYNA listens, learns and guides
        you – so you feel in sync with yourself.
      </motion.p>
    </div>
  );
};

export default FeaturesHeader;
