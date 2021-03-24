import React from "react";
import { StallDashboard } from ".";
import { Navigation } from "../components";
import { useCurrentUser } from "../hooks";

const Dashboard = () => {
  const { currentUserData } = useCurrentUser();
  return (
    <Navigation>
      {currentUserData.role === "stall" && <StallDashboard />}
    </Navigation>
  );
};

export default Dashboard;
