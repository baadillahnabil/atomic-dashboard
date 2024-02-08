import Header from "organisms/Header";
import Sidebar from "organisms/Sidebar";
import DashboardMainTemplate from "templates/Dashboard/Main";
import DashboardHomeTemplate from "templates/Dashboard/Home";

import styles from "./style.module.scss";

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <DashboardMainTemplate
        sidebar={<Sidebar />}
        content={
          <DashboardHomeTemplate
            body={
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
            }
          />
        }
      />
    </div>
  );
}

export default Dashboard;
