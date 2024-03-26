import { Navigate, Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import SinglePage from "./pages/SinglePage";
import WrondPage from "./pages/404";
import Layout from "./templates/Layout";
import ProductsProvider from "./context/productContext";
import QueryProvider from "./context/queryContext";

function App() {
  return (
    <>
      <ProductsProvider>
        <QueryProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Navigate to="product" replace />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/product" element={<ProductPage />} />
              <Route path="/product/:id" element={<SinglePage />} />
              <Route path="*" element={<WrondPage />} />
            </Routes>
          </Layout>
        </QueryProvider>
      </ProductsProvider>
    </>
  );
}

export default App;
