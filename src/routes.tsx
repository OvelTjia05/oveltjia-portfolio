import { createBrowserRouter } from "react-router-dom";
import Layout from "@/components/Layout";
import Skills from "./components/Skills";

export const routerList = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "skills",
        element: <Skills />,
      },
    ],
  },
]);
