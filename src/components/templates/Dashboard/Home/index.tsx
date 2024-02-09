import type { FC, PropsWithChildren, ReactNode } from "react";
import clsx from "clsx";

import styles from "./style.module.scss";

interface DashboardHomeProps {
  className?: string;
  sidebar: ReactNode;
}

const DashboardHome: FC<PropsWithChildren<DashboardHomeProps>> = ({
  children,
  className,
  sidebar,
  ...props
}) => {
  const classes = clsx(styles.home, className);

  return (
    <div className={classes} {...props}>
      <div className={styles.body}>{children}</div>
      <div className={styles.rightSidebar}>{sidebar}</div>
    </div>
  );
};

export default DashboardHome;
