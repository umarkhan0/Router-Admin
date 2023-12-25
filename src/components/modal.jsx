import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import TextField from '@mui/material/TextField';
import { Stack, Input } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { Celebration } from "@mui/icons-material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import InputForm from "./input.jsx";
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

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [image, setImage] = React.useState("https://demotix.com/wp-content/uploads/2019/07/web-design5-1170x658.jpg");
  const [image1, setImage1] = React.useState("https://demotix.com/wp-content/uploads/2019/07/web-design5-1170x658.jpg");
  const [image2, setImage2] = React.useState("https://demotix.com/wp-content/uploads/2019/07/web-design5-1170x658.jpg");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  }
  const handleImageChange1 = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage1(imageUrl);
    }
  }
  const handleImageChange2 = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage2(imageUrl);
    }
  }
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="rounded">

      <Stack spacing={2} direction="row">
        <Button onClick={handleOpen} sx={{ width: { sm: 30, xs: 10 }, padding: { sm: 1, xs: 0.2 }, fontSize: { sm: 12, xs: 10 } }} variant="contained" style={{ backgroundColor: '#001f3f' }} >Edit</Button>
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
                    name=""
                    id="get-img"
                    onChange={handleImageChange}
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
                <div
                  style={{
                    width: "100%",
                    height: "100px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "relative",
                    justifyContent: "center",
                  }}
                >
                  <input
                    style={{ display: "none" }}
                    type="file"
                    name=""
                    id="get-img1"
                    onChange={handleImageChange1}
                  />

                  <img
                    src={image1}
                    alt=""
                    className="absolute w-[70px] sm:w-[90px] h-[70px] sm:h-[90px] rounded-sm"
                  />

                  <label
                    className="absolute mt-1"
                    htmlFor="get-img1"
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
                <div
                  style={{
                    width: "100%",
                    height: "100px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "relative",
                    justifyContent: "center",
                  }}
                >
                  <input
                    style={{ display: "none" }}
                    type="file"
                    name=""
                    id="get-img2"
                    onChange={handleImageChange2}
                  />

                  <img
                    src={image2}
                    alt=""
                    className="absolute w-[70px] sm:w-[90px] h-[70px] sm:h-[90px] rounded-sm"
                  />

                  <label
                    className="absolute mt-1"
                    htmlFor="get-img2"
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
                    <TextField id="outlined-basic" label="Title" variant="outlined" />
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
                          id="outlined-multiline-flexible"
                          label="Description"
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
                      >Age</InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={age}
                        label="Age"
                        onChange={handleChange}
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
                        <MenuItem value={20}> 1.5: 'Poor'</MenuItem>
                        <MenuItem value={20}> 2: 'Poor+'</MenuItem>
                        <MenuItem value={20}> 2.5: 'Ok'</MenuItem>
                        <MenuItem value={20}> 3: 'Ok+'</MenuItem>
                        <MenuItem value={20}> 3.5: 'Good'</MenuItem>
                        <MenuItem value={20}> 4: 'Good+'</MenuItem>
                        <MenuItem value={20}> 4.5: 'Excellent'</MenuItem>
                        <MenuItem value={20}> 5: 'Excellent+'</MenuItem>

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
                      defaultValue={42}
                      type="number" id="outlined-basic" label="Rs." variant="outlined" />
                    </Box>
                  </div>
                </div>
                <div className=" flex justify-center">
                <Stack spacing={2} direction="row">
        <Button onClick={handleOpen} sx={{ width: { sm: 30, xs: 10 }, padding: { sm: 1, xs: 0.2 }, fontSize: { sm: 12, xs: 10 } }} variant="contained" style={{ backgroundColor: '#001f3f' }} >Edit</Button>
      </Stack>
                </div>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
