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
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
// const placeholderImg =
//   "https://firebasestorage.googleapis.com/v0/b/exposium-2021.appspot.com/o/placeholder.png?alt=media&token=5a768d5f-f0ad-49aa-88fe-58f80360b15e";

const AddDocument = () => {
  const classes = useStyles();
  const [catalog, setCatalog] = useState("");
  const [title, setTitle] = useState("");
  const [catalogUrl, setCatalogUrl] = useState("");
  const [showAlert, setShowAlert] = useState({
    msg: "",
    isOpen: false,
    color: "",
  });
  const handleTitle = (e) => setTitle(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const catalogRef = `${
      //   userData?.role === "stall" ? stallRef : stallMemberRef
      // }/catalog/${new Date().getTime()}`;

      // const res = catalog && (await storage.ref(catalogRef).put(catalog));

      // const url = catalog ? await res.ref.getDownloadURL() : placeholderImg;
      // await database
      //   .ref(
      //     `${userData?.role === "stall" ? stallRef : stallMemberRef}/Catalogues`
      //   )
      //   .push({
      //     catalogTitle: title,
      //     catalogRef,
      //     url,
      //     timestamp: new Date().toLocaleString(),
      //   });
      // setTitle("");
      // setCatalog("");
      // setCatalogUrl("");
      setShowAlert({
        msg: "Catalog Added Successfully",
        isOpen: true,
        color: "success",
      });
    } catch (error) {
      setShowAlert({ msg: error.message, isOpen: true, color: "error" });
    }
  };
  const addCatalog = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setCatalogUrl(url);
    setCatalog(e.target.files[0]);
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
                <CloudUpload />
              </Avatar>
              <Typography component="h1" variant="h5">
                Upload Document
              </Typography>
              <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="title"
                      name="title"
                      variant="outlined"
                      required
                      fullWidth
                      id="title"
                      label="Document Title"
                      autoFocus
                      type="text"
                      value={title}
                      onChange={handleTitle}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    {catalogUrl && (
                      <iframe
                        title={new Date().getTime()}
                        width="100%"
                        height="100%"
                        style={{ minHeight: "35vh" }}
                        src={catalogUrl}
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      startIcon={<CloudUpload />}
                      variant="contained"
                      component="label"
                      fullWidth
                    >
                      Upload Document
                      <input type="file" onChange={addCatalog} hidden />
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

export default AddDocument;
