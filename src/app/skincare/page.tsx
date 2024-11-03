"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Breadcrumbs,
  Button,
  createTheme,
  Drawer,
  FormControlLabel,
  Link,
  Radio,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useSearchParams } from "next/navigation";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { useEffect, useState } from "react";
import { ExpandMore, Filter } from "@mui/icons-material";

interface Categories {
  category: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  _id: string;
}

interface SkinConditions {
  skinCondition: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  _id: string;
}

const SkinCare: React.FC = () => {
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

  const searchParams = useSearchParams();

  const [chosenCategory, setChosenCategory] = useState<string | null>("");
  const [chosenSkinCondition, setChosenSkinCondition] = useState<string | null>(
    ""
  );
  const [minPrice, setMinPrice] = useState<number>();
  const [maxPrice, setMaxPrice] = useState<number>();

  const handleCategoryChange = (categoryItem: string) => {
    setChosenCategory(categoryItem);
  };

  const handleSkinConditionChange = (skinConditionItem: string) => {
    setChosenSkinCondition(skinConditionItem);
  };

  useEffect(() => {
    if (searchParams.get("category")) {
      const category = searchParams.get("category");
      setChosenCategory(category);
    } else {
      setChosenCategory("");
    }
    if (searchParams.get("skinCondition")) {
      const skinCondition = searchParams.get("skinCondition");
      setChosenSkinCondition(skinCondition);
    } else {
      setChosenSkinCondition("");
    }
    getCategories();
    getSkinConditions();
    getProducts();
  }, []);

  const [categories, setCategories] = useState<Categories[]>();

  const getCategories = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/get-categories");
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      const result = await response.json();
      setCategories(result.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  //   get skin conditions
  const [skinConditions, setSkinConditions] = useState<SkinConditions[]>();

  const getSkinConditions = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/skin-conditions");
      if (!response.ok) {
        throw new Error("Failed to fetch skin-conditions");
      }
      const result = await response.json();
      setSkinConditions(result.skinConditions);
    } catch (error) {
      console.error("Error fetching skin-conditions:", error);
    }
  };

  // Fetch all Products

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

  // Filter products based on chosenCategory and chosenSkinCondition
  const filteredProducts = products.filter((item: any) => {
    const matchesCategory = chosenCategory
      ? item.category === chosenCategory
      : true;
    const matchesSkinCondition = chosenSkinCondition
      ? item.skinCondition === chosenSkinCondition
      : true;
    const matchesPrice =
      (minPrice !== undefined ? item.price >= minPrice : true) &&
      (maxPrice !== undefined ? item.price <= maxPrice : true);
    return matchesCategory && matchesSkinCondition && matchesPrice;
  });

  //   drawer menu
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  return (
    <ThemeProvider theme={theme}>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box sx={{ width: { xs: "85vw", sm: "85vw", md: "50vw" } }}>
          <Stack
            sx={{
              width: "100%",
              backgroundColor: "white",
              border: "1px solid lightgray",
              display: {
                xs: "inline-block",
                sm: "inline-block",
                md: "none",
                lg: "none",
                xl: "none",
              },
            }}
          >
            {/* category ----------------------------------------------------------------- */}
            <Accordion sx={{ borderBottom: "none", boxShadow: "none" }}>
              <AccordionSummary
                id="panel1-header"
                aria-controls="panel1-content"
                expandIcon={<ExpandMore />}
                sx={{
                  color: "black",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  fontFamily: "roboto",
                  fontWeight: "bold",
                }}
              >
                Category
              </AccordionSummary>
              <AccordionDetails>
                <FormControlLabel
                  sx={{ width: "100%", color: "black" }}
                  control={
                    <Radio
                      checked={chosenCategory == ""}
                      onChange={() => setChosenCategory("")}
                      sx={{ color: "black", fontSize: "10px" }}
                    />
                  }
                  label={<Typography sx={{ fontSize: "12px" }}>All</Typography>}
                />
                {categories &&
                  categories.map((item: any, index: number) => (
                    <FormControlLabel
                      key={index}
                      sx={{ width: "100%", color: "black" }}
                      control={
                        <Radio
                          checked={chosenCategory === item.category}
                          onChange={() => handleCategoryChange(item.category)}
                          sx={{ color: "black", fontSize: "10px" }}
                        />
                      }
                      label={
                        <Typography sx={{ fontSize: "12px" }}>
                          {item.category}
                        </Typography>
                      }
                    />
                  ))}
              </AccordionDetails>
            </Accordion>
            {/* skin condition ------------------------------------------------------------ */}
            <Accordion sx={{ borderBottom: "none", boxShadow: "none" }}>
              <AccordionSummary
                id="panel1-header"
                aria-controls="panel1-content"
                expandIcon={<ExpandMore />}
                sx={{
                  color: "black",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  fontFamily: "roboto",
                  fontWeight: "bold",
                }}
              >
                Skin Condition
              </AccordionSummary>
              <AccordionDetails>
                <FormControlLabel
                  sx={{ width: "100%", color: "black" }}
                  control={
                    <Radio
                      checked={chosenSkinCondition == ""}
                      onChange={() => setChosenSkinCondition("")}
                      sx={{ color: "black", fontSize: "10px" }}
                    />
                  }
                  label={<Typography sx={{ fontSize: "12px" }}>All</Typography>}
                />
                {skinConditions &&
                  skinConditions.map((item: any, index: number) => (
                    <FormControlLabel
                      key={index}
                      sx={{ width: "100%", color: "black" }}
                      control={
                        <Radio
                          checked={chosenSkinCondition === item.skinCondition}
                          onChange={() =>
                            handleSkinConditionChange(item.skinCondition)
                          }
                          sx={{ color: "black", fontSize: "10px" }}
                        />
                      }
                      label={
                        <Typography sx={{ fontSize: "12px" }}>
                          {item.skinCondition}
                        </Typography>
                      }
                    />
                  ))}
              </AccordionDetails>
            </Accordion>
            {/* price-------------------------------------------------------------- */}
            <Accordion sx={{ borderBottom: "none", boxShadow: "none" }}>
              <AccordionSummary
                id="panel1-header"
                aria-controls="panel1-content"
                expandIcon={<ExpandMore />}
                sx={{
                  color: "black",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  fontFamily: "roboto",
                  fontWeight: "bold",
                }}
              >
                Price
              </AccordionSummary>
              <AccordionDetails>
                <FormControlLabel
                  sx={{ width: "100%", color: "black" }}
                  checked={minPrice === 50 && maxPrice === 149}
                  control={
                    <Radio
                      onChange={() => {
                        setMinPrice(50);
                        setMaxPrice(149);
                      }}
                      sx={{ color: "black", fontSize: "10px" }}
                    />
                  }
                  label={
                    <Typography sx={{ fontSize: "12px" }}>
                      $50.00 - $149.00
                    </Typography>
                  }
                />
                <FormControlLabel
                  sx={{ width: "100%", color: "black" }}
                  checked={minPrice === 150 && maxPrice === 249}
                  control={
                    <Radio
                      onChange={() => {
                        setMinPrice(150);
                        setMaxPrice(249);
                      }}
                      sx={{ color: "black", fontSize: "10px" }}
                    />
                  }
                  label={
                    <Typography sx={{ fontSize: "12px" }}>
                      $150.00 - $249.00
                    </Typography>
                  }
                />
                <FormControlLabel
                  sx={{ width: "100%", color: "black" }}
                  checked={minPrice === 250 && maxPrice === 349}
                  control={
                    <Radio
                      onChange={() => {
                        setMinPrice(250);
                        setMaxPrice(349);
                      }}
                      sx={{ color: "black", fontSize: "10px" }}
                    />
                  }
                  label={
                    <Typography sx={{ fontSize: "12px" }}>
                      $250.00 - $349.00
                    </Typography>
                  }
                />
                <FormControlLabel
                  sx={{ width: "100%", color: "black" }}
                  checked={minPrice === 350 && maxPrice === 449}
                  control={
                    <Radio
                      onChange={() => {
                        setMinPrice(350);
                        setMaxPrice(449);
                      }}
                      sx={{ color: "black", fontSize: "10px" }}
                    />
                  }
                  label={
                    <Typography sx={{ fontSize: "12px" }}>
                      $350.00 - $449.00
                    </Typography>
                  }
                />
                <FormControlLabel
                  sx={{ width: "100%", color: "black" }}
                  checked={minPrice === 450 && maxPrice === 549}
                  control={
                    <Radio
                      onChange={() => {
                        setMinPrice(450);
                        setMaxPrice(549);
                      }}
                      sx={{ color: "black", fontSize: "10px" }}
                    />
                  }
                  label={
                    <Typography sx={{ fontSize: "12px" }}>
                      $450.00 - $550.00
                    </Typography>
                  }
                />
              </AccordionDetails>
            </Accordion>
          </Stack>
        </Box>
      </Drawer>
      <Stack m="0" p="0" boxSizing={"border-box"}>
        <Header />
        {/* products */}
        <Stack sx={{ width: "90%", marginX: "auto" }} mt="100px">
          <Box pt={4}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link sx={{ textDecoration: "none", color: "black" }} href={"/"}>
                Home
              </Link>
              <Typography variant="body1" component={"a"}>
                Women Skincare
              </Typography>
            </Breadcrumbs>
            <Typography
              p="0"
              sx={{ fontSize: "30px", fontWeight: "bold", my: "15px" }}
              variant="h1"
            >
              Women Skincare
            </Typography>
          </Box>
          <Stack
            sx={{
              width: "100%",
              height: "20px",
              backgroundColor: "primary.main",
              display: {
                xs: "none",
                sm: "none",
                md: "block",
                lg: "block",
                xl: "block",
              },
            }}
          ></Stack>
          <Button
            sx={{
              display: {
                xs: "block",
                sm: "block",
                md: "none",
                lg: "none",
                xl: "none",
              },
            }}
            onClick={() => setIsDrawerOpen(true)}
            variant="contained"
            startIcon={<Filter />}
          >
            Filter
          </Button>
          <Stack
            direction={"row"}
            pt={4}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            {/* filters */}
            <Stack
              sx={{
                width: "25%",
                backgroundColor: "white",
                border: "1px solid lightgray",
                display: {
                  xs: "none",
                  sm: "none",
                  md: "inline-block",
                  lg: "inline-block",
                  xl: "inline-block",
                },
              }}
            >
              {/* category ----------------------------------------------------------------- */}
              <Accordion
                defaultExpanded
                sx={{ borderBottom: "none", boxShadow: "none" }}
              >
                <AccordionSummary
                  id="panel1-header"
                  aria-controls="panel1-content"
                  expandIcon={<ExpandMore />}
                  sx={{
                    color: "black",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    fontFamily: "roboto",
                    fontWeight: "bold",
                  }}
                >
                  Category
                </AccordionSummary>
                <AccordionDetails>
                  <FormControlLabel
                    sx={{ width: "100%", color: "black" }}
                    control={
                      <Radio
                        checked={chosenCategory == ""}
                        onChange={() => setChosenCategory("")}
                        sx={{ color: "black", fontSize: "10px" }}
                      />
                    }
                    label={
                      <Typography sx={{ fontSize: "12px" }}>All</Typography>
                    }
                  />
                  {categories &&
                    categories.map((item: any, index: number) => (
                      <FormControlLabel
                        key={index}
                        sx={{ width: "100%", color: "black" }}
                        control={
                          <Radio
                            checked={chosenCategory === item.category}
                            onChange={() => handleCategoryChange(item.category)}
                            sx={{ color: "black", fontSize: "10px" }}
                          />
                        }
                        label={
                          <Typography sx={{ fontSize: "12px" }}>
                            {item.category}
                          </Typography>
                        }
                      />
                    ))}
                </AccordionDetails>
              </Accordion>
              {/* skin condition ------------------------------------------------------------ */}
              <Accordion
                defaultExpanded
                sx={{ borderBottom: "none", boxShadow: "none" }}
              >
                <AccordionSummary
                  id="panel1-header"
                  aria-controls="panel1-content"
                  expandIcon={<ExpandMore />}
                  sx={{
                    color: "black",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    fontFamily: "roboto",
                    fontWeight: "bold",
                  }}
                >
                  Skin Condition
                </AccordionSummary>
                <AccordionDetails>
                  <FormControlLabel
                    sx={{ width: "100%", color: "black" }}
                    control={
                      <Radio
                        checked={chosenSkinCondition == ""}
                        onChange={() => setChosenSkinCondition("")}
                        sx={{ color: "black", fontSize: "10px" }}
                      />
                    }
                    label={
                      <Typography sx={{ fontSize: "12px" }}>All</Typography>
                    }
                  />
                  {skinConditions &&
                    skinConditions.map((item: any, index: number) => (
                      <FormControlLabel
                        key={index}
                        sx={{ width: "100%", color: "black" }}
                        control={
                          <Radio
                            checked={chosenSkinCondition === item.skinCondition}
                            onChange={() =>
                              handleSkinConditionChange(item.skinCondition)
                            }
                            sx={{ color: "black", fontSize: "10px" }}
                          />
                        }
                        label={
                          <Typography sx={{ fontSize: "12px" }}>
                            {item.skinCondition}
                          </Typography>
                        }
                      />
                    ))}
                </AccordionDetails>
              </Accordion>
              {/* price----------------------------------------------------------------- */}
              <Accordion
                defaultExpanded
                sx={{ borderBottom: "none", boxShadow: "none" }}
              >
                <AccordionSummary
                  id="panel1-header"
                  aria-controls="panel1-content"
                  expandIcon={<ExpandMore />}
                  sx={{
                    color: "black",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    fontFamily: "roboto",
                    fontWeight: "bold",
                  }}
                >
                  Price
                </AccordionSummary>
                <AccordionDetails>
                  <FormControlLabel
                    sx={{ width: "100%", color: "black" }}
                    checked={minPrice === 50 && maxPrice === 149}
                    control={
                      <Radio
                        onChange={() => {
                          setMinPrice(50);
                          setMaxPrice(149);
                        }}
                        sx={{ color: "black", fontSize: "10px" }}
                      />
                    }
                    label={
                      <Typography sx={{ fontSize: "12px" }}>
                        $50.00 - $149.00
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    sx={{ width: "100%", color: "black" }}
                    checked={minPrice === 150 && maxPrice === 249}
                    control={
                      <Radio
                        onChange={() => {
                          setMinPrice(150);
                          setMaxPrice(249);
                        }}
                        sx={{ color: "black", fontSize: "10px" }}
                      />
                    }
                    label={
                      <Typography sx={{ fontSize: "12px" }}>
                        $150.00 - $249.00
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    sx={{ width: "100%", color: "black" }}
                    checked={minPrice === 250 && maxPrice === 349}
                    control={
                      <Radio
                        onChange={() => {
                          setMinPrice(250);
                          setMaxPrice(349);
                        }}
                        sx={{ color: "black", fontSize: "10px" }}
                      />
                    }
                    label={
                      <Typography sx={{ fontSize: "12px" }}>
                        $250.00 - $349.00
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    sx={{ width: "100%", color: "black" }}
                    checked={minPrice === 350 && maxPrice === 449}
                    control={
                      <Radio
                        onChange={() => {
                          setMinPrice(350);
                          setMaxPrice(449);
                        }}
                        sx={{ color: "black", fontSize: "10px" }}
                      />
                    }
                    label={
                      <Typography sx={{ fontSize: "12px" }}>
                        $350.00 - $449.00
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    sx={{ width: "100%", color: "black" }}
                    checked={minPrice === 450 && maxPrice === 549}
                    control={
                      <Radio
                        onChange={() => {
                          setMinPrice(450);
                          setMaxPrice(549);
                        }}
                        sx={{ color: "black", fontSize: "10px" }}
                      />
                    }
                    label={
                      <Typography sx={{ fontSize: "12px" }}>
                        $450.00 - $550.00
                      </Typography>
                    }
                  />
                </AccordionDetails>
              </Accordion>
            </Stack>
            {/* product cards */}
            <Stack
              direction={"row"}
              sx={{
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "72%",
                  lg: "72%",
                  xl: "72%",
                },
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "wrap",
              }}
            >
              {filteredProducts &&
                filteredProducts.map((item: any, index: number) => (
                  <Stack
                    sx={{
                      textAlign: "left",
                      marginX: {
                        xs: "5px",
                        sm: "5px",
                        md: "10px",
                        lg: "15px",
                        xl: "15px",
                      },
                      width: {
                        xs: "45%",
                        sm: "45%",
                        md: "30%",
                        lg: "30%",
                        xl: "30%",
                      },
                      mt: "15px",
                    }}
                    key={index}
                  >
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
                ))}
            </Stack>
          </Stack>
        </Stack>
        <Footer />
      </Stack>
    </ThemeProvider>
  );
};

export default SkinCare;
