import React from "react";
import Typography from "./typography";
import { cn } from "../../lib/utils";

const List = ({
  items,
  symbol = "•",
  symbol_color = "#4a5568",
  className,
}: {
  items: { label: React.ReactNode; sub_list?: string[] }[];
  symbol?: string;
  symbol_color?: string;
  className?: string;
}) => {
  return (
    <ul className={cn("my-4 ml-2", className)}>
      {items.map(({ label, sub_list }, index) => (
        <React.Fragment key={index}>
          <li className="flex items-center gap-x-4">
            <span className="shrink-0" style={{ color: symbol_color }}>
              {symbol}
            </span>
            <Typography>{label}</Typography>
          </li>
          {sub_list && (
            <List
              items={sub_list.map((li) => ({ label: li }))}
              symbol="○"
              className="my-2 ml-6"
            />
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default List;
