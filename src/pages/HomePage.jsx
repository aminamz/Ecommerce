import { useContext } from "react";
import { productContext } from "../App";

function HomePage() {
  const result = useContext(productContext);
  console.log(result);

  return <div></div>;
}

export default HomePage;
