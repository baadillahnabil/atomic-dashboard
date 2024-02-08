import type { FC } from "react";
import clsx from "clsx";

import Button from "atoms/Button";
import Icon from "atoms/Icons";
import SearchIcon from "atoms/Icons/Search";
import Title, { type TitleProps } from "molecules/Title";

import styles from "./style.module.scss";

interface HeaderProps {
  className?: string;
  title: {
    text: string;
    titleProps?: TitleProps;
  };
}

const Header: FC<HeaderProps> = ({ className, title, ...props }) => {
  const classes = clsx(styles.header, className);

  return (
    <div className={classes} {...props}>
      <Title {...title.titleProps}>{title.text}</Title>
      <Button variant="icon" border="circle" color="plain">
        <Icon icon={SearchIcon} />
      </Button>
    </div>
  );
};

export default Header;
