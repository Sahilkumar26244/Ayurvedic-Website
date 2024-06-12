import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import ReservationDetails from "../SubComponents/ReservationDetails";
import ReservationForm from "../SubComponents/ReservationForm";

function Reservations() {
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
            General Reservations
            </Text>
          </Box>
        </Box>
        <Box w={{ base: "90%", lg: "1200px" }}
        m={"auto"}
        pt={"50px"}
        pb={"150px"}>
          <Flex direction={{base:"column",lg:"row"}} gap={"80px"}>
            <Box w={{base:"100%",lg:"80%"}} display={"flex"} flexDirection={"column"} gap={"30px"}>
                <Box data-aos="fade-down">
                    <Text color={"rgb(105, 76, 92)"} fontWeight={700} fontSize={"16px"} lineHeight={"28px"}>To make a general reservation to stay at Parmarth Niketan Ashram, please submit the form below. A response will be sent as soon as possible. If you have not received a reply within 3 days, please send a gentle reminder to reservations@parmarth.com.</Text>
                </Box>
                <Box data-aos="fade-down">
                    <Text color={"rgb(105, 76, 92)"} fontWeight={400} fontSize={"16px"} lineHeight={"28px"}>Our reception office is open from <strong>8 am to 8 pm.</strong>  Please plan to arrive anytime between 8 am and 9 pm when our reception office is open so someone can welcome you. We humbly request you to check out before 11 am.</Text>
                </Box>
                <Box data-aos="fade-down">
                    <Text color={"rgb(105, 76, 92)"} fontWeight={400} fontSize={"16px"} lineHeight={"28px"} fontStyle={"italic"}>If you have any questions, please email.</Text>
                </Box>
            </Box>
            <Box w={{base:"100%",lg:"20%"}}>
                <Image src="https://www.parmarth.org/wp-content/uploads/2021/11/TC_2021_L_SAND_BG_RGB-01.png" w={"100%"} h={"100%"} objectFit={"contain"} />
            </Box>
          </Flex>
          <Box bg={"white"} mt={"50px"} display={"flex"} flexDirection={"column"} gap={"20px"} p={"30px"} data-aos="fade-up">
            <Box>
                <Text color={"rgb(84, 0, 0)"} textAlign={"center"} fontWeight={700} fontSize={"24px"} lineHeight={"24px"}>Ashram Guidelines</Text>
            </Box>
            <Box>
                <Text textAlign={"center"} color={"rgb(105, 76, 92)"} fontWeight={400} fontSize={"16px"} lineHeight={"28px"}>Before requesting accommodations and/or courses at the ashram, please be sure to read through our ashram guidelines.</Text>
            </Box>
            <Box display={"flex"} justifyContent={"center"}>
                <Button fontWeight={400} fontSize={"15px"} p={"20px 30px"} bg={"#a11f1f"} color={"white"} _hover={{bg:"#7d1f1f"}}>Click here to read</Button>
            </Box>
          </Box>
          <Box mt={"70px"}>
            <ReservationDetails/>
          </Box>
          <Box mt={"70px"}>
            <ReservationForm/>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Reservations;
