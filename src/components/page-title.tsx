interface PageTitleProps {
  children: React.ReactNode;
}

const PageTitle = ({ children }: PageTitleProps) => {
  return <h4 className="text-[40px] font-bold">{children}</h4>;
};

export default PageTitle;
