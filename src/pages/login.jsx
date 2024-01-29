import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../redux/Features/auth/authSclice';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

import Logo from '../images/logo.png';

const style = {
  "& label.Mui-focused": {
    color: "#001f3f"
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#001f3f"
    }
  }
};

const defaultTheme = createTheme();

export default function Login() {
  const dispatch = useDispatch();
  const { isLoading, error, token } = useSelector((state) => state?.auth);
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    switch (error) {
      case '"email" is not allowed to be empty':
        setEmailError("Email is not allowed to be empty");
        break;

      case '"email" must be a valid email':
        setEmailError("Enter your correct email address");
        break;

      default:
        setEmailError("");
    }

    switch (error) {
      case '"password" is not allowed to be empty':
        setPasswordError("Password is not allowed to be empty");
        break;

      case '"password" length must be at least 6 characters long':
        setPasswordError("Password must be at least 6 characters long");
        break;

      case "Invalid email or password":
        setPasswordError("Incorrect Password");
        break;

      default:
        setPasswordError("");
    }

    if (token) {
      navigate('/');
    }
  }, [error, token, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const credentials = {
      email: data.get('email'),
      password: data.get('password'),
    };
    dispatch(login(credentials));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        component="main"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          height: '100vh'
        }}
        maxWidth="xs"
      >
        <Box
          className=' sm:shadow-2xl p-3 my-4 py-[34px] px-0 sm:px-[16px]'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <img src={Logo} className=' h-[100px]' />
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  sx={style}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  InputProps={{
                    style: {
                      borderColor: 'red !important',
                    }
                  }}
                />
                <p className="text-red-500 text-xs mt-1">{emailError}</p>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  sx={style}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
                <p className="text-red-500 text-xs mt-1">{passwordError}</p>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "#001f3f",
                "&:hover, &:active": {
                  backgroundColor: "#001f3f",
                }
              }}
            >
              Sign in
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item></Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
