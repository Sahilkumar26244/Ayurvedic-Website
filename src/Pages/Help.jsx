import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Volunteer from "../SubComponents/Volunteer";
import Donate from "../SubComponents/Donate";

function Help() {
  return (
    <div>
      <Box bg={"#ffefe2"} mt={{ base: "90px", lg: "0px" }}>
        <Box
          position="relative"
          backgroundImage={
            "https://www.parmarth.org/wp-content/uploads/2021/11/about-banner.jpg"
          }
          backgroundSize={"cover"}
          h={{ base: "50vh", lg: "70vh" }}
          backgroundAttachment={"fixed"}
        >
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="rgba(0, 0, 0, 0.5)"
          />
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            h={"100%"}
            data-aos="fade-down"
          >
            <Text
              position="absolute"
              color={"white"}
              fontWeight={700}
              fontSize={{ base: "20px", lg: "59px" }}
              lineHeight={"59px"}
            >
            How You Can Help
            </Text>
          </Box>
        </Box>
        <Box w={{ base: "90%", lg: "1200px" }}
        m={"auto"}
        pt={"50px"}
        pb={"150px"} display={"flex"} flexDirection={"column"} gap={"40px"}>
          <Box>
            <Text color={"rgb(105, 76, 92)"} textAlign={"center"} fontWeight={400} fontSize={{base:"12px",lg:"16px"}} lineHeight={"28px"}>Thank you for your interest in joining our initiatives to preserve India’s natural heritage and resurrect the state of Uttrakhand. Parmarth Niketan’s mission spans from restoring the beautiful Ganga River, holding medical camps, protecting the girl child, promoting education, to enforcing sanitation and hygiene habits.</Text>
          </Box>
          <Box bg={"white"} p={"30px"} >
            <Volunteer/>
          </Box>
          <Box  p={"30px"} bg={"white"}>
            <Donate/>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Help;
