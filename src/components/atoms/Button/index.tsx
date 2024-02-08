import type { FC, PropsWithChildren, ButtonHTMLAttributes } from "react";
import clsx from "clsx";

import styles from "./style.module.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  color?: "primary" | "secondary" | "plain" | "none";
  variant?: "icon" | "text";
  border?: "circle" | "rounded" | "square";
  fullWidth?: boolean;
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  color = "primary",
  variant = "text",
  border = "rounded",
  fullWidth = false,
  ...props
}) => {
  const classes = clsx(
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${color}`],
    styles[`button--${border}`],
    fullWidth && styles["button--full"],
    className
  );

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
