import React, { useEffect } from "react";
import Landing from "./components/Landing";
import { useRoutes } from "react-router-dom";
import Home from "./components/Home";
import Page1 from "./components/Page1";

const App = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/page1",
      element: <Page1 />,
    },
  ]);

  return <>{element}</>;
};

export default App;
