import { useNavigate, useParams } from "react-router-dom";
import UserForm from "../components/UserForm";
import useFetch from "../hooks/useFetch";
import useRequest from "../hooks/useRequest";
import styles from "./Updatepage.module.css";
import GStyle from "./GlobalPage.module.css";

const UpdatePage = () => {
  const { userId } = useParams();

  const { response, loading, err } = useFetch({
    url: `/api/v1/users/${userId}`,
    method: "GET",
  });
  const navigate = useNavigate();

  const { sendRequest } = useRequest({
    url: `/api/v1/users/${userId}`,
    method: "PUT",
  });
  const onSubmit = (name, complete) => {
    sendRequest({ name, complete })
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  if (loading && !response)
    return (
      <div className={GStyle.loading}>
        <p>Is Loading ...</p>
        <p>please wait</p>
      </div>
    );

  if (err || !response)
    return <div className={GStyle.error}>Something Wrong</div>;

  return (
    <div className={styles.formContainer}>
      <UserForm className={styles.form}
        onFormSubmit={onSubmit}
        name={response.name}
        complete={response.complete}
      />
    </div>
  );
};

export default UpdatePage;
