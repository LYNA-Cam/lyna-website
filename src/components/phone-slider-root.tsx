import React, { useState } from "react";
import { PhoneSliderContext } from "../contexts/PhoneSliderContext";

type PhoneConfig = {
  id: number;
  image: string;
  baseClass: string;
};

interface PhoneSliderProps {
  data: PhoneConfig[];
  children?: React.ReactNode;
}

const PhoneSliderRoot: React.FC<PhoneSliderProps> = ({ data, children }) => {
  const [current, setCurrent] = useState<number>(1);

  return (
    <PhoneSliderContext.Provider
      value={{ current, setCurrent, max: data.length, data }}
    >
      {children}
    </PhoneSliderContext.Provider>
  );
};

export default PhoneSliderRoot;
