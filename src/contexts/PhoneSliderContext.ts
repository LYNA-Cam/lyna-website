import { createContext } from "react";

export type PhoneConfig = {
  id: number;
  image: string;
  baseClass: string;
};

export interface PhoneSliderContextOptions {
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  max: number;
  data: PhoneConfig[];
}

export const PhoneSliderContext = createContext<PhoneSliderContextOptions>({
  current: 1,
  setCurrent: () => {},
  max: 0,
  data: [],
});
