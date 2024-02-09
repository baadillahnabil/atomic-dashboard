import Avatar from "atoms/Avatar";
import Button from "atoms/Button";
import Icon from "atoms/Icons";
import Typography from "atoms/Typography";
import Box from "atoms/Box";
import Divider from "atoms/Divider";
import Progress from "atoms/Progress";

import HomeIcon from "atoms/Icons/Home";
import BellIcon from "atoms/Icons/Bell";
import ClockIcon from "atoms/Icons/Clock";
import PeopleIcon from "atoms/Icons/People";
import WalletIcon from "atoms/Icons/Wallet";
import SettingsIcon from "atoms/Icons/Settings";
import ChatIcon from "atoms/Icons/Chat";
import LogoutIcon from "atoms/Icons/Logout";

import ButtonGroup from "molecules/ButtonGroup";

import Header from "organisms/Header";
import Sidebar from "organisms/Sidebar";
import Card from "@/src/components/molecules/Card";

import DashboardMainTemplate from "templates/Dashboard/Main";
import DashboardHomeTemplate from "templates/Dashboard/Home";

import Logo from "assets/images/logo.png";
import User from "assets/images/user.png";

import styles from "./style.module.scss";

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <DashboardMainTemplate
        sidebar={
          <Sidebar logo={<Avatar src={Logo} alt="logo" size="medium" />}>
            <Button variant="icon" border="circle" color="secondary">
              <Icon icon={ChatIcon} />
            </Button>
            <ButtonGroup
              border="circle"
              position="vertical"
              verticalGap="medium"
            >
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
            <ButtonGroup border="circle" position="vertical" verticalGap="none">
              <Button variant="icon" border="circle" color="none" compact>
                <Avatar src={User} alt="user_avatar" size="medium" />
              </Button>
              <Button variant="icon" border="circle" color="none">
                <Icon icon={LogoutIcon} size={20} />
              </Button>
            </ButtonGroup>
          </Sidebar>
        }
      >
        <DashboardHomeTemplate
          sidebar={
            <Card
              rounded
              bordered
              header={
                <Typography variant="h3" size="medium" weight="medium">
                  Expenses and income
                </Typography>
              }
              footer={<Progress value={75} />}
            >
              <Box justify="space-between" align="center">
                <Box direction="column">
                  <Typography variant="p" size="p" weight="medium" gap="small">
                    Expenses
                  </Typography>
                  <Typography variant="p" size="large" weight="medium">
                    75%
                  </Typography>
                  <Typography
                    variant="p"
                    size="small"
                    weight="medium"
                    color="greyed"
                  >
                    5.653
                  </Typography>
                </Box>
                <Divider orientation="vertical" text="vs" />
                <Box direction="column" align="end">
                  <Typography variant="p" size="p" weight="medium" gap="small">
                    Income
                  </Typography>
                  <Typography variant="p" size="large" weight="medium">
                    40%
                  </Typography>
                  <Typography
                    variant="p"
                    size="small"
                    weight="medium"
                    color="greyed"
                  >
                    2.656
                  </Typography>
                </Box>
              </Box>
            </Card>
          }
        >
          <Header
            title={{
              text: "Hello, Jhon .D",
              titleProps: {
                subtitle: "View and control your finances here",
                subtitleProps: { variant: "h5", size: "subtitle" },
                gap: "medium",
              },
            }}
          />
        </DashboardHomeTemplate>

        {/* 
          There will be more templates for other dashboard pages like
          notifications, settings, etc., based on the sidebar navigation. 
        */}
      </DashboardMainTemplate>
    </div>
  );
}

export default Dashboard;
