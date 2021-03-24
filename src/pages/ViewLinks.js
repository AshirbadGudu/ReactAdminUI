import React, { useState } from "react";
import { Navigation } from "../components";
import { CSVLink } from "react-csv";
import { Button, Card, CardContent } from "@material-ui/core";
import { Delete, GetApp } from "@material-ui/icons";
import { DataGrid } from "@material-ui/data-grid";

const ViewLinks = () => {
  const links = [];
  const [urlId, setUrlId] = useState([]);
  const columns = [
    { field: "slno", headerName: "Sl No.", width: 200 },
    { field: "linkTitle", headerName: "Link Title", width: 200 },
    { field: "url", headerName: "URL", width: 200 },

    { field: "timestamp", headerName: "Timestamp", width: 250 },
  ];
  const headers = [
    { label: "Sl No.", key: "slno" },
    { label: "Link Title", key: "linkTitle" },
    { label: "URL", key: "url" },
    { label: "Timestamp", key: "timestamp" },
  ];
  const handleDelete = async () => {
    // await database
    //   .ref(`${userData?.role === "stall" ? stallRef : stallMemberRef}/${urlId}`)
    //   .remove();
    setUrlId([]);
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
        <CSVLink
          data={links}
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
            display: urlId.length ? "block" : "none",
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
              rows={links}
              columns={columns}
              pageSize={8}
              checkboxSelection
              onRowSelected={(e) => {
                setUrlId([...urlId, e.data?.id]);
              }}
            />
          </div>
        </CardContent>
      </Card>
    </Navigation>
  );
};

export default ViewLinks;
