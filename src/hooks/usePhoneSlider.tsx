import { useContext } from "react";
import { PhoneSliderContext } from "../contexts/PhoneSliderContext";

export const usePhoneSlider = () => {
  const ctx = useContext(PhoneSliderContext);

  if (!ctx) {
    throw new Error("Must wrapped PhoneSliderContext");
  }

  return ctx;
};
