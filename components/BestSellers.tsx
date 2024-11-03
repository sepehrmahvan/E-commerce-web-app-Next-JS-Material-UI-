"use client";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { IconButton, Link, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export const BestSellers: React.FC = () => {
  const [products, setProducts] = useState<any>([]);

  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/get-products");
      if (!response.ok) {
        throw new Error("faild to fetch");
      }
      const result = await response.json();
      setProducts(result.products);
    } catch (error) {
      throw new Error("failed to fetch");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  //   slide show
  const items =
    products &&
    products?.map((item: any, index: number) => (
      <Stack sx={{ textAlign: "left", marginX: "15px" }} key={index}>
        <img
          style={{ width: "100%", height: "auto" }}
          src={item.image}
          alt="product image"
        />
        <Typography
          sx={{
            fontSize: {
              xs: "3vw",
              sm: "2vw",
              md: "1.5vw",
              lg: "1.2vw",
              xl: "1.2vw",
            },
            color: "primary.main",
            marginY: "10px",
          }}
          variant="h3"
        >
          {item.name}
        </Typography>
        <Typography
          sx={{
            display: "-webkit-box",
            fontSize: {
              xs: "2.5vw",
              sm: "1.7vw",
              md: "1.2vw",
              lg: "1vw",
              xl: "1vw",
            },
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            WebkitLineClamp: 2, // limits to 2 lines
            maxHeight: "3em", // adjusts based on font size and line height
            marginY: "10px",
          }}
          variant="body1"
          component={"p"}
        >
          {item.description}
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: "3.5vw",
              sm: "2.5vw",
              md: "1.8vw",
              lg: "1.5vw",
              xl: "1.5vw",
            },
          }}
          variant="h5"
        >
          {parseInt(item.price)} $
        </Typography>
        <Link
          sx={{
            marginY: "10px",
            textDecoration: "none",
            display: "block",
            textAlign: "center",
            padding: "10px",
            boxSizing: "border-box",
            border: "2px solid #A10550",
            transition: "0.5s",
            fontSize: {
              xs: "2.5vw",
              sm: "2vw",
              md: "1.5vw",
              lg: "1vw",
              xl: "1vw",
            },
            fontFamily: "Roboto, sans-serif",
            "&:hover": {
              backgroundColor: "primary.main",
              color: "white",
            },
          }}
          href={`/skincare/${item._id}`}
        >
          Product Details
        </Link>
      </Stack>
    ));

  const Webresponsive = {
    0: { items: 2 },
    469: { items: 2 },
    580: { items: 3 },
    1024: { items: 4 },
  };

  const carouselRef = useRef<any>(null);

  const handlePrev = () => carouselRef.current?.slidePrev();
  const handleNext = () => carouselRef.current?.slideNext();
  return (
    <Stack
      sx={{
        width: "90%",
        margin: "auto",
        border: "1ox solid red",
        textAlign: "center",
        position: "relative",
      }}
    >
      <Typography
        fontWeight={"bold"}
        sx={{
          fontFamily: "Roboto, sans-serif",
          margin: { xs: "5px", sm: "10px", md: "20px" },
        }}
        variant={"h2"}
      >
        Our Best Sellers
      </Typography>
      <AliceCarousel
        ref={carouselRef}
        mouseTracking
        disableButtonsControls={true}
        disableDotsControls={true}
        items={items}
        responsive={Webresponsive}
        controlsStrategy="responsive"
        infinite
        autoPlay={true}
        autoPlayInterval={4000}
      />
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          height: "60px",
          width: "60px",
          borderRadius: "0",
          top: "50%",
          left: "-30px",
          paddingX: "20px",
          transform: "translateY(-50%)",
          zIndex: 1,
          backgroundColor: "white",
          border: "2px dashed lightblue",
          color: "black",
          "&:hover": {
            color: "white",
            backgroundColor: "#3D021E",
            border: "0",
          },
          display: {
            xs: "none",
            sm: "none",
            md: "flex",
            lg: "flex",
            xl: "flex",
          },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ArrowBackIos sx={{ marginLeft: "7px" }} />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          height: "60px",
          width: "60px",
          borderRadius: "0",
          top: "50%",
          right: "-30px",
          paddingX: "20px",
          transform: "translateY(-50%)",
          zIndex: 1,
          backgroundColor: "white",
          border: "2px dashed lightblue",
          color: "black",
          "&:hover": {
            color: "white",
            backgroundColor: "#3D021E",
            border: "0",
          },
          display: {
            xs: "none",
            sm: "none",
            md: "flex",
            lg: "flex",
            xl: "flex",
          },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Stack>
  );
};
