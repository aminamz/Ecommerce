import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { createContext, useEffect, useReducer } from "react";
import { STORE_API } from "./services/storeAPI";

import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import SinglePage from "./pages/SinglePage";
import WrondPage from "./pages/404";
import Layout from "./templates/Layout";

const result = { pending: true, data: [], error: "" };
const productContext = createContext();

const reducer = (state, action) => {
  switch (action.result) {
    case "SUCCESS":
      return { ...state, data: action.payload, pending: false };
    case "RESET":
      return { ...result };
  }
};

function App() {
  const [allProduct, dispatch] = useReducer(reducer, result);

  useEffect(() => {
    STORE_API.get("/products").then((res) => dispatch({ result: "SUCCESS", payload: res }));
  }, []);

  return (
    <>
      <Layout>
        <productContext.Provider value={allProduct}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate to="product" replace />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/product" element={<ProductPage />} />
              <Route path="/product/:id" element={<SinglePage />} />
              <Route path="*" element={<WrondPage />} />
            </Routes>
          </BrowserRouter>
        </productContext.Provider>
      </Layout>
    </>
  );
}

export { productContext, App as default };
