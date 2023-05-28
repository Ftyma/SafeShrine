import React, { useEffect } from "react";
import Landing from "./components/Landing";
import { useRoutes } from "react-router-dom";
import Home from "./components/Home";
import Page1 from "./components/Page1";
import Countdown from "./components/Countdown";
import Delayed from "./components/Delayed";
import Page2 from "./components/Page2";
import Page3 from "./components/page3";
import Test from "./components/test";

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
    {
      path: "/page2",
      element: <Page2 />,
    },
    {
      path: "/page3",
      element: <Page3 />,
    },
    {
      path: "/test",
      element: <Test />,
    },
    // {
    //   path: "/update",
    //   element: <UpdateLetter />,
    // },
  ]);

  return <> {element}</>;
};

export default App;
