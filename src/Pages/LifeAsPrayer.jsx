import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import TimeTable from "../SubComponents/TimeTable";
import AnnualEvents from "../SubComponents/AnnualEvents";

function LifeAsPrayer() {
  return (
    <div>
      <Box bg={"#ffefe2"} mt={{base:"90px",lg:"0px"}}>
        <Box
          position="relative"
          backgroundImage={
            "https://res.cloudinary.com/dmzzzl5jj/image/upload/v1718337370/WhatsApp_Image_2024-06-13_at_18.47.24_e6f3e0c3_vmltpb.jpg"
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
              Life as Prayer
            </Text>
          </Box>
        </Box>
        <Box
          w={{ base: "90%", lg: "1200px" }}
          m={"auto"}
          pt={"50px"}
          pb={"50px"}
        >
          <Flex direction={{ base: "column", lg: "row" }} gap={"30px"}>
            <Box
              w={{ base: "100%", lg: "40%" }}
              display={"flex"}
              alignItems={"flex-start"}
              justifyContent={"flex-start"}
            >
              <Box data-aos="fade-right">
                <Image
                  w={"100%"}
                  h={"100%"}
                  objectFit={"contain"}
                  src="https://res.cloudinary.com/dmzzzl5jj/image/upload/v1718168165/sonika-agarwal-nriY_vxrmiw-unsplash_gyt8lr.jpg"
                />
              </Box>
            </Box>
            <Box
              w={{ base: "100%", lg: "60%" }}
              display={"flex"}
              flexDirection={"column"}
              gap={"20px"}
            >
              <Box>
                <Text
                  color={"rgb(84, 0, 0)"}
                  fontWeight={600}
                  fontSize={{base:"20px",lg:"30px"}}
                  lineHeight={"30px"}
                >
                  Daily Activities
                </Text>
              </Box>
              <Box>
                <Text
                  color={"rgb(105, 76, 92)"}
                  fontWeight={700}
                  fontSize={"16px"}
                  lineHeight={"28px"}
                >
                  The daily activities at Pinaki Kedar Manav Sewa Trust are listed below:{" "}
                </Text>
              </Box>
              <Box mt={"5px"}>
                <Text
                  color={"rgb(105, 76, 92)"}
                  fontWeight={400}
                  fontSize={"16px"}
                  lineHeight={"28px"}
                  fontStyle={"italic"}
                >
                  (Please check in with the Reception Office about any changes
                  to the daily schedule upon your arrival.)
                </Text>
              </Box>
              <Box>
                <TimeTable />
              </Box>
            </Box>
          </Flex>

          <Box mt={"40px"} data-aos="fade-down">
            <Text
              textAlign={"center"}
              fontWeight={400}
              fontSize={"16px"}
              lineHeight={"28px"}
              color={"rgb(105, 76, 92)"}
            >
              In addition, there are frequent special cultural, Hindi, Music,
              Sanskrit classes and spiritual programs given by visiting revered
              saints, acclaimed musicians, spiritual and social leaders and
              others.{" "}
              <strong>
                All visitors are welcome to participate in our daily activities.
              </strong>
            </Text>
          </Box>

          <Box mt={"50px"} border={"1px solid"}></Box>

          <Box>
            <AnnualEvents/>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default LifeAsPrayer;
