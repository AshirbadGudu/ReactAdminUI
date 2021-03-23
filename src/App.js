import React from "react";
import { BrowserRouter } from "react-router-dom";

import { PrivateRoutes, PublicRoutes } from "./Routes";

const App = () => {
  return (
    <BrowserRouter>{true ? <PrivateRoutes /> : <PublicRoutes />}</BrowserRouter>
  );
};

export default App;
