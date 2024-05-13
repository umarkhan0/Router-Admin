import ListProduct from "../product/list";
import DetailProduct from "../product/productDetail.jsx";
import BasicCard from '../components/deshbord.jsx';
import { useDispatch , useSelector } from "react-redux";
import { loginTrueFalse } from "../redux/Features/LoginConform/TFSlice.js";
const DetailProductStructure = () =>{
    const dispatch = useDispatch();
    const { isLoading, error, res } = useSelector((state) => state?.verfyLogin);
    let check = () => {
    dispatch(loginTrueFalse());
    }
    // console.log(res)
    // console.log(error)
    return(
        <>
        <BasicCard home={DetailProduct} />
        {/* <button onClick={check}>check</button> */}
        
        </>
    )
}
export default DetailProductStructure;