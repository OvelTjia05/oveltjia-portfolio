import { createBrowserRouter } from "react-router-dom";
import Layout from "@/components/Layout";

export const routerList = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
]);
