import { useState, useEffect } from "react";

interface ConfigFetch {
  method: "GET";
  headers: {
    Accept: "application/json";
  };
}

export const useApi = (url: string, config?: ConfigFetch) => {
  const [response, setResponse] = useState([]);
  const [errors, setErrors] = useState<{
    status?: number;
    message?: string;
  } | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const abortController = new AbortController();

    setLoading(true);
    fetch(url || "http://localhost:3001/api/tickets", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      signal: abortController.signal,
      ...config,
    })
      .then((res) => {
        if (!res.ok) throw res;
        return res.json();
      })
      .then((res) => {
        setResponse(res);
        setLoading(false);
      })
      .catch((err) => {
        if (!(err instanceof DOMException)) {
          err.json().then((body: { status: number; message: string }) => {
            setErrors(body);
            setLoading(false);
          });
        }
      });

    return () => {
      abortController.abort();
    };
  }, [url, config]);

  return {
    response,
    loading,
    errors,
  };
};
