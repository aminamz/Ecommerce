import { createContext, useContext, useEffect, useState } from "react";

import { STORE_API } from "../services/storeAPI";

const ProductContext = createContext();

function ProductsProvider({ children }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        setProduct(await STORE_API.get("/products"));
      } catch (error) {
        console.log(error.message);
      }
    };
    fetch();
  }, []);

  return <ProductContext.Provider value={product}>{children}</ProductContext.Provider>;
}
const useProduct = () => {
  const result = useContext(ProductContext);
  return result;
};
export default ProductsProvider;
export { useProduct };
