import { useState } from "react";
import GStyles from "../pages/GlobalPage.module.css";
import {
  taskOptions,
  useDictionaryContext,
} from "../contexts/TranslateContext";

const UserForm = ({ onFormSubmit }) => {
  const [name, setName] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const { lang } = useDictionaryContext();

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(name, isCompleted);
  };

  return (
    <form onSubmit={onSubmit} className={GStyles.form}>
      <input
        type="text"
        placeholder="Event Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        <input
          type="checkbox"
          id="completed"
          checked={isCompleted}
          onChange={(e) => setIsCompleted(e.target.checked)}
        />
        <label htmlFor="completed">{taskOptions[lang].label}</label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default UserForm;
