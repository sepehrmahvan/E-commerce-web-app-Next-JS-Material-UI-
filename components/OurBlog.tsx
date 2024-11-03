import { Box, Stack, Typography } from "@mui/material";
import blogimage1 from "../public/images/blog image 1.png";
import blogimage2 from "../public/images/blog image 2.png";
import blogimage3 from "../public/images/blog image 3.png";
import Image from "next/image";

export const OurBlog: React.FC = () => {
  return (
    <Stack sx={{ width: "90%", margin: "20px auto", textAlign: "center" }}>
      <Typography
        sx={{
          color: "black",
          fontSize: "24px",
          margin: "25px",
        }}
        fontWeight={"bold"}
        variant="h6"
      >
        Our Blog
      </Typography>
      <Stack
        direction={"row"}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            width: {xs: "46%", sm: "46%", md: "30%", lg: "30%", xl: "30%"},
            textAlign: "left",
            border: "1px solid lightgray",
            marginTop: "15px",
          }}
        >
          <Image
            style={{ width: "100%", height: "auto" }}
            src={blogimage1}
            alt="blog-image"
          />
          <Typography
            sx={{ padding: "15px", boxSizing: "border-box", fontSize: {xs: "12px", sm: "16px", md: "20px", lg: "24px", xl: "24px" } }}
            variant="h3"
          >
            How to get clear skin fast
          </Typography>
          <Typography
            sx={{ padding: "5px 15px",color: "gray", boxSizing: "border-box", fontSize: {xs: "10px", sm: "12px", md: "14px", lg: "16px", xl: "16px" } }}
            variant="body1"
            component={"p"}
          >
            Skincare | Dr. Wade Warren | Jan 20, 2021
          </Typography>
          <Typography
            sx={{ padding: "15px", boxSizing: "border-box",fontSize: {xs: "12px", sm: "14px", md: "16px", lg: "18px", xl: "18px" } }}
            variant="body1"
            component={"p"}
          >
            Many people find it difficult to get clear skin. The methods for
            getting clear skin will vary,{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            width: {xs: "46%", sm: "46%", md: "30%", lg: "30%", xl: "30%"},
            textAlign: "left",
            border: "1px solid lightgray",
            marginTop: "15px",
          }}
        >
          <Image
            style={{ width: "100%", height: "auto" }}
            src={blogimage2}
            alt="blog-image"
          />
          <Typography
            sx={{ padding: "15px", boxSizing: "border-box", fontSize: {xs: "12px", sm: "16px", md: "20px", lg: "24px", xl: "24px" } }}
            variant="h3"
          >
            How to get clear skin fast
          </Typography>
          <Typography
            sx={{ padding: "5px 15px",color: "gray", boxSizing: "border-box", fontSize: {xs: "10px", sm: "12px", md: "14px", lg: "16px", xl: "16px" } }}
            variant="body1"
            component={"p"}
          >
            Skincare | Dr. Wade Warren | Jan 20, 2021
          </Typography>
          <Typography
            sx={{ padding: "15px", boxSizing: "border-box",fontSize: {xs: "12px", sm: "14px", md: "16px", lg: "18px", xl: "18px" } }}
            variant="body1"
            component={"p"}
          >
            Many people find it difficult to get clear skin. The methods for
            getting clear skin will vary,{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            width: {xs: "46%", sm: "46%", md: "30%", lg: "30%", xl: "30%"},
            textAlign: "left",
            border: "1px solid lightgray",
            marginTop: "15px",
          }}
        >
          <Image
            style={{ width: "100%", height: "auto" }}
            src={blogimage3}
            alt="blog-image"
          />
          <Typography
            sx={{ padding: "15px", boxSizing: "border-box", fontSize: {xs: "12px", sm: "16px", md: "20px", lg: "24px", xl: "24px" } }}
            variant="h3"
          >
            How to get clear skin fast
          </Typography>
          <Typography
            sx={{ padding: "5px 15px",color: "gray", boxSizing: "border-box", fontSize: {xs: "10px", sm: "12px", md: "14px", lg: "16px", xl: "16px" } }}
            variant="body1"
            component={"p"}
          >
            Skincare | Dr. Wade Warren | Jan 20, 2021
          </Typography>
          <Typography
            sx={{ padding: "15px", boxSizing: "border-box",fontSize: {xs: "12px", sm: "14px", md: "16px", lg: "18px", xl: "18px" } }}
            variant="body1"
            component={"p"}
          >
            Many people find it difficult to get clear skin. The methods for
            getting clear skin will vary,{" "}
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};
