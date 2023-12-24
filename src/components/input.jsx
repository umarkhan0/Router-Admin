import { Box ,TextField } from "@mui/material";
const InputForm  = (prop) => {
    console.log(prop.inputName);
    return(
     
      <Box
      component="form"
      sx={{
        '& > :not(style)': {  width: '100%' ,  },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </Box>
       
       
     
    )
}
export default InputForm