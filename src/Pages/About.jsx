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
            data-aos="fade-down"
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
          <Box data-aos="fade-down">
            <Text
              textAlign={"center"}
              color={"rgb(84, 0, 0)"}
              fontWeight={600}
              fontSize={{ base: "20px", lg: "31px" }}
              lineHeight={"30px"}
            >
              Pinaki Kedar Manav Sewa Trust translates to "An Abode Dedicated to
              the Welfare of All."
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
              <Box data-aos="fade-right">
                <Text
                  color={"rgb(105, 76, 92)"}
                  fontWeight={400}
                  fontSize={{ base: "12px", lg: "16px" }}
                  lineHeight={"28px"}
                >
                  Pinaki Kedar Manav Sewa Trust is a serene spiritual retreat
                  nestled on the sacred banks of Mother Ganga amidst the lush
                  Himalayas. As the largest ashram in Rishikesh, it offers
                  pilgrims from across the globe a pristine and sacred
                  atmosphere, complemented by expansive and picturesque gardens.
                  Featuring several hundred rooms, the facilities seamlessly
                  blend modern comforts with traditional spiritual simplicity.
                  Situated in Swargashram, it resides on the main road, directly
                  overlooking the holy Ganges River.
                </Text>
              </Box>
              <Box data-aos="fade-right">
                <Text
                  color={"rgb(153, 51, 102)"}
                  fontWeight={700}
                  fontSize={{ base: "12px", lg: "16px" }}
                  lineHeight={"28px"}
                >
                  Rishikesh, known as the "City of the Divine," has been a
                  spiritual hub attracting sages, rishis, saints, and pilgrims
                  for millennia. Its streets are lined with bustling
                  marketplaces offering ethnic arts, handicrafts, and fresh
                  produce, alongside holy shrines and orange-robed sadhus.
                  Further along, the road narrows until you reach a footbridge
                  suspended high over the sacred Ganga river. Crossing this
                  bridge, with the sun casting its rays through the Himalayas,
                  you'll feel a sense of coming home.
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
            <Box data-aos="fade-down">
              <Text>
                It's no wonder that pilgrims flock here from around the globe.
                The awe-inspiring beauty of the ashram, the clear flowing Ganga,
                the majestic mountains, and the lush green forests envelop and
                rejuvenate your entire being. Pinaki Kedar Manav Sewa Trust
                offers comfort, inspiration, and spiritual upliftment for your
                body, mind, and spirit, fostering a deeper connection with the
                Divine. During your stay at the ashram, you'll feel your soul
                immersed in the peace of sacred energies—those emanating from
                nature and those echoing the timeless healing powers of saints,
                sages, and holy beings. Pinaki Kedar Manav Sewa Trust embodies
                the essence and spirit of divine communion.
              </Text>
            </Box>
            <Box data-aos="fade-down">
              <Text>
              The ashram, true to its name, is dedicated to the welfare of all. It fulfills this commitment through various charitable programs in healthcare, residential education, and widespread humanitarian efforts, as well as through spiritual programs that nourish the heart and spirit.
              </Text>
            </Box>
            <Box data-aos="fade-down">
              <Text>
              The ashram provides daily activities such as yoga, meditation, satsang, universal prayers, and its renowned Ganga Aarti at sunset. Additionally, it offers Nature Cure and Ayurvedic treatment facilities on-site, along with a charitable clinic/dispensary.
              </Text>
            </Box>
            <Box data-aos="fade-down">
              <Text>
              The ashram hosts frequent special cultural, spiritual, and environmental programs led by revered spiritual leaders, acclaimed musicians, scientists, scholars, and others. Additionally, it organizes numerous charitable activities dedicated to the welfare of all, in alignment with the meaning and motto of Pinaki Kedar Manav Sewa Trust.
              </Text>
            </Box>
            <Box data-aos="fade-down">
              <Text>
              Furthermore, the ashram organizes frequent camps where pilgrims from around the world participate in intensive courses on yoga, meditation, pranayama, stress management, acupressure, Reiki, and other ancient Indian sciences.
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
                Pinaki Kedar Manav Sewa Trust is open to all, with no
                discrimination on the basis of race, gender, nationality,
                religion, caste or creed.
              </Text>
            </Box>
            <Box data-aos="fade-up">
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
