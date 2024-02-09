import type { FC, PropsWithChildren, ReactNode } from "react";
import clsx from "clsx";

import styles from "./style.module.scss";

interface DashboardProps {
  className?: string;
  sidebar: ReactNode;
}

const Dashboard: FC<PropsWithChildren<DashboardProps>> = ({
  children,
  className,
  sidebar,
  ...props
}) => {
  const classes = clsx(styles.dashboard, className);

  return (
    <div className={classes} {...props}>
      <div className={styles.sidebar}>{sidebar}</div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Dashboard;
