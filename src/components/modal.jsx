import * as React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Fade, Modal, Box, Backdrop, Button, Stack, Input, TextField, Select, FormControl, MenuItem, InputLabel } from "@mui/material"
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CustomizedSnackbars from "./Snackbar";
import { getProductThunk } from "../redux/Features/getProduct/getProduct";
// import { getProducts } from "../redux/Features/getProducts/getProductsSlice";
const style = {
  position: "absolute",
  top: "50%",
  overflowY: 'auto',
  height: '84vh',
  maxHeight: '84vh',
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: 440,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  p: 1.5,
};

export default function TransitionsModal(props) {

  let dispatch = useDispatch();




  const { isLoading: getAllUsersLoading, error: getAllUsersError, res: getAllUsersRes } = useSelector((state) => state?.updateProduct);
  let [isValidate, setIsValidate] = useState(true);
  const { res, isLoading, error } = useSelector((state) => state.newProduct);
  const { res: getProduct, isLoading: getProductIsLoading, error: getProductError } = useSelector((state) => state.getProduct);

  const { paddingx, paddingy, modalSubmitName } = props || {};
  const [open, setOpen] = React.useState(false);
  const [alertText, setAlrtText] = useState("")
  const [hendleOpen, setHendleOpen] = useState(false);
  const [defultTitle, setDefultTitle] = useState("")
  // const handleOpen = () => {

  //   setOpen(true);
  //   dispatch(getProductThunk());
  //   console.log("modal activate");

  // }
  useEffect(() => {

    console.log(getProduct);
  }, [getProduct])
  const handleClose = () => setOpen(false);
  const image = null;
  // console.log(props.
  //   modalSubmitName);

  const [formData, setFormData] = useState({
    title: '',
    price: '',
    files: [],
    rating: '',
    description: '',
  });
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'files' ? files : value,
    }));


  };
  const handleOpen = () => {
    setOpen(true);
    dispatch(getProductThunk());
  }

  useEffect(() => {
    console.log(getProduct?.product?.title);
    setDefultTitle(getProduct?.product?.title)
    setFormData(prevData => ({
      ...prevData,
      title: getProduct?.product?.title || "",
    }));
    formData.description = "";
    formData.files = [];
    formData.price = "";
    formData.title = getProduct?.product?.title;
    formData.rating = "";
  }, [getProduct]);
  const handleSubmit = () => {


    if (formData.title.trim() && formData.description.trim() && formData.files.length < 4 && formData.rating !== "" && formData.price != "") {
      if (props.name == "Edit") {
        props.onDataUpdate(formData);
      }
      else if (props.modalSubmitName == "Add" && formData.files[0] != undefined) {
        props.onDataUpdate(formData);
      }


      else {



        switch (true) {
          case !formData.title.trim():
            alertTextFun("Title is required");
            break;
          case !formData.description.trim():
            alertTextFun("Description is required");
            break;
          case formData.rating === "":
            alertTextFun("Rating is required");
            break;
          case formData.price == "":
            alertTextFun("Price is required");
            break;
          case props.name != "Edit":
            if (formData.files[0] == undefined) {
              alertTextFun("Atleast One Image");
            }
            console.log("89");
            break;
          case formData.files.length >= 4:
            alertTextFun("Only Three Image Select");
            console.log("Only Three Image Select");
            break;
          default:
            console.error("else");
        }


      };
    } else {
      console.log("no valid");
      console.log(formData.files.length >= 4);
      switch (true) {
        case !formData.title.trim():
          alertTextFun("Title is required");
          break;
        case !formData.description.trim():
          alertTextFun("Description is required");
          break;
        case formData.rating === "":
          alertTextFun("Rating is required");
          break;
        case formData.price == "":
          alertTextFun("Price is required");
          break;
        case props.name != "Edit":
          if (formData.files[0] == undefined) {
            alertTextFun("Atleast One Image");
          }
          console.log("89");
          break;
        case formData.files.length >= 4:
          alertTextFun("Only Three Image Select");
          console.log("Only Three Image Select");
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
  useEffect(() => {
    if (res) {
      handleClose()
      formData.description = "";
      formData.files = [];
      formData.price = "";
      formData.title = "";
      formData.rating = "";
    }
    if (isLoading || getAllUsersLoading) {
      handleClose()
      console.log("modal closed");
      formData.description = "";
      formData.files = [];
      formData.price = "";
      formData.title = "";
      formData.rating = "";
      // console.log("effectUpdate");
    }


  }, [res, isLoading, error, getAllUsersLoading]);

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
                    <TextField defaultValue={defultTitle} name="title" onChange={handleChange} id="outlined-basic" label="Title"
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
                        <MenuItem value={0.5}>  0.5: 'Useless'</MenuItem>
                        <MenuItem value={1}>1: 'Useless+'</MenuItem>
                        <MenuItem value={1.5}> 1.5: 'Poor'</MenuItem>
                        <MenuItem value={2}> 2: 'Poor+'</MenuItem>
                        <MenuItem value={2.5}> 2.5: 'Ok'</MenuItem>
                        <MenuItem value={3}> 3: 'Ok+'</MenuItem>
                        <MenuItem value={3.5}> 3.5: 'Good'</MenuItem>
                        <MenuItem value={4}> 4: 'Good+'</MenuItem>
                        <MenuItem value={4.5}> 4.5: 'Excellent'</MenuItem>
                        <MenuItem value={5}> 5: 'Excellent+'</MenuItem>

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
                    }} sx={{ width: { sm: 30, xs: 10 }, padding: { sm: 1, xs: 0.2 }, fontSize: { sm: 12, xs: 10 } }} variant="contained" style={{ backgroundColor: '#001f3f' }} >{

                        modalSubmitName

                      }</Button>
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
};