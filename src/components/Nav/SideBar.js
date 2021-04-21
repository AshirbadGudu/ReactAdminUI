import React from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { ExpandLess, ExpandMore, SettingsPower } from "@material-ui/icons";
import Icon from "../../assets/icon.png";
import useMenuList from "../../hooks/useMenuList";
import { auth } from "../../config";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function Sidebar() {
  const classes = useStyles();
  const { menu } = useMenuList();
  const history = useHistory();
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
        {menu &&
          menu.map(
            (item, i) =>
              true && (
                <div key={i}>
                  {item.hasOwnProperty("collapsedItems") ? (
                    <>
                      <ListItem button onClick={item.onClick}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.name} />
                        {item.collapsed ? <ExpandLess /> : <ExpandMore />}
                      </ListItem>
                      <Collapse
                        in={item.collapsed}
                        timeout="auto"
                        unmountOnExit
                      >
                        {item.collapsedItems.map((item, i) => {
                          return (
                            <div key={i}>
                              <List component="div" disablePadding>
                                <ListItem
                                  button
                                  component={Link}
                                  to={`/${item.route}`}
                                  className={classes.nested}
                                >
                                  <ListItemIcon>{item.icon}</ListItemIcon>
                                  <ListItemText primary={item.name} />
                                </ListItem>
                              </List>
                            </div>
                          );
                        })}
                      </Collapse>
                    </>
                  ) : (
                    <ListItem button component={Link} to={`/${item.route}`}>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.name} />
                    </ListItem>
                  )}
                </div>
              )
          )}
        <Divider />
        <ListItem
          button
          onClick={async () => {
            await auth.signOut();
            history.push("/");
          }}
        >
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
