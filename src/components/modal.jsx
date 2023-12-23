import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { height } from "@mui/system";
import { Stack } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { Celebration } from "@mui/icons-material";
import InputForm from "./input.jsx";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%", // Set a percentage width for better responsiveness
  maxWidth: 440, // Set a maximum width to prevent it from getting too wide
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 1.5,
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [image, setImage] = React.useState("https://demotix.com/wp-content/uploads/2019/07/web-design5-1170x658.jpg");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
}
  return (
    <div className="rounded">
      <Button onClick={handleOpen} style={{ fontSize: "13px" }}>
        <AddCircleOutlineRoundedIcon
          style={{
            color: "#0073c9",
            marginRight: 3,
          }}
        />
        Add Student
      </Button>
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
                  Add Student
                </span>
              </p>
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
        id="get-img"
        onChange={handleImageChange}
      />

      <img
        src={image}
        alt=""
        style={{ width: "90px", height: "90px", borderRadius: "50%" }}
        className="absolute"
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
              <div className="mb-3">
              <InputForm inputName="Name" />
              </div>
              <div className="mb-3">
              <InputForm inputName="Email" />
              </div>
              <div className="mb-3">
              <InputForm inputName="Course" />
              </div>
              <div className="mb-3">
                <InputForm inputName="Password" />
              </div>
              <div className="mb-3">
                <InputForm inputName="Phone" />
              </div>
              <div className=" flex justify-center">
              <Stack spacing={2} direction="row">
              <Button variant="contained">Add</Button>
              </Stack>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
