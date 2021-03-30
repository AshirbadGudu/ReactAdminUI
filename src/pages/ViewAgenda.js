import React, { useState } from "react";
import { Navigation } from "../components";
import { Button, Card, CardContent } from "@material-ui/core";
import { CloudUpload, Delete, GetApp } from "@material-ui/icons";
import { CSVLink } from "react-csv";
import { Link } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";

const ViewAgenda = () => {
  const documents = [];
  const [catalogRef, setCatalogRef] = useState([]);
  const [catalogId, setCatalogId] = useState([]);
  const columns = [
    { field: "id", headerName: "Sl No", width: 100 },
    { field: "title", headerName: "Title", width: 200 },
    { field: "speakerName", headerName: "Speaker Name", width: 200 },
    { field: "startTime", headerName: "Start Time", width: 200 },
    { field: "endTime", headerName: "End Time", width: 200 },
    { field: "date", headerName: "Date", width: 200 },
    { field: "description", headerName: "Description", width: 400 },
    { field: "zoomLink", headerName: "Zoom Link", width: 200 },
  ];
  const headers = [
    { label: "Sl No.", key: "id" },
    { label: "Title", key: "title" },
    { label: "Speaker Name", key: "speakerName" },
    { label: "Start Time", key: "startTime" },
    { label: "End Time", key: "endTime" },
    { label: "Date", key: "date" },
    { label: "Description", key: "description" },
    { label: "Zoom Link", key: "zoomLink" },
  ];

  const handleDelete = async () => {
    // await catalogId.forEach((cid) => {
    //   database
    //     .ref(`${userData?.role === "stall" ? stallRef : stallMemberRef}/${cid}`)
    //     .remove();
    // });
    // await catalogRef.forEach((ref) => {
    //   storage.ref(ref).delete();
    // });
  };

  return (
    <Navigation>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "10px",
        }}
      >
        <Button
          startIcon={<CloudUpload />}
          variant="contained"
          component={Link}
          to="/UploadCatalog"
          style={{ margin: "10px" }}
        >
          Add Agenda
        </Button>
        <CSVLink
          data={documents}
          headers={headers}
          style={{ textDecoration: "none" }}
        >
          <Button
            startIcon={<GetApp />}
            variant="contained"
            component="label"
            style={{ margin: "10px" }}
          >
            Export
          </Button>
        </CSVLink>
      </div>
      <Card>
        <div
          style={{
            display: catalogId.length ? "block" : "none",
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
            Delete
          </Button>
        </div>

        <CardContent>
          <div style={{ height: 600, width: "100%" }}>
            <DataGrid
              rows={documents}
              columns={columns}
              pageSize={8}
              checkboxSelection
              onRowSelected={({ data, isSelected }) => {
                setCatalogRef([...catalogRef, data?.catalogRef]);
                setCatalogId([...catalogId, data?.id]);
              }}
            />
          </div>
        </CardContent>
      </Card>
    </Navigation>
  );
};

export default ViewAgenda;
