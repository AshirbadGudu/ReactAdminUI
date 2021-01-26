import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Navigation } from "../components";
import { useVisitors } from "../hooks";
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue("firstName") || ""} ${
        params.getValue("lastName") || ""
      }`,
  },
];

const Visitors = () => {
  const { visitors } = useVisitors();

  return (
    <Navigation>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={visitors}
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
      </div>
    </Navigation>
  );
};

export default Visitors;
