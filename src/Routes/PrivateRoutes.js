import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  Appointment,
  Catalog,
  CatalogEdit,
  Chat,
  Dashboard,
  NotFound,
  PasswordSetting,
  Profile,
  ProfileEdit,
  Report,
  Support,
  VideoCall,
  Visitors,
} from "../pages";

const PrivateRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/Dashboard" exact component={Dashboard} />
      <Route path="/Visitors" exact component={Visitors} />
      <Route path="/Profile" exact component={Profile} />
      <Route path="/EditProfile" exact component={ProfileEdit} />
      <Route path="/Chat" exact component={Chat} />
      <Route path="/Catalog" exact component={Catalog} />
      <Route path="/EditCatalog" exact component={CatalogEdit} />
      <Route path="/VideoCall" exact component={VideoCall} />
      <Route path="/Appointment" exact component={Appointment} />
      <Route path="/Support" exact component={Support} />
      <Route path="/Report" exact component={Report} />
      <Route path="/PasswordSetting" exact component={PasswordSetting} />

      <Route path="/" component={NotFound} />
    </Switch>
  );
};

export default PrivateRoutes;
