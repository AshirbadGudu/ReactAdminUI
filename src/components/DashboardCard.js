import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import { HelpOutline } from "@material-ui/icons";
import React from "react";

const DashboardCard = ({ title, data, icon }) => {
  return (
    <div>
      <Card>
        <CardContent>
          <Grid
            container
            justify="space-between"
            spacing={3}
            style={{ textDecoration: "none" }}
          >
            <Grid item>
              <Typography color="textPrimary" variant="h6">
                {title}
              </Typography>
              <Typography color="textPrimary" variant="h3">
                {data || "00"}
              </Typography>
            </Grid>

            <Grid item>{icon || <HelpOutline />}</Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardCard;
