import { useState } from "react";
const useRequest = ({ url, method }) => {
  const [loading, setLoading] = useState(false);
  // const REACT_APP_API_KEY =
  //   "zemvDlvtavG4trFqzcyYlOX0SHH_-hx8_z7YG56INKw9OFLh6A";

  const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
  console.log(process.env.REACT_APP_API_KEY);

  const sendRequest = async (body, del) => {
    setLoading(true);
    const res = await fetch(url || del, {
      method,
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${REACT_APP_API_KEY}`,
      },
      body: !!body && body !== "GET" ? JSON.stringify(body) : undefined,
    });

    const data = await res.json();
    setLoading(false);

    return data;
  };

  return { loading, sendRequest };
};
export default useRequest;
