import { Box, Text } from '@chakra-ui/react'
import React from 'react';
import background from "../assets/contactBack.png"
import ContactForm from '../SubComponents/ContactForm';

function ContactSection() {
  return (
    <div>
        <Box backgroundImage={`url(${background})`} 
        h="800px" 
        w="100%"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat" position="relative" >
            <Box position="absolute"  // Position the text absolutely within the parent box
            top="50%"  // Center the text vertically
            left="50%"  // Center the text horizontally
            transform="translate(-50%, -50%)" w={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Box w={"100%"} display={"flex"} flexDirection={"column"} gap={"7px"}>
                    <Text data-aos="fade-down" letterSpacing={"3px"} textAlign={"center"} fontWeight={600} fontSize={"13px"} color={"rgb(253, 146, 30)"}>WELCOME HOME</Text>
                    <Text data-aos="fade-down" letterSpacing={"3px"} textAlign={"center"} fontWeight={700} fontSize={{base:"20px",lg:"50px"}} color={"white"}>Stay Connected</Text>
                    <Text data-aos="fade-down" letterSpacing={"1px"} textAlign={"center"} fontWeight={400} fontSize={{base:"10px",lg:"16px"}} color={"rgb(207, 183, 179)"}>Stay connected with the Parmarth School of Yoga by submitting your information below:</Text>
                    <Box w={{ base: "90%", lg: "1250px" }} m={"auto"} pt={"30px"}>
                        <ContactForm/>
                    </Box>
                </Box>
            </Box>
        </Box>
    </div>
  )
}

export default ContactSection