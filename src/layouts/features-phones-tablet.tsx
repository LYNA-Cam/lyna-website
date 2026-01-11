import PhoneSliderRoot from "../components/phone-slider-root";
import PhoneSlider from "../components/phone-slider";
import { usePhoneSlider } from "../hooks/usePhoneSlider";
import { useEffect, useRef } from "react";
import SliderControl from "../components/slider-control";

type PhoneConfig = {
  id: number;
  image: string;
  baseClass: string;
};

const phones: PhoneConfig[] = [
  {
    id: 1,
    image: "/mobile-1.avif",
    baseClass:
      "h-[605px] w-[300px] -rotate-6 top-[55%] left-[47%] data-[state=out]:-rotate-13 data-[state=out]:left-[-65px] data-[state=out]:bottom-[-49px] data-[state=out]:opacity-0",
  },
  {
    id: 2,
    image: "/mobile-2.avif",
    baseClass:
      "h-[605px] w-[300px] data-[state=in]:top-[59%] data-[state=in]:left-[65%] data-[state=in]:rotate-9 data-[state=active]:-rotate-6 data-[state=active]:top-[55%] data-[state=active]:left-[47%] data-[state=out]:-rotate-13 data-[state=out]:top-1/2 data-[state=out]:left-[calc(11.8056%-150px)] data-[state=out]:opacity-0",
  },
  {
    id: 3,
    image: "/mobile-3.avif",
    baseClass:
      "h-[605px] w-[300px] data-[state=in]:top-[69%] data-[state=in]:left-[78%] data-[state=in]:rotate-18 data-[state=active]:-rotate-6 data-[state=active]:top-[55%] data-[state=active]:left-[47%]",
  },
];

const tabs: { title: string; description: string }[] = [
  {
    title: "Insights That Get You",
    description: "LYNA Cam knows how you're feeling.",
  },
  {
    title: "Phase-Based Nutrition",
    description: "Nutrients your body actually needs.",
  },
  {
    title: "Understand Your Cycle",
    description: "Track your cycle in real-time.",
  },
];

const Tabs = () => {
  const { current, setCurrent } = usePhoneSlider();
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const activeIndex = current - 1;
    const activeTab = tabRefs.current[activeIndex];
    const container = tabsContainerRef.current;

    if (activeTab && container) {
      const containerRect = container.getBoundingClientRect();
      const tabRect = activeTab.getBoundingClientRect();
      const scrollLeft = container.scrollLeft;
      const tabLeft = tabRect.left - containerRect.left + scrollLeft;
      const tabWidth = tabRect.width;
      const containerWidth = containerRect.width;

      const scrollTo = tabLeft - containerWidth / 2 + tabWidth / 2;

      container.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  }, [current]);

  return (
    <div
      ref={tabsContainerRef}
      className="relative w-full flex overflow-scroll py-5 gap-x-2"
    >
      {tabs.map((tab, index) => (
        <div
          ref={(el) => {
            tabRefs.current[index] = el;
          }}
          role="button"
          key={`features-${index}`}
          onClick={() => setCurrent(index + 1)}
          className={`shrink-0 bg-linear-to-t from-primary to-transparent p-4 rounded-md flex flex-col gap-2 cursor-pointer transition-opacity ${
            current === index + 1
              ? "opacity-100"
              : "opacity-60 hover:opacity-80"
          }`}
        >
          <span className="text-xl leading-[1.3em]">{tab.title}</span>
          <p className="italic text-secondary leading-[1.3em]">
            {tab.description}
          </p>
        </div>
      ))}
    </div>
  );
};

const FeaturesPhonesTablet = () => {
  return (
    <PhoneSliderRoot data={phones}>
      <PhoneSlider />
      <SliderControl />
      <Tabs />
    </PhoneSliderRoot>
  );
};

export default FeaturesPhonesTablet;
