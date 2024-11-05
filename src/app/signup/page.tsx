"use client";
import {
  Box,
  Button,
  createTheme,
  Link,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRedirectIfLoggedIn } from "../../../hooks/useRedirectIfLoggedIn";

const SignUp: React.FC = () => {

  useRedirectIfLoggedIn();

  const theme = createTheme({
    palette: {
      primary: {
        main: "#A10550",
      },
      secondary: {
        main: "#ffffff",
      },
    },
  });

  const [passwordType, setPasswordType] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");

  const router = useRouter();

  const signUp = async (e: any) => {
    e.preventDefault();
    try {
      if (
        password === repeatPassword &&
        email !== "" &&
        password !== "" &&
        repeatPassword !== ""
      ) {
        const response = await fetch("http://localhost:8080/api/signup", {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
          }),
          headers: { "Content-Type": "application/json" },
        });

        const result = await response.json();
        if (response.ok) {
          toast.success("Signup successful!");
          router.push("/login");
        } else {
          toast.error(result.message || "Signup failed");
        }
      }
      if (password !== repeatPassword) {
        toast.error("your passwords are not match");
      }
      if (email === "") {
        toast.error("you need to enter an email");
      }
      if (password === "" && repeatPassword === "") {
        toast.error("you need to enter a password");
      }
    } catch (error: any) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Stack
        sx={{
          backgroundColor: "#3D021E",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          sx={{
            width: { xs: "100%", sm: "60%", md: "40%", lg: "30%", xl: "30%" },
            backgroundColor: "white",
            padding: "20px",
            boxSizing: "border-box",
            textAlign: "left",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              color: "primary.main",
              textAlign: "center",
              my: "20px",
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
            variant="h1"
          >
            Create Account
          </Typography>
          <Box
            sx={{
              padding: "7px",
              width: "100%",
              backgroundColor: "primary.main",
              boxSizing: "border-box",
            }}
          ></Box>
          <Typography
            sx={{ mt: "15px", mb: "7px", fontSize: "12px", fontWeight: "600" }}
            variant="body1"
            component={"p"}
          >
            Enter your Email:
          </Typography>
          <TextField
            sx={{ width: "100%" }}
            onChange={(e: any) => setEmail(e.target.value)}
            type="email"
            label="Email"
          />
          <Typography
            sx={{ mt: "15px", mb: "7px", fontSize: "12px", fontWeight: "600" }}
            variant="body1"
            component={"p"}
          >
            Password:
          </Typography>
          <Box
            sx={{
              width: "100%",
              boxSizing: "border-box",
              position: "relative",
            }}
          >
            <Button
              onClick={() => setPasswordType(!passwordType)}
              sx={{
                position: "absolute",
                top: "50%",
                right: "0",
                transform: "translateY(-50%)",
                zIndex: "10",
              }}
            >
              {passwordType === false ? <BsEyeSlash /> : <BsEye />}
            </Button>
            <TextField
              onChange={(e: any) => setPassword(e.target.value)}
              type={passwordType === false ? "password" : "text"}
              label="password"
              sx={{ width: "100%" }}
            />
          </Box>
          <Typography
            sx={{ mt: "15px", mb: "7px", fontSize: "12px", fontWeight: "600" }}
            variant="body1"
            component={"p"}
          >
            Repeat Password:
          </Typography>
          <TextField
            sx={{ width: "100%" }}
            onChange={(e: any) => setRepeatPassword(e.target.value)}
            type={passwordType === false ? "password" : "text"}
            label="password"
          />
          <Link
            sx={{ display: "block", mt: "15px", fontFamily: "roboto" }}
            href={"/login"}
          >
            already have an account!
          </Link>
          <Button
            onClick={signUp}
            variant="contained"
            sx={{
              my: "20px",
              display: "block",
              width: "100%",
              textAlign: "center",
            }}
          >
            Register
          </Button>
        </Stack>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      </Stack>
    </ThemeProvider>
  );
};

export default SignUp;
