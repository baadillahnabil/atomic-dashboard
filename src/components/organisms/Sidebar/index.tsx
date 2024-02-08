import type { FC } from "react";
import clsx from "clsx";

import Button from "atoms/Button";
import Icon from "atoms/Icons";
import HomeIcon from "@/src/components/atoms/Icons/Home";
import BellIcon from "@/src/components/atoms/Icons/Bell";
import ClockIcon from "@/src/components/atoms/Icons/Clock";
import PeopleIcon from "@/src/components/atoms/Icons/People";
import WalletIcon from "@/src/components/atoms/Icons/Wallet";
import SettingsIcon from "@/src/components/atoms/Icons/Settings";
import ButtonGroup from "molecules/ButtonGroup";

import styles from "./style.module.scss";

interface SidebarProps {
  className?: string;
  logo?: string;
}

const Sidebar: FC<SidebarProps> = ({ className, ...props }) => {
  const classes = clsx(styles.sidebar, className);

  return (
    <div className={classes} {...props}>
      <p>logo</p>
      <ButtonGroup border="circle" position="vertical" verticalGap="medium">
        <Button variant="icon" border="circle" color="primary">
          <Icon icon={HomeIcon} />
        </Button>
        <Button variant="icon" border="circle" color="none">
          <Icon icon={BellIcon} />
        </Button>
        <Button variant="icon" border="circle" color="none">
          <Icon icon={ClockIcon} />
        </Button>
        <Button variant="icon" border="circle" color="none">
          <Icon icon={PeopleIcon} />
        </Button>
        <Button variant="icon" border="circle" color="none">
          <Icon icon={WalletIcon} />
        </Button>
        <Button variant="icon" border="circle" color="none">
          <Icon icon={SettingsIcon} />
        </Button>
      </ButtonGroup>
      <p>logout</p>
    </div>
  );
};

export default Sidebar;
