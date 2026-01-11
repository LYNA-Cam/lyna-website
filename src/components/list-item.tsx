import { cn } from "../lib/utils";

interface ListItemProps {
  children: React.ReactNode;
  className?: string;
}

const ListItem = ({ children, className }: ListItemProps) => {
  return (
    <p
      className={cn(
        "relative pl-6 before:content-['•'] before:absolute before:left-0 before:top-0 text-xl",
        className
      )}
    >
      {children}
    </p>
  );
};

export default ListItem;
