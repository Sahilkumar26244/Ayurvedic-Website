import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <div>
      <Box mt={"200px"} bg={"#880a1f"} color={"#FD8F8F"} fontWeight={500} p={"30px"}>
        <Box w={{ base: "90%", lg: "1300px" }} border={"1px solid "} m={"auto"} display={"flex"} flexDirection={"column"} gap={"40px"}>
          <Flex direction={{base:"column",lg:"row"}} justifyContent={"space-between"} w={"55%"} m={"auto"} alignItems={"center"} gap={{base:"20px",lg:"0px"}}>
            <Box>
              <Text>Home</Text>
            </Box>
            <Box>
              <Text>About</Text>
            </Box>
            <Box>
              <Text>Yoga</Text>
            </Box>
            <Box w={{base:"",lg:"20%"}}>
                <Image w={"100%"} h={"100%"} objectFit={"contain"} src='https://courses.parmarth.org/wp-content/uploads/2023/09/PNSY.png' />
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
            <Text textAlign={"center"} fontSize={"17px"} fontWeight={400}>Copyright © Parmarth Niketan 2024. All Rights Reserved.</Text>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Footer;
