import Github from "../icons/github";
import LinkedIn from "../icons/linkedin";

const SocialIconGroupPrimary = () => {
  return (
    <div className="flex items-center">
      <a
        href="https://github.com/kamo4598"
        target="blank"
        className="socialIcon"
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

export default SocialIconGroupPrimary;
