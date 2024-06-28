import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import InfoPage from "./pages/InfoPage";
import LandingPage from "./pages/Landing/LandingPage";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/penguins",
        element: <InfoPage contentId={0} />,
      },
      {
        path: "/flowers",
        element: <InfoPage contentId={1} />,
      },
      {
        path: "/save-the-sea-slugs",
        element: <InfoPage contentId={2} />,
      },
      {
        path: "/help-tane",
        element: <InfoPage contentId={3} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
