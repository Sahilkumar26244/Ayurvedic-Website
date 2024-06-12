import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import React from 'react'

function ReservationForm() {
  return (
    <div>
        <Box>
            <Text color={"rgb(84, 0, 0)"} fontWeight={700} fontSize={"36px"} lineHeight={"36px"}>Make A General Reservation</Text>
            <Box mt={"40px"}>
                <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
                    <Box>
                        <Text color={"rgb(105, 76, 92)"} fontWeight={700} fontSize={"16px"} lineHeight={"21px"}>Name*</Text>
                    </Box>
                    <Flex gap={"20px"} color={"rgb(105, 76, 92)"} fontWeight={400} fontSize={"13px"} lineHeight={"28px"}>
                        <Box w={"50%"}>
                            <Text>First</Text>
                            <Input borderRadius={"20px"} color={"#cba7a7"} bg={"white"} border={"1px solid #A76B7C"} p={"20px"} />
                        </Box>
                        <Box w={"50%"}>
                            <Text>Last</Text>
                            <Input borderRadius={"20px"} color={"#cba7a7"} bg={"white"} border={"1px solid #A76B7C"} p={"20px"} />
                        </Box>
                    </Flex>
                </Box>
                <Box mt={"30px"} display={"flex"} flexDirection={"column"} gap={"10px"}>
                    <Box>
                        <Text color={"rgb(105, 76, 92)"} fontWeight={700} fontSize={"16px"} lineHeight={"21px"}>Address*</Text>
                    </Box>
                    <Box>
                        <Text color={"rgb(105, 76, 92)"} fontWeight={400} fontSize={"13px"} lineHeight={"28px"}>Street Address</Text>
                        <Input borderRadius={"20px"} color={"#cba7a7"} bg={"white"} border={"1px solid #A76B7C"} p={"20px"}/>
                    </Box>
                    <Flex gap={"20px"} color={"rgb(105, 76, 92)"} fontWeight={400} fontSize={"13px"} lineHeight={"28px"}>
                        <Box w={"50%"}>
                            <Text>City</Text>
                            <Input borderRadius={"20px"} color={"#cba7a7"} bg={"white"} border={"1px solid #A76B7C"} p={"20px"} />
                        </Box>
                        <Box w={"50%"}>
                            <Text>State</Text>
                            <Input borderRadius={"20px"} color={"#cba7a7"} bg={"white"} border={"1px solid #A76B7C"} p={"20px"}/>
                        </Box>
                    </Flex>
                </Box>
                <Box mt={"30px"}>
                    <Button bg={"#f73c54"} color={"rgb(255, 255, 255)"} borderRadius={"30px"} p={{base:"15px 20px",lg:"30px 40px"}} fontWeight={500} fontSize={{base:"12px",lg:"17px"}} letterSpacing={"1px"} _hover={{bg:"#4d0415",color:"rgb(255, 255, 255)"}}>Submit</Button>
                </Box>
            </Box>
        </Box>
    </div>
  )
}

export default ReservationForm