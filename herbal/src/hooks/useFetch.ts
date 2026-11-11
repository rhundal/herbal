import { useState, useEffect } from "react";
import { type UseFetchResult } from "../types/recipe";

export function useFetch<T>(
  fetchFn: () => Promise<T>,
  dependencies: unknown[] = [],
): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!fetchFn) return; // Don't fetch if function is not provided

    const controller = new AbortController(); // For cleanup
    setData(null); // Reset data on new fetch
    setError(null); // Reset error on new fetch
    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetchFn();
        setData(response);
      } catch (err: any) {
        if (err.name !== "AbortError") {
          // Don't set error if aborted
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      controller.abort();
    };
  }, dependencies); // Re-run if dependencies change

  return { data, loading, error };
}

export default useFetch;
