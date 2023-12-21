import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const req = await fetch(url);

        if (!req.ok) {
          throw new Error(req.statusText);
        }

        const data = await req.json();
        setData(data);
        setIsPending(false);
      } catch (err) {
        setError(err.message);
        setIsPending(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isPending, error };
}
