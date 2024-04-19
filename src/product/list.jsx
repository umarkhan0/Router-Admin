import React, { useState, useEffect } from "react";
import ActionAreaCard from "./card";
import AddIcon from '@mui/icons-material/Add';
import TransitionsModal from "../components/modal";
import { Snackbar, Alert, Backdrop, CircularProgress } from "@mui/material";
import { deleteProduct } from "../redux/Features/DeleteProduct/deleteProdutSlice";
import { getProducts } from "../redux/Features/getProducts/getProductsSlice";
import { addProduct } from "../redux/Features/addProduct/addProductSlice";
import { useSelector, useDispatch } from "react-redux";
import { resetAddProduct } from "../redux/Features/addProduct/addProductSlice";
import { resetUpdateProductState } from "../redux/Features/upDateProduct/updateProductSlice";
import { resetDeleteProductState } from "../redux/Features/DeleteProduct/deleteProdutSlice";
const ListProduct = () => {
    const [loadingOpen, setLoadingOpen] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [successOpen, setSuccessOpen] = useState(false);
    const [successText, setSuccessText] = useState("");

    const dispatch = useDispatch();
    const { res: resDeleteProduct, isLoading: deleteProductLoading } = useSelector((state) => state?.deleteProduct);
    const { res: resProduct, isLoading: updateProductLoading } = useSelector((state) => state?.updateProduct);
    const { isLoading: getAllUsersLoading, error: getAllUsersError, res: getAllUsersRes } = useSelector((state) => state?.getAllProducts);
    const { isLoading, res, error } = useSelector((state) => state.newProduct);
console.log(filteredProducts);
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch, res, resProduct , resDeleteProduct]);

    useEffect(() => {
        if (getAllUsersRes) {
            setFilteredProducts(getAllUsersRes.products);
            setLoadingOpen(false);
        };
    }, [getAllUsersRes , !deleteProductLoading]);

    useEffect(() => {
        console.log(resProduct);
        if (resProduct) {
            setSuccessText("Product is updated");
            setSuccessOpen(true);
            dispatch(resetUpdateProductState());
        }
    }, [resProduct, dispatch]);
    
    useEffect(() => {
        if (res) {
            setSuccessText("Product is added");
            setSuccessOpen(true);
            dispatch(resetAddProduct());
        }
    }, [res])
    useEffect(() => {
        if (resDeleteProduct) {
            setSuccessText("Product is deleted");
            setSuccessOpen(true);
            dispatch(resetDeleteProductState());

        }
    }, [resDeleteProduct])
    useEffect(() => {
        if (isLoading || updateProductLoading || deleteProductLoading) {
            setLoadingOpen(true);
        }
    }, [isLoading, updateProductLoading , deleteProductLoading]);

    const handleClose = () => {
        setSuccessOpen(false);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        const filtered = getAllUsersRes.products.filter(product =>
            product.title.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    const handleModalSubmit = async (formData) => {
        const form = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            if (key === 'files') {
                for (let i = 0; i < value.length; i++) {
                    form.append(`files`, value[i]);
                }
            } else {
                form.append(key, value);
            }
        });
        dispatch(addProduct(form));
    };

    return (
        <>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loadingOpen}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <div>
                <Snackbar open={successOpen} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: '100%' }}>
                        {successText}
                    </Alert>
                </Snackbar>
            </div>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input type="search" onChange={handleSearch} id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Product" required />
            </div>
            <div className="flex md:justify-between justify-center flex-wrap items-center">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((pro) => (
                        <div key={pro._id} className="mt-2 m-1">
                            <ActionAreaCard proId={pro._id} image={pro.images} price={pro.price} rating={pro.rating} title={pro.title} />
                        </div>
                    ))
                ) : (
                    <p>No such product found</p>
                )}
                <div className="fixed bottom-0 right-0 m-6 cursor-pointer bg-[#001f3f] p-4 rounded-full">
                    <TransitionsModal modalSubmitName="Add" onDataUpdate={handleModalSubmit} name={<AddIcon sx={{ color: "#fff" }} />} paddingy="0px" paddingx="0" />
                </div>
            </div>
        </>
    );
};

export default ListProduct;