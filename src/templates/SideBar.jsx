import { useSearchParams } from "react-router-dom";
import styles from "./styles/SideBar.module.css";
import { useEffect } from "react";
import { useQuery } from "../context/queryContext";

function SideBar() {
  // const [param, setParam] = useSearchParams();
  const { query, setQuery } = useQuery();

  const clickHandler = (event) => {
    if (event.target.tagName === "LI") {
      setQuery({ ...query, category: event.target.innerText.toLowerCase() });
    }
  };

  return (
    <aside className={styles["side-bar"]}>
      <h1>AnyShop</h1>
      <div>
        <h3>Categories</h3>
        <ul onClick={clickHandler}>
          <li className={query.category === "all" ? "active" : null}>All</li>
          <li className={query.category === "men's clothing" ? "active" : null}>Men's clothing</li>
          <li className={query.category === "women's clothing" ? "active" : null}>Women's clothing</li>
          <li className={query.category === "jewelery" ? "active" : null}>Jewelery</li>
          <li className={query.category === "electronics" ? "active" : null}>Electronics</li>
        </ul>
      </div>
      <footer>
        <p>Allright reserved &copy;</p>
      </footer>
    </aside>
  );
}

export default SideBar;
