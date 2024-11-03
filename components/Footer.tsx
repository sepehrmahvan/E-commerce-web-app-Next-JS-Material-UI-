import {
  Facebook,
  GitHub,
  Instagram,
  LocationOnSharp,
  Phone,
  Pinterest,
  Twitter,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { BsTiktok } from "react-icons/bs";

export const Footer: React.FC = () => {
  return (
    <Stack
      mt="55px"
      sx={{
        width: "100%",
        paddingTop: "25px",
        boxSizing: "border-box",
        backgroundColor: "#3D021E",
      }}
    >
      <Stack
        direction={"row"}
        sx={{
          width: "90%",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        <Stack sx={{ textAlign: "left", width: {xs: "100%", sm: "100%", md: "30%", lg: "30%", xl: "30%"} }}>
          <Typography sx={{ color: "secondary.main" }} my={"8px"} variant="h6">
            How Can We Help?
          </Typography>
          <Link
            sx={{
              display: "block",
              color: "secondary.main",
              textDecoration: "none",
              padding: "6px 0",
            }}
            href={"/"}
          >
            Beautya Branches
          </Link>
          <Link
            sx={{
              display: "block",
              color: "secondary.main",
              textDecoration: "none",
              padding: "6px 0",
            }}
            href={"/"}
          >
            Contact Us
          </Link>
          <Link
            sx={{
              display: "block",
              color: "secondary.main",
              textDecoration: "none",
              padding: "6px 0",
            }}
            href={"/"}
          >
            FAQ
          </Link>
          <Link
            sx={{
              display: "block",
              color: "secondary.main",
              textDecoration: "none",
              padding: "6px 0",
            }}
            href={"/"}
          >
            Our Brand
          </Link>
          <Link
            sx={{
              display: "block",
              color: "secondary.main",
              textDecoration: "none",
              padding: "6px 0",
            }}
            href={"/"}
          >
            Blog
          </Link>
        </Stack>
        <Stack sx={{ textAlign: "left", width: {xs: "100%", sm: "100%", md: "30%", lg: "30%", xl: "30%"} }}>
          <Typography sx={{ color: "secondary.main" }} my={"8px"} variant="h6">
            Products
          </Typography>
          <Link
            sx={{
              display: "block",
              color: "secondary.main",
              textDecoration: "none",
              padding: "6px 0",
            }}
            href={"/"}
          >
            Women Make up
          </Link>
          <Link
            sx={{
              display: "block",
              color: "secondary.main",
              textDecoration: "none",
              padding: "6px 0",
            }}
            href={"/"}
          >
            Women Skincare
          </Link>
          <Link
            sx={{
              display: "block",
              color: "secondary.main",
              textDecoration: "none",
              padding: "6px 0",
            }}
            href={"/"}
          >
            Gifts & Sets
          </Link>
        </Stack>
        <Stack sx={{ textAlign: "left", width: {xs: "100%", sm: "100%", md: "38%", lg: "38%", xl: "38%"} }}>
          <Typography sx={{ color: "secondary.main" }} my={"8px"} variant="h6">
            keep in touch with beautya
          </Typography>
          <Typography sx={{ color: "white" }} variant="body1" component={"p"}>
            Join the Beautya newsletter and be first to hear about news, offers
            and skincare advice
          </Typography>
          <Stack my={2} direction={"row"}>
            <TextField
              sx={{
                width: "80%",
                borderBottom: "1px solid white",
                "& .MuiInputLabel-root": {
                  color: "secondary.main", // Change to your desired color
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "primary.main", // Color when focused
                },
              }}
              type="email"
              variant="outlined"
              label="Email Address"
            />
            <Button sx={{ marginX: "15px" }} variant={"outlined"}>
              Subscribe
            </Button>
          </Stack>
          <Stack sx={{ width: "100%" }} direction={"row"}>
            <FormControlLabel
              sx={{ width: "100%", color: "white" }}
              control={<Checkbox sx={{ color: "white", fontSize: "10px" }} />}
              label={
                <Typography sx={{ fontSize: "12px" }}>
                  By submitting your email, you agree to receive advertising
                  emails from Beautya. Please review our Privacy Policy, which
                  includes our Financial Incentive Notice for CA residents.
                </Typography>
              }
            />
          </Stack>
        </Stack>
      </Stack>
      <Stack
        mt="20px"
        direction={"row"}
        sx={{
          padding: "20px 15px",
          background: "rgba(0,0,0,0.5)",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap"
        }}
      >
        <Stack direction={"row"}>
          <Box
            component={"span"}
            sx={{
              display: "flex",
              alignItems: "center",
              color: "white",
              mr: {xs: "5px", sm: "5px", md: "15px", lg: "15px", xl: "15px"},
              fontSize: {xs: "4vw", sm: "3vw", md: "2vw", lg: "1.5vw", xl: "1.5vw"}
            }}
          >
            <LocationOnSharp sx={{ mr: 1, color: "primary.main" }} />
            Dr. Richardson, California
          </Box>
          <Box
            component={"span"}
            sx={{ display: "flex", alignItems: "center", color: "white", fontSize: {xs: "4vw", sm: "3vw", md: "2vw", lg: "1.5vw", xl: "1.5vw"} }}
          >
            <Phone sx={{ mr: 1, color: "primary.main" }} />
            1-802-526-2463
          </Box>
        </Stack>
        <Stack direction={"row"} sx={{mt: {xs: "15px", sm: "15px", md: "0", lg: "0", xl: "0"}}}>
          <IconButton sx={{ color: "primary.main" }}>
            <Link sx={{ "&:hover": { color: "white" } }} href={"/"}>
              <Instagram />
            </Link>
          </IconButton>
          <IconButton sx={{ color: "primary.main" }}>
            <Link sx={{ "&:hover": { color: "white" } }} href={"/"}>
              <Facebook />
            </Link>
          </IconButton>
          <IconButton sx={{ color: "primary.main" }}>
            <Link sx={{ "&:hover": { color: "white" } }} href={"/"}>
              <Twitter />
            </Link>
          </IconButton>
          <IconButton sx={{ color: "primary.main" }}>
            <Link sx={{ "&:hover": { color: "white" } }} href={"/"}>
              <Pinterest />
            </Link>
          </IconButton>
          <IconButton sx={{ color: "primary.main" }}>
            <Link sx={{ "&:hover": { color: "white" } }} href={"/"}>
              <GitHub />
            </Link>
          </IconButton>
          <IconButton sx={{ color: "primary.main" }}>
            <Link sx={{ "&:hover": { color: "white" } }} href={"/"}>
              <BsTiktok />
            </Link>
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
};
