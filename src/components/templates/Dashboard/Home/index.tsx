import type { FC, ReactNode } from "react";
import clsx from "clsx";

import styles from "./style.module.scss";

interface DashboardHomeProps {
  className?: string;
  body: ReactNode;
}

const DashboardHome: FC<DashboardHomeProps> = ({
  className,
  body,
  ...props
}) => {
  const classes = clsx(styles.home, className);

  return (
    <div className={classes} {...props}>
      <div className={styles.body}>{body}</div>
      <div className={styles.rightSidebar}>this is right sidebar</div>
    </div>
  );
};

export default DashboardHome;
