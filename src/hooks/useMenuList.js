import {
  AccountCircle,
  Add,
  Chat,
  Dashboard,
  Edit,
  EventNote,
  GroupAdd,
  Link,
  Settings,
  Storefront,
  Update,
  Visibility,
  YouTube,
} from "@material-ui/icons";
import { useEffect, useState } from "react";

const useMenuList = () => {
  const [menu, setMenu] = useState([]);
  const [openProfile, setOpenProfile] = useState(false);
  const [setting, setSetting] = useState(false);
  const [openMember, setOpenMember] = useState(false);
  const [openStore, setOpenStore] = useState(false);
  const [openVideo, setOpenVideo] = useState(false);
  const [openLinks, setOpenLinks] = useState(false);
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
        icon: <Storefront color="primary" />,
        name: "Stall Info",
        collapsed: openStore,
        // stall: true,
        // StallMember: true,
        onClick: () => setOpenStore(!openStore),
        collapsedItems: [
          {
            name: "Update Stall",
            route: "UpdateStall",
            icon: <Update color="action" />,
          },
          {
            name: "StallDetails",
            route: "StallDetails",
            icon: <Add color="action" />,
          },
        ],
      },
      {
        icon: <YouTube color="primary" />,
        name: "Promotion Video",
        collapsed: openVideo,
        // stall: true,
        // StallMember: true,
        onClick: () => setOpenVideo(!openVideo),
        collapsedItems: [
          {
            name: "Add Video",
            route: "AddVideo",
            icon: <Add color="action" />,
          },
          {
            name: "View Video",
            route: "ViewVideo",
            icon: <Visibility color="action" />,
          },
        ],
      },
      {
        icon: <Link color="primary" />,
        name: "Add Link",
        collapsed: openLinks,
        // stall: true,
        // StallMember: true,
        onClick: () => setOpenLinks(!openLinks),
        collapsedItems: [
          {
            name: "Add Link",
            route: "AddLink",
            icon: <Add color="action" />,
          },
          {
            name: "View Links",
            route: "ViewLinks",
            icon: <Visibility color="action" />,
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
  }, [openLinks, openMember, openProfile, openStore, openVideo, setting]);
  return { menu };
};

export default useMenuList;
