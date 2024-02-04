import ListProduct from "../product/list";
import BasicCard from '../components/deshbord.jsx';
import { useDispatch , useSelector } from "react-redux";
import { loginTrueFalse } from "../redux/Features/LoginConform/TFSlice.js";
const Product = () =>{
    const dispatch = useDispatch();
    const { isLoading, error, res } = useSelector((state) => state?.verfyLogin);
    let check = () => {
    dispatch(loginTrueFalse());
    }
    console.log(res)
    console.log(error)
    return(
        <>
        <BasicCard home={ListProduct} />
        <button onClick={check}>check</button>
        </>
    )
}
export default Product;