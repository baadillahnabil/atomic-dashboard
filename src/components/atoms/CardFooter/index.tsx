import type { FC, PropsWithChildren } from "react";
import clsx from "clsx";

import styles from "./style.module.scss";

export interface CardFooterProps {
  className?: string;
  placement?: "left" | "right" | "center" | "space-between";
  compact?: boolean;
  fullWidth?: boolean;
}

const CardFooter: FC<PropsWithChildren<CardFooterProps>> = ({
  children,
  className,
  placement = "left",
  compact = false,
  fullWidth = false,
  ...props
}) => {
  const classes = clsx(
    styles.cardFooter,
    styles[`cardFooter--${placement}`],
    compact && styles[`cardFooter--compact`],
    fullWidth && styles[`cardFooter--fullWidth`],
    className
  );

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default CardFooter;
