import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { useCurrentUser } from "../hooks";
import Swal from "sweetalert2";

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
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You do not have access to this panel ",
      });
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
