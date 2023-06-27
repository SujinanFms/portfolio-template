import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import DashboardIndex from "../pages/dashboard/DashboardIndex";
import Employee from "../pages/employee/Employee";
import ComponentPageLayout from "../pages/component/ComponentPageLayout";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import Account from "../pages/component/Account";
import Maintenance from "../pages/component/Maintenance";
import General from "../pages/component/General";
import Calendar from "../pages/Calendar/Calendar";
import Rerort from "../pages/Report/Report";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home",
  },
  {
    path: "/dashboard",
    element: <DashboardIndex />,
    state: "dashboard",
    sidebarProps: {
      displayText: "Dashboard",
      icon: <DashboardOutlinedIcon />,
    },
  },
  {
    path: "/installation",
    element: <Calendar />,
    state: "calendar",
    sidebarProps: {
      displayText: "Calendar",
      icon: <CalendarMonthIcon />,
    },
  },
  {
    path: "/component",
    element: <Employee />,
    state: "employee",
    sidebarProps: {
      displayText: "People",
      icon: <SupervisorAccountIcon />,
    },
  },
  {
    path: "/documentation",
    element: <Rerort />,
    state: "Report",
    sidebarProps: {
      displayText: "Report",
      icon: <ArticleOutlinedIcon />,
    },
  },
  {
    path: "/component",
    element: <ComponentPageLayout />,
    state: "component",
    sidebarProps: {
      displayText: "Components",
      icon: <AppsOutlinedIcon />,
    },
    child: [
      {
        path: "/component/account",
        element: <Account />,
        state: "account",
        sidebarProps: {
          displayText: "Account",
        },
      },
      {
        path: "/component/maintenance",
        element: <Maintenance />,
        state: "maintenance",
        sidebarProps: {
          displayText: "Maintenance",
        },
      },
      {
        path: "/component/general",
        element: <General />,
        state: "general",
        sidebarProps: {
          displayText: "General",
        },
      },
    ],
  },
];

export default appRoutes;
