import { cn } from "../lib/utils";

interface NumberedItemProps {
  number?: string | number;
  children: React.ReactNode;
}

const NumberedItem = ({ number, children }: NumberedItemProps) => {
  return (
    <div className={cn("mt-20 text-2xl flex gap-x-1 relative",!number&&"mt-10")}>
      {number && <span>{number}</span>}
      <h3>{children}</h3>
    </div>
  );
};

export default NumberedItem;
