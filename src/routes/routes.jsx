import Home from "../pages/home";
import PageLayout from "../pages/page-layout";
import NotFound from "../pages/not-found";

export const routes = [
  {
    path: "",
    element: <PageLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
];
