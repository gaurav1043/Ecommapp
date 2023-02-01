import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const user = true;
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/products/:category" element={<ProductList />}></Route>
      <Route path="/product/:id" element={<Product />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route
        path="/login"
        element={user ? <Navigate to="/" /> : <Login />}
      ></Route>
      <Route
        path="/register"
        element={user ? <Navigate to="/" /> : <Register />}
      ></Route>
      {/* <Route path="/success" element={<Success />}></Route> */}
    </Routes>
  );
};

export default App;
