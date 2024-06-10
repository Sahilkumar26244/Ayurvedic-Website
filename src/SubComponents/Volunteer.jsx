import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

function Volunteer() {
  return (
    <div>
      <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
        <Box>
          <Text
            textAlign={"center"}
            fontWeight={600}
            color={"rgb(84, 0, 0)"}
            fontSize={{base:"26px",lg:"30px"}}
            lineHeight={"30px"}
          >
            Volunteer
          </Text>
        </Box>
        <Box>
          <Text
            color={"rgb(105, 76, 92)"}
            fontWeight={400}
            fontSize={{base:"12px",lg:"16px"}}
            lineHeight={"28px"}
            textAlign={"center"}
          >
            Our large-scaled and detailed projects are realized through the
            collective effort of our global family, comprising of professionals,
            engineers, scientists, activists, spiritual leaders, environmental
            specialists and sevaks (volunteers).{" "}
          </Text>
        </Box>
        <Box>
          <Text color={"rgb(105, 76, 92)"}
          fontWeight={400}
          fontSize={{base:"12px",lg:"16px"}}
          lineHeight={"28px"}
          textAlign={"center"}>
            We look forward to welcoming passionate and dynamic volunteers, like
            you to our team. Please do not hesitate to contact us and feel free
            to share our initiatives with family and friends.
          </Text>
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <Button fontWeight={400} fontSize={"15px"} p={"20px 30px"} bg={"#a11f1f"} color={"white"} _hover={{bg:"#7d1f1f"}}>Volunteer</Button>
        </Box>
      </Box>
    </div>
  );
}

export default Volunteer;
