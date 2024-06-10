import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

function NewsPosts({news}) {
  return (
    <div>
        <Box display={"flex"} flexDirection={"column"} gap={"40px"}>
            {news.map((e,i) => (
                <>
                    <Box key={i} borderRadius={"5px"} boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px;"}>
                        <Box>
                            <Image borderRadius={"5px 5px 0px 0px"} src={e.image} w={"100%"} h={"100%"} objectFit={"contain"} />
                        </Box>
                        <Box p={"40px"} display={"flex"} flexDirection={"column"} gap={"20px"}>
                            <Text fontWeight={700} fontSize={{base:"14px",lg:"21px"}} lineHeight={"26px"} _hover={{color:"rgb(219, 66, 66)"}} transition={"0.3s all ease"} cursor={"pointer"}>{e.title}</Text>
                            <Text fontWeight={400} fontSize={{base:"12px",lg:"14px"}} lineHeight={"21px"} color={"rgb(119, 119, 119)"}>{e.desc}</Text>
                        </Box>
                        <Box borderTop={"2px solid #ededed"} p={"20px 40px"}>
                            <Text color={"rgb(173, 173, 173)"} fontWeight={400} fontSize={"12px"} lineHeight={"16px"}>{e.date}</Text>
                        </Box>
                    </Box>
                </>
            ))}
        </Box>
    </div>
  )
}

export default NewsPosts