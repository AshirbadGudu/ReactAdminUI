import {
  Avatar,
  Button,
  Card,
  CardContent,
  Container,
  CssBaseline,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { Navigation } from "../components";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const PasswordSetting = () => {
  const classes = useStyles();
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(password);
      console.log(newPassword);
    } catch (error) {
      alert(error.message);
    } finally {
      setPassword("");
      setNewPassword("");
    }
  };
  return (
    <Navigation>
      <Container component="main" maxWidth="xs">
        <Card>
          <CardContent>
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlined />
              </Avatar>
              <Typography variant="subtitle2">Reset Your Password</Typography>
              <Typography variant="subtitle1">Update Your Password</Typography>
              <form className={classes.form} onSubmit={handelSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="Newpassword"
                  label="New Password"
                  type="password"
                  autoComplete="current-password"
                  value={newPassword}
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                  }}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Update Password
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </Container>
    </Navigation>
  );
};

export default PasswordSetting;
