import { useEffect, useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm";

const API_KEY = "zemvDlvtavG4trFqzcyYlOX0SHH_-hx8_z7YG56INKw9OFLh6A";
function App() {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    fetch("/api/v1/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Response failed`);
        }
        return res.json();
      })
      .then((data) => {
        setTodo(
          data.items.map((user) => {
            return {
              name: user.name,
              isCompleted: user.isCompleted,
              id: user._uuid,
            };
          })
        );
      })
      .catch((err) => console.log(err));
  }, []);
  const getUsers = () => {
    fetch("/api/v1/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Response failed`);
        }
        return res.json();
      })
      .then((data) => {
        setTodo(
          data.items.map((user) => {
            return {
              name: user.name,
              isCompleted: user.isCompleted,
              id: user._uuid,
            };
          })
        );
      })
      .catch((err) => console.log(err));
  };

  const onFormSubmit = (name, isCompleted) => {
    fetch("/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify([{ name, isCompleted }]),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Response failed`);
        }
        return res.json();
      })
      .then((data) => {
        setTodo((prev) => [
          ...prev,
          {
            name: data.items[0].name,
            isCompleted: data.items[0].isCompleted,
            id: data.items[0]._uuid,
          },
        ]);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <UserForm onFormSubmit={onFormSubmit} />

      <button onClick={getUsers}>GET tasks</button>
      <button onClick={() => setTodo([])}>Clear tasks</button>

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
}

export default App;
