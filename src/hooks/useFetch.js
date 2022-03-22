import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [content, setContent] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);
      setError(false); //behövs denna?
      try {
        const res = await fetch(url);
        const json = await res.json();
        setContent(json);
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
