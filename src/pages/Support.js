import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  TextField,
  CssBaseline,
  Button,
  Card,
  CardContent,
} from "@material-ui/core";
import { Call, HeadsetMic, Send } from "@material-ui/icons";
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
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Support = () => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(text);
    } catch (error) {
      alert(error.message);
    } finally {
      setText("");
    }
  };
  return (
    <Navigation>
      <Container component="main" maxWidth="xs">
        <Card>
          <CardContent>
            <CssBaseline />
            <div className={classes.paper}>
              <HeadsetMic color="primary" style={{ fontSize: 40 }} />

              <div style={{ textAlign: "center" }}>
                <h3>Our Support Team is Here To Help You</h3>
                <p>
                  If Your are Facing any trouble please contact to our support
                  team immidately.Our tem will be always to help you
                </p>
              </div>
              <form className={classes.form} onSubmit={handelSubmit}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="green"
                  style={{ backgroundColor: "green", color: "white" }}
                  className={classes.submit}
                >
                  <Call />
                  Call
                </Button>
                <Typography
                  component="h1"
                  variant="h5"
                  style={{ textAlign: "center" }}
                >
                  OR
                </Typography>
                <TextField
                  multiline
                  rows={3}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="textarea"
                  label="Write Message"
                  name="textarea"
                  autoComplete="textarea"
                  autoFocus
                  value={text}
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                >
                  Message
                  <Send />
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </Container>
    </Navigation>
  );
};

export default Support;
