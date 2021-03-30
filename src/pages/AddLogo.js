import {
  Avatar,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  makeStyles,
  Snackbar,
  TextField,
  Typography,
} from "@material-ui/core";
import { CloudUpload } from "@material-ui/icons";
import React, { useState } from "react";
import { Navigation } from "../components";
import Alert from "@material-ui/lab/Alert";
const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(8),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const AddLogo = () => {
  const classes = useStyles();
  const [logourl, setLogourl] = useState("");
  const [logoTitle, setLogoTitle] = useState("");
  const [showAlert, setShowAlert] = useState({
    msg: "",
    isOpen: false,
    color: "",
  });
  const handleLogo = (e) => setLogourl(URL.createObjectURL(e.target.files[0]));
  const handleTitle = (e) => setLogoTitle(e.target.value);
  return (
    <Navigation>
      <Container maxWidth="sm">
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
                <CloudUpload />
              </Avatar>
              <Typography component="h1" variant="h5">
                Uplaod Participants Logo
              </Typography>
              <form className={classes.form}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="title"
                      name="title"
                      variant="outlined"
                      required
                      fullWidth
                      id="title"
                      label="Company Name"
                      autoFocus
                      type="text"
                      value={logoTitle}
                      onChange={handleTitle}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    {logourl && (
                      <iframe
                        title={new Date().getTime()}
                        width="100%"
                        height="100%"
                        style={{ minHeight: "30vh" }}
                        src={logourl}
                        frameBorder="0"
                        allowFullScreen
                      />
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      startIcon={<CloudUpload />}
                      variant="contained"
                      component="label"
                      fullWidth
                    >
                      Upload Logo
                      <input type="file" onChange={handleLogo} hidden />
                    </Button>
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  startIcon={<CloudUpload />}
                >
                  Uplaod
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </Container>
    </Navigation>
  );
};

export default AddLogo;
