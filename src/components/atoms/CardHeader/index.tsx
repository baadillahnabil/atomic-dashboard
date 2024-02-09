import type { FC, PropsWithChildren } from "react";
import clsx from "clsx";

import styles from "./style.module.scss";

export interface CardHeaderProps {
  className?: string;
  placement?: "left" | "right" | "center" | "space-between";
  compact?: boolean;
  fullWidth?: boolean;
}

const CardHeader: FC<PropsWithChildren<CardHeaderProps>> = ({
  children,
  className,
  placement = "left",
  compact = false,
  fullWidth = false,
  ...props
}) => {
  const classes = clsx(
    styles.cardHeader,
    styles[`cardHeader--${placement}`],
    compact && styles[`cardHeader--compact`],
    fullWidth && styles[`cardHeader--fullWidth`],
    className
  );

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default CardHeader;
