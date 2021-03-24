import React from "react";
import { Switch } from "react-router-dom";
import { PrivateRouter } from ".";
import {
  AddMember,
  Appointment,
  Chat,
  Dashboard,
  NotFound,
  PasswordSetting,
  Profile,
  ProfileEdit,
  Support,
  ViewMember,
} from "../pages";

const PrivateRoutes = () => {
  return (
    <Switch>
      <PrivateRouter path="/" exact component={Dashboard} />
      <PrivateRouter path="/Dashboard" exact component={Dashboard} />
      <PrivateRouter path="/Profile" exact component={Profile} />
      <PrivateRouter path="/EditProfile" exact component={ProfileEdit} />
      <PrivateRouter path="/Chat" exact component={Chat} />
      <PrivateRouter path="/Support" exact component={Support} />
      <PrivateRouter path="/Appointment" exact component={Appointment} />
      <PrivateRouter path="/ViewMember" exact component={ViewMember} />
      <PrivateRouter path="/AddMember" exact component={AddMember} />
      {/* <PrivateRouter path="/Appointment" exact component={Appointment} /> */}
      {/* <PrivateRouter path="/Appointment" exact component={Appointment} /> */}
      {/* <PrivateRouter path="/Appointment" exact component={Appointment} /> */}
      {/* <PrivateRouter path="/Appointment" exact component={Appointment} /> */}
      {/* <PrivateRouter path="/Appointment" exact component={Appointment} /> */}
      {/* <PrivateRouter path="/Appointment" exact component={Appointment} /> */}
      {/* <PrivateRouter path="/Appointment" exact component={Appointment} /> */}
      {/* <PrivateRouter path="/Appointment" exact component={Appointment} /> */}
      {/* <PrivateRouter path="/Appointment" exact component={Appointment} /> */}
      {/* <PrivateRouter path="/Appointment" exact component={Appointment} /> */}
      {/* <PrivateRouter path="/Appointment" exact component={Appointment} /> */}
      {/* <PrivateRouter path="/Appointment" exact component={Appointment} /> */}
      {/* <PrivateRouter path="/Appointment" exact component={Appointment} /> */}
      {/* <PrivateRouter path="/Appointment" exact component={Appointment} /> */}
      {/* <PrivateRouter path="/Appointment" exact component={Appointment} /> */}

      <PrivateRouter
        path="/PasswordSetting"
        exact
        component={PasswordSetting}
      />
      <PrivateRouter path="*" component={NotFound} />
    </Switch>
  );
};

export default PrivateRoutes;
