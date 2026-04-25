import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./page/Homepage.tsx";
import Projects from "./page/Projects.tsx";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Contacts from "./page/Contacts.tsx";

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/projects", element: <Projects /> },
  { path: "/contacts", element: <Contacts /> },

  
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Analytics />
    <SpeedInsights />
    <RouterProvider router={router} />
  </StrictMode>
);
