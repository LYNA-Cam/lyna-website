interface SectionContainerProps {
  title: string;
  children?: React.ReactNode;
  index: number;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  title,
  children,
  index,
}) => {
  return (
    <section id={`section-${index}`} className="relative">
      <div className="my-8">
        <h2 className="text-2xl font-semibold text-[#2d3748]">{title}</h2>
        <hr className="border-2 border-indigo-500 my-2" />
      </div>
      {children}
      <div className="w-full h-0.5 bg-linear-to-r from-transparent via-gray-300 to-transparent my-12"/>
    </section>
  );
};

export default SectionContainer;
