import { Link, Stack, Typography } from "@mui/material";
import Image from "next/image";
import image from "../public/images/image 10.png";
import barcode from "../public/images/barcode.png";

export const SkinCareAnalysis: React.FC = () => {
  return (
    <Stack
      direction={"row"}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "wrap",
        margin: {
          xs: "15px 0",
          sm: "25px 0",
          md: "35px 0",
          lg: "40px 0",
          xl: "40px 0",
        },
      }}
    >
      <Stack
        className="id"
        sx={{
          backgroundColor: "#3D021E",
          width: { xs: "100%", sm: "100%", md: "45%", lg: "45%", xl: "45%" },
          padding: "20px",
          height: "260px",
          position: "relative",
          display: {xs: "none", sm: "none", md: "flex", lg: "flex", xl: "flex"}
        }}
      >
        <Typography
          sx={{
            color: "secondary.main",
            fontSize: { xs: "4vw", sm: "3vw", md: "2vw", lg: "1.5vw" },
          }}
          variant="h4"
        >
          NEW Virtual Skincare Analysis
        </Typography>
        <Typography
          sx={{
            color: "secondary.main",
            my: "10px",
            fontSize: { xs: "3vw", sm: "2vw", md: "1.5vw", lg: "1vw" },
          }}
          variant="body1"
          component="p"
        >
          Looking for a full skincare routine? Our NEW Virtual Skincare Analysis
          Tool evaluates your skin and provides the most personalized
          recommendations.{" "}
        </Typography>
        <Typography
          sx={{
            color: "secondary.main",
            fontWeight: "bold",
            my: "5px",
            fontSize: { xs: "3vw", sm: "2vw", md: "1.5vw", lg: "1vw" },
          }}
          variant="body1"
          component="p"
        >
          Scan with your phone to get started
        </Typography>
        <Typography
          sx={{
            color: "secondary.main",
            my: "5px",
            fontSize: { xs: "3vw", sm: "2vw", md: "1.5vw", lg: "1vw" },
          }}
          variant="body1"
          component="p"
        >
          Or
        </Typography>
        <Link
          sx={{
            color: "secondary.main",
            my: "10px",
            fontFamily: "Roboto, sans-serif",
            border: "2px solid white",
            display: "inline-block",
            padding: "12px",
            maxWidth: "fit-content",
            fontSize: { xs: "3vw", sm: "2vw", md: "1.5vw", lg: "1vw" },
            "&:hover": {
              textDecoration: "none",
            },
          }}
          href={"/"}
        >
          Answer A Few Questions
        </Link>
        <Image
          style={{ position: "absolute", right: "10px", bottom: "10px" }}
          src={barcode}
          alt="barcode"
        />
      </Stack>
      <Stack sx={{ width: "45%", display: {xs: "none", sm: "none", md: "flex", lg: "flex", xl: "flex"} }}>
        <Image
          style={{ width: "100%", height: "auto" }}
          src={image}
          alt="image"
        />
      </Stack>
      {/* mobile size ----------------------------------------- */}
      <Stack
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
            xl: "none",
          },
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            color: "black",
            fontSize: { xs: "4vw", sm: "3vw", md: "2vw", lg: "1.5vw" },
            padding: "15px 0",
            fontWeight: "bold",
          }}
          variant="h4"
        >
          NEW Virtual Skincare Analysis
        </Typography>
        <Stack sx={{ width: "100%" }}>
          <Image
            style={{ width: "100%", height: "auto" }}
            src={image}
            alt="image"
          />
        </Stack>
        <Typography
          sx={{
            color: "black",
            my: "10px",
            fontSize: { xs: "3vw", sm: "2vw", md: "1.5vw", lg: "1vw" },
            textAlign: "left",
            padding: "10px"
          }}
          variant="body1"
          component="p"
        >
          Looking for a full skincare routine? Our NEW Virtual Skincare Analysis
          Tool evaluates your skin and provides the most personalized
          recommendations.{" "}
        </Typography>
        <Link
          sx={{
            my: "0",
            fontFamily: "Roboto, sans-serif",
            border: "2px solid white",
            display: "inline-block",
            padding: "10px",
            maxWidth: "fit-content",
            color: "primary.main",
            textDecoration: "none",
            fontSize: { xs: "3vw", sm: "2vw", md: "1.5vw", lg: "1vw" },
            "&:hover": {
              textDecoration: "none",
            },
          }}
          href={"/"}
        >
          Answer A Few Questions
        </Link>
      </Stack>
    </Stack>
  );
};
