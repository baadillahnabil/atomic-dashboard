import type { FC, PropsWithChildren } from "react";
import clsx from "clsx";

import styles from "./style.module.scss";

export interface TypographyProps {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  size?:
    | "title"
    | "subtitle"
    | "section-title"
    | "card-title"
    | "large"
    | "medium"
    | "small"
    | "p";
  weight?: "light" | "regular" | "medium" | "bold";
  gap?: "none" | "small" | "medium" | "large";
  color?: "primary" | "secondary" | "greyed";
  className?: string;
}

const Typography: FC<PropsWithChildren<TypographyProps>> = ({
  children,
  className,
  variant,
  size = "p",
  weight = "regular",
  gap = "none",
  color = "primary",
  ...props
}) => {
  const Component = variant;
  const classes = clsx(
    styles.typography,
    styles[`typography--${size}`],
    styles[`typography--weight-${weight}`],
    styles[`typography--gap-${gap}`],
    styles[`typography--color-${color}`],
    className
  );

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

export default Typography;
