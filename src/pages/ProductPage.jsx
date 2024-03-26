import Search from "../components/Search";
import { Circles } from "react-loader-spinner";

import { useProduct } from "../context/productContext";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { categoryFilter, searchFilter } from "../helpers/helper";
import { useQuery } from "../context/queryContext";

function HomePage() {
  const product = useProduct();
  const { query, setQuery } = useQuery();
  const [displayed, setDisplayed] = useState([]);

  useEffect(() => {
    setDisplayed(product);
  }, [product]);

  useEffect(() => {
    let newList = searchFilter(product, query.search);
    newList = categoryFilter(newList, query.category);
    setDisplayed(newList);
  }, [query]);

  console.log(query);

  return (
    <div>
      <Search />

      {!displayed.length && <Circles height={80} width={80} color="#4fa94d" />}

      <ul>
        {displayed.map((item) => (
          <li key={item.id}>
            <p>{item.title}</p>
            <button>add</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
