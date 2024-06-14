import { Box, Flex, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'

function YogaPage() {
  return (
    <div>
        <Box mt={"60px"} letterSpacing={"1px"} mb={"60px"}>
            <Box w={{ base: "90%", lg: "1100px" }}
            m={"auto"}>
                <Flex gap={"50px"} direction={{base:"column",lg:"row"}}>
                    <Box w={{base:"100%",lg:"70%"}} display={"flex"} flexDirection={"column"} gap={"20px"}>
                        <Box>
                            <Text color={"rgb(231, 40, 74)"} fontWeight={700} fontSize={"25px"} lineHeight={"24px"}>Yoga, originating from the Sanskrit word 'yuj,' signifies the act of connecting, joining, or balancing.</Text>
                        </Box>
                        <Box>
                            <Text color={"rgb(136, 10, 31)"} fontWeight={400} fontSize={"16px"} lineHeight={"28px"}>The essence of Yoga lies in its comprehensive applications and implications, serving as a powerful means to an end. This ultimate end, known as “Moksha,” represents freedom from all forms of bondage, insecurities, desires, and the sense of limitations. It is the liberation from everything that hinders our divine journey, leading to everlasting peace, happiness, and fulfillment. Achieving this requires a dedicated and prolonged practice of Yoga, which initiates a cleansing and purification of the mind, paving the way for Self-knowledge. Yoga embodies this connection and wisdom, dispelling impurities and the ignorance that alienates us from our true selves.</Text>
                        </Box>
                        <Box>
                            <Text color={"rgb(136, 10, 31)"} fontWeight={400} fontSize={"16px"} lineHeight={"28px"}>Yoga should not be mistaken for a mere form of physical exercise, as it operates on multiple levels beyond the physical.</Text>
                        </Box>
                    </Box>
                    <Box w={{base:"100%",lg:"30%"}}>
                        <Image src='https://res.cloudinary.com/dmzzzl5jj/image/upload/v1718168043/amauri-mejia-n5trbdfW7fM-unsplash_vykccw.jpg' />
                    </Box>
                </Flex>
                <Flex mt={"50px"} gap={"40px"} direction={{base:"column",lg:"row"}}>
                    <Box w={{base:"100%",lg:"30%"}}>
                        <Image w={"100%"} h={"100%"} objectFit={"contain"} src='https://res.cloudinary.com/dmzzzl5jj/image/upload/v1718168086/jose-vazquez-UUf5nxhEhAs-unsplash_o98ftz.jpg' />
                    </Box>
                    <Box w={"75%"}>
                        <Text color={"rgb(136, 10, 31)"} fontWeight={700} fontSize={"16px"} lineHeight={"28px"}>Yoga is a way of life, seamlessly integrated into every aspect of our daily existence. It addresses and helps overcome limitations related to physical health, body shape and size, time constraints, space, or the unavailability of a teacher. Yoga encompasses all areas of life, including various healing methods and meditations. It is like the sun, illuminating and enhancing everything it touches.</Text>
                    </Box>
                </Flex>
                <Flex mt={"50px"} gap={"40px"} direction={{base:"column",lg:"row"}}>
                    <Box w={{base:"100%",lg:"50%"}} display={"flex"} flexDirection={"column"} gap={"20px"}>
                        <Box>
                            <Text color={"rgb(231, 40, 74)"} fontWeight={700} fontSize={"24px"} lineHeight={"24px"}>Definition of Yoga</Text>
                        </Box>
                        <Box>
                            <Text color={"rgb(136, 10, 31)"} fontWeight={700} fontSize={"16px"} lineHeight={"28px"}>Yoga is often defined as the union between the limited self and the Divine Self. Its true aim is not to unite us with anything, as we are already inherently united. Instead, Yoga helps us realize our identity with the Divine Self, allowing us to recognize and align with our intrinsic nature.</Text>
                        </Box>
                        <Box>
                            <Text color={"rgb(136, 10, 31)"} fontWeight={400} fontSize={"16px"} lineHeight={"28px"}>There are numerous definitions of Yoga, encompassing all levels of existence and awareness. On the physical level, Yoga aims to harmonize the functions of different organs, muscles, and nerves, ensuring they work in unison rather than in conflict. Disharmony among various body parts and systems can lead to inefficiency, lethargy, clumsiness, and even manifest as diseases in the body.</Text>
                        </Box>
                    </Box>
                    <Box w={{base:"100%",lg:"50%"}}>
                        <Image w={"100%"} h={"100%"} objectFit={"contain"} src='https://res.cloudinary.com/dmzzzl5jj/image/upload/v1718337370/WhatsApp_Image_2024-06-13_at_18.47.24_e6f3e0c3_vmltpb.jpg' />
                    </Box>
                </Flex>
                <Box mt={"30px"}>
                    <Text color={"rgb(136, 10, 31)"} fontWeight={400} fontSize={"16px"} lineHeight={"28px"}>In this context we can define Yoga as physical harmony & health and mental balance & peace.</Text>
                </Box>
                <Box mt={"20px"}>
                    <Text color={"rgb(136, 10, 31)"} fontWeight={400} fontSize={"16px"} lineHeight={"28px"}>The Bhagwad Gita, a very widely known classical text on Yoga, gives various definitions of Yoga.</Text>
                </Box>
                <Box mt={"20px"}>
                    <UnorderedList fontWeight={400} fontSize={"16px"} color={"rgb(136, 10, 31)"} lineHeight={"28px"}>
                        <ListItem>Yoga is maintaining equanimity of mind in both success and failure.</ListItem>
                        <ListItem>Yoga is the exercise of discretion in action.</ListItem>
                        <ListItem>Yoga is the remover of misery and the destroyer of pain. It is the supreme secret of life.</ListItem>
                        <ListItem>Yoga embodies serenity.</ListItem>
                        <ListItem>Yoga bestows infinite happiness. According to Patañjali, the author of the classical Yoga text, The Yoga Sutras, Yoga is defined as "complete control over the fluctuations of the mind."</ListItem>
                    </UnorderedList>
                </Box>
                <Flex mt={"30px"} gap={"40px"} direction={{base:"column",lg:"row"}}>
                    <Box w={{base:"100%",lg:"35%"}}>
                        <Image w={"100%"} h={"100%"} objectFit={"contain"} src='https://www.parmarth.org/wp-content/uploads/2022/02/yoga-thumb.jpg' />
                    </Box>
                    <Box w={{base:"100%",lg:"70%"}}>
                        <Box>
                            <Text fontWeight={700} fontSize={"24px"} lineHeight={"24px"} color={"rgb(231, 40, 74)"}>The Structure of Yoga:</Text>
                        </Box>
                        <Box mt={"10px"}>
                            <Text color={"rgb(136, 10, 31)"} fontWeight={400} fontSize={"16px"} lineHeight={"28px"}>For practical purposes, the various branches of Yoga can be classified into five fundamental groups:</Text>
                        </Box>
                        <Box mt={"20px"}>
                            <UnorderedList fontSize={{base:"16px",lg:"16px"}} color={"rgb(136, 10, 31)"} lineHeight={"28px"}>
                                <ListItem>
                                    <Text><strong>Jnana Yoga:</strong>is the path of inquiry and knowledge.</Text>
                                    
                                </ListItem>
                                <ListItem>
                                    <Text><strong>Karma Yoga:</strong>is the path committed to selfless service and fulfilling one's Dharma.</Text>
                                    
                                </ListItem>
                                <ListItem>
                                    <Text><strong>Bhakti Yoga:</strong>is the path devoted to love and devotion to God.</Text>
                                    
                                </ListItem>
                                <ListItem>
                                    <Text><strong>Raja Yoga:</strong>is the path committed to introspection and contemplation.</Text>
                                    
                                </ListItem>
                                <ListItem>
                                    <Text><strong>Hatha Yoga:</strong>is the path devoted to disciplining the body and achieving balance among the mental, physical, and subtle energies through the practice of asana and pranayama.</Text>
                                    
                                </ListItem>
                            </UnorderedList>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </Box>
    </div>
  )
}

export default YogaPage