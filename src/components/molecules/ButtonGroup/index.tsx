import type { FC, PropsWithChildren } from "react";
import clsx from "clsx";

import styles from "./style.module.scss";

export interface ButtonGroupProps {
  className?: string;
  position?: "vertical" | "horizontal";
  border?: "circle" | "rounded" | "square";
  verticalGap?: "none" | "small" | "medium" | "large";
  horizontalGap?: "none" | "small" | "medium" | "large";
}

const ButtonGroup: FC<PropsWithChildren<ButtonGroupProps>> = ({
  children,
  className,
  position = "horizontal",
  border = "rounded",
  verticalGap = "none",
  horizontalGap = "none",
  ...props
}) => {
  const classes = clsx(
    styles.buttonGroup,
    styles[`buttonGroup--${position}`],
    styles[`buttonGroup--${border}`],
    styles[`buttonGroup--vertical-gap--${verticalGap}`],
    styles[`buttonGroup--horizontal-gap--${horizontalGap}`],
    className
  );

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default ButtonGroup;
