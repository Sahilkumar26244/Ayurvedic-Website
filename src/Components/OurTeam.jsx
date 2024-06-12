import { Box, Grid, Text } from "@chakra-ui/react";
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
        "https://courses.parmarth.org/wp-content/uploads/2023/09/sadhviji-bagawati.jpg",
      name: "Sadhvi Bhagawati Saraswatiji",
      position: "",
    },
    {
      image:
        "https://courses.parmarth.org/wp-content/uploads/2023/09/Indu-Sharma-2.jpg",
      name: "Dr. Indu Sharma",
      position: "Resident Yoga Teacher",
    },
    {
      image:
        "https://courses.parmarth.org/wp-content/uploads/2023/09/ganganandini.jpg",
      name: "Ganga Nandini",
      position: "Resident Yoga Teacher",
    },
    {
      image:
        "https://courses.parmarth.org/wp-content/uploads/2023/09/78855723_10221374370367928_7688923403318722560_n.jpg",
      name: "Krishnapriya",
      position: "Resident Yoga Teacher",
    },
    {
      image:
        "https://courses.parmarth.org/wp-content/uploads/2023/09/gayatriyogacharya.jpeg",
      name: "Gayatri Yogacharya",
      position: "Resident Yoga Teacher",
    },
    {
      image:
        "https://courses.parmarth.org/wp-content/uploads/2023/09/tara.jpg",
      name: "Tara Maniar",
      position: "Visiting Teacher (Canada)",
    },
    {
      image:
        "https://courses.parmarth.org/wp-content/uploads/2024/04/darshana-thumb.jpg",
      name: "Darshana",
      position: "Resident Meditation Teacher",
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
            {team.map((e,i) => (
              <>
                <div class="container" key={i}>
                  <div class="box">
                    <div class="imgBox">
                      <img
                        src={e.image}
                        alt=""
                      />
                    </div>
                    <div class="content">
                      <h2>
                        {e.name}
                        <br/>
                        <span>{e.position}</span>
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
