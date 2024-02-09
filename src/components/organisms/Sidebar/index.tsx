import type { FC, PropsWithChildren, ReactNode } from "react";
import clsx from "clsx";

import styles from "./style.module.scss";

interface SidebarProps {
  className?: string;
  logo?: ReactNode;
  footer?: ReactNode;
}

const Sidebar: FC<PropsWithChildren<SidebarProps>> = ({
  className,
  children,
  logo,
  footer,
  ...props
}) => {
  const classes = clsx(styles.sidebar, className);

  return (
    <div className={classes} {...props}>
      <div className={styles.logo}>{logo}</div>
      <div className={styles.content}>{children}</div>
      <div className={styles.footer}>{footer}</div>
    </div>
  );
};

export default Sidebar;
