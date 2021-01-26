import { Grid } from "@material-ui/core";
import {
  DirectionsWalkOutlined,
  EventNote,
  Person,
  Visibility,
} from "@material-ui/icons";
import React from "react";
import { Navigation } from "../components";
import DashboardCard from "../components/DashboardCard";
import { useAppointment, useCatalog, useVisitors } from "../hooks";

function Dashboard() {
  const { visitors } = useVisitors();
  const { appointments } = useAppointment();
  const { catalogs } = useCatalog();
  return (
    <Navigation>
      <Grid container spacing={3}>
        <Grid item lg={3} xs={12}>
          <DashboardCard
            title={"Visitors"}
            data={visitors.length}
            icon={<DirectionsWalkOutlined color="primary" />}
          />
        </Grid>
        <Grid item lg={3} xs={12}>
          <DashboardCard
            title={"Appointment"}
            data={appointments.length}
            icon={<EventNote color="primary" />}
          />
        </Grid>
        <Grid item lg={3} xs={12}>
          <DashboardCard
            title={"Catalog"}
            data={catalogs.length}
            icon={<Visibility color="action" />}
          />
        </Grid>
        <Grid item lg={3} xs={12}>
          <DashboardCard
            title={"OnlineUser"}
            data={11}
            icon={<Person style={{ color: "yellowgreen" }} />}
          />
        </Grid>
      </Grid>
    </Navigation>
  );
}

export default Dashboard;
