"use client";
import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Link,
  Box,
  Menu,
  Typography,
  Drawer,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Autocomplete,
  List,
  ListItem,
} from "@mui/material";
import logo from "../public/images/logo.png";
import menupic from "../public/images/menupic.png";
import Image from "next/image";
import { Close, ExpandMore, Login, Search } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";

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

export const Header: React.FC = () => {
  // menu
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // search menu
  const [searchAnchorEl, setSearchAnchorEl] = useState<null | HTMLElement>(
    null
  );

  const openSearch = Boolean(searchAnchorEl);

  const handleClickSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSearchAnchorEl(event.currentTarget);
  };

  const handleCloseSearch = () => {
    setSearchAnchorEl(null);
  };

  //   get categories
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
  const [productNames, setProductNames] = useState<{ name: string; id: string }[]>([]);

  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/get-products");
      if (!response.ok) {
        throw new Error("faild to fetch");
      }
      const result = await response.json();
      const namesArray = result.products.map((product: any) => ({
        name: product.name,
        id: product._id,
      }));
      setProductNames(namesArray);
    } catch (error) {
      throw new Error("failed to fetch");
    }
  };
  
  useEffect(() => {
    getCategories();
    getSkinConditions();
    getProducts();
  }, []);

  //   colection links
  const collectionLinks = [
    {
      title: "Beautya cleansing",
      href: "beautya-cleansing",
    },
    {
      title: "Beautya Prestige",
      href: "beautya-prestige",
    },
    {
      title: "Beautya light -in -white",
      href: "beautya-light",
    },
    {
      title: "capture totale",
      href: "capture-totale",
    },
    {
      title: "capture youth",
      href: "capture-youth",
    },
    {
      title: "capture dreamskin",
      href: "capture-dreamskin",
    },
    {
      title: "one essential",
      href: "one-essential",
    },
    {
      title: "professional solution",
      href: "professional-solution",
    },
    {
      title: "beautya hydra life",
      href: "beautya-hydra-life",
    },
  ];

  //   drawer menu
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  // search input
  const [searchInput, setSearchInput] = useState<string>("");

  const filteredProducts = productNames
    .filter((product) =>
      product.name.toLowerCase().includes(searchInput.toLowerCase())
    )
    .slice(0, 5);

  return (
    <AppBar
      sx={{
        backgroundColor: "white",
        background: {
          xs: "linear-gradient(to right, white 10%, #e0c1d0 30%, white)",
          sm: "linear-gradient(to right, white 10%, #e0c1d0 30%, white)",
          md: "linear-gradient(to right, #e0c1d0 1%, white 20%)",
          lg: "linear-gradient(to right, #e0c1d0 1%, white 20%)",
          xl: "linear-gradient(to right, #e0c1d0 1%, white 20%)",
        },
        paddingX: { xs: "0", sm: "0", md: "0", lg: "70px", xl: "70px" },
      }}
    >
      {/* drawer ----------------------------------------- */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <IconButton
          sx={{ display: "flex", justifyContent: "flex-end", padding: "15px" }}
          onClick={() => setIsDrawerOpen(false)}
        >
          <Close />
        </IconButton>
        <Box sx={{ width: { xs: "90vw", sm: "90vw", md: "50vw" } }}>
          <Link
            sx={{
              display: "block",
              padding: "15px",
              color: "black",
              textDecoration: "none",
              textTransform: "uppercase",
              fontFamily: "roboto",
              fontWeight: "bold",
            }}
            href="/"
          >
            Women Make Up
          </Link>
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
              Women Skincare
            </AccordionSummary>
            <AccordionDetails>
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
                  by Category
                </AccordionSummary>
                <AccordionDetails>
                  {categories?.map((item: any, index: number) => (
                    <Link
                      sx={{
                        fontFamily: "Roboto, sans-serif",
                        textDecoration: "none",
                        color: "black",
                        paddingY: "5px",
                        fontWeight: "10px",
                        transition: "color 0.5s ease",
                        textTransform: "capitalize",
                        display: "block",
                      }}
                      key={index}
                      href={"/"}
                    >
                      {item.category}
                    </Link>
                  ))}
                </AccordionDetails>
              </Accordion>
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
                  by Skin Condition
                </AccordionSummary>
                <AccordionDetails>
                  {skinConditions?.map((item: any, index: number) => (
                    <Link
                      sx={{
                        fontFamily: "Roboto, sans-serif",
                        textDecoration: "none",
                        color: "black",
                        paddingY: "5px",
                        fontWeight: "10px",
                        transition: "color 0.5s ease",
                        textTransform: "capitalize",
                        display: "block",
                      }}
                      key={index}
                      href={"/"}
                    >
                      {item.skinCondition}
                    </Link>
                  ))}
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
          </Accordion>
          <Link
            sx={{
              display: "block",
              padding: "15px",
              color: "black",
              textDecoration: "none",
              textTransform: "uppercase",
              fontFamily: "roboto",
              fontWeight: "bold",
            }}
            href="/"
          >
            Gifts & Sets
          </Link>
          <Link
            sx={{
              display: "block",
              padding: "15px",
              color: "black",
              textDecoration: "none",
              textTransform: "uppercase",
              fontFamily: "roboto",
              fontWeight: "bold",
            }}
            href="/"
          >
            Branches
          </Link>
          <Link
            sx={{
              display: "block",
              padding: "15px",
              color: "black",
              textDecoration: "none",
              textTransform: "uppercase",
              fontFamily: "roboto",
              fontWeight: "bold",
            }}
            href="/"
          >
            Our Brand
          </Link>
        </Box>
      </Drawer>
      {/* toolbar ------------------------------------------------- */}
      <Toolbar
        sx={{
          paddingY: "10px",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          width: "100%",
          background: "transparent",
        }}
      >
        <IconButton
          sx={{
            display: {
              xs: "inline-block",
              sm: "inline-block",
              md: "none",
              lg: "none",
              xl: "none",
            },
            paddingX: "7px",
            paddingBottom: "0",
            position: "relative",
            top: "6px",
          }}
          edge="start"
          onClick={() => setIsDrawerOpen(true)}
        >
          <GiHamburgerMenu />
        </IconButton>
        <Link
          href={"/"}
          sx={{
            position: "relative",
            left: "17px",
            width: {
              xs: "70px",
              sx: "70px",
              md: "100px",
              lg: "100px",
              xl: "100px",
            },
            height: {
              xs: "40px",
              sm: "40px",
              md: "55px",
              lg: "55px",
              xl: "55px",
            },
          }}
        >
          <Image
            style={{ width: "100%", height: "100%" }}
            src={logo}
            alt="logo"
          />
        </Link>
        <Stack
          spacing={2}
          direction="row"
          sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
        >
          <Button
            sx={{
              color: "black",
              paddingY: "0",
              "&:hover": {
                color: "primary.main",
                backgroundColor: "secondary.main",
              },
            }}
          >
            <Link
              sx={{
                color: "black",
                textDecoration: "none",
                fontWeight: "bold",
                transition: "color 0.5s ease",
                "&:hover": {
                  color: "primary.main",
                  backgroundColor: "secondary.main",
                },
              }}
              href={"/"}
            >
              Women Make UP
            </Link>
          </Button>
          <Button
            id="resourses-button"
            onClick={handleClick}
            aria-controls={open ? "resourses-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            sx={{
              fontWeight: "bold",
              color: "black",
              paddingY: "0",
              "&:hover": {
                color: "primary.main",
                backgroundColor: "secondary.main",
              },
            }}
          >
            Women Skincare
          </Button>
          <Button
            sx={{
              fontWeight: "bold",
              color: "black",
              paddingY: "0",
              "&:hover": {
                color: "primary.main",
                backgroundColor: "secondary.main",
              },
            }}
          >
            <Link
              sx={{
                color: "black",
                textDecoration: "none",
                fontWeight: "bold",
                transition: "color 0.5s ease",
                "&:hover": {
                  color: "primary.main",
                  backgroundColor: "secondary.main",
                },
              }}
              href={"/"}
            >
              Gifts & Sets
            </Link>
          </Button>
          <Button
            sx={{
              fontWeight: "bold",
              color: "black",
              paddingY: "0",
              "&:hover": {
                color: "primary.main",
                backgroundColor: "secondary.main",
              },
            }}
          >
            <Link
              sx={{
                color: "black",
                textDecoration: "none",
                fontWeight: "bold",
                transition: "color 0.5s ease",
                "&:hover": {
                  color: "primary.main",
                  backgroundColor: "secondary.main",
                },
              }}
              href={"/"}
            >
              Branches
            </Link>
          </Button>
          <Button
            sx={{
              fontWeight: "bold",
              color: "black",
              paddingY: "0",
              "&:hover": {
                color: "primary.main",
                backgroundColor: "secondary.main",
              },
            }}
          >
            <Link
              sx={{
                color: "black",
                textDecoration: "none",
                fontWeight: "bold",
                transition: "color 0.5s ease",
                "&:hover": {
                  color: "primary.main",
                  backgroundColor: "secondary.main",
                },
              }}
              href={"/"}
            >
              OUR BRAND
            </Link>
          </Button>
        </Stack>
        <Stack
          direction={"row"}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "0",
            margin: "0",
          }}
        >
          <IconButton onClick={handleClickSearch} sx={{ paddingY: "0" }}>
            <Search
              sx={{
                transition: "color 0.5s ease",
                "&:hover": {
                  color: "primary.main",
                  backgroundColor: "transparent",
                },
              }}
            />
          </IconButton>
          <Link
            href={"/"}
            sx={{
              color: "black",
              transition: "color 0.5s ease",
              paddingY: "0",
              "&:hover": {
                color: "primary.main",
                backgroundColor: "transparent",
              },
            }}
          >
            <Login />
          </Link>
        </Stack>
        {/* menus --------------------------------------------------------------------------- */}
        <Menu
          anchorEl={anchorEl}
          MenuListProps={{ "aria-labelledby": "resourses-button" }}
          open={open}
          onClose={handleClose}
          id="resourses-menu"
          sx={{ width: "100vw", marginY: "15px" }}
        >
          <Stack
            direction={"row"}
            sx={{
              width: "100vw",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "flex-start",
              padding: "25px",
              boxSizing: "border-box",
            }}
          >
            <Stack>
              <Link
                sx={{
                  fontFamily: "Roboto, sans-serif",
                  textDecoration: "none",
                  color: "black",
                  paddingY: "5px",
                  fontWeight: "bold",
                  transition: "color 0.5s ease",
                  "&:hover": {
                    color: "primary.main",
                    backgroundColor: "transparent",
                  },
                }}
                href={"/"}
              >
                New
              </Link>
              <Link
                sx={{
                  fontFamily: "Roboto, sans-serif",
                  textDecoration: "none",
                  color: "black",
                  paddingY: "5px",
                  fontWeight: "bold",
                  transition: "color 0.5s ease",
                  "&:hover": {
                    color: "primary.main",
                    backgroundColor: "transparent",
                  },
                }}
                href={"/"}
              >
                Best Sellers
              </Link>
              <Link
                sx={{
                  fontFamily: "Roboto, sans-serif",
                  textDecoration: "none",
                  color: "black",
                  paddingY: "5px",
                  fontWeight: "bold",
                  transition: "color 0.5s ease",
                  "&:hover": {
                    color: "primary.main",
                    backgroundColor: "transparent",
                  },
                }}
                href={"/"}
              >
                Travel Size
              </Link>
              <Link
                sx={{
                  fontFamily: "Roboto, sans-serif",
                  textDecoration: "none",
                  color: "black",
                  paddingY: "5px",
                  fontWeight: "bold",
                  transition: "color 0.5s ease",
                  "&:hover": {
                    color: "primary.main",
                    backgroundColor: "transparent",
                  },
                }}
                href={"/"}
              >
                Professional Treatment
              </Link>
              <Link
                sx={{
                  fontFamily: "Roboto, sans-serif",
                  textDecoration: "none",
                  color: "black",
                  paddingY: "5px",
                  fontWeight: "bold",
                  transition: "color 0.5s ease",
                  "&:hover": {
                    color: "primary.main",
                    backgroundColor: "transparent",
                  },
                }}
                href={"/"}
              >
                Daily Defense
              </Link>
              <Link
                sx={{
                  fontFamily: "Roboto, sans-serif",
                  textDecoration: "none",
                  color: "black",
                  paddingY: "5px",
                  fontWeight: "bold",
                  transition: "color 0.5s ease",
                  "&:hover": {
                    color: "primary.main",
                    backgroundColor: "transparent",
                  },
                }}
                href={"/"}
              >
                virtual skincare analysis
              </Link>
            </Stack>
            <Stack>
              <Typography variant="h6">By Category</Typography>
              {categories?.map((item: any, index: number) => (
                <Link
                  sx={{
                    fontFamily: "Roboto, sans-serif",
                    textDecoration: "none",
                    color: "black",
                    paddingY: "5px",
                    fontWeight: "10px",
                    transition: "color 0.5s ease",
                    textTransform: "capitalize",
                    "&:hover": {
                      color: "primary.main",
                      backgroundColor: "transparent",
                    },
                  }}
                  key={index}
                  href={`/skincare?category=${encodeURIComponent(
                    item.category
                  )}`}
                >
                  {item.category}
                </Link>
              ))}
            </Stack>
            <Stack>
              <Typography variant="h6">By Skin Condition</Typography>
              {skinConditions?.map((item: any, index: number) => (
                <Link
                  sx={{
                    fontFamily: "Roboto, sans-serif",
                    textDecoration: "none",
                    color: "black",
                    paddingY: "5px",
                    fontWeight: "10px",
                    transition: "color 0.5s ease",
                    textTransform: "capitalize",
                    "&:hover": {
                      color: "primary.main",
                      backgroundColor: "transparent",
                    },
                  }}
                  key={index}
                  href={`/skincare?skinCondition=${encodeURIComponent(
                    item.skinCondition
                  )}`}
                >
                  {item.skinCondition}
                </Link>
              ))}
            </Stack>
            <Stack>
              <Typography variant="h6">Collection</Typography>
              {collectionLinks.map((item: any, index: number) => (
                <Link
                  sx={{
                    fontFamily: "Roboto, sans-serif",
                    textDecoration: "none",
                    color: "black",
                    paddingY: "5px",
                    fontWeight: "10px",
                    transition: "color 0.5s ease",
                    textTransform: "capitalize",
                    "&:hover": {
                      color: "primary.main",
                      backgroundColor: "transparent",
                    },
                  }}
                  key={index}
                  href={item.href}
                >
                  {item.title}
                </Link>
              ))}
            </Stack>
            <Stack>
              <Image src={menupic} alt={"menu picture"} />
              <Typography my={2} variant={"h5"}>
                capture totale super potent rich cream
              </Typography>
              <Typography
                sx={{
                  maxWidth: "400px", // Adjust the width as needed
                  overflowWrap: "break-word",
                  whiteSpace: "normal",
                }}
                component="p"
                variant="body1"
              >
                Global age-defying rich cream - intense nourishment &
                revitalization
              </Typography>
            </Stack>
          </Stack>
        </Menu>
        <Menu
          anchorEl={searchAnchorEl}
          MenuListProps={{ "aria-labelledby": "resourses-button" }}
          open={openSearch}
          onClose={handleCloseSearch}
          id="resourses-menu"
          sx={{ width: "100vw", marginY: "15px" }}
        >
          <Stack
            direction={"column"}
            sx={{
              width: {xs: "100vw", sm: "100vw", md: "50vw", lg: "40vw", xl: "40vw"},
              height: "auto",
              padding: "25px",
              boxSizing: "border-box",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <TextField
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                sx={{ width: "90%" }}
                label={"Search"}
              />
              <List sx={{ display: searchInput === "" ? "none" : "block" }}>
                {filteredProducts.map((product) => (
                  <ListItem key={product.id} sx={{ padding: "5px 0" }}>
                    <Link
                      href={`/skincare/${product.id}`}
                      sx={{
                        textDecoration: "none",
                        color: "inherit",
                        padding: "10px",
                        "&:hover": { color: "primary.main" },
                      }}
                    >
                      <Typography variant="body1">{product.name}</Typography>
                    </Link>
                  </ListItem>
                ))}
              </List>
          </Stack>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
