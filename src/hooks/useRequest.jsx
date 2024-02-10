import { useState } from "react";
const useRequest = ({ url, method }) => {
  const [loading, setLoading] = useState(false);
  const API_KEY = "zemvDlvtavG4trFqzcyYlOX0SHH_-hx8_z7YG56INKw9OFLh6A";

  const sendRequest = async (body, del) => {
    setLoading(true);
    const res = await fetch(url || del, {
      method,
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
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
