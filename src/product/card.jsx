import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Snackbar, Alert, Backdrop, CircularProgress } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import TransitionsModal from '../components/modal';
import { Link, Button, Stack } from "@mui/material";
import TextRating from './stars';
import { upDateProduct } from '../redux/Features/upDateProduct/updateProductSlice';
import { deleteProduct } from '../redux/Features/DeleteProduct/deleteProdutSlice';
export default function ActionAreaCard(props) {
  const [loadingOpen, setLoadingOpen] = React.useState(true);
  const handleCloseLoad = (type) => {
    type(false);
  };
  const dispatch = useDispatch();
  // const { isLoading, res, error } = useSelector((state) => state.updateProduct);

  const { image, price, rating, title, proId } = props;
  const [sucessOpen, setSicessOpen] = React.useState(false);
  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    };
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
    urlParams.set('productId', proId);
    window.history.pushState({}, '', `${window.location.pathname}?${urlParams}`);
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
          Product Update Sussecfully
        </Alert>
      </Snackbar>
      <Card sx={{ width: "230px", margin: "auto" }}>
        <div onClick={handleModalOpen}>
          <img src={image} alt="cardImage" className='h-[200px] w-full' />
          <CardContent>
            <Typography gutterBottom component="div">
              <p className='sm:text-[17px] text-[14px] font-[ralway] font-semibold leading-4'>{title}</p>
            </Typography>
            <TextRating ratings={rating} />
            <Typography variant="body2" color="text.secondary">
              <p className='py-1 pl-1'> Rs: <span className='font-semibold'>{price}</span></p>
            </Typography>
            <div className='flex justify-between'>
              <Stack spacing={2} direction="row">
                <TransitionsModal modalSubmitName="Edit" onDataUpdate={handleModalSubmit} paddingy="10px" paddingx="20px" name={"Edit"} />
              </Stack>
              <Stack spacing={2} direction="row">
                <Button onClick={

                  () =>
                    dispatch(deleteProduct())

                } sx={{ width: { sm: 30, xs: 10 }, padding: { sm: 1, xs: 0.2 }, fontSize: { sm: 12, xs: 10 } }} variant="contained" style={{ backgroundColor: '#001f3f' }}>Delete</Button>
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
