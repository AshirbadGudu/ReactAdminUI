import { Avatar, Card, CardContent, CardHeader, Grid } from "@material-ui/core";
import React from "react";
import { Navigation } from "../components";

const ChatScreen = () => {
  return (
    <Navigation>
      <Card
        style={{
          minHeight: "80vh",
        }}
      >
        <CardContent>
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              sm={4}
              lg={4}
              style={{
                boxShadow: ".4px 0px 0px #0002",
                minHeight: "80vh",
              }}
            >
              <CardHeader
                avatar={
                  <Avatar style={{ background: "#f00" }}>
                    {/* {userData?.signingInfo?.email[0]?.toUpperCase()} */}P
                  </Avatar>
                }
                // title={userData?.role?.toUpperCase()}
                title={"Niku"}
                style={{
                  boxShadow: "0px .4px 0px #0002",
                }}
              />
              {/* <ChatUsers
                setSelectedUser={setSelectedUser}
                visitors={visitors}
              /> */}
            </Grid>
            <Grid
              item
              xs={12}
              sm={8}
              lg={8}
              style={{
                minHeight: "80vh",
              }}
            >
              {/* <SelectedUserChats
                chatRef={`${chatRef}/${selectedUser?.uid}`}
                selectedUser={selectedUser}
                userData={userData}
                isHidden={selectedUser.hasOwnProperty("uid")}
              /> */}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Navigation>
  );
};

export default ChatScreen;
