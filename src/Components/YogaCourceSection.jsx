import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import YogaSlider from '../SubComponents/YogaSlider'
import YogaListItems from '../SubComponents/YogaListItems'

function YogaCourceSection() {
  return (
    <div>
        <Box bg={""} pb={"80px"}>
            <Box w={{base:"90%",lg:"1250px"}} m={"auto"} display={"flex"} flexDirection={"column"} gap={"20px"}>
                <Box data-aos="fade-down">
                    <Text textAlign={"center"} color={"rgb(253, 143, 143)"} fontSize={"13px"} fontWeight={600} letterSpacing={"4px"}>INCLUDED IN YOUR COURSE</Text>
                </Box>
                <Box data-aos="fade-down">
                    <Text textAlign={"center"} lineHeight={{base:"34px",lg:"60px"}} color={"rgb(231, 40, 74)"} fontSize={{base:"28px",lg:"50px"}} fontWeight={700}>Yoga, Satsang, Daily Ritual and More</Text>
                </Box>
                <Box mt={"30px"} data-aos="fade-down">
                    <Text textAlign={"center"} color={"rgb(136, 10, 31)"} fontSize={"16px"} fontWeight={400}>During your stay at Parmarth Niketan you will have opportunity to <strong>learn mantra chanting, participate in ancient homa fire ritual</strong>, and be part of our <strong>mesmerizing Ganga Aarti</strong>, celebrating togetherness as a community. </Text>
                </Box>
                <Box mt={"30px"}>
                    <Flex direction={{base:"column",lg:"row"}} gap={"50px"}>
                        <Box w={{base:"100%",lg:"45%"}} data-aos="fade-up">
                            <YogaSlider/>
                        </Box>
                        <Box w={{base:"100%",lg:"45%"}} data-aos="fade-left">
                           <YogaListItems/> 
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </Box>
    </div>
  )
}

export default YogaCourceSection