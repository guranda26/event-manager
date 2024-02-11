import { Link } from "react-router-dom";
import { useUsersContext } from "../contexts/UsersContext";
import {
  dictionaryOptions,
  useDictionaryContext,
} from "../contexts/TranslateContext";

const deadline = new Date();
const setDeadline = deadline.toLocaleDateString("ka-Ge", {
  month: "long",
});
const MainPage = () => {
  const { lang } = useDictionaryContext();
  const { todo, dataLoading, deleteLoading, onDelete } = useUsersContext();

  if (dataLoading || deleteLoading)
    return (
      <div>
        <p>Is Loading ...</p>
        <p>please wait</p>
      </div>
    );

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
          <p>
            Deadline: {`${setDeadline} ${Math.floor(Math.random() * 30) + 1} `}
          </p>
          <Link to={`/update/${user.id}`}>Edit</Link>
          <button onClick={() => onDelete(user.id)}>delete</button>
          <div>
            <p>{dictionaryOptions[lang]}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainPage;
