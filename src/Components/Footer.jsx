import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo3.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <Box
        bg={"#880a1f"}
        color={"#FD8F8F"}
        fontWeight={500}
        p={"30px 30px 100px 30px"}
      >
        <Box
          fontSize={"15px"}
          w={{ base: "90%", lg: "1200px" }}
          m={"auto"}
          display={"flex"}
          flexDirection={"column"}
          gap={"40px"}
        >
          <Flex
            direction={{ base: "column", lg: "row" }}
            justifyContent={{ base: "center", lg: "space-between" }}
            alignItems={"center"}
            w={"100%"}
            m={"auto"}
            gap={{ base: "20px", lg: "0px" }}
          >
            <Flex
              direction={{ base: "column", lg: "row" }}
              w={{ base: "100%", lg: "45%" }}
              justifyContent={"space-around"}
              alignItems={"center"}
              gap={{ base: "20px", lg: "0px" }}
            >
              <Box>
                <Link to="/about">
                  <Text>About</Text>
                </Link>
              </Box>
              <Box>
                <Link to="/yoga">
                  <Text>Yoga</Text>
                </Link>
              </Box>
              <Box>
                <Link to="/lifeAsPrayer">
                  <Text>Life As Prayer</Text>
                </Link>
              </Box>
            </Flex>
            <Box my={{ base: "20px", lg: "0px" }}>
              <Link to="/">
                <Image w={"100px"} h={"100%"} objectFit={"contain"} src={logo} />
              </Link>
            </Box>
            <Flex
              direction={{ base: "column", lg: "row" }}
              w={{ base: "100%", lg: "45%" }}
              justifyContent={"space-around"}
              alignItems={"center"}
              gap={{ base: "20px", lg: "0px" }}
            >
              <Box>
                <Link to="/news">
                  <Text>News</Text>
                </Link>
              </Box>
              <Box>
                <Link to="/reservations">
                  <Text>Reservations</Text>
                </Link>
              </Box>
              <Box>
                <Link to="/howYouCanHelp">
                  <Text>How You Can Help</Text>
                </Link>
              </Box>
            </Flex>
          </Flex>
          <Box>
            <Text
              color={"rgb(207, 183, 179)"}
              textAlign={"center"}
              fontSize={"16px"}
              fontWeight={400}
            >
              Copyright © Pinaki Kedar Manav Sewa Trust 2024. All Rights Reserved.
            </Text>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Footer;
