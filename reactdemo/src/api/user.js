import useSWR from "swr";
export const list = [
  {
    id: 1,
    name: "Arya",
  },
];

const fetcher = (...args) => fetch(...args).then((res) => res);

function useUser() {
  const { data, error, isLoading } = useSWR(
    `https://restcountries.com/v3.1/all`,
    fetcher,
    {
      onSuccess: () => {
        console.log("fetch success callback");
      },
    }
  );

  return {
    data,
    isLoading,
    error,
  };
}

export { useUser };
