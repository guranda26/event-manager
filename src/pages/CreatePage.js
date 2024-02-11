import { useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";
import useRequest from "../hooks/useRequest";
import {
  dictionaryOptions,
  useDictionaryContext,
} from "../contexts/TranslateContext";
const API_KEY = "zemvDlvtavG4trFqzcyYlOX0SHH_-hx8_z7YG56INKw9OFLh6A";
const CreatePage = () => {
  const { sendRequest, loading } = useRequest({
    url: "/api/v1/users",
    method: "POST",
  });
  const navigate = useNavigate();
  const { lang } = useDictionaryContext();

  const onSubmit = (name, isCompleted) => {
    sendRequest([{ name, isCompleted }])
      .then(() => navigate("/"))
      .catch((error) => console.log(error));
  };

  if (loading) return <p>Is Loading ...</p>;
  return (
    <>
      <UserForm onFormSubmit={onSubmit} />
      <p>{dictionaryOptions[lang]}</p>
    </>
  );
};

export default CreatePage;
