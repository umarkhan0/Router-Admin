import ActionAreaCard from "./card";
import AddIcon from '@mui/icons-material/Add';
import TransitionsModal from "../components/modal";
import { Stack, Button } from "@mui/material";
import { useState } from "react";
import { addProduct } from "../redux/Features/addProduct/addProductSlice";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
const ListProduct = () => {
    const { isLoading, res, error } = useSelector((state) => state.newProduct);

    let dispatch = useDispatch();
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

        // Set a timeout for the API request (e.g., 10 seconds)
        // const timeoutId = setTimeout(() => {
        //     setLoading(false);
        //     console.error('Request timed out');
        // }, 10000); // 10 seconds timeout

        dispatch(addProduct(form));
        console.log(res, error);

    };


    return (
        <>

            {/* <form> */}
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                <button type="submit" class="text-white absolute end-2.5 bottom-2.5   focus:outline-none  font-medium rounded-lg active:opacity-50 text-sm px-4 py-2 dark:bg-blue-600  bg-[#001f3f]">Search</button>
            </div>
            {/* </form>   */}
            <div className="flex md:justify-between justify-center flex-wrap items-center">
                <div className="mt-2 m-1">
                    <ActionAreaCard />
                </div>
                <div className="mt-2 m-1 flex">
                    <ActionAreaCard />
                </div>
                <div className="mt-2 m-1">
                    <ActionAreaCard />
                </div>
                <div className="mt-2 m-1">
                    <ActionAreaCard />
                </div>
                <div className="mt-2 m-1">
                    <ActionAreaCard />
                </div> <div className="mt-2 m-1">
                    <ActionAreaCard />
                </div> <div className="mt-2 m-1">
                    <ActionAreaCard />
                </div> <div className="mt-2 m-1">
                    <ActionAreaCard />
                </div> <div className="mt-2 m-1">
                    <ActionAreaCard />
                </div> <div className="mt-2 m-1">
                    <ActionAreaCard />
                </div> <div className="mt-2 m-1">
                    <ActionAreaCard />
                </div> <div className="mt-2 m-1">
                    <ActionAreaCard />
                </div>


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