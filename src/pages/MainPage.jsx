import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useRequest from "../hooks/useRequest";

const MainPage = () => {
  const { response, loading, err, resendRequest } = useFetch({
    url: "/api/v1/users",
    method: "GET",
  });
  const { sendRequest } = useRequest({ method: "DELETE" });
  const todo =
    response?.items.map((user) => {
      return {
        name: user.name,
        isCompleted: user.isCompleted,
        id: user._uuid,
      };
    }) || [];

  const onDelete = (userId) => {
    sendRequest(null, `/api/v1/users/${userId}`).then(() => resendRequest());
  };

  if (loading)
    return (
      <div>
        <p>Is Loading ...</p>
        <p>please wait</p>
      </div>
    );

  if (err) return <div>{err.message}</div>;

  return (
    <div className="App">
      <div>
        <Link to="/create" className="link">
          Enter New Data
        </Link>
      </div>

      {todo.map((user) => (
        <div
          key={user.id}
          style={{ border: "1px solid gold" }}
          className="tasks"
        >
          <h3>Task: {user.name}</h3>
          <h4>
            {user.isCompleted ? "Task is completed" : "Task is not completed"}
          </h4>
          <Link to={`/update/${user.id}`}>Edit</Link>
          <button onClick={() => onDelete(user.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default MainPage;
