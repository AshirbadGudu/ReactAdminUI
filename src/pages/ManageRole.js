import {
  Avatar,
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  Typography,
} from "@material-ui/core";
import { Build, Save } from "@material-ui/icons";
import { Autocomplete, Alert } from "@material-ui/lab";
import React,{ useState } from "react";
import { Navigation } from "../components";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.action.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    minWidth: "100%",
  },
}));

const ManageRole = () => {
  const classes = useStyles();
  const  totalUser  = []
  const [uid, setUid] = useState("");
  const [role, setRole] = useState("");
  const [data, setData] = useState({});
  const [toAssign, setToAssign] = useState(true);
  const [alertButton, setAlertButton] = useState(true);
  const [showAlert, setShowAlert] = useState({
    msg: "",
    isOpen: false,
    color: "",
  });
  const [roles] = useState(["stall", "helpdesk", "EventManager", "Networking"]);

  const handleUserData = (e, value) => {
    setUid(value?.id);
    setData(value);
    if (!value?.role) {
      setToAssign(false);
    } else {
      setShowAlert({
        msg:
          "This User already has a Role Please Click The Button To Override The Role ",
        isOpen: true,
        color: "error",
      });
      setAlertButton(false);
    }
    if (!value) {
      setToAssign(true);
      setAlertButton(true);
      setUid("");
      setRole("");
    }
    if (value?.role === "superadmin") {
      setShowAlert({
        msg: "You Can not Assign Role to This User ",
        isOpen: true,
        color: "error",
      });
      setToAssign(true);
      setAlertButton(true);
      setUid("");
      setRole("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // await database.ref(`Users/${uid}/role`).set(role);
      // role === "EventManager" &&
      //   (await database.ref(`Auditoriums/${uid}/profile`).set(data));
      // role === "stall" && (await database.ref(`EXHIBITORS/${uid}/`).set(data));

      setShowAlert({
        msg: " Successfully Added",
        isOpen: true,
        color: "success",
      });
    } catch (error) {
      setShowAlert({ msg: error.message, isOpen: true, color: "error" });
    } finally {
      setUid("");
      setRole("");
      setToAssign(true);
    }
  };

  return (
    <Navigation>
      <Container component="main" maxWidth="sm">
        <Card>
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
          <CardContent>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <Build />
              </Avatar>
              <Typography component="h1" variant="h5">
                Manage Role
              </Typography>
              <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    {totalUser && (
                      <Autocomplete
                        id="selectuser"
                        required
                        options={totalUser}
                        getOptionLabel={(option) => option?.email}
                        onChange={(e, value) => handleUserData(e, value)}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Select User"
                            margin="normal"
                            variant="outlined"
                            autoFocus
                          />
                        )}
                      />
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl className={classes.formControl}>
                      <InputLabel
                        id="select-label"
                        style={{ marginLeft: "10px" }}
                      >
                        Select Role
                      </InputLabel>
                      <Select
                        variant="outlined"
                        required
                        labelId="type"
                        id="select-label"
                        label="Role"
                        fullWidth
                        disabled={toAssign}
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                      >
                        <MenuItem>None</MenuItem>
                        {roles.map((item, i) => {
                          return (
                            <MenuItem key={i} value={item}>
                              {item.toUpperCase()}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={toAssign}
                  className={classes.submit}
                  startIcon={<Save />}
                >
                  Set Role
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </Container>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Button
          variant="contained"
          color="secondary"
          style={{ display: alertButton ? "none" : "block" }}
          onClick={() => {
            setToAssign(false);
            setAlertButton(true);
          }}
        >
          Override Role
        </Button>
      </div>
    </Navigation>
  );
};

export default ManageRole;
