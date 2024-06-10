import { Box, Grid, Image } from "@chakra-ui/react";
import React from "react";

function AnnualEventGallery() {
  const annualEvents = [
    {
      image: "https://www.parmarth.org/wp-content/uploads/2022/08/aarti-ghat-wideangle.jpg",
      text: "",
    },
    {
        image: "https://www.parmarth.org/wp-content/uploads/2022/08/aarti-Pujya-Swamiji-close-up.jpg",
        text: "",
      },
      {
        image: "https://www.parmarth.org/wp-content/uploads/2022/08/aarti-sankirtan.jpg",
        text: "",
      },
      {
        image: "https://www.parmarth.org/wp-content/uploads/2022/08/actual-aarti-wide-angle.jpg",
        text: "",
      },
      {
        image: "https://www.parmarth.org/wp-content/uploads/2022/08/aarti-ghat-wideangle.jpg",
        text: "",
      },
      {
          image: "https://www.parmarth.org/wp-content/uploads/2022/08/aarti-Pujya-Swamiji-close-up.jpg",
          text: "",
        },
        {
          image: "https://www.parmarth.org/wp-content/uploads/2022/08/aarti-sankirtan.jpg",
          text: "",
        },
        {
          image: "https://www.parmarth.org/wp-content/uploads/2022/08/actual-aarti-wide-angle.jpg",
          text: "",
        },
      {
        image: "https://www.parmarth.org/wp-content/uploads/2022/08/aarti-sankirtan.jpg",
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
