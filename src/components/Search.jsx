import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "../context/queryContext";

function Search() {
  const [search, setSearch] = useState("");
  const { query, setQuery } = useQuery();

  const changeHandler = (e) => {
    setSearch(e.target.value.toLowerCase());
  };
  const searchHandler = () => {
    setQuery((query) => ({ ...query, search }));
  };

  return (
    <div>
      <input type="text" value={search} onChange={changeHandler} placeholder="Search any products" />
      <button onClick={searchHandler}>search</button>
    </div>
  );
}

export default Search;
