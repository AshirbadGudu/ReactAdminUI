import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { useCurrentUser } from "../hooks";

const PrivateRouter = ({ component: Component, ...rest }) => {
  const { currentUserData } = useCurrentUser();
  const role = currentUserData?.role;

  useEffect(() => {
    if (
      role !== "helpdesk" &&
      role !== "superadmin" &&
      role !== "stall" &&
      role !== "StallMember" &&
      role !== "EventManager" &&
      role !== "AuditoriumSpeaker"
    ) {
      alert("You don't have access to this panel");
      // logout();
    }
  }, [role]);

  return (
    <div>
      <Route
        {...rest}
        render={(props) =>
          currentUserData?.id ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    </div>
  );
};

export default PrivateRouter;
