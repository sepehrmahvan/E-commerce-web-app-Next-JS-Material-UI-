"use client";
import { Box, Link, Stack, Typography, IconButton } from "@mui/material";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useEffect, useRef, useState } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

export const SlideShow: React.FC = () => {
  const [posterData, setPosterData] = useState<any[]>([]);

  const getImages = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/get-poster-images"
      );
      if (!response.ok) {
        throw new Error("response is not ok");
      }
      const result = await response.json();
      setPosterData(result.posterData);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  const items =
    posterData &&
    posterData?.map((item: any, index: number) => (
      <img key={index} className="poster-image" src={item.file} alt="item" />
    ));

  const Webresponsive = {
    0: { items: 1 },
    469: { items: 1 },
    580: { items: 1 },
    1024: { items: 1 },
  };

  const carouselRef = useRef<any>(null);

  const handlePrev = () => carouselRef.current?.slidePrev();
  const handleNext = () => carouselRef.current?.slideNext();

  return (
    <Stack sx={{ position: "relative", marginTop: "60px" }} className="poster">
      <AliceCarousel
        ref={carouselRef}
        mouseTracking
        disableButtonsControls={true}
        disableDotsControls={false}
        items={items}
        responsive={Webresponsive}
        controlsStrategy="responsive"
        infinite
        autoPlay={true}
        autoPlayInterval={4000}
      />
      <Stack
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Adjust opacity as needed
          zIndex: 1,
        }}
      ></Stack>
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          height: "100%",
          borderRadius: "0",
          top: "50%",
          left: "0",
          paddingX: "20px",
          transform: "translateY(-50%)",
          zIndex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.8)" },
          display: { xs: "none", sm: "none", md: "inline-block" },
        }}
      >
        <ArrowBackIos />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          height: "100%",
          borderRadius: "0",
          top: "50%",
          right: "0",
          paddingX: "20px",
          transform: "translateY(-50%)",
          zIndex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.8)" },
          display: { xs: "none", sm: "none", md: "inline-block" },
        }}
      >
        <ArrowForwardIos />
      </IconButton>
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          bottom: { xs: "30px", sm: "50px", ms: "70px", lg: "100px" },
          width: "100%",
          transform: "translateX(-50%)",
          textAlign: "center",
          zIndex: "100",
        }}
      >
        <Typography
          sx={{
            textTransform: "capitalize",
            color: "secondary.main",
            padding: "20px",
            letterSpacing: "2px",
            fontSize: { xs: "4vw", sm: "2vw", md: "2vw", lg: "2vw" },
            marginY: { xs: "0", sm: "10px", md: "20px", lg: "30px" },
          }}
          variant={"h1"}
        >
          unlock your natural glow
        </Typography>
        <Link
          sx={{
            padding: { xs: "5px 10px", sm: "10px 15px", md: "13px 30px" },
            border: "2px solid white",
            textDecoration: "none",
            color: "white",
            fontSize: { xs: "3vw", sm: "2vw", md: "1.5vw" },
            backgroundColor: "transparent",
            transition: "0.5s",
            "&:hover": {
              color: "seondary.main",
              backgroundColor: "primary.main",
              border: "0",
            },
          }}
          href={"/"}
        >
          Know More
        </Link>
      </Box>
    </Stack>
  );
};
