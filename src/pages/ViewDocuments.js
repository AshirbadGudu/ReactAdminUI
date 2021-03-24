import React, { useState } from "react";
import { Navigation } from "../components";
import { Button, Card, CardContent } from "@material-ui/core";
import { CloudUpload, Delete, GetApp, PresentToAll } from "@material-ui/icons";
import { CSVLink } from "react-csv";
import { Link } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";

const ViewDocuments = () => {
  const documents = [];
  const [catalogRef, setCatalogRef] = useState([]);
  const [catalogId, setCatalogId] = useState([]);
  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "catalogTitle", headerName: "Catalog Title", width: 200 },

    { field: "timestamp", headerName: "Timestamp", width: 250 },
  ];
  const headers = [
    { label: "ID", key: "id" },
    { label: "Catalog Title", key: "catalogTitle" },
    { label: "Timestamp", key: "timestamp" },
  ];
  const previewCatalog = () => {
    // catalogRef.forEach((crf) => {
    //   storage
    //     .ref(crf)
    //     .getDownloadURL()
    //     .then((url) => {
    //       window.open(url);
    //     });
    // });
  };
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
          Add
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
            onClick={previewCatalog}
            startIcon={<PresentToAll />}
            variant="contained"
            color="primary"
            style={{ margin: "10px" }}
          >
            Preview
          </Button>

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

export default ViewDocuments;
