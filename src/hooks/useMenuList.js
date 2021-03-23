import {
  AccountCircle,
  Chat,
  Dashboard,
  Edit,
  Settings,
  Visibility,
} from "@material-ui/icons";
import { useEffect, useState } from "react";

const useMenuList = () => {
  const [menu, setMenu] = useState([]);
  const [openProfile, setOpenProfile] = useState(false);
  const [setting, setSetting] = useState(false);
  useEffect(() => {
    setMenu([
      {
        name: "Dashboard",
        route: "Dashboard",
        icon: <Dashboard color="primary" />,
        // stall: true,
        // StallMember: true,
      },
      {
        icon: <AccountCircle color="primary" />,
        name: "Profile",
        collapsed: openProfile,
        // stall: true,
        // StallMember: true,
        onClick: () => setOpenProfile(!openProfile),
        collapsedItems: [
          {
            name: "View",
            route: "Profile",
            icon: <Visibility color="action" />,
          },
          {
            name: "Edit",
            route: "EditProfile",
            icon: <Edit color="action" />,
          },
        ],
      },
      {
        name: "Chat",
        route: "Chat",
        icon: <Chat color="primary" />,
        // stall: true,
        // StallMember: true,
      },
      {
        icon: <Settings color="primary" />,
        name: "Settings",
        collapsed: setting,
        // stall: true,
        // StallMember: true,
        onClick: () => setSetting(!setting),
        collapsedItems: [
          {
            name: "Update Password",
            route: "PasswordSetting",
            icon: <Visibility color="action" />,
          },
          {
            name: "Update Email",
            route: "EditProfile",
            icon: <Edit color="action" />,
          },
        ],
      },
    ]);
  }, [openProfile, setting]);
  return { menu };
};

export default useMenuList;
