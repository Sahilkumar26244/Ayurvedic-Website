import { Box, Flex, Grid, Image, Text, position } from "@chakra-ui/react";
import React from "react";
import "../styles/teams.css"

function OurTeam() {
  const team = [
    {
      image:
        "https://courses.parmarth.org/wp-content/uploads/2023/09/abhaji.jpg",
      name: "Sadhvi Abha Saraswatiji",
      position: "Head of Yoga",
    },
    {
      image:
        "https://courses.parmarth.org/wp-content/uploads/2023/09/abhaji.jpg",
      name: "Sadhvi Abha Saraswatiji",
      position: "Head of Yoga",
    },
    {
      image:
        "https://courses.parmarth.org/wp-content/uploads/2023/09/abhaji.jpg",
      name: "Sadhvi Abha Saraswatiji",
      position: "Head of Yoga",
    },
    {
      image:
        "https://courses.parmarth.org/wp-content/uploads/2023/09/abhaji.jpg",
      name: "Sadhvi Abha Saraswatiji",
      position: "Head of Yoga",
    },
    {
      image:
        "https://courses.parmarth.org/wp-content/uploads/2023/09/abhaji.jpg",
      name: "Sadhvi Abha Saraswatiji",
      position: "Head of Yoga",
    },
    {
      image:
        "https://courses.parmarth.org/wp-content/uploads/2023/09/abhaji.jpg",
      name: "Sadhvi Abha Saraswatiji",
      position: "Head of Yoga",
    },
    {
      image:
        "https://courses.parmarth.org/wp-content/uploads/2023/09/abhaji.jpg",
      name: "Sadhvi Abha Saraswatiji",
      position: "Head of Yoga",
    },
    {
      image:
        "https://courses.parmarth.org/wp-content/uploads/2023/09/abhaji.jpg",
      name: "Sadhvi Abha Saraswatiji",
      position: "Head of Yoga",
    },
  ];
  return (
    <div>
      <Box
        backgroundImage={"linear-gradient(180deg, #ffefe2 0%, #ffffff 100%);"}
        p={{ base: "30px 0px 30px 0px", lg: "50px" }}
      >
        <Box
          w={{ base: "90%", lg: "1250px" }}
          m={"auto"}
          display={"flex"}
          flexDirection={"column"}
          gap={"40px"}
        >
          <Box>
            <Text
              textAlign={"center"}
              color={"#e7284a"}
              fontWeight={700}
              fontSize={{ base: "28px", lg: "50px" }}
            >
              Our Team
            </Text>
          </Box>
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
            ]}
            direction={{ base: "column", md: "row" }}
            gap={0}
            justifyContent={team.length % 3 == 2 ? "center" : "start"}
          >
            {team.map((e) => (
              <>
                <div class="container">
                  <div class="box">
                    <div class="imgBox">
                      <img
                        src="https://img.freepik.com/free-photo/portrait-handsome-young-man-makes-okay-gesture-demonstrates-agreement-likes-idea-smiles-happily-wears-optical-glasses-yellow-hat-t-shirt-models-indoor-its-fine-thank-you-hand-sign_273609-30676.jpg?size=626&ext=jpg"
                        alt=""
                      />
                    </div>
                    <div class="content">
                      <h2>
                        Karan Singh
                        <br/>
                        <span>Graphic Designer</span>
                      </h2>
                    </div>
                  </div>
                  
                </div>
              </>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default OurTeam;
