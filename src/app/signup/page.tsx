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
import React, { useEffect, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRedirectIfLoggedIn } from "../../../hooks/useRedirectIfLoggedIn";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import "./signup.scss";

interface FormValues {
  email: string,
  password: string,
  repeatpassword: string
}

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

  // react hook form
  const form = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
      repeatpassword: "",
    },
  });
  const { register, control, handleSubmit, formState, reset } = form;
  const { errors, isDirty, isValid, isSubmitting, isSubmitSuccessful } = formState;

  const router = useRouter();

  const onSubmit = async (data: FormValues) => {
    console.log(data);
    try {
      const response = await fetch("http://localhost:8080/api/signup", {
        method: "POST",
        body: JSON.stringify({
          email: data.email,
          password: data.password,
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
    } catch (error: any) {
      toast.error("An error occurred. Please try again.");
    }
  };

  useEffect(() => {
    if (!isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const [passwordType, setPasswordType] = useState<boolean>(false);
  
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          style={{
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
            type="email"
            label="Email"
            {...register("email", {
              required: {
                value: true,
                message: "email is required",
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <Typography variant="body1" component={"p"} sx={{ color: "red" }}>
            {errors.email?.message}
          </Typography>
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
              type={passwordType === false ? "password" : "text"}
              label="password"
              sx={{ width: "100%" }}
              {...register("password", {
                required: {
                  value: true,
                  message: "password is required",
                },
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <Typography variant="body1" component={"p"} sx={{ color: "red" }}>
              {errors.password?.message}
            </Typography>
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
            type={passwordType === false ? "password" : "text"}
            label="password"
            {...register("repeatpassword", {
              required: "please confirm you password",
              validate: (value: string) => value === form.getValues("password") || "passwords do not match"
            })}
            error={!!errors.repeatpassword}
            helperText={errors.repeatpassword?.message}
          />
          <Typography variant="body1" component={"p"} sx={{ color: "red" }}>
            {errors.repeatpassword?.message}
          </Typography>
          <Link
            sx={{ display: "block", mt: "15px", fontFamily: "roboto" }}
            href={"/login"}
          >
            already have an account!
          </Link>
          <Button
            type="submit"
            disabled={!isDirty || !isValid || isSubmitting}
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
        </form>
        <DevTool control={control} />
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      </Stack>
    </ThemeProvider>
  );
};

export default SignUp;
