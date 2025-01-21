import { useEffect, useState } from "react";

export function useFetch(fetchfn) {
  const [isFetching, setIsFetching] = useState(false);
  const [errorFetchingState, setErrorFetchingState] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);

      try {
        const places = await fetchfn();

        setData(places);
      } catch (error) {
        setErrorFetchingState({
          message: error.message || "Failed fetching data",
        });
      }
      setIsFetching(false);
    }

    fetchData();
  }, [fetchfn]);

  
}
