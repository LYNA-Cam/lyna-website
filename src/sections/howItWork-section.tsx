import PhoneSlider from "../components/phone-slider";
import PhoneSliderRoot from "../components/phone-slider-root";
import SliderControl from "../components/slider-control";
import type { PhoneConfig } from "../contexts/PhoneSliderContext";
import { usePhoneSlider } from "../hooks/usePhoneSlider";
import { cn } from "../lib/utils";

const phones: PhoneConfig[] = [
  {
    id: 1,
    image: "/mobile-4.avif",
    baseClass:
      "h-[605px] w-[300px] -rotate-6 top-[55%] left-[47%] data-[state=out]:-rotate-13 data-[state=out]:left-[-65px] data-[state=out]:bottom-[-49px] data-[state=out]:opacity-0",
  },
  {
    id: 2,
    image: "/mobile-1.avif",
    baseClass:
      "h-[605px] w-[300px] data-[state=in]:top-[59%] data-[state=in]:left-[65%] data-[state=in]:rotate-9 data-[state=active]:-rotate-6 data-[state=active]:top-[55%] data-[state=active]:left-[47%] data-[state=out]:-rotate-13 data-[state=out]:top-1/2 data-[state=out]:left-[calc(11.8056%-150px)] data-[state=out]:opacity-0",
  },
  {
    id: 3,
    image: "/mobile-2.avif",
    baseClass:
      "h-[605px] w-[300px] data-[state=in]:top-[69%] data-[state=in]:left-[78%] data-[state=in]:rotate-18 data-[state=active]:-rotate-6 data-[state=active]:top-[55%] data-[state=active]:left-[47%]",
  },
];

const tabs: { title: string; description: string }[] = [
  {
    title: "Step 1. Snap a Selfie (No Makeup Required)",
    description:
      "LYNA reads your face to instantly detect where you are in your cycle.",
  },
  {
    title: "Step 2. Get Tailored Lifestyle Tips",
    description: "Personalized to your needs and health goals.",
  },
  {
    title: "Step 3. Optimize Your Health (Eat & Move!)",
    description: "Adjusts your nutrition for each phase.",
  },
];

const Tabs = () => {
  const { current, setCurrent } = usePhoneSlider();
  return (
    <div className="relative flex flex-row py-10 gap-3 desktop:flex-col w-full overflow-auto">
      {tabs.map((tab, index) => (
        <div
          key={`tab-howItWorks-${index}`}
          role="button"
          className={cn(
            "p-5 relative hover:bg-[#fdfdfd] rounded-xl flex flex-col gap-2 shrink-0",
            current === index + 1 && "bg-[#fdfdfd]"
          )}
          onClick={() => setCurrent(index + 1)}
        >
          <div className="absolute size-full inset-0 bg-[radial-gradient(94%_69%_at_50%_100%,#ffd8ff_0%,#f1cef700_100%)] opacity-40" />
          <span className="text-xl leading-[1.3em]">{tab.title}</span>
          <p className="leading-[1.3em] opacity-60 text-secondary italic">
            {tab.description}
          </p>
        </div>
      ))}
    </div>
  );
};

const HowItWorkSection = () => {
  return (
    <section
      id="howItWorks"
      className="relative w-full bg-linear-to-b from-primary to-transparent rounded-t-4xl pt-[120px] pb-[60px]"
    >
      <div className="relative max-w-[1080px] flex flex-col mx-auto gap-y-[80px]">
        <div className="flex flex-col gap-y-6 px-4">
          <h2 className="text-[52px] font-medium">How it works</h2>
          <p className="text-xl font-medium max-w-sm text-secondary">
            Go beyond tracking with deeper insights to plan and manage your life
            better.
          </p>
        </div>
        <div className="flex w-full flex-col-reverse desktop:flex-row relative">
          <PhoneSliderRoot data={phones}>
            <Tabs />
            <div className="desktop:hidden">
              <SliderControl />
            </div>
            <PhoneSlider />
          </PhoneSliderRoot>
        </div>
      </div>
    </section>
  );
};

export default HowItWorkSection;
