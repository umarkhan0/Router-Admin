import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TransitionsModal from '../components/modal';
import Button from '@mui/material/Button';
import TextRating from './stars';
export default function ActionAreaCard(props) {
  // console.log(props.image);
  let {image , price , rating , title} = props;
  
  const handleModalSubmit = (data) => {
    // console.log('Data received in App:', data);
    // You can do whatever you want with the data here
  };
  return (
    <Card sx={{ width: "230px" , margin: "auto" }}>
      <div >
        <img src={image} alt="cardImage" className=' h-[200px] w-full'  />
        <CardContent>
          <Typography gutterBottom  component="div">
          <p className=' sm:text-[17px] text-[14px] font-[ralway] font-semibold leading-4'>{title}</p>
          </Typography>
          <TextRating ratings={rating}  />
          <Typography variant="body2" color="text.secondary">
       <p className=' py-1 pl-1'> Rs: <span className=' font-semibold'>{price}</span></p>
          </Typography>
          <div className=' flex justify-between'>
          <Stack spacing={2} direction="row">
          <TransitionsModal onDataUpdate={handleModalSubmit}  paddingy="10px" paddingx="20px" name={"Edit"} />
          </Stack>
          <Stack spacing={2} direction="row">
          <Button sx={{ width: { sm: 30 , xs: 10 } , padding: {sm: 1 , xs: 0.2} , fontSize: {sm: 12 , xs: 10} }}  variant="contained" style={{ backgroundColor: '#001f3f' }} >Delete</Button>
          </Stack>
          </div>
          
        </CardContent>
      </div>
    </Card>
  );
}