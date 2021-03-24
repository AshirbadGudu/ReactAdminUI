import {
  AccountBox,
  AccountCircle,
  Add,
  Build,
  CameraEnhance,
  Chat,
  Dashboard,
  Description,
  Edit,
  EventNote,
  Group,
  GroupAdd,
  HeadsetMic,
  Link,
  LocalActivity,
  NoteAdd,
  Pageview,
  PersonAdd,
  Photo,
  RateReview,
  RecordVoiceOver,
  Settings,
  Storefront,
  SupervisedUserCircle,
  Update,
  ViewAgenda,
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
  const [openDocuments, setOpenDocuments] = useState(false);
  const [openAgenda, setOpenAgenda] = useState(false);
  const [openLogo, setOpenLogo] = useState(false);
  const [openLeadpage, setOpenLeadpage] = useState(false);
  const [openEvent, setOpenEvent] = useState(false);
  const [openSpeaker, setOpenSpeaker] = useState(false);
  useEffect(() => {
    setMenu([
      //For All Dashboard
      {
        name: "Dashboard",
        route: "StallDashboard",
        icon: <Dashboard color="primary" />,
        stall: true,
        StallMember: true,
        superadmin: true,
        helpdesk: true,
      },
      {
        name: "Chat",
        route: "Chat",
        icon: <Chat color="primary" />,
        stall: true,
        StallMember: true,
      },
      {
        name: "Appointment",
        route: "Appointment",
        icon: <EventNote color="primary" />,
        stall: true,
        StallMember: true,
      },
      {
        icon: <AccountCircle color="primary" />,
        name: "Profile",
        collapsed: openProfile,
        stall: true,
        StallMember: true,

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
        stall: true,
        StallMember: false,

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
            icon: <PersonAdd color="action" />,
          },
        ],
      },
      {
        icon: <Storefront color="primary" />,
        name: "Stall Info",
        collapsed: openStore,
        stall: true,
        StallMember: false,

        onClick: () => setOpenStore(!openStore),
        collapsedItems: [
          {
            name: "Update Stall",
            route: "UpdateStall",
            icon: <Update color="action" />,
          },
          {
            name: "Stall Details",
            route: "StallDetails",
            icon: <Add color="action" />,
          },
        ],
      },
      {
        icon: <YouTube color="primary" />,
        name: "Promotion Video",
        collapsed: openVideo,
        stall: true,
        StallMember: true,

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
        name: "Link",
        collapsed: openLinks,
        stall: true,
        StallMember: true,

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
        icon: <Description color="primary" />,
        name: "Documents",
        collapsed: openDocuments,
        stall: true,
        StallMember: true,

        onClick: () => setOpenDocuments(!openDocuments),
        collapsedItems: [
          {
            name: "Add Document",
            route: "AddDocument",
            icon: <NoteAdd color="action" />,
          },
          {
            name: "View Documents",
            route: "ViewDocuments",
            icon: <Pageview color="action" />,
          },
        ],
      },
      //superAdmin DashBoard Menu
      {
        name: "Exhibitors",
        route: "Exhibitors",
        icon: <AccountBox color="primary" />,
        superadmin: true,
      },
      {
        name: "Users Data",
        route: "UsersData",
        icon: <Group color="primary" />,
        superadmin: true,
      },
      {
        name: "Manage Role",
        route: "ManageRole",
        icon: <Build color="primary" />,
        superadmin: true,
      },
      {
        name: "Online Users",
        route: "OnlineUsersData",
        icon: <SupervisedUserCircle color="primary" />,
        superadmin: true,
      },
      //HelpDesk
      {
        name: "Live Chat",
        route: "LiveChat",
        icon: <Chat color="primary" />,
        helpdesk: true,
      },
      {
        icon: <ViewAgenda color="primary" />,
        name: "Manage Agenda",
        collapsed: openAgenda,
        helpdesk: true,

        onClick: () => setOpenAgenda(!openAgenda),
        collapsedItems: [
          {
            name: "Add Agenda",
            route: "AddDocument",
            icon: <Add color="action" />,
          },
          {
            name: "View Agenda",
            route: "ViewDocuments",
            icon: <ViewAgenda color="action" />,
          },
        ],
      },
      {
        icon: <Photo color="primary" />,
        name: "Participants Logo",
        collapsed: openLogo,
        helpdesk: true,

        onClick: () => setOpenLogo(!openLogo),
        collapsedItems: [
          {
            name: "Add Logo",
            route: "AddLogo",
            icon: <Add color="action" />,
          },
          {
            name: "View Logo",
            route: "ViewLogo",
            icon: <CameraEnhance color="action" />,
          },
        ],
      },
      {
        icon: <EventNote color="primary" />,
        name: "Lead Page Data",
        collapsed: openLeadpage,
        helpdesk: true,

        onClick: () => setOpenLeadpage(!openLeadpage),
        collapsedItems: [
          {
            name: "Add Lead Page Data",
            route: "AddLeadPageData",
            icon: <NoteAdd color="action" />,
          },
          {
            name: "View Lead Page Data",
            route: "ViewLeadPageData",
            icon: <RateReview color="action" />,
          },
        ],
      },
      {
        icon: <LocalActivity color="primary" />,
        name: "Manage Event",
        collapsed: openEvent,
        helpdesk: true,

        onClick: () => setOpenEvent(!openEvent),
        collapsedItems: [
          {
            name: "Add Event",
            route: "AddEvent",
            icon: <Add color="action" />,
          },
          {
            name: "View Events",
            route: "ViewEvents",
            icon: <RateReview color="action" />,
          },
        ],
      },
      {
        icon: <RecordVoiceOver color="primary" />,
        name: "Speaker",
        collapsed: openSpeaker,
        helpdesk: true,

        onClick: () => setOpenSpeaker(!openSpeaker),
        collapsedItems: [
          {
            name: "Add Speaker",
            route: "AddSpeaker",
            icon: <PersonAdd color="action" />,
          },
          {
            name: "View Speaker",
            route: "ViewSpeaker",
            icon: <Visibility color="action" />,
          },
        ],
      },

      //For All
      {
        name: "Support",
        route: "Support",
        icon: <HeadsetMic color="primary" />,
        stall: true,
        StallMember: true,
        helpdesk: true,
      },

      {
        icon: <Settings color="primary" />,
        name: "Settings",
        collapsed: setting,
        stall: true,
        StallMember: true,
        superadmin: true,
        helpdesk: true,
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
  }, [
    openAgenda,
    openDocuments,
    openEvent,
    openLeadpage,
    openLinks,
    openLogo,
    openMember,
    openProfile,
    openSpeaker,
    openStore,
    openVideo,
    setting,
  ]);
  return { menu };
};

export default useMenuList;
