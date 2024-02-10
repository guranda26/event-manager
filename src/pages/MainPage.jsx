import useFetch from "../hooks/useFetch";

const MainPage = () => {
  const { response, loading, err } = useFetch({
    url: "/api/v1/users",
    method: "GET",
  });
  const todo =
    response?.items.map((user) => {
      return {
        name: user.name,
        isCompleted: user.isCompleted,
        id: user._uuid,
      };
    }) || [];

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
      {/* <button onClick={getUsers}>GET tasks</button>
  <button onClick={() => setTodo([])}>Clear tasks</button> */}

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
        </div>
      ))}
    </div>
  );
};

export default MainPage;
