import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import one from "../assets/contact-icon-1.png";
import two from "../assets/contact-icon-2.png";
import three from "../assets/contact-icon-3.png";
import four from "../assets/contact-icon-4.png";

function AshramDetails() {
  const ashramDetails = [
    {
      logo: one,
      title: "The Ashram",
      desc: "The daily activities at Pinaki Kedar Manav Sewa Trust include morning universal prayers, daily yoga and meditation classes, daily satsang and lecture programs, kirtan, the world-renowned Ganga Aarti at sunset.",
    },
    {
      logo: two,
      title: "Pujya Swamiji",
      desc: "Learn more about H.H. Pujya Swami Chidanand Saraswatiji, President of Pinaki Kedar Manav Sewa Trust, and his teachings. Pujya Swamiji’s motto in life is, “In the Service of God and humanity.",
    },
    {
      logo: three,
      title: "Life As Prayer",
      desc: "Daily events and activities at Parmarth make every minute, every moment prayer, connecting us all to the Divine.",
    },
    {
      logo: four,
      title: "Giving Is Living",
      desc: "Daily events and activities at Parmarth make every minute, every moment prayer, connecting us all to the Divine.",
    },
  ];
  return (
    <div>
      <Box bg={""}>
        <Box pt={"180px"} pb={"80px"}>
          <Flex
            w={{ base: "90%", lg: "1250px" }}
            m={"auto"}
            gap={"50px"}
            direction={{base:"column",lg:"row"}}
          >
            {ashramDetails.map((e, i) => (
              <>
                
                  <Box className="hvr-float"
                    w={{base:"100%",lg:"25%"}}
                    bg={"#ffefe2"}
                    display={"flex"}
                    alignItems={"center"}
                    flexDirection={"column"}
                    gap={"20px"}
                    p={"62px 38px 72px"}
                    cursor={"pointer"}
                    _hover={{color:"rgb(231, 40, 74)",boxShadow:"1px 10px 61px 5px rgba(231,40,74,0.75)"}}
                    color={"rgb(136, 10, 31)"}
                  >
                    <Box w={"55%"} _hover={{w:"65%"}} transition={"all 0.3s ease"}>
                      <Image w={"100%"} h={"100%"} objectFit={"contain"} src={e.logo} />
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

export default AshramDetails;
