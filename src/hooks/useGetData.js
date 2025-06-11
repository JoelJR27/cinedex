import { useState, useEffect } from "react";
import useLoading from "./useLoading";

export default function useGetData(url) {
  const authorizationCode = import.meta.env.VITE_AUTHORIZATION;
  const [response, setResponse] = useState([]);
  const [data, setData] = useState([]);
  const [dataResults, setDataResults] = useState([]);
  const { loading, setLoading } = useLoading(true);
  const [error, setError] = useState(null);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: authorizationCode,
    },
  };
  useEffect(() => {
    let isMounted = true;
    async function getData() {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          setError(response.status);
        }
        const data = await response.json();
        const result = data.results;
        if (isMounted) {
          setResponse(response);
          setData(data);
          setDataResults(result);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    getData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return {
    data,
    dataResults,
    response,
    loading,
    error,
  };
}
