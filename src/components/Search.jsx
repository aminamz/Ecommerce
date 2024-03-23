import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Search() {
  const [query, setQuery] = useSearchParams();
  const [search, setSearch] = useState(query.get("search") || "");

  const searchHandler = () => {
    setQuery({ ...query, search });
  };
  return (
    <div>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search any products" />
      <button onClick={searchHandler}>search</button>
    </div>
  );
}

export default Search;
