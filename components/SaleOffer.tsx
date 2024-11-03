import { Stack, Typography } from "@mui/material";
import saleimage from "../public/images/saleoff.png";
import Image from "next/image";

export const SaleOffer: React.FC = () => {
  return (
    <Stack
      direction={"row"}
      sx={{
        width: { xs: "100%", sm: "100%", md: "90%", lg: "90%", xl: "90%" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        margin: {
          xs: "20px auto",
          sm: "25px auto",
          md: "30px auto",
          lg: "40px auto",
          xl: "40px auto",
        },
      }}
    >
      <Stack sx={{ width: {xs: "100%", sm: "100%", md: "50%", lg: "50%", xl: "50%"}, order: {xs: "2", sm: "2", md: "1", lg: "1", xl: "1"} }}>
        <Image style={{ width: "100%", height: "auto" }} src={saleimage} alt="sale image" />
      </Stack>
      <Stack sx={{ padding: "15px", boxSizing: "border-box" ,textAlign: "left", width: {xs: "100%", sm: "100%", md: "50%", lg: "50%", xl: "50%"}, order: {xs: "1", sm: "1", md: "2", lg: "2", xl: "2"} }}>
        <Typography fontWeight={"bold"} variant="body1" component={"p"}>
          Special Offers
        </Typography>
        <Typography
          sx={{ color: "primary.main", fontSize: "24px" }}
          fontWeight={"bold"}
          variant="h6"
        >
          Save Up To 50%
        </Typography>
        <Typography my={"10px"} variant="body1" component={"p"}>
          Mother’s Day is coming!{" "}
        </Typography>
        <Typography my={"10px"} variant="body1" component={"p"}>
          For everything she’s given you, it's time to give back. Shower her
          with love,{" "}
        </Typography>
        <Typography my={"10px"} variant="body1" component={"p"}>
          happiness, and the best of Beautya.{" "}
        </Typography>
        <Typography
          sx={{ color: "primary.main" }}
          fontWeight={"bold"}
          variant="body1"
          component={"p"}
        >
          visit your local beautya branches to find out more about our special
          offers in make up and skincare products.{" "}
        </Typography>
      </Stack>
    </Stack>
  );
};
