import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import {
  AccountCircle,
  Dashboard,
  DirectionsWalkOutlined,
  Edit,
  EventNote,
  ExpandLess,
  ExpandMore,
  HeadsetMic,
  LibraryBooks,
  Report,
  Settings,
  SettingsPower,
  Textsms,
  VideoCall,
  Visibility,
} from "@material-ui/icons";
import Icon from "../../assets/icon.png";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function Sidebar() {
  const classes = useStyles();
  const [openProfile, setOpenProfile] = useState(false);
  const [openCatalog, setOpenCatalog] = useState(false);
  return (
    <div>
      <List>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "10px",
          }}
        >
          <img src={Icon} alt="Exposium" style={{ width: "80%" }} />
        </div>

        <Divider />
        <ListItem button component={Link} to="/Dashboard">
          <ListItemIcon>
            <Dashboard color="primary" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            setOpenProfile(!openProfile);
            setOpenCatalog(false);
          }}
        >
          <ListItemIcon>
            <AccountCircle color="primary" />
          </ListItemIcon>
          <ListItemText primary="Profile" />
          {openProfile ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openProfile} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              component={Link}
              to="/Profile"
              className={classes.nested}
            >
              <ListItemIcon>
                <Visibility color="action" />
              </ListItemIcon>
              <ListItemText primary="View" />
            </ListItem>
          </List>
          <List component="div" disablePadding>
            <ListItem
              button
              component={Link}
              to="/EditProfile"
              className={classes.nested}
            >
              <ListItemIcon>
                <Edit color="action" />
              </ListItemIcon>
              <ListItemText primary="Edit" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button component={Link} to="/Visitors">
          <ListItemIcon>
            <DirectionsWalkOutlined color="primary" />
          </ListItemIcon>
          <ListItemText primary="Visitors" />
        </ListItem>
        <ListItem button component={Link} to="/Chat">
          <ListItemIcon>
            <Textsms color="primary" />
          </ListItemIcon>
          <ListItemText primary="Chat" />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            setOpenCatalog(!openCatalog);
            setOpenProfile(false);
          }}
        >
          <ListItemIcon>
            <LibraryBooks color="primary" />
          </ListItemIcon>
          <ListItemText primary="Catalog" />
          {openCatalog ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openCatalog} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              component={Link}
              to="/Catalog"
              className={classes.nested}
            >
              <ListItemIcon>
                <Visibility color="action" />
              </ListItemIcon>
              <ListItemText primary="View" />
            </ListItem>
          </List>
          <List component="div" disablePadding>
            <ListItem
              button
              component={Link}
              to="/EditCatalog"
              className={classes.nested}
            >
              <ListItemIcon>
                <Edit color="action" />
              </ListItemIcon>
              <ListItemText primary="Edit" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button component={Link} to="/Appointment">
          <ListItemIcon>
            <EventNote color="primary" />
          </ListItemIcon>
          <ListItemText primary="Appointment" />
        </ListItem>
        <ListItem button component={Link} to="/Videocall">
          <ListItemIcon>
            <VideoCall color="primary" />
          </ListItemIcon>
          <ListItemText primary="VideoCall" />
        </ListItem>
        <ListItem button component={Link} to="/Support">
          <ListItemIcon>
            <HeadsetMic color="primary" />
          </ListItemIcon>
          <ListItemText primary="Support" />
        </ListItem>
        <ListItem button component={Link} to="/Report">
          <ListItemIcon>
            <Report color="primary" />
          </ListItemIcon>
          <ListItemText primary="Report" />
        </ListItem>
        <ListItem button component={Link} to="/Setting">
          <ListItemIcon>
            <Settings color="primary" />
          </ListItemIcon>
          <ListItemText primary="Setting" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/Dashboard">
          <ListItemIcon>
            <SettingsPower color="secondary" />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  );
}

export default Sidebar;
