import { useState } from "react";

const useRequest = ({ url, method }) => {
  const [loading, setLoading] = useState(false);
  const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

  const sendRequest = async (body, del) => {
    setLoading(true);
    try {
      const res = await fetch(url || del, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${REACT_APP_API_KEY}`,
        },
        body: !!body && body !== "GET" ? JSON.stringify(body) : undefined,
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await res.json();
        setLoading(false);
        return data;
      } else {
        const text = await res.text();
        console.warn(`Received non-JSON response: ${text}`);
        setLoading(false);
        return null;
      }
    } catch (error) {
      console.error("Error sending request:", error);
      setLoading(false);
      throw error;
    }
  };

  return { loading, sendRequest };
};

export default useRequest;
