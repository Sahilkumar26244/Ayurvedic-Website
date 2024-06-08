import { Box, Button, Flex, Input, Text, Textarea } from '@chakra-ui/react'
import React from 'react'

function ContactForm() {
  return (
    <div>
        <Box w={"100%"} display={"flex"} flexDirection={"column"} gap={"20px"}>
            <Box>
                <Box>
                    <Text fontWeight={700} fontSize={"16px"} color={"rgb(207, 183, 179)"} letterSpacing={"1px"}>Name</Text>
                </Box>
                <Flex mt={"10px"} justifyContent={"space-between"} gap={"40px"} fontWeight={400} fontSize={"13px"} color={"rgb(207, 183, 179)"}>
                    <Box w={"50%"}>
                        <Input borderRadius={"20px"} color={"#cba7a7"} bg={"#8c4e5d"} border={"1px solid #A76B7C"} />
                        <Text>First Name *</Text>
                    </Box>
                    <Box w={"50%"}>
                        <Input borderRadius={"20px"} color={"#cba7a7"} bg={"#8c4e5d"} border={"1px solid #A76B7C"}/>
                        <Text>Last Name *</Text>
                    </Box>
                </Flex>
            </Box>
            <Box>
                <Box>
                    <Text fontWeight={700} fontSize={"16px"} color={"rgb(207, 183, 179)"} letterSpacing={"1px"}>Credentials</Text>
                </Box>
                <Flex mt={"10px"} justifyContent={"space-between"} gap={"40px"} fontWeight={400} fontSize={"13px"} color={"rgb(207, 183, 179)"}>
                    <Box w={"50%"}>
                        <Input borderRadius={"20px"} color={"#cba7a7"} bg={"#8c4e5d"} border={"1px solid #A76B7C"} />
                        <Text>Email *</Text>
                    </Box>
                    <Box w={"50%"}>
                        <Input borderRadius={"20px"} color={"#cba7a7"} bg={"#8c4e5d"} border={"1px solid #A76B7C"}/>
                        <Text>Phone *</Text>
                    </Box>
                </Flex>
            </Box>
            <Box>
                <Box>
                    <Text fontWeight={700} fontSize={"16px"} color={"rgb(207, 183, 179)"} letterSpacing={"1px"}>Message</Text>
                </Box>
                <Box mt={"10px"}>
                    <Textarea borderRadius={"20px"} color={"#cba7a7"} bg={"#8c4e5d"} border={"1px solid #A76B7C"}/>
                </Box>
                <Text fontWeight={400} fontSize={"13px"} color={"rgb(207, 183, 179)"}>Message *</Text>
            </Box>
            <Box>
                <Button bg={"#f73c54"} color={"rgb(255, 255, 255)"} borderRadius={"30px"} p={"30px 40px"} fontWeight={500} fontSize={"17px"} letterSpacing={"1px"} _hover={{bg:"#4d0415",color:"rgb(255, 255, 255)"}}>Submit</Button>
            </Box>
        </Box>
    </div>
  )
}

export default ContactForm