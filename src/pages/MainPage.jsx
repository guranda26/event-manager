import { Link } from "react-router-dom";
import { useUsersContext } from "../contexts/UsersContext";
import {
  addEvent,
  deleteEvent,
  dictionaryOptions,
  editOptions,
  eventDate,
  eventName,
  taskOptions,
  useDictionaryContext,
} from "../contexts/TranslateContext";
import styles from "./MainPage.module.css";
import GStyles from "./GlobalPage.module.css";

const MainPage = () => {
  const { lang } = useDictionaryContext();

  const { todo, dataLoading, deleteLoading, onDelete } = useUsersContext();
  const handleDelete = (userId) => {
    onDelete(userId);
  };
  if (dataLoading || deleteLoading)
    return (
      <div className={GStyles.loading}>
        <p>Is Loading ...</p>
        <p>Please wait</p>
      </div>
    );

  const deadline = new Date();
  const setDeadline = deadline.toLocaleDateString(
    lang === "ka" ? "ka-GE" : "en-US",
    {
      month: "long",
    }
  );

  return (
    <div className={styles.app}>
      <div>
        <Link to="/create" className={styles.link}>
          {addEvent[lang]}
        </Link>
      </div>

      {todo.map((user) => (
        <div
          key={user.id}
          style={{ border: "1px solid gold" }}
          className={styles.events}
        >
          <h2>
            {eventName[lang]}: <span>{user.name}</span>
          </h2>
          <h4>
            {user.isCompleted
              ? taskOptions[lang].completed
              : taskOptions[lang].notCompleted}
          </h4>

          <p>
            {eventDate[lang]}:{" "}
            {`${setDeadline} ${Math.floor(Math.random() * 30) + 1} `}
          </p>
          <Link to={`/update/${user.id}`} className={GStyles.editLink}>
            {editOptions[lang]}
          </Link>
          <button
            onClick={() => handleDelete(user.id)}
            className={styles.cancelEvent}
          >
            {deleteEvent[lang]}
          </button>
        </div>
      ))}
      <p>{dictionaryOptions[lang]}</p>
    </div>
  );
};

export default MainPage;
