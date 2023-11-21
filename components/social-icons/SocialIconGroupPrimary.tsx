import Github from "../icons/github";
import LinkedIn from "../icons/linkedin";

const SocialIconGroupPrimary = () => {
  return (
    <div className="flex items-center">
      <a
        href="https://github.com/Amita-Roy"
        target="blank"
        className="socialIcon"
      >
        <Github />
      </a>
      <a
        href="https://www.linkedin.com/in/amita-roy/"
        target="blank"
        className="socialIcon ml-3"
      >
        <LinkedIn />
      </a>
    </div>
  );
};

export default SocialIconGroupPrimary;
