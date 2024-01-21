import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function CustomizedSnackbars(props) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(props.inform.openh);
  }, [props.inform.openh]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    props.onClose(); // Close the Snackbar in the parent component
  };

  return (
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Set anchorOrigin to top-center
      >
        <Alert
          onClose={handleClose}
          severity={props.inform.icon}
          variant="filled"
          sx={{ width: '100%', backgroundColor: "red" }}
        >
          {props.inform.title}
        </Alert>
      </Snackbar>
  );
}
