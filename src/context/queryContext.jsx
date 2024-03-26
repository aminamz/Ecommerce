import { createContext, useContext, useState } from "react";

const QueryContext = createContext();

function QueryProvider({ children }) {
  const [query, setQuery] = useState({ search: "", category: "" });
  return <QueryContext.Provider value={{ query, setQuery }}>{children}</QueryContext.Provider>;
}

export const useQuery = () => {
  const result = useContext(QueryContext);
  return result;
};

export default QueryProvider;
