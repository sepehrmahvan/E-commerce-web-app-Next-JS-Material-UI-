import { Link, Stack, Typography } from "@mui/material";
import Image from "next/image";
import brandimage from "../public/images/ourBrand.png";

export const OurBrand: React.FC = () => {
  return (
    <>
    <Stack
      direction={"row"}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "wrap",
        width: "90%",
        margin: "auto",
      }}
    >
      <Stack
        sx={{
          width: "60%",
          backgroundColor: "#3D021E",
          padding: "25px 15px",
          boxSizing: "border-box",
          height: "269px",
          display: {
            xs: "none",
            sm: "none",
            md: "inline-block",
            lg: "inline-block",
            xl: "inline-block",
          },
        }}
      >
        <Typography
          sx={{
            color: "secondary.main",
            fontSize: {
              xs: "3vw",
              sm: "2.5vw",
              md: "2vw",
              lg: "2vw",
              xl: "2vw",
            },
          }}
          fontWeight={"bold"}
          variant="h6"
        >
          Our Brand
        </Typography>
        <Typography
          sx={{ color: "secondary.main", margin: "15px 0" }}
          variant="body1"
          component={"p"}
        >
          We believe that beauty thrives in diversity and discovery. Our purpose
          is to expand the way the world sees beauty by empowering the
          Extraordinary in each of us.
        </Typography>
        <Link
          sx={{
            padding: "10px",
            border: "2px solid white",
            display: "inline-block",
            maxWidth: "fit-content",
            color: "white",
          }}
          href={"/"}
        >
          Discover More
        </Link>
      </Stack>
      <Stack
        sx={{
          width: "40%",
          display: {
            xs: "none",
            sm: "none",
            md: "inline-block",
            lg: "inline-block",
            xl: "inline-block",
          },
        }}
      >
        <Image style={{ width: "100%" }} src={brandimage} alt="brand-image" />
      </Stack>
    </Stack>
    {/* mobile size --------------------------------- */}
    <Stack
        sx={{
          width: "100%",
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
            xl: "none",
          },
          textAlign: "left"
        }}
      >
        <Typography
          sx={{
            color: "black",
            margin: "20px auto",
            textAlign: "center",
            fontSize: "24px",
          }}
          fontWeight={"bold"}
          variant="h6"
        >
          Our Brand
        </Typography>
        <Image style={{ width: "100%", height: "auto" }} src={brandimage} alt="brand-image" />
        <Typography
          sx={{ color: "black", margin: "15px 0", textAlign: "left", padding: "15px" }}
          variant="body1"
          component={"p"}
        >
          We believe that beauty thrives in diversity and discovery. Our purpose
          is to expand the way the world sees beauty by empowering the
          Extraordinary in each of us.
        </Typography>
        <Link
          sx={{
            padding: "10px",
            border: "2px solid #A10550",
            display: "inline-block",
            maxWidth: "fit-content",
            color: "#A10550",
            margin: "0 15px",
            textDecoration: "none"
          }}
          href={"/"}
        >
          Discover More
        </Link>
      </Stack>
    </>
  );
};
