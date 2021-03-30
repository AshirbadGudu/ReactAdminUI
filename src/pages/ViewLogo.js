import {
  Card,
  CardContent,
  CssBaseline,
  Divider,
  IconButton,
  InputBase,
  makeStyles,
  Paper,
  TextField,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { Autocomplete } from "@material-ui/lab";
import React, { useState } from "react";
import { Navigation } from "../components";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",

    margin: "20px 0px 10px 0px",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const ViewLogo = () => {
  const classes = useStyles();
  const countries = [];
  const [searchTxt, setSearchTxt] = useState("");
  const [searchRes, setSearchRes] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [selectCategory, setSelectCategory] = useState("");
  const catagory = ["College", "Company", "University", "Other"];

  return (
    <Navigation>
      <Paper style={{ display: "flex", padding: "0px 15px 0px 15px" }}>
        <Paper
          component="form"
          className={classes.root}
          style={{ width: "100%" }}
        >
          <IconButton type="submit" className={classes.iconButton}>
            <Search />
          </IconButton>
          <InputBase
            placeholder="Search Stall Here"
            fullWidth
            value={searchTxt}
            onChange={(e) => setSearchTxt(e.target.value)}
          />
        </Paper>
        <div>
          {countries && (
            <Autocomplete
              id="Country"
              options={countries}
              getOptionLabel={(option) => option.label}
              onChange={(e, value) => setCountryName(value)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Country"
                  variant="outlined"
                  value={countryName}
                  className={classes.root}
                  style={{ width: "200px" }}
                />
              )}
            />
          )}
        </div>
        <div>
          {catagory && (
            <Autocomplete
              id="Catagory"
              options={catagory}
              getOptionLabel={(option) => option}
              onChange={(e, value) => setSelectCategory(value)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Catagory"
                  variant="outlined"
                  className={classes.root}
                  style={{ width: "200px" }}
                  onChange={(e) => console.log(e.target.value)}
                />
              )}
            />
          )}
        </div>
      </Paper>
      <Divider style={{ width: "10px" }} />

      <Card>
        <CardContent>
          <img
            style={{
              width: "150px",
              height: "150px",
              objectFit: "contain",
            }}
            src=""
            className=""
            alt="Niku"
          />
        </CardContent>
      </Card>
    </Navigation>
  );
};

export default ViewLogo;
