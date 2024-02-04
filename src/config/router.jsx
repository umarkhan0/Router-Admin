import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home";
import SignIn from "../components/login";
import Catagries from "../pages/catagries";
import Product from "../pages/product";
import Login from "../pages/login";
import Costumers from "../pages/costomers";
import { loginTrueFalse } from "../redux/Features/LoginConform/TFSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
let AppRouter = () => {
  const dispatch = useDispatch();
  const { res } = useSelector((state) => state?.verfyLogin);
  useEffect(() => {
    dispatch(loginTrueFalse());
  }, []);
  console.log(res?.messege)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={res?.messege == true ? <Home /> : <Navigate to="loginPanal" />}></Route>
        <Route path="/product" element={res?.messege == true ? <Product /> : <Navigate to="loginPanal" />}></Route>
        <Route path="/catagries" element={res?.messege == true ? <Catagries /> : <Navigate to="loginPanal" />}></Route>
        <Route path="/customers" element={res?.messege == true ? <Costumers /> : <Navigate to="loginPanal" />}></Route>
        <Route path="/loginPanal" element={!res?.messege == true ? <Login /> : <Navigate to="/" />}></Route>

      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
