import { useEffect, useState } from "react";
// import REACT_APP_API_KEY from "./env";

const useFetch = ({ url, method }) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Response failed`);
        }
        return res.json();
      })
      .then((data) => setResponse(data))
      .catch((error) => setErr(error))
      .finally(() => setLoading(false));

    //CLEAN-UP METHOD
    return () => {
      setResponse(null);
      setLoading(false);
      setErr(null);
    };
  }, [url, method]);

  return { response, loading, err };
};

export default useFetch;
