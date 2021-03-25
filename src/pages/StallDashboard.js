import { Card, CardContent, Grid } from "@material-ui/core";
import {
  DirectionsWalkOutlined,
  EventNote,
  Person,
  Visibility,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";

import DashboardCard from "../components/DashboardCard";
import { useVisitors } from "../hooks";
import { Bar, Pie } from "react-chartjs-2";

function StallDashboard() {
  const { visitors } = useVisitors();
  const [chartData, setChartData] = useState({});
  const [max, setMax] = useState(0);
  useEffect(() => {
    setChartData({
      labels: ["Videos", "Documents", "Appointment"],
      datasets: [
        {
          label: " of data",

          data: [1, 3, 7],
          backgroundColor: [
            "rgba(255, 99, 132, 0.9)",
            "rgba(54, 162, 235, 0.9)",
            "rgba(235, 220, 91, 0.9)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(235, 220, 91, 1)",
          ],
          borderWidth: 2,
        },
      ],
    });
    setMax(Math.max(1, 3, 7));
  }, []);

  return (
    <>
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
            data={10}
            icon={<EventNote color="primary" />}
          />
        </Grid>
        <Grid item lg={3} xs={12}>
          <DashboardCard
            title={"Catalog"}
            data={10}
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
        <Grid item lg={6} sm={12} xs={12}>
          <Card>
            <CardContent>
              <Bar
                data={chartData}
                width={100}
                height={70}
                options={{
                  scales: {
                    yAxes: [
                      {
                        ticks: {
                          beginAtZero: true,
                          max: max + 2,
                        },
                      },
                    ],
                  },
                }}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={6} sm={12} xs={12}>
          <Card>
            <CardContent>
              <Pie data={chartData} width={100} height={70} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default StallDashboard;
