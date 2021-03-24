import { Button, Card, CardContent } from "@material-ui/core";
import { CloudUpload, Delete, GetApp } from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "../components";
import { CSVLink } from "react-csv";
import { DataGrid } from "@material-ui/data-grid";

const ViewMember = () => {
  const [memberId, setMemberId] = useState([]);

  const columns = [
    { field: "slno", headerName: "Sl No.", width: 200 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "phone", headerName: "Phone", width: 250 },
  ];
  const headers = [
    { label: "Sl No.", key: "slno" },
    { label: "Name", key: "name" },
    { label: "Email", key: "email" },
    { label: "Phone", key: "phone" },
  ];
  const handleDelete = async () => {
    console.log(memberId);
    // await memberId.forEach((mid) => {
    //   database.ref(`EXHIBITORS/${uid}/teamMembers/${mid}`).remove();
    //   database.ref(`Users/${mid}/role`).remove();
    // });
    setMemberId([]);
  };
  const teamMember = [];
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
          to="/AddMember"
          style={{ margin: "10px" }}
        >
          Add
        </Button>
        <CSVLink
          data={teamMember}
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
            display: memberId.length ? "block" : "none",
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
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={teamMember}
              columns={columns}
              pageSize={5}
              checkboxSelection
              onRowSelected={(e) => {
                if (e?.isSelected) setMemberId([...memberId, e.data.id]);
                else {
                  const index = memberId.indexOf(e.data.id);
                  if (index > -1) {
                    const array = memberId;
                    array.splice(index, 1);
                    setMemberId(array);
                  }
                  if (memberId.length < 1) setMemberId([]);
                }
              }}
            />
          </div>
        </CardContent>
      </Card>
    </Navigation>
  );
};

export default ViewMember;
