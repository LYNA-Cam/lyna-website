import type React from "react";
import { cn } from "../lib/utils";
import type { HtmlHTMLAttributes } from "react";

interface PhoneProps extends HtmlHTMLAttributes<HTMLDivElement> {
  appImage: string;
}

const Phone: React.FC<PhoneProps> = ({ appImage, className, ...props }) => {
  return (
    <figure
      className={cn(
        "origin-[50%_50%_0px] aspect-[.496013] h-auto w-[229px] absolute",
        className
      )}
      {...props}
    >
      <div className="rounded-3xl origin-[50%_50%_0px] absolute inset-[9px_12px_6px_11px]">
        <div className="absolute inset-0">
          <img
            src={appImage}
            className="size-full object-[center_top] object-cover"
          />
        </div>
      </div>
      <div className="origin-[50%_50%_0px] h-auto aspect-[.496013] absolute top-0 left-0.5 right-0.5">
        <div className="absolute inset-0">
          <img
            src="/mobile-frame.avif"
            className="size-full object-[center_top] object-cover"
          />
        </div>
      </div>
    </figure>
  );
};

export default Phone;
