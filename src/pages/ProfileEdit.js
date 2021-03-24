import {
  Backdrop,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  Tooltip,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import { Navigation } from "../components";
import { Alert } from "@material-ui/lab";
const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.black,
    color: "#d1af4f",
    boxShadow: theme.shadows[5],
    fontSize: 14,
  },
}))(Tooltip);

const ProfileEdit = () => {
  const [openBackDrop, setOpenBackDrop] = useState(false);
  const [msg, setMsg] = useState({
    text: "",
    type: "error",
    show: false,
  });
  const [userInfo, setUserInfo] = useState({
    email: " ",
    fname: " ",
    lname: " ",
    genderRef: " ",
    countryRef: " ",
    resident: " ",
    schoolRef: " ",
    ageRef: " ",
    phone: " ",
    webRef: " ",
    facebookRef: " ",
    twitterRef: " ",
    linkedinRef: "",
    zoomRef: "",
  });

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      setOpenBackDrop(true);
      setMsg({
        show: true,
        text: "Updated Successfully",
        type: "success",
      });
    } catch (error) {
      setMsg({
        show: true,
        text: error.message,
        type: "error",
      });
    } finally {
      setOpenBackDrop(false);
    }
  };
  return (
    <Navigation>
      <Backdrop open={openBackDrop} style={{ zIndex: "10000", color: "#fff" }}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Snackbar
        autoHideDuration={6000}
        open={msg.show}
        onClose={() =>
          setMsg({
            show: false,
            text: "",
            type: "error",
          })
        }
      >
        <Alert
          onClose={() =>
            setMsg({
              show: false,
              text: "",
              type: "error",
            })
          }
          severity={msg.type}
        >
          {msg.text}
        </Alert>
      </Snackbar>
      <form className="card w-50 mx-auto my-5" onSubmit={handelSubmit}>
        <div className="card-header">
          <Typography variant="h4">Edit Profile</Typography>
        </div>
        <div className="card-body">
          <TextField
            fullWidth
            value={userInfo?.email}
            disabled
            label="Email address"
            variant="outlined"
            margin="normal"
          />

          <TextField
            fullWidth
            value={userInfo?.fname}
            onChange={(e) =>
              setUserInfo({ ...userInfo, fname: e.target.value })
            }
            label="Your First Name"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            value={userInfo?.lname}
            onChange={(e) =>
              setUserInfo({ ...userInfo, lname: e.target.value })
            }
            label="Your Last Name"
            variant="outlined"
            margin="normal"
          />
          <FormControl variant="outlined" fullWidth margin="normal">
            <InputLabel>My Gender is</InputLabel>
            <Select
              value={userInfo?.genderRef}
              label="My Gender is"
              onChange={(e) =>
                setUserInfo({ ...userInfo, genderRef: e.target.value })
              }
            >
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            value={userInfo?.countryRef}
            label="Country"
            onChange={(e) =>
              setUserInfo({ ...userInfo, countryRef: e.target.value })
            }
            variant="outlined"
            margin="normal"
          />
          <FormControl variant="outlined" fullWidth margin="normal">
            <InputLabel>You are Live in</InputLabel>
            <Select
              value={userInfo?.resident}
              label="You are Live in"
              onChange={(e) =>
                setUserInfo({ ...userInfo, resident: e.target.value })
              }
            >
              <MenuItem value={"Abu Dhabi"}>Abu Dhabi</MenuItem>
              <MenuItem value={"Dubai"}>Dubai</MenuItem>
              <MenuItem value={"Sharjah"}>Sharjah</MenuItem>
              <MenuItem value={"Ajman"}>Ajman</MenuItem>
              <MenuItem value={"Umm Al Quwain"}>Umm Al Quwain</MenuItem>
              <MenuItem value={"Fujairah"}>Fujairah</MenuItem>
              <MenuItem value={"Ras Al Khaimah"}>Ras Al Khaimah</MenuItem>
              <MenuItem value={"Outside UAE"}>Outside UAE</MenuItem>
              <MenuItem value={"Others"}>Others</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            value={userInfo?.schoolRef}
            label="What is your School/University/Company ?"
            onChange={(e) =>
              setUserInfo({ ...userInfo, schoolRef: e.target.value })
            }
            variant="outlined"
            margin="normal"
          />

          <TextField
            fullWidth
            value={userInfo?.ageRef}
            label="Your Age"
            onChange={(e) =>
              setUserInfo({ ...userInfo, ageRef: e.target.value })
            }
            variant="outlined"
            margin="normal"
          />

          <TextField
            fullWidth
            value={userInfo?.phone}
            label="Phone Number"
            onChange={(e) =>
              setUserInfo({ ...userInfo, phone: e.target.value })
            }
            variant="outlined"
            margin="normal"
          />
          <LightTooltip
            title="Please Enter The URL Starting with https://"
            placement="top-start"
          >
            <TextField
              fullWidth
              value={userInfo?.webRef}
              label="My Website URL is"
              onChange={(e) =>
                setUserInfo({ ...userInfo, webRef: e.target.value })
              }
              variant="outlined"
              margin="normal"
            />
          </LightTooltip>
          <LightTooltip
            title="Please Enter The URL Starting with https://"
            placement="top-start"
          >
            <TextField
              fullWidth
              value={userInfo?.facebookRef}
              label="My Facebook URL is"
              onChange={(e) =>
                setUserInfo({ ...userInfo, facebookRef: e.target.value })
              }
              variant="outlined"
              margin="normal"
            />
          </LightTooltip>
          <LightTooltip
            title="Please Enter The URL Starting with https://"
            placement="top-start"
          >
            <TextField
              fullWidth
              value={userInfo?.twitterRef}
              label="My Twitter URL is"
              onChange={(e) =>
                setUserInfo({ ...userInfo, twitterRef: e.target.value })
              }
              variant="outlined"
              margin="normal"
            />
          </LightTooltip>
          <LightTooltip
            title="Please Enter The URL Starting with https://"
            placement="top-start"
          >
            <TextField
              fullWidth
              value={userInfo?.linkedinRef}
              label="My Linkedin URL is"
              onChange={(e) =>
                setUserInfo({ ...userInfo, linkedinRef: e.target.value })
              }
              variant="outlined"
              margin="normal"
            />
          </LightTooltip>
          <LightTooltip
            title="Please Enter The URL Starting with https://"
            placement="top-start"
          >
            <TextField
              fullWidth
              value={userInfo?.zoomRef}
              label="My ZOOM URL is"
              onChange={(e) =>
                setUserInfo({ ...userInfo, zoomRef: e.target.value })
              }
              variant="outlined"
              margin="normal"
            />
          </LightTooltip>
        </div>
        <div>
          <Button variant="contained" type="submit" color="primary" fullWidth>
            Save Changes
          </Button>
        </div>
      </form>
    </Navigation>
  );
};

export default ProfileEdit;
