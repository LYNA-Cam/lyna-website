import FeaturesSection from "../sections/features-section";
import HeroSection from "../sections/hero-section";
import HowItWorkSection from "../sections/howItWork-section";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorkSection />
      <div className="bg-[radial-gradient(57%_75%_at_50%_67.6%,#6e45a3ab_16.5699%,#e3bfff94_69%,#ffd9ff00_100%)] flex flex-col items-center relative w-full">
        <div className="relative flex w-full flex-col items-center">
          <div className="relative flex w-full gap-6.5 flex-col items-center">
            <h2 className="text-[52px] font-medium leading-[100%] text-center">
              Become a Founding Athlete
            </h2>
            <p className="text-xl font-light leading-[150%] text-center text-secondary">
              <strong>
                LYNA is built for females who want to train with their cycle.
              </strong>
            </p>
          </div>
          <div className="relative flex h-[233px] max-w-lg w-full items-center p-10">
            <button className="bg-secondary w-full rounded-3xl flex relative py-3.5 px-4 items-center text-white h-max justify-center mb-auto">
              Apply to Founders Program
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
