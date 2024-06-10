import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

function About() {
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
          >
            <Text
              position="absolute"
              color={"white"}
              fontWeight={700}
              fontSize={{ base: "20px", lg: "59px" }}
              lineHeight={"59px"}
            >
              About The Ashram
            </Text>
          </Box>
        </Box>
        <Box
          w={{ base: "90%", lg: "1200px" }}
          m={"auto"}
          pt={"50px"}
          pb={"150px"}
        >
          <Box>
            <Text
              textAlign={"center"}
              color={"rgb(84, 0, 0)"}
              fontWeight={600}
              fontSize={{ base: "20px", lg: "31px" }}
              lineHeight={"30px"}
            >
              Parmarth Niketan literally means “An Abode Dedicated to the
              Welfare of All.”
            </Text>
          </Box>
          <Flex
            mt={"40px"}
            gap={"40px"}
            direction={{ base: "column", lg: "row" }}
          >
            <Box
              w={{ base: "100%", lg: "70%" }}
              display={"flex"}
              flexDirection={"column"}
              gap={"20px"}
            >
              <Box>
                <Text
                  color={"rgb(105, 76, 92)"}
                  fontWeight={400}
                  fontSize={{ base: "12px", lg: "16px" }}
                  lineHeight={"28px"}
                >
                  Parmarth Niketan is a true spiritual haven, lying on the holy
                  banks of Mother Ganga in the lap of the lush Himalayas. It is
                  the largest ashram in Rishikesh, providing its thousands of
                  pilgrims who come from all corners of the Earth with a clean,
                  pure and sacred atmosphere as well as abundant, beautiful
                  gardens. With several hundred rooms, the facilities are a
                  perfect blend of modern amenities and traditional, spiritual
                  simplicity. Parmarth Niketan is located in Swargashram, on the
                  main road, just on the banks of the sacred Ganges River.
                </Text>
              </Box>
              <Box>
                <Text
                  color={"rgb(153, 51, 102)"}
                  fontWeight={700}
                  fontSize={{ base: "12px", lg: "16px" }}
                  lineHeight={"28px"}
                >
                  Rishikesh – known as the “City of the Divine”- is a spiritual
                  center to which sages, rishis, saints and pilgrims have
                  flocked for millennia. The roads of the city are lined with
                  bustling market places of ethnic arts and handicrafts, fresh
                  produce markets, holy shrines and orange-robed sadhus. Then,
                  the road narrows, the markets become more sparse and you come
                  upon a foot bridge, suspended high over the sacred Ganga
                  river. As you cross this bridge, the sun streaming through the
                  sacred Himalayas to warm your being, you will feel as if you
                  have truly come home.
                </Text>
              </Box>
            </Box>
            <Box w={{ base: "100%", lg: "30%" }}>
              <Image
                src="https://www.parmarth.org/wp-content/uploads/2022/02/269693855_10159879040467698_3164223558559155323_n.jpg"
                w={"100%"}
                h={"100%"}
                objectFit={"contain"}
              />
            </Box>
          </Flex>
          <Box
            mt={"30px"}
            color={"rgb(105, 76, 92)"}
            fontWeight={400}
            fontSize={{ base: "12px", lg: "16px" }}
            lineHeight={"28px"}
            display={"flex"}
            flexDirection={"column"}
            gap={"20px"}
          >
            <Box>
              <Text>
                It is no surprise that pilgrims are drawn here from all over the
                world. The awe-inspiring beauty of the ashram, the clear flowing
                Ganga, the majestic mountains, and the lush green forests will
                embrace and rejuvenate your entire being. Parmarth Niketan
                offers comfort, inspiration and upliftment for your body, mind
                and spirit as well as a deeper connection with the Divine. As
                you stay in the ashram, you will feel your soul bathing in the
                peace of sacred energies, including those that emanate from
                nature and those that linger from the timeless healing powers of
                saints, sages and holy ones. Parmarth Niketan contains within it
                the voice and the spirit of divine communion.
              </Text>
            </Box>
            <Box>
              <Text>
                The ashram is committed, as its name reflects, to the welfare of
                all. Through numerous charitable programmes in the fields of
                health care, residential education and wide-spread
                humanitarianism as well as through spiritual programmes to feed
                the heart and spirit.{" "}
              </Text>
            </Box>
            <Box>
              <Text>
                The ashram offers daily activities of yoga, meditation, satsang,
                universal prayers and its world-renowned Ganga Aarti at sunset.
                There are also Nature Cure and Ayurvedic Treatment facilities on
                the Ashram premises as well as a charitable clinic/dispensary.
              </Text>
            </Box>
            <Box>
              <Text>
                There are frequent special cultural, spiritual and environmental
                programmes given by revered spiritual leaders, acclaimed
                musicians, scientists, scholars and others as well as numerous
                charitable activities dedicated to the welfare of all, as is the
                meaning and motto of Parmarth Niketan.
              </Text>
            </Box>
            <Box>
              <Text>
                Additionally, there are frequent camps in which pilgrims come
                from across the world to partake in intensive courses on yoga,
                meditation, pranayama, stress management, acupressure, Reiki and
                other ancient Indian sciences.
              </Text>
            </Box>
          </Box>
          <Box
            mt={"50px"}
            display={"flex"}
            flexDirection={"column"}
            gap={"30px"}
          >
            <Box>
              <Text
                textAlign={"center"}
                color={"rgb(84, 0, 0)"}
                fontWeight={700}
                fontSize={{ base: "13px", lg: "24px" }}
                lineHeight={"24px"}
              >
                Parmarth Niketan is open to all, with no discrimination on the
                basis of race, gender, nationality, religion, caste or creed.
              </Text>
            </Box>
            <Box>
              <Image
                src="https://www.parmarth.org/wp-content/uploads/2021/11/about-banner.jpg"
                w={"100%"}
                h={"100%"}
                objectFit={"contain"}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default About;
