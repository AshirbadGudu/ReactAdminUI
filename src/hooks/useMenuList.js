import {
  AccountCircle,
  Add,
  Chat,
  Dashboard,
  Edit,
  EventNote,
  GroupAdd,
  Settings,
  Visibility,
} from "@material-ui/icons";
import { useEffect, useState } from "react";

const useMenuList = () => {
  const [menu, setMenu] = useState([]);
  const [openProfile, setOpenProfile] = useState(false);
  const [setting, setSetting] = useState(false);
  const [openMember, setOpenMember] = useState(false);
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
        name: "Chat",
        route: "Chat",
        icon: <Chat color="primary" />,
        // stall: true,
        // StallMember: true,
      },
      {
        name: "Appointment",
        route: "Appointment",
        icon: <EventNote color="primary" />,
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
        icon: <GroupAdd color="primary" />,
        name: "Member Manage",
        collapsed: openMember,
        // stall: true,
        // StallMember: true,
        onClick: () => setOpenMember(!openMember),
        collapsedItems: [
          {
            name: "View Member",
            route: "ViewMember",
            icon: <Visibility color="action" />,
          },
          {
            name: "Add Member",
            route: "AddMember",
            icon: <Add color="action" />,
          },
        ],
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
  }, [openMember, openProfile, setting]);
  return { menu };
};

export default useMenuList;
