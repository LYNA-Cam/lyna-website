interface SectionHeadingProps {
  children: React.ReactNode;
}

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return <h3 className="text-2xl mt-10 font-bold">{children}</h3>;
};

export default SectionHeading;
