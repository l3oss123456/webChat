import { useState, useEffect } from "react";

const useFetchApi = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPoke = async () => {
      setLoading(true);
      try {
        const resp = await fetch(url);
        const result = await resp.json();
        setData(result);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchPoke();
  }, [url]);

  return { data, error, loading };
};

export default useFetchApi;
