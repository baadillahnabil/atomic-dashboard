import type { FC, PropsWithChildren } from "react";
import clsx from "clsx";

import styles from "./style.module.scss";

export interface DividerProps {
  className?: string;
  orientation?: "horizontal" | "vertical";
  text?: string;
}

const Divider: FC<DividerProps> = ({
  className,
  orientation = "horizontal",
  text,
  ...props
}) => {
  const classes = clsx(
    styles.divider,
    styles[`divider--${orientation}`],
    className
  );

  return (
    <div className={classes} {...props}>
      {text && <span className={styles.text}>{text}</span>}
    </div>
  );
};

export default Divider;
