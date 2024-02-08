import type { FC, PropsWithChildren, ReactNode } from "react";
import clsx from "clsx";

import Typography, { type TypographyProps } from "atoms/Typography";

import styles from "./style.module.scss";

export interface TitleProps {
  subtitle?: ReactNode;
  typographyProps?: TypographyProps;
  subtitleProps?: TypographyProps;
  gap?: "none" | "small" | "medium" | "large";
  className?: string;
}

const Title: FC<PropsWithChildren<TitleProps>> = ({
  children,
  subtitle,
  typographyProps,
  subtitleProps,
  gap = "none",
  className,
  ...props
}) => {
  const classes = clsx(styles.title, styles[`title--gap-${gap}`], className);

  return (
    <div>
      <Typography
        variant="h1"
        size="title"
        weight="bold"
        className={classes}
        {...typographyProps}
      >
        {children}
      </Typography>
      {subtitle && (
        <Typography
          variant="p"
          size="subtitle"
          weight="regular"
          {...subtitleProps}
        >
          {subtitle}
        </Typography>
      )}
    </div>
  );
};

export default Title;
