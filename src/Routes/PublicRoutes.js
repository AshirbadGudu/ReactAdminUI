import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { NotFound } from "../pages";

const PublicRoutes = () => {
  const LazyLogin = lazy(() => import("../pages/Login"));
  const LazyForgetPassword = lazy(() => import("../pages/ForgetPassword"));
  return (
    <Switch>
      <Suspense fallback={"Loading..."}>
        <Route path="/" exact component={LazyLogin} />
        <Route path="/Login" exact component={LazyLogin} />
        <Route path="/ForgetPassword" exact component={LazyForgetPassword} />
      </Suspense>
      <Route path="/" component={NotFound} />
    </Switch>
  );
};

export default PublicRoutes;
