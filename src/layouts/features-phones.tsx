import Phone from "../components/phone";

const FeaturesPhones = () => {
  return (
    <div className="mx-auto mask-[linear-gradient(to_bottom,black_60%,transparent_100%)] w-[712px] h-[368px] flex relative gap-4 flex-col group">
      <Phone
        appImage="/mobile-1.avif"
        className="top-[36px] left-[53px] -rotate-7 group-hover:transform-[translate3d(-10px,-10px,0)] transition-transform duration-300 ease-in-out"
      />
      <Phone
        appImage="/mobile-2.avif"
        className="top-[26px] left-[235px] group-hover:transform-[translate3d(0px,-10px,0)] transition-transform duration-300 ease-in-out"
      />
      <Phone
        appImage="/mobile-3.avif"
        className="top-[43px] left-[395px] rotate-12 group-hover:transform-[translate3d(10px,-10px,0)] transition-transform duration-300 ease-in-out"
      />
    </div>
  );
};

export default FeaturesPhones;
