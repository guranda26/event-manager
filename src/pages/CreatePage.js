import UserForm from "../components/UserForm";

const CreatePage = () => {
  const onFormSubmit = (name, isCompleted) => {
    fetch("/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
      body: JSON.stringify([{ name, isCompleted }]),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Response failed`);
        }
        return res.json();
      })
      // .then((data) => {
      //   setTodo((prev) => [
      //     ...prev,
      //     {
      //       name: data.items[0].name,
      //       isCompleted: data.items[0].isCompleted,
      //       id: data.items[0]._uuid,
      //     },
      //   ]);
      // })
      .catch((err) => console.log(err));
  };
  return <UserForm onFormSubmit={onFormSubmit} />;
};

export default CreatePage;
