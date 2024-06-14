import { Box, Grid, Image } from "@chakra-ui/react";
import React from "react";

function AnnualEventGallery() {
  const annualEvents = [
    {
      image: "https://res.cloudinary.com/dmzzzl5jj/image/upload/v1718337370/WhatsApp_Image_2024-06-13_at_18.47.24_2ffa0baa_ehbnck.jpg",
      text: "",
    },
    {
        image: "https://res.cloudinary.com/dmzzzl5jj/image/upload/v1718337370/WhatsApp_Image_2024-06-13_at_18.47.24_54beb34b_folxuu.jpg",
        text: "",
      },
      {
        image: "https://res.cloudinary.com/dmzzzl5jj/image/upload/v1718337372/WhatsApp_Image_2024-06-13_at_18.47.24_900b35ba_lrvntw.jpg",
        text: "",
      },
      {
        image: "https://res.cloudinary.com/dmzzzl5jj/image/upload/v1718337372/WhatsApp_Image_2024-06-13_at_18.47.24_5361d528_aimttr.jpg",
        text: "",
      },
      {
        image: "https://res.cloudinary.com/dmzzzl5jj/image/upload/v1718337373/WhatsApp_Image_2024-06-13_at_18.47.24_cb374df2_yvxif0.jpg",
        text: "",
      },
      {
          image: "https://res.cloudinary.com/dmzzzl5jj/image/upload/v1718337372/WhatsApp_Image_2024-06-13_at_18.47.24_8173f78f_rdkhyn.jpg",
          text: "",
        },
        {
          image: "https://res.cloudinary.com/dmzzzl5jj/image/upload/v1718337374/WhatsApp_Image_2024-06-14_at_00.33.42_3c5b0a7f_jzmocx.jpg",
          text: "",
        },
        {
          image: "https://res.cloudinary.com/dmzzzl5jj/image/upload/v1718337374/WhatsApp_Image_2024-06-14_at_00.33.42_b7d0a2e7_gpbamr.jpg",
          text: "",
        },
      {
        image: "https://res.cloudinary.com/dmzzzl5jj/image/upload/v1718337370/WhatsApp_Image_2024-06-13_at_18.47.24_23b497fe_mbieaz.jpg",
        text: "",
      },
  ];
  return (
    <div>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
        direction={{ base: "column", md: "row" }}
        gap="10px"
      >
        {annualEvents.map((e,i) => (
            <>
            <Box>
                <Image src={e.image} w={"100%"} h={"100%"} objectFit={"contain"} />
            </Box>
            </>
        ))}
      </Grid>
    </div>
  );
}

export default AnnualEventGallery;
