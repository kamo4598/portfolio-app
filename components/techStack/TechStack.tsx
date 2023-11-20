import GlowingCard from "../ui/cards/GlowingCard";
import Tag from "../ui/Tag";

const borderClasses = "border-double border-4 p-2";

const getBorderClass = (color: string) => {
  return `${borderClasses} border-${color}-500`;
};

const FrontEndTags = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Tag classNames={getBorderClass("green")}>React</Tag>
      <Tag classNames={getBorderClass("red")}>Next.JS</Tag>
      <Tag classNames={getBorderClass("red")}>Angular</Tag>
      <Tag classNames={getBorderClass("red")}>TypeScript</Tag>
      <Tag classNames={getBorderClass("red")}>Javascript</Tag>
      <Tag classNames={getBorderClass("red")}>HTML</Tag>
      <Tag classNames={getBorderClass("red")}>CSS</Tag>
      <Tag classNames={getBorderClass("red")}>Bootstrap</Tag>
      <Tag classNames={getBorderClass("red")}>Tailwind</Tag>
    </div>
  );
};

const BackendTags = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Tag classNames={getBorderClass("red")}>NodeJS</Tag>
      <Tag classNames={getBorderClass("red")}>Express</Tag>
      <Tag classNames={getBorderClass("red")}>.NET</Tag>
      <Tag classNames={getBorderClass("red")}>ASP.NET Web Form</Tag>
      <Tag classNames={getBorderClass("red")}>C#</Tag>
      <Tag classNames={getBorderClass("red")}>RabbitMQ</Tag>
      <Tag classNames={getBorderClass("red")}>ASP Classic</Tag>
      <Tag classNames={getBorderClass("red")}>Windows Service</Tag>
    </div>
  );
};

const DatabaseTags = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Tag classNames={getBorderClass("red")}>MongoDB</Tag>
      <Tag classNames={getBorderClass("red")}>SQL Server</Tag>
      <Tag classNames={getBorderClass("red")}>MySQL</Tag>
      <Tag classNames={getBorderClass("red")}>PostgreSQL</Tag>
      <Tag classNames={getBorderClass("red")}>Redis</Tag>
    </div>
  );
};

const TechStack = () => {
  return (
    <>
    <div className="flex w-full justify-center text-6xl font-sans font-bold pt-5">
      Tech Stacks
    </div>
      <div className="flex w-full h-auto justify-center">
        <GlowingCard color="orange" title="Frontend">
          <FrontEndTags />
        </GlowingCard>
        <GlowingCard color="purple" title="Backend">
          <BackendTags />
        </GlowingCard>
        <GlowingCard color="green" title="Databases">
          <DatabaseTags />
        </GlowingCard>
      </div>
    </>
  );
};

export default TechStack;
