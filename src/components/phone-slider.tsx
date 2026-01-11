import { usePhoneSlider } from "../hooks/usePhoneSlider";
import { cn } from "../lib/utils";
import Phone from "./phone";

const PhoneSlider = () => {
  const { data, current } = usePhoneSlider();

  const getState = (id: number) => {
    if (current === id) return "active";
    if (id < current) return "out";
    return "in";
  };

  return (
    <div className="relative mask-linear-0 mask-linear-from-transparent mask-linear-to-black mask-linear-from-0% mask-linear-to-30% w-full h-[605px] flex overflow-hidden">
      <div className="relative h-full w-full">
        {data
          .sort((a, b) => b.id - a.id)
          .map((phone) => {
            return (
              <Phone
                key={phone.id}
                appImage={phone.image}
                data-state={getState(phone.id)}
                className={cn(
                  "transition-all duration-300 ease-in-out will-change-transform",
                  phone.baseClass,
                  "-translate-1/2"
                )}
              />
            );
          })}
      </div>
    </div>
  );
};

export default PhoneSlider;
