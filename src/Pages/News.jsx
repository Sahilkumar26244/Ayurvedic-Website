import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import NewsPosts from "../SubComponents/NewsPosts";

function News() {
  const news = [
    {
      image: "https://www.parmarth.org/wp-content/uploads/2024/06/448052160_1052895652874195_8903071693562385259_n.jpg",
      title:"Rashtriya Kavi Sangam Poets’ Conference Organized at Parmarth",
      desc: "Saints from the BAPS Swaminarayan Sanstha and 700 devotees visited Parmarth and met with Pujya Swamiji, discussing the spread of spiritual and cultural heritage among youth. Marking World Food SafetySaints from the BAPS Swaminarayan Sanstha and 700 devotees visited Parmarth and met with Pujya Swamiji, discussing the spread of spiritual and cultural heritage among youth. Marking World Food Safety",
      date: "June 7, 2024",
    },
    {
        image: "https://www.parmarth.org/wp-content/uploads/2024/06/4-June-Photo-2048x1454.jpg  ",
        title:"Rashtriya Kavi Sangam Poets’ Conference Organized at Parmarth",
        desc: "Saints from the BAPS Swaminarayan Sanstha and 700 devotees visited Parmarth and met with Pujya Swamiji, discussing the spread of spiritual and cultural heritage among youth. Marking World Food Safety",
        date: "June 7, 2024",
      },
      {
        image: "https://www.parmarth.org/wp-content/uploads/2024/06/444944945_18325067086122287_2710172916415830938_n.jpg",
        title:"Rashtriya Kavi Sangam Poets’ Conference Organized at Parmarth",
        desc: "Saints from the BAPS Swaminarayan Sanstha and 700 devotees visited Parmarth and met with Pujya Swamiji, discussing the spread of spiritual and cultural heritage among youth. Marking World Food Safety",
        date: "June 7, 2024",
      },
      {
        image: "https://www.parmarth.org/wp-content/uploads/2024/06/441896135_1050153733148387_3739339742819711385_n.jpg",
        title:"Rashtriya Kavi Sangam Poets’ Conference Organized at Parmarth",
        desc: "Saints from the BAPS Swaminarayan Sanstha and 700 devotees visited Parmarth and met with Pujya Swamiji, discussing the spread of spiritual and cultural heritage among youth. Marking World Food Safety",
        date: "June 7, 2024",
      },
      {
        image: "https://www.parmarth.org/wp-content/uploads/2024/06/445586801_1048318993331861_2321108323390469271_n.jpg",
        title:"Rashtriya Kavi Sangam Poets’ Conference Organized at Parmarth",
        desc: "Saints from the BAPS Swaminarayan Sanstha and 700 devotees visited Parmarth and met with Pujya Swamiji, discussing the spread of spiritual and cultural heritage among youth. Marking World Food Safety",
        date: "June 7, 2024",
      },
  ];
  return (
    <div>
      <Box bg={"#ffefe2"} mt={{ base: "90px", lg: "0px" }}>
        <Box
          position="relative"
          backgroundImage={
            "https://res.cloudinary.com/dmzzzl5jj/image/upload/v1718337373/WhatsApp_Image_2024-06-13_at_18.47.24_cb374df2_yvxif0.jpg"
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
              Recent News
            </Text>
          </Box>
        </Box>
        <Box
          w={{ base: "90%", lg: "1200px" }}
          m={"auto"}
          pt={"50px"}
          pb={"150px"}
          border={"1px solid"}
        >
          <Flex direction={{base:"column",lg:"row"}}>
            <Box w={{base:"100%",lg:"70%"}}>
                <NewsPosts news={news} />
            </Box>
            <Box w={{base:"100%",lg:"30%"}}>

            </Box>
          </Flex>
        </Box>
      </Box>
    </div>
  );
}

export default News;
