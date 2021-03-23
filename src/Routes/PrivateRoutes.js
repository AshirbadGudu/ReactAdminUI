import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  Chat,
  Dashboard,
  NotFound,
  PasswordSetting,
  Profile,
  ProfileEdit,
  Support,
} from "../pages";

const PrivateRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/Dashboard" exact component={Dashboard} />
      <Route path="/Profile" exact component={Profile} />
      <Route path="/EditProfile" exact component={ProfileEdit} />
      <Route path="/Chat" exact component={Chat} />
      <Route path="/Support" exact component={Support} />
      <Route path="/PasswordSetting" exact component={PasswordSetting} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default PrivateRoutes;
