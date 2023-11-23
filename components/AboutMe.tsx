import { TypeAnimation } from "react-type-animation";
const AboutMe = () => {
  return (
    <div className="flex w-full mt-5 min-h-[75vh] justify-center items-center text-6xl font-sans font-thin">
      <div className="flex flex-col justify-center items-center text-center px-5">
        <p>
          Hello, I&apos;m&nbsp;
          <span className="text-[#ff4d5a]">Hassan</span>.
        </p>
        <br />
        <TypeAnimation
          sequence={[
            "I'm a problem solver.",
            1000,
            "I'm a full stack web developer.",
            1000,
            "I'm a game-changer in tech solutions.",
            1000,
          ]}
          wrapper="span"
          speed={20}
        />
      </div>
    </div>
  );
};

export default AboutMe;
