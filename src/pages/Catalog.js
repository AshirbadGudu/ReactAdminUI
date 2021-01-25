import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Navigation } from "../components";
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

const CatalogScreen = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setRows([
          {
            id: res.data[0].id,
            lastName: res.data[0].name,
            firstName: "Jon",
            age: 35,
          },
        ]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Navigation>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
      </div>
    </Navigation>
  );
};

export default CatalogScreen;
