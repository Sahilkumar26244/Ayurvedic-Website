import React from "react";
import one from "../assets/contact-icon-1.png";
import two from "../assets/contact-icon-2.png";
import three from "../assets/contact-icon-3.png";
import four from "../assets/contact-icon-4.png";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

function ReservationDetails() {
  const ashramDetails = [
    {
      logo: one,
      title: "Travel Agents",
      desc: "To make a reservations for your clients to stay at Parmarth, please click here.",
    },
    {
      logo: two,
      title: "Group Retreats",
      desc: "If you require a venue for your retreat / katha / group, please click here to make a reservation for your stay at Parmarth.",
    },
    {
      logo: three,
      title: "Yoga Cources",
      desc: "If you would like to sign=up for a yoga cource at Parmarth Niketan, please click here.",
    },
    {
      logo: four,
      title: "Sanskara Ceremonies",
      desc: "If you would like to perform a sanskara ceremony at Parmarth, please click here.",
    },
  ];
  return (
    <div>
      <Box bg={""}>
        <Box>
          <Flex
            w={{ base: "90%", lg: "1250px" }}
            m={"auto"}
            gap={"50px"}
            direction={{ base: "column", lg: "row" }}
          >
            {ashramDetails.map((e, i) => (
              <>
                <Box
                  className="hvr-float"
                  w={{ base: "100%", lg: "25%" }}
                  bg={"white"}
                  display={"flex"}
                  alignItems={"center"}
                  flexDirection={"column"}
                  gap={"20px"}
                  p={"62px 38px 72px"}
                  cursor={"pointer"}
                  _hover={{
                    color: "rgb(231, 40, 74)",
                    boxShadow: "1px 10px 61px 5px rgba(231,40,74,0.75)",
                  }}
                  color={"rgb(136, 10, 31)"}
                >
                  <Box
                    w={"55%"}
                    _hover={{ w: "65%" }}
                    transition={"all 0.3s ease"}
                  >
                    <Image
                      w={"100%"}
                      h={"100%"}
                      objectFit={"contain"}
                      src={e.logo}
                    />
                  </Box>
                  <Box>
                    <Text
                      fontSize={"30px"}
                      fontWeight={700}
                      lineHeight={"38px"}
                      textAlign={"center"}
                    >
                      {e.title}
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      fontSize={"18px"}
                      lineHeight={"38px"}
                      fontWeight={400}
                      textAlign={"center"}
                    >
                      {e.desc}
                    </Text>
                  </Box>
                </Box>
              </>
            ))}
          </Flex>
        </Box>
      </Box>
    </div>
  );
}

export default ReservationDetails;
