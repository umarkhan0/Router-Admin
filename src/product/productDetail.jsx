import TextRating from "./stars";
import { Typography, Backdrop, CircularProgress } from '@mui/material';
// import Backdrop from "@mui/material";
import { useEffect, useState } from "react";
import { getProductThunk } from "../redux/Features/getProduct/getProduct";
import { useDispatch, useSelector } from "react-redux";
let DetailProduct = () => {
    let dispatch = useDispatch()
    const [loadingOpen, setLoadingOpen] = useState(true);
    let [imageURL, setImageURL] = useState("https://res.cloudinary.com/dln3gflvk/image/upload/v1713715072/iaubtuhu6kyjgijtc2ri.webp")

    let [productData, setProductData] = useState()
    useEffect(() => {
        dispatch(getProductThunk());
    }, [])
    const { res: getProduct, isLoading: getProductIsLoading, error: getProductError } = useSelector((state) => state.getProduct);
    useEffect(() => {
        setProductData(getProduct)
        setImageURL(productData?.product.images
        [0])
        setLoadingOpen(false);

    }, [getProduct])

    console.log(loadingOpen);
    return (
        <>
    
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loadingOpen}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <div className=" w-full flex p-2 flex-wrap rounded-md border border-slate-900 shadow-md">
                <div className=" min-[800px]:w-[50%] w-full h-[400px] flex justify-center items-center  ">
                    <div>
                        <img className=" shadow-sm rounded-sm border p-1 border-slate-900" src={imageURL} alt="" style={{ maxHeight: '200px', minHeight: '100px' }} />
                        <div className=" flex justify-evenly mt-4">
                            <img onClick={() => setImageURL(productData?.product.images
                            [0])} className=" cursor-pointer shadow-md rounded-sm border p-1 border-slate-900" src={productData?.product.images
                            [0]} alt="" style={{ maxHeight: '25px', minHeight: '15px' }} />
                            <img onClick={() => {

                                productData?.product.images[1] == undefined ? setImageURL(productData?.product.images[0]) : setImageURL(productData?.product.images[1])
                            }} className=" cursor-pointer shadow-md rounded-sm border p-1 border-slate-900" src={productData?.product.images
                            [1] || "https://thumbs.dreamstime.com/b/light-abstract-empty-square-transparent-background-pattern-vector-231364928.jpg"} alt="" style={{ maxHeight: '25px', minHeight: '15px' }} />
                            <img onClick={() => {
                                if (productData?.product.images[2] == undefined && productData?.product.images[1] == undefined) {
                                    setImageURL(productData?.product.images[0])

                                } else {
                                    setImageURL(productData?.product.images[1])
                                }

                            }} className=" cursor-pointer shadow-md rounded-sm border p-1 border-slate-900" src={productData?.product.images
                            [2] || "https://thumbs.dreamstime.com/b/light-abstract-empty-square-transparent-background-pattern-vector-231364928.jpg"} alt="" style={{ maxHeight: '25px', minHeight: '15px' }} />
                        </div>
                    </div>
                </div>
                <div className="min-[800px]:w-[50%] w-full  min-[800px]:h-[400px] flex justify-center items-center">


                    <table className=" ">
                        <tr>
                            <td className=" pb-4 font-semibold font-serif">Title: </td>
                            <td className=" pl-4 pb-4">{productData?.product.title}</td>

                        </tr>

                        <tr>
                            <td className=" pb-4 font-semibold font-serif">Price: </td>
                            <td className=" pl-4 pb-4">{productData?.product.price}</td>

                        </tr>
                        <tr>
                            <td className=" pb-4 font-semibold font-serif">Rating: </td>
                            <td className=" pl-4 pb-4">
                                {
                                    productData?.product.rating &&
                                    <TextRating ratings={productData?.product.rating} />
                                }
                            </td>
                        </tr>
                        <tr>
                            <td className=" pb-4 font-semibold font-serif">Stock: </td>
                            <td className=" pl-4 pb-4">{productData?.product?.price}</td>

                        </tr>

                    </table>

                </div>
            </div>
            <Typography className=" pt-6"><span className=" font-bold">Discription</span>: <p>{
                productData?.product?.description
            }</p></Typography>
        </>


    )
};
export default DetailProduct;