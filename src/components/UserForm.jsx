import { useState } from "react";

const UserForm = ({ onFormSubmit }) => {
  const [name, setName] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(name, isCompleted);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="checkbox"
        id="completed"
        checked={isCompleted}
        onChange={(e) => setIsCompleted(e.target.checked)}
      />
      <label htmlFor="completed">Task is completed</label>
      <button>Submit</button>
    </form>
  );
};
export default UserForm;
