import React from "react";
import { BrowserRouter } from "react-router-dom";
import { auth } from "./config";
import { PrivateRoutes, PublicRoutes } from "./Routes";

const App = () => {
  return (
    <BrowserRouter>
      {auth?.currentUser?.uid ? <PrivateRoutes /> : <PublicRoutes />}
    </BrowserRouter>
  );
};

export default App;
