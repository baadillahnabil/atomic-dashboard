import type { FC } from "react";
import clsx from "clsx";

import styles from "./style.module.scss";

export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  src: string;
  alt: string;
  size?: "small" | "medium" | "large";
}

const Avatar: FC<AvatarProps> = ({ className, src, alt, size, ...props }) => {
  const classes = clsx(styles.avatar, styles[`avatar--${size}`], className);

  return <img className={classes} src={src} alt={alt} {...props} />;
};

export default Avatar;
