import { Box, Link, Stack, Typography } from "@mui/material";
import Image from "next/image";
import makeup from "../public/images/Products’ categories1.png";
import skincare from "../public/images/Products’ categories2.png";
import Gifts from "../public/images/Products’ categories3.png";
import "./productcategories.scss";

export const ProductCategories: React.FC = () => {
  return (
    <Stack sx={{ textAlign: "center", margin: {xs: "15px", sm: "25px", md: "40px"} }}>
      <Typography
        fontWeight={"bold"}
        variant="h2"
        sx={{fontFamily: "Roboto, sans-serif", margin: { xs: "5px", sm: "10px", md: "20px"}}}
      >
        Products’ Categories
      </Typography>
      <Stack
        my={"25px"}
        direction={"row"}
        className="category-container"
      >
        <Box className="category-box">
          <Image src={makeup} alt="image" />
          <Link
            sx={{
              display: "block",
              color: "black",
              textDecoration: "none",
              marginTop: "15px",
              transition: "color 0.5s ease",
              fontFamily: "Roboto, sans-serif",
              "&:hover": {
                  color: "primary.main",
                },
            }}
            href={"/"}
          >
            Women Make Up
          </Link>
        </Box>
        <Box className="category-box">
          <Image src={skincare} alt="image" />
          <Link
            sx={{
              display: "block",
              color: "black",
              textDecoration: "none",
              marginTop: "15px",
              transition: "color 0.5s ease",
              fontFamily: "Roboto, sans-serif",
              "&:hover": {
                  color: "primary.main",
                },
            }}
            href={"/"}
          >
            Women Skincare
          </Link>
        </Box>
        <Box className="category-box">
          <Image src={Gifts} alt="image" />
          <Link
            sx={{
              display: "block",
              color: "black",
              textDecoration: "none",
              marginTop: "15px",
              transition: "color 0.5s ease",
              fontFamily: "Roboto, sans-serif",
              "&:hover": {
                  color: "primary.main",
                },
            }}
            href={"/"}
          >
            Gifts & sets
          </Link>
        </Box>
      </Stack>
    </Stack>
  );
};
