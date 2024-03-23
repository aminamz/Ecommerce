import { useContext } from "react";
import { productContext } from "../App";
import Search from "../components/Search";

function HomePage() {
  const { pending, data, error } = useContext(productContext);

  return (
    <div>
      <Search />
      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}

      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
