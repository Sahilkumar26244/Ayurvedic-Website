import { Box, Flex, Grid, Image, Text, position } from "@chakra-ui/react";
import React from "react";

function OurTeam() {
  const team = [
    {
      image: "https://courses.parmarth.org/wp-content/uploads/2023/09/abhaji.jpg",
      name: "Sadhvi Abha Saraswatiji",
      position: "Head of Yoga",
    },
    {
        image: "https://courses.parmarth.org/wp-content/uploads/2023/09/abhaji.jpg",
        name: "Sadhvi Abha Saraswatiji",
        position: "Head of Yoga",
      },
      {
        image: "https://courses.parmarth.org/wp-content/uploads/2023/09/abhaji.jpg",
        name: "Sadhvi Abha Saraswatiji",
        position: "Head of Yoga",
      },
      {
        image: "https://courses.parmarth.org/wp-content/uploads/2023/09/abhaji.jpg",
        name: "Sadhvi Abha Saraswatiji",
        position: "Head of Yoga",
      },
      {
        image: "https://courses.parmarth.org/wp-content/uploads/2023/09/abhaji.jpg",
        name: "Sadhvi Abha Saraswatiji",
        position: "Head of Yoga",
      },
      {
        image: "https://courses.parmarth.org/wp-content/uploads/2023/09/abhaji.jpg",
        name: "Sadhvi Abha Saraswatiji",
        position: "Head of Yoga",
      },
      {
        image: "https://courses.parmarth.org/wp-content/uploads/2023/09/abhaji.jpg",
        name: "Sadhvi Abha Saraswatiji",
        position: "Head of Yoga",
      },
      {
        image: "https://courses.parmarth.org/wp-content/uploads/2023/09/abhaji.jpg",
        name: "Sadhvi Abha Saraswatiji",
        position: "Head of Yoga",
      },
  ];
  return (
    <div>
      <Box backgroundImage={"linear-gradient(180deg, #ffefe2 0%, #ffffff 100%);"} p={{base:"30px 0px 30px 0px",lg:"50px"}}>
        <Box w={{ base: "90%", lg: "1250px" }} m={"auto"} display={"flex"} flexDirection={"column"} gap={"40px"}>
            <Box>
                <Text textAlign={"center"} color={"#e7284a"} fontWeight={700} fontSize={{base:"28px",lg:"50px"}}>Our Team</Text>
            </Box>
          <Grid templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
          direction={{ base: "column", md: "row" }} gap={10} justifyContent={team.length % 3 == 2 ? "center" : "start"}>
          {team.map((e) => (
            <>
                <Box w={{base:"100%",lg:"97%"}} bg={"white"}>
                    <Box>
                        <Image w={"100%"} h={"100%"} objectFit={"cover"} src={e.image} />
                    </Box>
                    <Box p={"50px 30px"}>
                        <Text textAlign={"center"} color={"#e7284a"} fontWeight={600} fontSize={{base:"22px",lg:"30px"}} lineHeight={"38px"}>{e.name}</Text>
                        <Text textAlign={"center"} fontWeight={400} fontSize={"16px"} lineHeight={"28px"} color={"#fdc566"}>{e.position}</Text>
                    </Box>
                </Box>
            </>
          ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default OurTeam;
