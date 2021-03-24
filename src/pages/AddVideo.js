import {
  Avatar,
  Button,
  Card,
  Container,
  makeStyles,
  Snackbar,
  TextField,
  Tooltip,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import { Navigation } from "../components";
import Alert from "@material-ui/lab/Alert";
import { Add, Save } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.action.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  textField: {
    margin: "20px",
  },
  card: {
    minWidth: "80vw",
    minHeight: "85vh",
  },
}));
const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.black,
    color: "#d1af4f",
    boxShadow: theme.shadows[5],
    fontSize: 14,
  },
}))(Tooltip);

const AddVideo = () => {
  const classes = useStyles();
  const [videoLink, setVideoLink] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [showAlert, setShowAlert] = useState({
    msg: "",
    isOpen: false,
    color: "",
  });
  const handleVideoLink = (e) => {
    setVideoLink(e.target.value);
  };
  const handleVideoTitle = (e) => {
    setVideoTitle(e.target.value);
  };

  const handleUploadVideo = (e) => {
    e.preventDefault();
    try {
      // database
      //   .ref(userData?.role === "stall" ? stallRef : stallMemberRef)
      //   .push({
      //     videoLink: videoLink,
      //     videoTitle: videoTitle,
      //     timestamp: new Date().toLocaleString(),
      //   });
      setShowAlert({
        msg: "Video Added Successfully",
        isOpen: true,
        color: "success",
      });
    } catch (error) {
      setShowAlert({ msg: error.message, isOpen: true, color: "error" });
    } finally {
      setVideoTitle("");
      setVideoLink("");
    }
  };
  return (
    <Navigation>
      <Card className={classes.card}>
        <Container maxWidth="sm">
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
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <Add />
            </Avatar>
            <Typography component="h1" variant="h5">
              Add Your Video
            </Typography>

            <form className={classes.form} onSubmit={handleUploadVideo}>
              <TextField
                type="text"
                variant="outlined"
                fullWidth
                id="videoTitle"
                label="Video Title"
                name="videoTitle"
                autoComplete="videotitle"
                autoFocus
                className={classes.textField}
                value={videoTitle}
                onChange={handleVideoTitle}
              />
              <LightTooltip
                title="Please Copy The URL from YouTube Share Option "
                placement="top-start"
              >
                <TextField
                  type="url"
                  variant="outlined"
                  fullWidth
                  required
                  id="videolink"
                  label="Video Link"
                  name="videolink"
                  autoComplete="videolink"
                  autoFocus
                  className={classes.textField}
                  value={videoLink}
                  onChange={handleVideoLink}
                />
              </LightTooltip>
              {videoLink && (
                <iframe
                  title={new Date().getTime()}
                  width="100%"
                  height="100%"
                  style={{ minHeight: "35vh" }}
                  src={
                    "https://www.youtube.com/embed/" +
                    videoLink?.split("/").reverse()[0]
                  }
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="action"
                  className={classes.submit}
                  startIcon={<Save />}
                >
                  Upload Video
                </Button>
              </div>
            </form>
          </div>
        </Container>
      </Card>
    </Navigation>
  );
};

export default AddVideo;
