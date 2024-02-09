import type { FC, PropsWithChildren, ReactNode } from "react";
import clsx from "clsx";

import CardHeader, { type CardHeaderProps } from "atoms/CardHeader";
import CardFooter, { type CardFooterProps } from "atoms/CardFooter";

import styles from "./style.module.scss";

interface CardProps {
  className?: string;
  header?: ReactNode;
  headerProps?: CardHeaderProps;
  footer?: ReactNode;
  footerProps?: CardFooterProps;
  bordered?: boolean;
  rounded?: boolean;
  shadow?: boolean;
}

const Card: FC<PropsWithChildren<CardProps>> = ({
  className,
  children,
  header,
  headerProps,
  footer,
  footerProps,
  bordered = false,
  rounded = true,
  shadow = false,
  ...props
}) => {
  const classes = clsx(
    styles.card,
    bordered && styles[`card--bordered`],
    rounded && styles[`card--rounded`],
    shadow && styles[`card--shadow`],
    className
  );

  return (
    <div className={classes} {...props}>
      {header && <CardHeader {...headerProps}>{header}</CardHeader>}
      {children}
      {footer && <CardFooter {...footerProps}>{footer}</CardFooter>}
    </div>
  );
};

export default Card;
