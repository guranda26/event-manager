import { useState } from "react";
import {
  taskOptions,
  useDictionaryContext,
} from "../contexts/TranslateContext";

const UserForm = ({ onFormSubmit }) => {
  const [name, setName] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(name, isCompleted);
  };
  const { lang } = useDictionaryContext();

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        onChange={(e) => setName(e.target.value)}
        defaultValue={setName}
      />
      <input
        type="checkbox"
        id="completed"
        checked={isCompleted}
        onChange={(e) => setIsCompleted(e.target.checked)}
      />
      <label htmlFor="completed">{taskOptions[lang]}</label>
      <button>Submit</button>
    </form>
  );
};
export default UserForm;
