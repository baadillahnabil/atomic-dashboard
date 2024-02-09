import type { FC, PropsWithChildren, HTMLAttributes } from "react";
import clsx from "clsx";

import styles from "./style.module.scss";

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  direction?: "row" | "column";
  align?: "start" | "center" | "end";
  justify?: "start" | "center" | "end" | "space-between" | "space-around";
}

const Box: FC<PropsWithChildren<BoxProps>> = ({
  children,
  className,
  direction = "row",
  align = "start",
  justify = "start",
  ...props
}) => {
  const classes = clsx(
    styles.box,
    styles[`box--${direction}`],
    styles[`box--align-${align}`],
    styles[`box--justify-${justify}`],
    className
  );

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Box;
