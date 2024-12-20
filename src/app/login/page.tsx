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
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRedirectIfLoggedIn } from "../../../hooks/useRedirectIfLoggedIn";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import "./login.scss";

interface CustomJwtPayload {
  email: string;
}

interface FormValues {
  email: string,
  password: string
}

const login: React.FC = () => {
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

  const router = useRouter();

  const checkEmailExists = async (email: string) => {
    const response = await fetch("http://localhost:8080/api/check-mail", {
      method: "POST",
      body: JSON.stringify({ email: email }),
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    if (result.message === "email found in database") {
      sessionStorage.setItem("userId", result.userId);
      sessionStorage.setItem("token", result.token);
      router.push("/");
    }
    if (result.message === "Email not found") {
      const signUp = await fetch("http://localhost:8080/api/signup", {
        method: "POST",
        body: JSON.stringify({
          email: email,
        }),
        headers: { "Content-Type": "application/json" },
      });

      const signUpresult = await signUp.json();
      if (signUp.ok) {
        toast.success("Signup successful!");
        sessionStorage.setItem("userId", signUpresult.userId);
        sessionStorage.setItem("token", signUpresult.token);
        router.push("/");
      } else {
        toast.error(signUpresult.message);
      }
    }
  };

  // react hook form
  const form = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: ""
    },
  });
  const { register, control, handleSubmit, formState, reset } = form;

  const { errors, isDirty, isValid, isSubmitting, isSubmitSuccessful } = formState;

  const [passwordType, setPasswordType] = useState<boolean>(false);

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        body: JSON.stringify({ email: data.email, password: data.password }),
        headers: { "Content-Type": "application/json" },
      });
      const result = await response.json();
      if (!response.ok) {
        toast.error("error login");
      }
      sessionStorage.setItem("userId", result.userId);
      toast.success("login was successful");
      router.push("/");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (!isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <ThemeProvider theme={theme}>
      <GoogleOAuthProvider clientId="156777906314-amsm4rq3mbfsocqcni2dsi7ic9kddjuo.apps.googleusercontent.com">
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
              sign in
            </Typography>
            <Stack sx={{width: "100%", textAlign: "center", display: "flex", justifyContent: "center"}}>
              <GoogleLogin
                width={"100%"}
                onSuccess={(credentialResponse: any) => {
                  const decoded = jwtDecode<CustomJwtPayload>(
                    credentialResponse?.credential
                  );
                  console.log(decoded);
                  checkEmailExists(decoded.email);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </Stack>
            <Box
              sx={{
                padding: "7px",
                width: "100%",
                boxSizing: "border-box",
                textAlign: "center",
                fontFamily: "roboto",
                fontSize: "24px",
                my: "12px",
              }}
            >
              Or
            </Box>
            <Typography
              sx={{
                mt: "15px",
                mb: "7px",
                fontSize: "12px",
                fontWeight: "600",
              }}
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
            <Typography
              sx={{
                mt: "15px",
                mb: "7px",
                fontSize: "12px",
                fontWeight: "600",
              }}
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
            </Box>
            <Link
              sx={{
                display: "block",
                mt: "15px",
                fontFamily: "roboto",
                textAlign: "center",
              }}
              href={"/signup"}
            >
              create account
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
              Sign In
            </Button>
          </form>
          <DevTool control={control} />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar
          />
        </Stack>
      </GoogleOAuthProvider>
    </ThemeProvider>
  );
};

export default login;
