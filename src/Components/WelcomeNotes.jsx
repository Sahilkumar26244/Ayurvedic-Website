import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

function WelcomeNotes() {
  return (
    <div>
        <Box w={{base:"90%",lg:"1300px"}} m={"auto"} pt={"80px"}>
            <Flex direction={{base:"column",lg:"row"}} gap={"40px"} w={"85%"} m={"auto"}>
                <Box w={{base:"100%",lg:"50%"}}>
                    <Box>
                        <Text color={"rgb(253, 143, 143)"} fontSize={"13px"} fontWeight={600} letterSpacing={"2px"}>WELCOME HOME</Text>
                    </Box>
                    <Box w={"80%"}>
                        <Text lineHeight={{base:"34px",lg:"60px"}} color={"rgb(231, 40, 74)"} fontSize={{base:"28px",lg:"50px"}} fontWeight={700}>Parmarth School of Yoga</Text>
                    </Box>
                    <Box mt={"20px"}>
                        <Text color={"rgb(136, 10, 31)"} fontSize={"16px"} fontWeight={400}>Authentic. Traditional. Life-Transforming.</Text>
                    </Box>
                </Box>
                <Box w={{base:"100%",lg:"50%"}} display={"flex"} flexDirection={"column"} gap={"20px"} color={"rgb(136, 10, 31)"} fontWeight={400} fontSize={"16px"} lineHeight={"28px"} >
                    <Box>
                        <Text>Live in an ashram environment, learn from living masters, and become a certified Yoga teacher.</Text>
                    </Box>
                    <Box>
                        <Text>Yoga at Parmarth Niketan Ashram is holistic and spiritually oriented, as taught by the rishis and sages.</Text>
                    </Box>
                    <Box>
                        <Text>Discover the true meaning of Yoga and let it deeply transform you. Get to know the culture, Vedic mantras and healing meditation. Take part in traditional ceremonies and celebrations, and become empowered personally and spiritually.</Text>
                    </Box>
                </Box>
            </Flex>
        </Box>
    </div>
  )
}

export default WelcomeNotes