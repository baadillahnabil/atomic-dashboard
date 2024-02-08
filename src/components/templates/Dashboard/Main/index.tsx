import type { FC, ReactNode } from "react";
import clsx from "clsx";

import styles from "./style.module.scss";

interface DashboardProps {
  className?: string;
  sidebar: ReactNode;
  content: ReactNode;
}

const Dashboard: FC<DashboardProps> = ({
  className,
  sidebar,
  content,
  ...props
}) => {
  const classes = clsx(styles.dashboard, className);

  return (
    <div className={classes} {...props}>
      <div className={styles.sidebar}>{sidebar}</div>
      <div className={styles.content}>{content}</div>
    </div>
  );
};

export default Dashboard;
