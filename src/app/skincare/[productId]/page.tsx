"use client";
import {
  Box,
  Breadcrumbs,
  Button,
  createTheme,
  Link,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Header } from "../../../../components/Header";
import { Footer } from "../../../../components/Footer";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { BsBucket } from "react-icons/bs";

const Product: React.FC = () => {
  // them provider
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

  // show selected image
  const [selectedImage, setSelectedImage] = useState<string>("");

  //   get product
  const { productId } = useParams();
  const [product, setProduct] = useState<any>({});

  useEffect(() => {
    fetch(`http://localhost:8080/api/products/${productId}`)
      .then((res) => res.json())
      .then((res: any) => {
        setProduct(res.product);
        setSelectedImage(res.product.image);
      })
      .catch((err: any) => {
        throw new Error("error");
      });
  }, [productId]);

  //   number to add
  const [addNumber, setAddNumber] = useState<number>(0);

  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <Header />
        {/* product */}
        <Stack sx={{ width: "90%", mx: "auto" }} mt={"80px"}>
          {/* breadcrumb */}
          <Box pt={4}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link sx={{ textDecoration: "none", color: "black" }} href={"/"}>
                Home
              </Link>
              <Link sx={{ textDecoration: "none", color: "black" }} href={"/"}>
                Women Skincare
              </Link>
              <Typography variant="body1" component={"p"}>
                {product ? product.name : undefined}
              </Typography>
            </Breadcrumbs>
          </Box>
          {/* product main info ------------------------ */}
          <Typography
                sx={{
                  color: "primary.main",
                  fontSize: "22px",
                  fontWeight: "bold",
                  mt: "10px",
                  display: {xs: "block", sm: "block", md: "none", lg: "none", xl: "none"}
                }}
                variant="h1"
              >
                {product ? product.name : undefined}
              </Typography>
          <Stack
            direction={"row"}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
            }}
            mt="30px"
          >
            <Stack sx={{ width: {xs: "20%", sm: "20%", md: "10%", lg: "10%"} }}>
              {product &&
                product.otherimages?.map((image: string, index: number) => (
                  <img
                    key={index}
                    style={{
                      width: "100%",
                      height: "auto",
                      marginBottom: "10px",
                    }}
                    src={image}
                    alt="other images"
                    onClick={() => setSelectedImage(image)}
                  />
                ))}
            </Stack>
            <Stack sx={{ width: {xs: "77%", sm: "77%", md: "40%", lg: "40%", xl: "40%" } }}>
              <img
                style={{ width: "100%", height: "auto" }}
                src={selectedImage ? selectedImage : undefined}
                alt="product image"
              />
            </Stack>
            <Stack sx={{ width: {xs: "100%", sm: "100%", md: "46%", lg: "46%", xl: "46%"} }}>
              <Typography
                sx={{
                  color: "primary.main",
                  fontSize: "28px",
                  fontWeight: "bold",
                  display: {xs: "none", sm: "none", md: "block", lg: "block", xl: "block"}
                }}
                variant="h1"
              >
                {product ? product.name : undefined}
              </Typography>
              <Typography
                sx={{
                  color: "black",
                  fontSize: "16px",
                  fontWeight: "bold",
                  mt: "15px",
                }}
                variant="body1"
                component={"p"}
              >
                Anti-aging face serum
              </Typography>
              <Typography
                sx={{
                  color: "gray",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
                variant="body1"
                component={"p"}
              >
                Formulated with 92% natural-origin ingredients
              </Typography>
              <Box
                sx={{ my: "25px", fontFamily: "roboto", fontSize: "30px" }}
                component={"span"}
              >
                $ {product ? product.price : undefined}
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "2px solid gray",
                }}
              >
                <Box
                  sx={{ fontFamily: "roboto", textTransform: "capitalize" }}
                  component={"span"}
                >
                  {product ? product.inventory : undefined} in Stock
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="outlined"
                    onClick={() => {
                      addNumber < parseInt(product.inventory)
                        ? setAddNumber(addNumber + 1)
                        : undefined;
                    }}
                  >
                    <BiPlus />
                  </Button>
                  <Box
                    component="span"
                    sx={{
                      padding: "15px",
                      fontWeight: "bold",
                      fontSize: "24px",
                      mx: "10px",
                      fontFamily: "roboto",
                    }}
                  >
                    {addNumber}
                  </Box>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      addNumber > 0 ? setAddNumber(addNumber - 1) : undefined;
                    }}
                  >
                    <BiMinus />
                  </Button>
                </Box>
              </Box>
              <Button startIcon={<BsBucket/>} variant="contained" sx={{ width: "100%", my: "20px" }}>
                Add To Cart
              </Button>
              <Box
                sx={{
                  padding: "15px",
                  boxSizing: "border-box",
                  backgroundColor: "#e6cfda",
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "primary.main",
                  }}
                  variant="body1"
                  component={"p"}
                >
                  receive 2 free samples when you spend $100
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "primary.main",
                  }}
                  variant="body1"
                  component={"p"}
                >
                  receive $2 when you return 5 empty containers
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "primary.main",
                  }}
                  variant="body1"
                  component={"p"}
                >
                  receive free 1-2-1 expert advice in branches
                </Typography>
              </Box>
            </Stack>
          </Stack>
          {/* product more info */}
          <Stack
            direction={"row"}
            sx={{
              display: {xs: "none", sm: "none", md: "flex", lg: "flex", xl: "flex"},
              justifyContent: "space-between",
              alignItems: "center",
              my: "45px",
              borderBottom: "2px solid gray",
              padding: "20px",
              boxSizing: "border-box",
            }}
          >
            <a
              style={{
                textDecoration: "none",
                color: "black",
                fontFamily: "roboto",
                fontWeight: "bold",
              }}
              href="#1"
            >
              Product Details
            </a>
            <a
              style={{
                textDecoration: "none",
                color: "black",
                fontFamily: "roboto",
                fontWeight: "bold",
              }}
              href="#2"
            >
              How To Apply
            </a>
            <a
              style={{
                textDecoration: "none",
                color: "black",
                fontFamily: "roboto",
                fontWeight: "bold",
              }}
              href="#3"
            >
              Ingredient
            </a>
            <a
              style={{
                textDecoration: "none",
                color: "black",
                fontFamily: "roboto",
                fontWeight: "bold",
              }}
              href="#4"
            >
              What Makes It Advance
            </a>
            <a
              style={{
                textDecoration: "none",
                color: "black",
                fontFamily: "roboto",
                fontWeight: "bold",
              }}
              href="#5"
            >
              Product Specification
            </a>
          </Stack>
          <Stack>
            <Box id="1" my={"20px"}>
              <Typography variant="h6">Product Details</Typography>
              <Typography variant="body1" component={"p"}>
                {product.description}
              </Typography>
            </Box>
            <Box id="2" my={"20px"}>
              <Typography variant="h6">How to Apply</Typography>
              <Typography variant="body1" component={"p"}>
                {product.howtoapply}
              </Typography>
            </Box>
            <Box id="3" my={"20px"}>
              <Typography variant="h6">Ingredient</Typography>
              <Typography variant="body1" component={"p"}>
                {product.ingredient}
              </Typography>
            </Box>
            <Box id="4" my={"20px"}>
              <Typography variant="h6">What Makes it Advanced</Typography>
              <Typography variant="body1" component={"p"}>
                {product.advance}
              </Typography>
            </Box>
            <Box id="5" my={"20px"}>
              <Typography variant="h6">Specification</Typography>
              <Typography variant="body1" component={"p"}>
                {product.advance}
              </Typography>
            </Box>
          </Stack>
        </Stack>
        <Footer />
      </Stack>
    </ThemeProvider>
  );
};

export default Product;
