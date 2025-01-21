import { useEffect } from "react";

export function useFetch() {
    const [isFetching, setIsFetching] = useState();
    const [errorFetchingState, setErrorFetchingState] = useState();
    const [data, setData] = useState();


  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);

      try {
        const places = await fetchUserPlaces();

        setUserPlaces(places);
      } catch (error) {
        setErrorFetchingState({
          message: error.message || "Failed deleting places",
        });
      }
      setIsFetching(false);
    }

    fetchData();
  }, []);
}
