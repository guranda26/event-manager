import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./router/routes";

function App() {
  return <RouterProvider router={createBrowserRouter(routes)} />;
}

export default App;
