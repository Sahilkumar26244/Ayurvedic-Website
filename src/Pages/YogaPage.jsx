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
                            <Text color={"rgb(231, 40, 74)"} fontWeight={700} fontSize={"25px"} lineHeight={"24px"}>Yoga is a Sanskrit word derived from the Sanskrit root “yuj” which means to connect, join or balance.</Text>
                        </Box>
                        <Box>
                            <Text color={"rgb(136, 10, 31)"} fontWeight={400} fontSize={"16px"} lineHeight={"28px"}>The most important thing, however, is that Yoga – with its entire applications and implications – is a powerful means to an end. The ultimate end of all human pursuits is “Moksha.” Moksha is freedom from all bondage; freedom from insecurities; freedom from the clutches of desires; freedom from the sense of limitations and inadequacy; freedom from all that thwarts us on our divine journey in life. In other words, the end of all human pursuits is everlasting peace, happiness and a sense of fulfillment. This is possible with steady and prolonged sincere practice of Yoga. It activates a process of cleansing and purification of mind, which in turn, prepares us for the dawning of Self-knowledge. Yoga means this connection; this knowledge that removes the impurities and the veil of ignorance that keeps us strangers to ourselves.</Text>
                        </Box>
                        <Box>
                            <Text color={"rgb(136, 10, 31)"} fontWeight={400} fontSize={"16px"} lineHeight={"28px"}>Yoga should never be mistaken for any other mode of exercise, which is operational only on a physical level.</Text>
                        </Box>
                    </Box>
                    <Box w={{base:"100%",lg:"30%"}}>
                        <Image src='https://www.parmarth.org/wp-content/uploads/2022/02/WhatsApp-Image-2022-01-05-at-8.24.00-AM-e1645208314843.jpeg' />
                    </Box>
                </Flex>
                <Flex mt={"50px"} gap={"40px"} direction={{base:"column",lg:"row"}}>
                    <Box w={{base:"100%",lg:"30%"}}>
                        <Image w={"100%"} h={"100%"} objectFit={"contain"} src='https://www.parmarth.org/wp-content/uploads/2022/02/WhatsApp-Image-2022-01-05-at-8.25.12-AM-1024x682.jpeg' />
                    </Box>
                    <Box w={"75%"}>
                        <Text color={"rgb(136, 10, 31)"} fontWeight={700} fontSize={"16px"} lineHeight={"28px"}>Yoga is a way of life; it is not removed from it. We do not need to feel disappointed or frustrated considering our limitations with regard to physical health; shape and size of the body; lack of time; lack of space or unavailability of a teacher. Yoga, in fact, is the means to overcome all these problems. Yoga includes every aspect of life. Yoga touches everything in life. All healing methods and meditations are part and parcel of Yoga. Yoga is like the sun itself, which brightens everything that comes into contact with it.</Text>
                    </Box>
                </Flex>
                <Flex mt={"50px"} gap={"40px"} direction={{base:"column",lg:"row"}}>
                    <Box w={{base:"100%",lg:"50%"}} display={"flex"} flexDirection={"column"} gap={"20px"}>
                        <Box>
                            <Text color={"rgb(231, 40, 74)"} fontWeight={700} fontSize={"24px"} lineHeight={"24px"}>Definition of Yoga</Text>
                        </Box>
                        <Box>
                            <Text color={"rgb(136, 10, 31)"} fontWeight={700} fontSize={"16px"} lineHeight={"28px"}>Yoga is usually defined as union: union between the limited self and the Divine Self. The aim of Yoga is not really to unite us with anything for we are already united. It is to help us realize our identity with the Divine Self, to make us know and tune into our intrinsic nature.</Text>
                        </Box>
                        <Box>
                            <Text color={"rgb(136, 10, 31)"} fontWeight={400} fontSize={"16px"} lineHeight={"28px"}>There are many definitions of Yoga, which apply to all levels of existence and awareness. At the physical level, we need to harmonize the functions of different organs, muscles and nerves so that they do not hamper or oppose each other. Disharmony in various body parts and systems brings about inefficiency and lethargy or clumsiness. Moreover, it manifests in diseases in the body.</Text>
                        </Box>
                    </Box>
                    <Box w={{base:"100%",lg:"50%"}}>
                        <Image w={"100%"} h={"100%"} objectFit={"contain"} src='https://www.parmarth.org/wp-content/uploads/2022/02/WhatsApp-Image-2022-01-05-at-8.24.28-AM.jpeg' />
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
                        <ListItem>Yoga is equanimity of mind in success and failure.</ListItem>
                        <ListItem>Yoga is discretion in work.</ListItem>
                        <ListItem>Yoga is the remover of misery and destroyer of pain.Yoga is the supreme secret of life.</ListItem>
                        <ListItem>Yoga is serenity.</ListItem>
                        <ListItem>Yoga is the giver of infinite happiness. Patañjali, the author of the classical Yoga text, The Yoga Sutras, defines Yoga as, “complete control over patterns or modifications of the mind.”</ListItem>
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
                            <Text color={"rgb(136, 10, 31)"} fontWeight={400} fontSize={"16px"} lineHeight={"28px"}>The various branches of Yoga could be, for practical purposes, classified into five basic groups:</Text>
                        </Box>
                        <Box mt={"20px"}>
                            <UnorderedList fontSize={{base:"16px",lg:"16px"}} color={"rgb(136, 10, 31)"} lineHeight={"28px"}>
                                <ListItem>
                                    <Text><strong>Jnana Yoga:</strong>the Yoga committed to inquiry.</Text>
                                    
                                </ListItem>
                                <ListItem>
                                    <Text><strong>Karma Yoga:</strong>the Yoga committed to selfless service and Dharma.</Text>
                                    
                                </ListItem>
                                <ListItem>
                                    <Text><strong>Bhakti Yoga:</strong>the Yoga devoted to love and devotion to God.</Text>
                                    
                                </ListItem>
                                <ListItem>
                                    <Text><strong>Raja Yoga:</strong>the Yoga committed to introspection and contemplation.</Text>
                                    
                                </ListItem>
                                <ListItem>
                                    <Text><strong>Hatha Yoga:</strong>the Yoga devoted to the discipline of the body and the balance of the mental, physical and subtle forces of the body through the practice of asana and pranayama</Text>
                                    
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