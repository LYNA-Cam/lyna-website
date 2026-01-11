import { usePhoneSlider } from "../hooks/usePhoneSlider";

const SliderControl = () => {
  const { current, setCurrent, max } = usePhoneSlider();
  return (
    <div className="w-full justify-center items-center flex relative z-10 gap-3">
      <button
        disabled={current === 1}
        className="bg-black text-white size-12 rounded-full disabled:bg-black/50"
        onClick={() => setCurrent((curr) => --curr)}
      >
        {"<"}
      </button>
      <button
        disabled={current === max}
        onClick={() => setCurrent((curr) => ++curr)}
        className="bg-black text-white size-12 rounded-full disabled:bg-black/50"
      >
        {">"}
      </button>
    </div>
  );
};

export default SliderControl;
