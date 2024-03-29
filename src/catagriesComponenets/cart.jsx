import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Cart() {
  return (
    <Card sx={{ width: {sm: 230 , lg: 300} , margin: "auto"}}>
      <CardContent>
      
        <Typography variant="h5" component="div">
          Tp Link
        </Typography>
       
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Item</Button>
      </CardActions>
    </Card>
  );
}