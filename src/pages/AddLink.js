import {
  Avatar,
  Button,
  Card,
  Container,
  InputAdornment,
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
import { Add, AddCircle, Http, Language } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
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

const AddLink = () => {
  const classes = useStyles();
  const [linkTitle, setLinkTitle] = useState("");
  const [url, setUrl] = useState("");
  const [showAlert, setShowAlert] = useState({
    msg: "",
    isOpen: false,
    color: "",
  });
  const handleLinkTitle = (e) => {
    setLinkTitle(e.target.value);
  };
  const handleUrl = (e) => {
    setUrl(e.target.value);
  };
  const handleSubmitLinks = async (e) => {
    e.preventDefault();
    try {
      // await database
      //   .ref(`${userData?.role === "stall" ? stallRef : stallMemberRef}`)
      //   .push({
      //     linkTitle: linkTitle,
      //     url: url,
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
      setUrl("");
      setLinkTitle("");
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
              Add Your Links
            </Typography>

            <form className={classes.form} onSubmit={handleSubmitLinks}>
              <TextField
                variant="outlined"
                fullWidth
                id="linktitle"
                label="Link Title"
                name="linktitle"
                autoComplete="linktitle"
                autoFocus
                className={classes.textField}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Language color="primary" />
                    </InputAdornment>
                  ),
                }}
                value={linkTitle}
                onChange={handleLinkTitle}
              />
              <LightTooltip
                title="Please Add the Link start with https:// "
                placement="top-start"
              >
                <TextField
                  variant="outlined"
                  fullWidth
                  id="url"
                  label=" Enter URL"
                  name="url"
                  autoComplete="url"
                  autoFocus
                  className={classes.textField}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Http color="primary" />
                      </InputAdornment>
                    ),
                  }}
                  value={url}
                  onChange={handleUrl}
                />
              </LightTooltip>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  endIcon={<AddCircle />}
                >
                  Add Links
                </Button>
              </div>
            </form>
          </div>
        </Container>
      </Card>
    </Navigation>
  );
};

export default AddLink;
