import { useCallback, useEffect, useState } from "react";

const useFetch = ({ url, method }) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  // const REACT_APP_API_KEY =
  //   "zemvDlvtavG4trFqzcyYlOX0SHH_-hx8_z7YG56INKw9OFLh6A";
  const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

  const onFetch = useCallback(() => {
    setLoading(true);
    fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${REACT_APP_API_KEY}`,
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
  }, [url, method, REACT_APP_API_KEY]);

  useEffect(() => {
    onFetch();
  }, [onFetch, REACT_APP_API_KEY]);

  return { response, loading, err, resendRequest: onFetch };
};

export default useFetch;
