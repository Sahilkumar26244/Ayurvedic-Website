import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

function WelcomeNotes() {
  return (
    <div>
        <Box bg={"white"}>
        <Box w={{base:"90%",lg:"1300px"}} m={"auto"} pt={"200px"} >
            <Flex direction={{base:"column",lg:"row"}} gap={"40px"} w={"85%"} m={"auto"}>
                
                <Box w={{base:"100%",lg:"50%"}} data-aos="fade-right">
                    <Box>
                        <Text color={"rgb(253, 143, 143)"} fontSize={"13px"} fontWeight={600} letterSpacing={"2px"}>WELCOME HOME</Text>
                    </Box>
                    <Box w={"80%"}>
                        <Text lineHeight={{base:"34px",lg:"60px"}} color={"rgb(231, 40, 74)"} fontSize={{base:"28px",lg:"50px"}} fontWeight={700}>Pinaki Kedar Manav Sewa Trust</Text>
                    </Box>
                    <Box mt={"20px"}>
                        <Text color={"rgb(136, 10, 31)"} fontSize={"16px"} fontWeight={400}>Authentic. Traditional. Life-Transforming.</Text>
                    </Box>
                </Box>
                
                
                <Box w={{base:"100%",lg:"50%"}} display={"flex"} flexDirection={"column"} gap={"20px"} color={"rgb(136, 10, 31)"} fontWeight={400} fontSize={"16px"} lineHeight={"28px"} data-aos="fade-down">
                    <Box>
                        <Text>Live in an ashram environment, learn from living masters, and become a certified Yoga teacher.</Text>
                    </Box>
                    <Box>
                        <Text>Yoga at Pinaki Kedar Manav Sewa Trust is holistic and steeped in spiritual teachings passed down by rishis and sages.</Text>
                    </Box>
                    <Box>
                        <Text>Explore the profound meaning of Yoga and experience its transformative power. Immerse yourself in the culture, Vedic mantras, and healing meditations. Engage in traditional ceremonies and celebrations, and find personal and spiritual empowerment.</Text>
                    </Box>
                </Box>
            </Flex>
        </Box>
        </Box>
    </div>
  )
}

export default WelcomeNotes