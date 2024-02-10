import CreatePage from "../pages/CreatePage";
import MainPage from "../pages/MainPage";

const routes = [
  {
    element: <MainPage />,
    path: "/",
  },
  {
    element: <CreatePage />,
    path: "/create",
  },
];

export default routes;
