"use client";
import { Header } from "../../components/Header";
import { createTheme, ThemeProvider } from "@mui/material";
import { MyProvider } from "../../context/Context";
import { SlideShow } from "../../components/SlideShow";
import { ProductCategories } from "../../components/ProductCategories";
import { SkinCareAnalysis } from "../../components/SkinCareAnalysis";
import { BestSellers } from "../../components/BestSellers";
import { NewProducts } from "../../components/NewProducts";
import { SaleOffer } from "../../components/SaleOffer";
import { OurBrand } from "../../components/OurBrand";
import { OurBlog } from "../../components/OurBlog";
import { Footer } from "../../components/Footer";

export default function Home() {
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
  return (
    <ThemeProvider theme={theme}>
      <MyProvider>
        <Header />
        <SlideShow/>
        <ProductCategories/>
        <SkinCareAnalysis/>
        <BestSellers/>
        <NewProducts/>
        <SaleOffer/>
        <OurBrand/>
        <OurBlog/>
        <Footer/>
      </MyProvider>
    </ThemeProvider>
  );
}
