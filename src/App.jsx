import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./router/routes";

function App() {
  // const [todo, setTodo] = useState([]);

  // name: user.name,
  //             isCompleted: user.isCompleted,
  //             id: user._uuid,

  // useEffect(() => {
  //   if (newTodo) {
  //     setTodo((prev) => [newTodo, ...prev]);
  //     setNewTodo(null);
  //   }
  // }, [newTodo]);
  // useEffect(() => {
  //   fetch("/api/v1/users", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  //     },
  //   })
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error(`Response failed`);
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setTodo(
  //         data.items.map((user) => {
  //           return {
  //             name: user.name,
  //             isCompleted: user.isCompleted,
  //             id: user._uuid,
  //           };
  //         })
  //       );
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  // const getUsers = () => {
  //   fetch("/api/v1/users", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${process.env.REACP_APP_API_KEY}`,
  //     },
  //   })
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error(`Response failed`);
  //       }
  //       return res.json();
  //     })
  //     // .then((data) => {
  //     //   setTodo(
  //     //     data.items.map((user) => {
  //     //       return {
  //     //         name: user.name,
  //     //         isCompleted: user.isCompleted,
  //     //         id: user._uuid,
  //     //       };
  //     //     })
  //     //   );
  //     // })
  //     .catch((err) => console.log(err));
  // };

  // const onFormSubmit = (name, isCompleted) => {
  //   const uniqueId = `id-${Date.now()}-${Math.random()}`;
  //   const fetchedData = {
  //     items: [{ name, isCompleted, _uuid: uniqueId }],
  //   };
  //   setNewTodo({
  //     name: fetchedData.items[0].name,
  //     isCompleted: fetchedData.items[0].isCompleted,
  //     id: fetchedData.items[0]._uuid,
  //   });
  // };

  return <RouterProvider router={createBrowserRouter(routes)} />;
}

export default App;
