import type { FC } from "react";
import clsx from "clsx";

import styles from "./style.module.scss";

export interface ProgressProps {
  className?: string;
  value: number;
}

const Progress: FC<ProgressProps> = ({ className, value, ...props }) => {
  const classes = clsx(styles.progress, className);

  return (
    <div className={classes}>
      <div className={styles.progressBar} style={{ width: `${value}%` }} />
    </div>
  );
};

export default Progress;
