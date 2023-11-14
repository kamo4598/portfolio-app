import classes from "./Card.module.css";
const Card = ({
  title,
  color,
  children,
}: {
  title: string;
  color: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.box} id={classes[color]}>
        <span> </span>
        <div className={classes.content}>
          <h2>{title}</h2>
          <p>{children}</p>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
