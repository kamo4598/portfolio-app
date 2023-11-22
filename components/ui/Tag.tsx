const Tag = ({
  children,
  classNames,
}: {
  children: React.ReactNode;
  classNames: string;
}) => {
  const classes = `rounded-md bg-body text-md font-bold text-primary p-2 ${classNames}`;
  return <div className={classes}>{children}</div>;
};

export default Tag;
