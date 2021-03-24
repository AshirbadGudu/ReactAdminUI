import { Button, Card, CardContent } from "@material-ui/core";
import { CloudUpload, Delete, GetApp } from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "../components";
import { CSVLink } from "react-csv";
import { DataGrid } from "@material-ui/data-grid";

const ViewVideo = () => {
  const video = [];
  const [videoId, setVideoId] = useState([]);
  const columns = [
    { field: "slno", headerName: "Sl No.", width: 100 },
    { field: "videoTitle", headerName: "video Title", width: 200 },
    { field: "videoLink", headerName: "videoLink", width: 300 },
    { field: "timestamp", headerName: "Timestamp", width: 250 },
  ];
  const handleDelete = () => {
    // videoId.forEach((vid) => {
    //   database
    //     .ref(`${userData?.role === "stall" ? stallRef : stallMemberRef}/${vid}`)
    //     .remove();
    // });
    setVideoId([]);
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
          to="/AddVideo"
          style={{ margin: "10px" }}
        >
          Add
        </Button>
        <CSVLink
          data={video}
          // headers={headers}
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
            display: videoId.length ? "block" : "none",
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
              rows={video}
              columns={columns}
              pageSize={8}
              checkboxSelection
              onRowSelected={(e) => {
                if (e?.isSelected) setVideoId([...videoId, e.data.id]);
                else {
                  const index = videoId.indexOf(e.data.id);
                  if (index > -1) {
                    const array = videoId;
                    array.splice(index, 1);
                    setVideoId(array);
                  }
                  if (videoId.length < 1) setVideoId([]);
                }
              }}
            />
          </div>
        </CardContent>
      </Card>
    </Navigation>
  );
};

export default ViewVideo;
