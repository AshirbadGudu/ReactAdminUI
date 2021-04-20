import React, { lazy, Suspense } from "react";
import { Switch } from "react-router-dom";
import { PrivateRouter } from ".";
import { NotFound } from "../pages";

const PrivateRoutes = () => {
  const LazyDashBoard = lazy(() => import("../pages/Dashboard"));
  const LazyProfile = lazy(() => import("../pages/Profile"));
  const LazyProfileEdit = lazy(() => import("../pages/ProfileEdit"));
  const LazyChat = lazy(() => import("../pages/Chat"));
  const LazySupport = lazy(() => import("../pages/Support"));
  const LazyPasswordSetting = lazy(() => import("../pages/PasswordSetting"));
  return (
    <Switch>
      <Suspense fallback={"Loading"}>
        <PrivateRouter path="/" exact component={LazyDashBoard} />
        <PrivateRouter path="/Dashboard" exact component={LazyDashBoard} />
        <PrivateRouter path="/Profile" exact component={LazyProfile} />
        <PrivateRouter path="/EditProfile" exact component={LazyProfileEdit} />
        <PrivateRouter path="/Chat" exact component={LazyChat} />
        <PrivateRouter path="/Support" exact component={LazySupport} />
        <PrivateRouter
          path="/PasswordSetting"
          exact
          component={LazyPasswordSetting}
        />
      </Suspense>
      <PrivateRouter path="*" component={NotFound} />
    </Switch>
  );
};

export default PrivateRoutes;
