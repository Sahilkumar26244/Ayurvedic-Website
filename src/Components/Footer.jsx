import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo3.png"

function Footer() {
  return (
    <div>
      <Box bg={"#880a1f"} color={"#FD8F8F"} fontWeight={500} p={"30px 30px 100px 30px"}>
        <Box fontSize={"15px"} w={{ base: "90%", lg: "1300px" }} m={"auto"} display={"flex"} flexDirection={"column"} gap={"40px"}>
          <Flex direction={{base:"column",lg:"row"}} justifyContent={"space-between"} w={"55%"} m={"auto"} alignItems={"center"} gap={{base:"20px",lg:"0px"}}>
            <Box>
              <Text >Home</Text>
            </Box>
            <Box>
              <Text>About</Text>
            </Box>
            <Box>
              <Text>Yoga</Text>
            </Box>
            <Box w={{base:"",lg:"20%"}}>
                <Image w={"100%"} h={"100%"} objectFit={"contain"} src={logo} />
            </Box>
            <Box>
              <Text>Retreats</Text>
            </Box>
            <Box>
              <Text>Register</Text>
            </Box>
            <Box>
              <Text>Contact</Text>
            </Box>
          </Flex>
          <Box>
            <Text color={"rgb(207, 183, 179)"} textAlign={"center"} fontSize={"16px"} fontWeight={400}>Copyright © Parmarth Niketan 2024. All Rights Reserved.</Text>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Footer;
