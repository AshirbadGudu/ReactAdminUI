import React from "react";
import { Switch } from "react-router-dom";
import { PrivateRouter } from ".";
import {
  AddDocument,
  AddEvent,
  AddLeadPageData,
  AddLink,
  AddLogo,
  AddMember,
  AddSpeaker,
  AddVideo,
  Appointment,
  Chat,
  Dashboard,
  Exhibitors,
  LiveChat,
  ManageRole,
  NotFound,
  OnlineUsersData,
  PasswordSetting,
  Profile,
  ProfileEdit,
  StallDetails,
  Support,
  UpdateStall,
  UsersData,
  ViewDocuments,
  ViewEvents,
  ViewLeadPageData,
  ViewLinks,
  ViewLogo,
  ViewMember,
  ViewSpeaker,
  ViewVideo,
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
      <PrivateRouter path="/UpdateStall" exact component={UpdateStall} />
      <PrivateRouter path="/StallDetails" exact component={StallDetails} />
      <PrivateRouter path="/AddVideo" exact component={AddVideo} />
      <PrivateRouter path="/ViewVideo" exact component={ViewVideo} />
      <PrivateRouter path="/AddLink" exact component={AddLink} />
      <PrivateRouter path="/ViewLinks" exact component={ViewLinks} />
      <PrivateRouter path="/AddDocument" exact component={AddDocument} />
      <PrivateRouter path="/ViewDocuments" exact component={ViewDocuments} />
      <PrivateRouter path="/Exhibitors" exact component={Exhibitors} />
      <PrivateRouter
        path="/OnlineUsersData"
        exact
        component={OnlineUsersData}
      />
      <PrivateRouter path="/UsersData" exact component={UsersData} />
      <PrivateRouter path="/ManageRole" exact component={ManageRole} />
      <PrivateRouter path="/LiveChat" exact component={LiveChat} />
      <PrivateRouter path="/AddLogo" exact component={AddLogo} />
      <PrivateRouter path="/ViewLogo" exact component={ViewLogo} />
      <PrivateRouter
        path="/AddLeadPageData"
        exact
        component={AddLeadPageData}
      />
      <PrivateRouter
        path="/ViewLeadPageData"
        exact
        component={ViewLeadPageData}
      />
      <PrivateRouter path="/AddEvent" exact component={AddEvent} />
      <PrivateRouter path="/ViewEvents" exact component={ViewEvents} />
      <PrivateRouter path="/AddSpeaker" exact component={AddSpeaker} />
      <PrivateRouter path="/ViewSpeaker" exact component={ViewSpeaker} />
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
