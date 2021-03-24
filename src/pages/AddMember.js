import {
  Avatar,
  Button,
  Card,
  CardContent,
  Container,
  makeStyles,
  Snackbar,
  TextField,
  Typography,
} from "@material-ui/core";
import { PersonAdd } from "@material-ui/icons";
import { Alert, Autocomplete } from "@material-ui/lab";
import React, { useState } from "react";
import { Navigation } from "../components";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.action.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    minWidth: "100%",
  },
}));

const AddMember = () => {
  const classes = useStyles();
  const [showAlert, setShowAlert] = useState({
    msg: "",
    isOpen: false,
    color: "",
  });
  const [memberName, setMemberName] = useState("");
  const [memberPhone, setMemberPhone] = useState("");

  const [memeberData, setMemeberData] = useState({});
  const [disableBtn, setdisableBtn] = useState(true);
  const [alertButton, setAlertButton] = useState(true);
  const handleName = (e) => {
    setMemberName(e.target.value);
  };
  const handlePhone = (e) => {
    setMemberPhone(e.target.value);
  };
  const handleAllData = (e, value) => {
    setMemeberData(value);
    if (!value?.role) {
      setdisableBtn(false);
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
      setdisableBtn(true);
      setAlertButton(true);
      setMemeberData();
    }
    if (
      value?.role === "superadmin" ||
      value?.role === "helpdesk" ||
      value?.role === "EventManager"
    ) {
      setShowAlert({
        msg: "You Can not Assign Role to this User ",
        isOpen: true,
        color: "error",
      });
      setdisableBtn(true);
      setAlertButton(true);
      setMemeberData();
    }
  };
  const handleAddmember = async (e) => {
    e.preventDefault();
    try {
      // await database
      //   .ref(`EXHIBITORS/${uid}/teamMembers/${memeberData.id}/`)
      //   .set({
      //     name: memberName,
      //     email: memeberData?.email,

      //     phone: memberPhone,
      //   });
      // await database.ref(`Users/${memeberData.id}/role`).set("StallMember");
      // await database.ref(`Users/${memeberData.id}/stallID`).set(uid);
      setShowAlert({
        msg: " Successfully Added Your Team Member",
        isOpen: true,
        color: "success",
      });
    } catch (error) {
      setShowAlert({ msg: error.message, isOpen: true, color: "error" });
    } finally {
      setMemberName("");
      setMemberPhone("");

      setMemeberData({});
    }
  };
  return (
    <Navigation>
      <Container component="main" maxWidth="xs">
        <Card>
          <CardContent>
            <Snackbar
              open={showAlert.isOpen}
              autoHideDuration={6000}
              onClose={() =>
                setShowAlert({ msg: "", isOpen: false, color: "" })
              }
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

            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <PersonAdd />
              </Avatar>
              <Typography component="h1" variant="h5">
                Add Your Team Member
              </Typography>
              <form className={classes.form} onSubmit={handleAddmember}>
                {
                  // totalUser
                  true && (
                    <Autocomplete
                      id="selectuser"
                      options={[]}
                      getOptionLabel={(option) => option.emailId}
                      onChange={(e, value) => handleAllData(e, value)}
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
                  )
                }
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="name"
                  label="Enter Your Team Member Name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={memberName}
                  onChange={handleName}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="phone"
                  label="phone"
                  type="tel"
                  id="phone"
                  value={memberPhone}
                  onChange={handlePhone}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={disableBtn}
                  className={classes.submit}
                  endIcon={<PersonAdd />}
                >
                  Add Stall Member
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
            setdisableBtn(false);
            setAlertButton(true);
          }}
        >
          Override Role
        </Button>
      </div>
    </Navigation>
  );
};

export default AddMember;
