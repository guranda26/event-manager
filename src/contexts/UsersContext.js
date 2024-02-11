import { createContext, useCallback, useContext, useMemo } from "react";
import useRequest from "../hooks/useRequest";
import useFetch from "../hooks/useFetch";

const UsersContect = createContext(null);

const UsersContextProvider = ({ children }) => {
  const {
    response,
    loading: dataLoading,
    resendRequest,
  } = useFetch({
    url: "/api/v1/users",
    method: "GET",
  });
  const { sendRequest, loading: deleteLoading } = useRequest({
    method: "DELETE",
  });
  const todo = useMemo(() => {
    return (
      response?.items.map((user) => {
        return {
          name: user.name,
          isCompleted: user.isCompleted,
          id: user._uuid,
        };
      }) || []
    );
  }, [response]);

  const onDelete = useCallback(
    (sendRequest) => (userId) => {
      sendRequest(null, `/api/v1/users/${userId}`).then(() => resendRequest());
    },
    [resendRequest]
  );

  const contextValue = useMemo(
    () => ({ dataLoading, deleteLoading, todo, onDelete }),
    [dataLoading, deleteLoading, todo, onDelete]
  );

  return (
    <UsersContect.Provider value={contextValue}>
      {children}
    </UsersContect.Provider>
  );
};
export const useUsersContext = () => {
  const contextValue = useContext(UsersContect);
  if (!contextValue)
    throw new Error("Your component is not inside UserContextProvider");

  return contextValue;
};

export default UsersContextProvider;
