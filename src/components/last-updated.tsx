interface LastUpdatedProps {
  date: string;
}

const LastUpdated = ({ date }: LastUpdatedProps) => {
  return <p className="mt-5 text-xl italic">Last updated: {date}</p>;
};

export default LastUpdated;
