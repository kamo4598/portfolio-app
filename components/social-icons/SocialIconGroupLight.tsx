import Github from "../icons/githubLight";
import LinkedIn from "../icons/linkedinLight";

const SocialIconGroupLight = () => {
  return (
    <div className="flex items-center justify-evenly">
      <a
        className="socialIcon"
        href="https://github.com/kamo4598/"
        target="blank"
      >
        <Github />
      </a>
      <a
        href="https://www.linkedin.com/in/hassankamran98/"
        target="blank"
        className="socialIcon ml-3"
      >
        <LinkedIn />
      </a>
    </div>
  );
};

export default SocialIconGroupLight;
