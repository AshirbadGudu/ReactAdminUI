import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Navigation } from "../components";
import { Button, Card, CardContent, Snackbar } from "@material-ui/core";

import { Delete } from "@material-ui/icons";

import Alert from "@material-ui/lab/Alert";

const Exhibitors = () => {
  const columns = [
    { field: "sl", headerName: "Sl No.", width: 100 },
    { field: "companyName", headerName: "Company Name", width: 230 },
    { field: "stallName", headerName: "Stall Name", width: 230 },
    { field: "category", headerName: "Category", width: 230 },
    { field: "email", headerName: "Email", width: 230 },
    { field: "description", headerName: "Description", width: 330 },
  ];

  // const headers = [
  //   { label: "Sl No.", key: "sl" },
  //   { label: "Company Name", key: "companyName" },
  //   { label: "Stall Name", key: "stallName" },
  //   { label: "Category", key: "category" },
  //   { label: "Email", key: "email" },
  //   { label: "Description", key: "description" },
  // ];
  const [display, setDisplay] = useState(false);
  const [exhibitorsUid, setexhibitorsUid] = useState([]);
  const [showAlert, setShowAlert] = useState({
    msg: "",
    isOpen: false,
    color: "",
  });
  const exihibitors = [];
  const handleDelete = async () => {
    try {
      // await exhibitorsUid.forEach((eid) => {
      //   database.ref(`Users/${eid}/role`).remove();
      // });
      // await exhibitorsUid.forEach((eid) => {
      //   database.ref(`EXHIBITORS/${eid}`).remove();
      // });
      setShowAlert({
        msg: "Successfull Deleted Exhibitor",
        isOpen: true,
        color: "success",
      });
    } catch (error) {
      setShowAlert({ msg: error.message, isOpen: true, color: "error" });
    }
  };
  return (
    <Navigation>
      <Card>
        <CardContent>
          <div
            style={{
              display: display ? "block" : "none",
              transition: "ease-out",
            }}
          >
            <Button
              startIcon={<Delete />}
              variant="contained"
              color="secondary"
              style={{ margin: "10px" }}
              onClick={handleDelete}
            >
              Remove Exhibitors
            </Button>
          </div>

          <div style={{ height: 650, width: "100%" }}>
            <DataGrid
              rows={exihibitors}
              columns={columns}
              pageSize={10}
              checkboxSelection
              onRowSelected={({ data, isSelected }) => {
                setDisplay(isSelected);
                setexhibitorsUid([
                  ...exhibitorsUid,
                  data?.id || data?.signinInfo?.uid,
                ]);
              }}
            ></DataGrid>
          </div>
          <Snackbar
            open={showAlert.isOpen}
            autoHideDuration={6000}
            onClose={() => setShowAlert({ msg: "", isOpen: false, color: "" })}
          >
            <Alert
              onClose={() =>
                setShowAlert({ msg: "", isOpen: false, color: "" })
              }
              severity={showAlert.color}
            >
              {showAlert.msg}
            </Alert>
          </Snackbar>
        </CardContent>
      </Card>
    </Navigation>
  );
};

export default Exhibitors;
