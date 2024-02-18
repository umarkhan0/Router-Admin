import ActionAreaCard from "./card";
import AddIcon from '@mui/icons-material/Add';
import TransitionsModal from "../components/modal";
import { Snackbar, Alert, Backdrop, CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import { getProducts } from "../redux/Features/getProducts/getProductsSlice";
import { addProduct } from "../redux/Features/addProduct/addProductSlice";
import { useSelector, useDispatch } from "react-redux";
const ListProduct = () => {
    const [loadingOpen, setLoadingOpen] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    // setLoadingOpen(true)
    let dispatch = useDispatch();
    const { isLoading: getAllUsersLoading, error: getAllUsersError, res: getAllUsersRes } = useSelector((state) => state?.getAllProducts);
    const { isLoading, res, error } = useSelector((state) => state.newProduct);
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch, res]);

    useEffect(() => {
        if (getAllUsersRes) {
            console.log('API Response:', getAllUsersRes.products);
            setFilteredProducts(getAllUsersRes.products);
            setLoadingOpen(false);
        };

    }, [getAllUsersRes]);
    const [sucessOpen, setSicessOpen] = useState(false);

    const handleCloseLoad = (type) => {
        type(false);
    };
    const handleClose = (reason) => {
        if (reason === 'clickaway') {
            return;
        };
        setSicessOpen(false);
    };
    useEffect(() => {
        if (res) {
            console.log('API Response:', res);
            setSicessOpen(true)
        };
        if (isLoading) {
            setLoadingOpen(true)
        };
        if (!isLoading) {
            handleCloseLoad(setLoadingOpen)
        }
    }, [res, isLoading, !isLoading]);




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
                    form.append(`files`, value[i]); // Use the same key for each file
                }
            } else {
                form.append(key, value);
            }
        });

        dispatch(addProduct(form));

    };


    return (
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loadingOpen}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <div>


                <Snackbar open={sucessOpen} autoHideDuration={6000} onClose={handleClose}>
                    <Alert
                        onClose={handleClose}
                        severity="success"
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        Product Add Sussecfully
                    </Alert>
                </Snackbar>
            </div>
            {/* <form> */}
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input type="search" onChange={handleSearch} id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Product" required />
              
            </div>
            {/* </form>   */}
            <div className="flex md:justify-between justify-center flex-wrap items-center">

                {filteredProducts.length > 0 ? (
                    filteredProducts.map((pro) => (
                        <div key={pro._id} className="mt-2 m-1">
                            <ActionAreaCard image={pro.images[0]} price={pro.price} rating={pro.rating} title={pro.title} />
                        </div>
                    ))
                ) : (
                    <p>No such product found</p>
                )}


                <div className=" fixed bottom-0 right-0 m-6 cursor-pointer bg-[#001f3f] p-4 rounded-full">
                    <TransitionsModal onDataUpdate={handleModalSubmit} name={<AddIcon sx={{ color: "#fff" }} />}
                        paddingy="0px" paddingx="0"
                    />

                </div>


            </div>
        </>
    )
};
export default ListProduct;