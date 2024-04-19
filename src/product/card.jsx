import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Snackbar, Alert } from "@mui/material";
import { useDispatch } from 'react-redux';
import TransitionsModal from '../components/modal';
import { Link, Button, Stack } from "@mui/material";
import TextRating from './stars';
import { getProductThunk } from '../redux/Features/getProduct/getProduct';
import { upDateProduct } from '../redux/Features/upDateProduct/updateProductSlice';
import { deleteProduct } from '../redux/Features/DeleteProduct/deleteProdutSlice';
import { getProducts } from '../redux/Features/getProducts/getProductsSlice';
export default function ActionAreaCard(props) {
  const [loadingOpen, setLoadingOpen] = useState(true);
  const [sucessOpen, setSicessOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // State to track hover
  const dispatch = useDispatch();

  const handleCloseLoad = (type) => {
    type(false);
  };

  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSicessOpen(false);
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

    dispatch(upDateProduct(form));
  };

  const handleModalOpen = () => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('productId', props.proId);
    window.history.pushState({}, '', `${window.location.pathname}?${urlParams}`);




    // dispatch(getProductThunk());
    // dispatch(getProducts())







  };

  return (
    <>
      <Snackbar open={sucessOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Product Update Successfully
        </Alert>
      </Snackbar>
      <Card sx={{ width: "230px", margin: "auto" }}>
        <div onClick={handleModalOpen}>
          <div 
            className='relative h-[300px] w-full overflow-hidden'
            onMouseEnter={() => setIsHovered(true)} // Set hover state to true on mouse enter
            onMouseLeave={() => setIsHovered(false)} // Set hover state to false on mouse leave
          >
            <img 
              src={props.image[0]} // Display the first image by default
              alt="cardImage" 
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ease-in-out ${isHovered ? 'opacity-0' : 'opacity-100'}`} // Fade out when hovered
            />
            <img 
              src={props.image[1] || props.image[0]} // Display the second image on hover
              alt="cardImage" 
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`} // Fade in when hovered
            />
          </div>
          <CardContent>
            <Typography gutterBottom component="div">
              <p className='sm:text-[17px] text-[14px] font-[ralway] font-semibold leading-4'>{props.title}</p>
            </Typography>
            <TextRating ratings={props.rating} />
            <Typography variant="body2" color="text.secondary">
              <p className='py-1 pl-1'> Rs: <span className='font-semibold'>{props.price}</span></p>
            </Typography>
            <div className='flex justify-between'>
              <Stack spacing={2} direction="row">
                <TransitionsModal modalSubmitName="Edit" onDataUpdate={handleModalSubmit} paddingy="10px" paddingx="20px" name={"Edit"} />
              </Stack>
              <Stack spacing={2} direction="row">
                <Button onClick={() => {
                  const urlParams = new URLSearchParams(window.location.search);
                  urlParams.set('productId', props.proId);
                  window.history.pushState({}, '', `${window.location.pathname}?${urlParams}`);
                  dispatch(deleteProduct());
                }} 
                sx={{ width: { sm: 30, xs: 10 }, padding: { sm: 1, xs: 0.2 }, fontSize: { sm: 12, xs: 10 } }} 
                variant="contained" 
                style={{ backgroundColor: '#001f3f' }}>Delete</Button>
              </Stack>
            </div>
            <div className='mt-2'>
              <Link href="#">View Detail</Link>
            </div>
          </CardContent>
        </div>
      </Card>
    </>
  );
};
