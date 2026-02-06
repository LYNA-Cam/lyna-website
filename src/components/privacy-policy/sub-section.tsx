import React from "react";

const SubSection = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl mt-8 text-[#4a5568] font-semibold">{title}</h3>
      {children}
    </div>
  );
};

export default SubSection;
