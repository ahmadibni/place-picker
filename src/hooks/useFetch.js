import { useEffect, useState } from "react";

export function useFetch(fetchfn, initial) {
  const [isFetching, setIsFetching] = useState(false);
  const [errorFetchingState, setErrorFetchingState] = useState();
  const [fetchedData, setFetchedData] = useState(initial);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);

      try {
        const places = await fetchfn();

        setFetchedData(places);
      } catch (error) {
        setErrorFetchingState({
          message: error.message || "Failed fetching data",
        });
      }
      setIsFetching(false);
    }

    fetchData();
  }, [fetchfn]);

  return {
    isFetching,
    errorFetchingState,
    fetchedData,
    setErrorFetchingState,
    setFetchedData,
  };
}
