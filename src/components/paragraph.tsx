interface ParagraphProps {
  children: React.ReactNode;
}

const Paragraph = ({ children }: ParagraphProps) => {
  return <p className="mt-5 text-xl">{children}</p>;
};

export default Paragraph