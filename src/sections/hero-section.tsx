import { Link } from "react-router";
import { motion } from "motion/react";

const MotionLink = motion.create(Link);

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative w-full pt-20 flex flex-col items-center gap-y-8 bg-linear-to-t from-primary to-transparent rounded-b-4xl"
    >
      <span className="bg-primary/40 w-max mt-1.5 px-6 py-1.5 rounded-full text-secondary font-bold uppercase text-sm max-tablet:order-2 border border-white">
        Built with athletes, designed for all
      </span>
      <div className="text-center flex flex-col items-center gap-y-6 max-tablet:order-3">
        <motion.h1
          initial={{ y: "-20%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "linear" }}
          viewport={{ once: true }}
          className="text-[23px] tablet:text-[52px] leading-[1.125] font-semibold tracking-wider"
        >
          Train with your cycle,
          <br />
          not against it.
        </motion.h1>
        <motion.p
          initial={{ y: "-20%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "linear", delay: 0.3 * 1 }}
          viewport={{ once: true }}
          className="max-w-lg tablet:text-xl"
        >
          A simple selfie helps you sync training, recovery and nutrition with
          every phase of your menstrual cycle.
        </motion.p>
      </div>
      <MotionLink
        initial={{ y: "-20%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "linear", delay: 0.3 * 2 }}
        viewport={{ once: true }}
        to={"/#sign-up"}
        className="bg-secondary border-2 border-secondary text-white py-3 px-5 rounded-full text-xl font-medium max-tablet:order-4 hover:bg-transparent hover:text-secondary transition-colors duration-300"
      >
        Get Early Access
      </MotionLink>
      <em className="text-[10px] tablet:text-xs max-tablet:order-5 mb-8 tablet:mb-0">
        Privacy-first & fully GDPR-compliant
      </em>
      <div className="relative min-h-[670px] max-w-6xl w-full desktop:rounded-t-4xl overflow-hidden max-tablet:order-1">
        <video
          src="/hero.mp4"
          className="absolute top-0 inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </section>
  );
};

export default HeroSection;
