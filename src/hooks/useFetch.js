import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [content, setContent] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);
      setContent(null)
      setError(false);
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("page missing");
        }
        const json = await res.json();
        setContent(json.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchContent()
  }, [url]);

  return [content, loading, error];
};

export default useFetch;
