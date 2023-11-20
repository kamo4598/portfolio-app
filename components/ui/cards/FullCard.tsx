import { ReactNode } from "react";

const FullCard = ({
  bgUrl = "/cover.jpg",
  heading,
  barColor = "yellow",
  children,
}: {
  bgUrl?: string;
  heading?: string;
  barColor?: string;
  children: ReactNode;
}) => {
  const divStyle = {
    backgroundImage: `url(${bgUrl})`,
  };
  return (
    <section className="px-5 py-10">
      <article
        className="mx-auto max-w-sm shadow-xl bg-cover bg-center transform duration-500 hover:-translate-y-2 cursor-pointer group"
        style={divStyle}
      >
        <div className="bg-black bg-opacity-20 min-h-[36rem] px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300">
          <h1 className="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
            {heading}
          </h1>
          <div
            className={`w-16 h-2 bg-${barColor}-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300`}
          ></div>
          <div className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
            {children}
          </div>
        </div>
      </article>
    </section>
  );
};

export default FullCard;
