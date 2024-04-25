import { useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";
import useRequest from "../hooks/useRequest";
import {
  dictionaryOptions,
  useDictionaryContext,
} from "../contexts/TranslateContext";
import styles from "./CreatePage.module.css";
import GStyles from "./GlobalPage.module.css";

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

  if (loading) return <div className={GStyles.loading}>Is Loading ...</div>;
  return (
    <div className={styles.formWrapper}>
      <UserForm onFormSubmit={onSubmit} />
      <p>{dictionaryOptions[lang]}</p>
    </div>
  );
};

export default CreatePage;
