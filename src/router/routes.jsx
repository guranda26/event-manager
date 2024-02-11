import { Outlet } from "react-router-dom";
import UsersContextProvider from "../contexts/UsersContext";
import CreatePage from "../pages/CreatePage";
import MainPage from "../pages/MainPage";
import UpdatePage from "../pages/UpdatePage";
import Header from "../components/Header";
import LanguageContextProvider from "../contexts/TranslateContext";

const routes = [
  {
    element: (
      <div>
        <LanguageContextProvider>
          <Header />
          <Outlet />
        </LanguageContextProvider>
      </div>
    ),
    path: "/",
    children: [
      {
        element: (
          <div>
            <UsersContextProvider>
              <MainPage />

              <p>This is a divider</p>

              <MainPage />
            </UsersContextProvider>
          </div>
        ),
        index: true,
      },
      {
        element: <CreatePage />,
        path: "create",
      },
      {
        element: <UpdatePage />,
        path: "update/:userId",
      },
    ],
  },
];

export default routes;
