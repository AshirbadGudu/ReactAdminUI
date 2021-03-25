import { Button, Card, CardContent } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { GetApp } from "@material-ui/icons";
import React from "react";
import { CSVLink } from "react-csv";
import { Navigation } from "../components";

const UsersData = () => {
  const reportData = [];
  const columns = [
    { field: "slno", headerName: "Sl No.", width: 100 },
    { field: "name", headerName: "Display Name", width: 230 },
    { field: "email", headerName: "Email", width: 280 },
    { field: "phoneNumber", headerName: "Phone Number", width: 230 },
    { field: "ageRef", headerName: "Age", width: 130 },
    { field: "countryRef", headerName: "Country", width: 130 },
    { field: "resident", headerName: "City", width: 230 },
    {
      field: "dateOfRegistration",
      headerName: "Date Of Registation",
      width: 180,
    },
    { field: "genderRef", headerName: "Gender", width: 130 },
    { field: "gradeRef", headerName: "Grade", width: 230 },
    { field: "organization", headerName: "Organisation", width: 230 },
    { field: "schoolRef", headerName: "School", width: 230 },
    { field: "systemRef", headerName: "System", width: 230 },
    { field: "studyAreaRef", headerName: "Study Area", width: 230 },
  ];
  return (
    <Navigation>
      {" "}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: 10,
        }}
      >
        <CSVLink data={reportData} style={{ textDecoration: "none" }}>
          <Button startIcon={<GetApp />} variant="contained" component="label">
            Export
          </Button>
        </CSVLink>
      </div>
      <Card>
        <CardContent>
          <div style={{ height: 650, width: "100%" }}>
            <DataGrid rows={reportData} columns={columns} pageSize={10} />
          </div>
        </CardContent>
      </Card>
    </Navigation>
  );
};

export default UsersData;
