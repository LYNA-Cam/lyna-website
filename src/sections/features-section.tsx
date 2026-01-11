import FeaturesHeader from "../layouts/features-header";
import FeaturesPhones from "../layouts/features-phones";
import { motion } from "motion/react";
import FeaturesPhonesTablet from "../layouts/features-phones-tablet";

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="relative w-full max-w-[1150px] mx-auto px-6 py-20 flex flex-col gap-20"
    >
      <FeaturesHeader />
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: "linear" }}
        className="relative rounded-[32px] border border-gray-200 bg-linear-to-t from-primary to-transparent overflow-hidden group hidden tablet:block"
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[60%] bg-[radial-gradient(ellipse_at_bottom,#ffe0e0_0%,transparent_70%)] opacity-40 pointer-events-none" />
        <FeaturesPhones />
        <div className="relative z-20 p-[20px_32px_32px] w-[712px] mx-auto">
          <h3 className="text-2xl font-medium">Insights That Get You</h3>
          <p className="text-xl text-secondary mt-1">
            LYNA knows how you're feeling days before you do.
          </p>
        </div>
      </motion.div>
      <div className="relative tablet:hidden w-full">
        <FeaturesPhonesTablet />
      </div>
    </section>
  );
};

export default FeaturesSection;
