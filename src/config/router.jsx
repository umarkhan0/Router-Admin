import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home";
import SignIn from "../components/login";
import Catagries from "../pages/catagries";
import Product from "../pages/product";
import Costumers from "../pages/costomers";
let AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/catagries" element={<Catagries />}></Route>
        <Route path="/customers" element={<Costumers />}></Route>

      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
