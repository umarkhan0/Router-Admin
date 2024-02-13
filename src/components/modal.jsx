import * as React from "react";
import { useState } from "react";
import { Fade, Modal, Box, Backdrop, Button, Typography, Stack, Input, TextField, Select, FormControl, MenuItem, InputLabel } from "@mui/material"
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CustomizedSnackbars from "./Snackbar";
const style = {
  position: "absolute",
  top: "50%",
  overflowY: 'auto',
  height: '84vh',
  maxHeight: '84vh',
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%", // Set a percentage width for better responsiveness
  maxWidth: 440, // Set a maximum width to prevent it from getting too wide
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  p: 1.5,
};

export default function TransitionsModal(props) {
  const { paddingx, paddingy } = props || {};
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");
  const [alertText, setAlrtText] = useState("")
  // const [discription, setDiscription] = useState("");
  const [hendleOpen, setHendleOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [image, setImage] = React.useState(null);

  const [formData, setFormData] = useState({
    title: '',
    price: '',
    files: [],
    rating: '',
    description: '',
  });
  // console.log(formData.files);
  // console.log(formData.files[0]);
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'files' ? files : value,
    }));


  };

  const handleSubmit = () => {
    // console.log(formData);
    //  console.log( formData.files);
    console.log(formData.files);


    if (formData.title.trim() && formData.description.trim() && formData.rating != "" && formData.price != "" && formData.files[0] != undefined) {
      props.onDataUpdate(formData);

    } else {
      console.log("no valid");
      switch (true) {
        case !formData.title.trim():
          alertTextFun("Title is required");
          break;
        case !formData.description.trim():
          alertTextFun("Description is required");
          break;
        case !formData.price.trim():
          alertTextFun("Rating is required");
          break;
        case formData.rating == "":
          alertTextFun("Rating is required");
        case formData.price == "":
          alertTextFun("Price is required");
          break;
        case formData.files[0] == undefined:
          alertTextFun("Atleast One Image");
          break;
        default:
          console.error("else");
      }

    }
  }
  const alertTextFun = (errorTextPra) => {
    setHendleOpen(true)
    setAlrtText(errorTextPra)
  }
  const handleSnackbarClose = () => {
    setHendleOpen(false);
  };

  return (
    <div className="rounded">
      <Stack spacing={2} direction="row">
        <div className={` cursor-pointer rounded text-[#fff]`} onClick={handleOpen} variant="contained" style={{ backgroundColor: '#001f3f', padding: `${paddingy}  ${paddingx}` }} >{props.name}</div>
      </Stack>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >

        <Fade in={open}>
          <Box sx={style}>
            <div >
              <p className=" cursor-pointer" onClick={handleClose}>
                <KeyboardBackspaceIcon />
                <span className="ml-2 font-[700] font-[Montserrat] text-[13px]">
                  Edit
                </span>
              </p>
              <div className=" flex justify-around ">
                <div
                  className="w-full h-[100px] flex flex-col items-center relative justify-center"

                >
                  <input
                    style={{ display: "none" }}
                    type="file"
                    name="files"
                    id="get-img"
                    multiple
                    onChange={handleChange}
                  />

                  <img
                    src={image}
                    alt=""

                    className="absolute w-[70px] sm:w-[90px] h-[70px] sm:h-[90px] rounded-sm"
                  />

                  <label
                    className="absolute mt-1"
                    htmlFor="get-img"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      cursor: "pointer",
                    }}
                  >
                    <div>
                      <CameraAltIcon />
                    </div>
                  </label>
                </div>

              </div>
              <div>
                <div className=" m-2">
                  <Box
                    component="form"
                    sx={{
                      '& > :not(style)': { width: '100%' },
                      '& .MuiOutlinedInput-notchedOutline': { borderColor: '#001f3f !important' },
                      '& .MuiInputLabel-outlined': { color: '#001f3f !important' },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField name="title" onChange={handleChange} id="outlined-basic" label="Title"
                      inputProps={{ maxLength: 45 }}
                      variant="outlined" />
                  </Box>



                  <div className=" mt-3">

                    <Box
                      component="form"
                      sx={{
                        '& .MuiTextField-root': { width: '100%' },
                        '& .MuiInputLabel-outlined': { color: '#001f3f !important' },
                        '& .MuiOutlinedInput-notchedOutline': { borderColor: '#001f3f !important' },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <div>
                        <TextField
                          name="description"
                          id="outlined-multiline-flexible"
                          label="Description"
                          onChange={handleChange}
                          multiline
                          maxRows={4}
                        />

                      </div>

                      <div>


                      </div>
                    </Box>
                  </div>


                  <div className="mt-3">
                    <FormControl sx={{ width: '100%', '& .MuiInputBase-root': { height: '50px' } }} size="small">
                      <InputLabel id="demo-select-small-label"
                        sx={{ color: '#001f3f !important' }}
                      >Rating</InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        name="rating"
                        value={formData.rating}
                        label="Rating"
                        onChange={
                          // setRating(event?.target?.value)
                          handleChange
                        }
                        sx={{
                          '& .MuiOutlinedInput-notchedOutline': { borderColor: '#001f3f !important', },
                          '& .MuiInputLabel-outlined': { color: '#001f3f !important' },
                        }}
                      >
                        <MenuItem value="">
                          <em disabled>None</em>
                        </MenuItem>
                        <MenuItem value={10}>  0.5: 'Useless'</MenuItem>
                        <MenuItem value={20}>1: 'Useless+'</MenuItem>
                        <MenuItem value={30}> 1.5: 'Poor'</MenuItem>
                        <MenuItem value={40}> 2: 'Poor+'</MenuItem>
                        <MenuItem value={50}> 2.5: 'Ok'</MenuItem>
                        <MenuItem value={60}> 3: 'Ok+'</MenuItem>
                        <MenuItem value={70}> 3.5: 'Good'</MenuItem>
                        <MenuItem value={80}> 4: 'Good+'</MenuItem>
                        <MenuItem value={90}> 4.5: 'Excellent'</MenuItem>
                        <MenuItem value={100}> 5: 'Excellent+'</MenuItem>

                      </Select>
                    </FormControl>
                  </div>


                  <div className=" mt-3">
                    <Box
                      component="form"
                      sx={{
                        '& > :not(style)': { width: '100%' },
                        '& .MuiOutlinedInput-notchedOutline': { borderColor: '#001f3f !important' },
                        '& .MuiInputLabel-outlined': { color: '#001f3f !important' },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        // defaultValue={42}
                        onChange={handleChange}
                        type="number" id="outlined-basic" name="price" label="Rs." variant="outlined" />
                    </Box>
                  </div>
                </div>
                <div className=" flex justify-center">
                  <Stack spacing={2} direction="row">
                    <Button onClick={() => {
                      handleOpen()
                      handleSubmit()
                    }} sx={{ width: { sm: 30, xs: 10 }, padding: { sm: 1, xs: 0.2 }, fontSize: { sm: 12, xs: 10 } }} variant="contained" style={{ backgroundColor: '#001f3f' }} >Edit</Button>
                  </Stack>
                </div>
                <CustomizedSnackbars
                  inform={{ openh: hendleOpen, title: alertText, icon: "error" }}
                  onClose={handleSnackbarClose}
                />
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>

    </div>
  );
}
