import classes from "./GlowingCard.module.css";
const GlowingCard = ({
  title,
  color,
  children,
  redirectTo = "#",
}: {
  title: string;
  color: string;
  children: React.ReactNode;
  redirectTo?: string;
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.box} id={classes[color]}>
        <span> </span>
        <div className={classes.content}>
          <h2>{title}</h2>
          <div>{children}</div>
          {redirectTo === "#" ? null : <a href="#">Read More</a>}
        </div>
      </div>
    </div>
  );
};

export default GlowingCard;
