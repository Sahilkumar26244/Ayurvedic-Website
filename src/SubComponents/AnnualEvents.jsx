import { Box, List, ListIcon, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import { GoDot } from "react-icons/go";
import AnnualEventGallery from './AnnualEventGallery';

function AnnualEvents() {
  return (
    <div>
        <Box mt={"40px"} display={"flex"} flexDirection={"column"} gap={"20px"}>
            <Box>
                <Text color={"rgb(84, 0, 0)"} fontWeight={600} fontSize={"30px"} lineHeight={"30px"}>Annual Events</Text>
            </Box>
            <Box>
                <Text color={"rgb(105, 76, 92)"} fontWeight={400} fontSize={"16px"} lineHeight={"28px"}>There are several special events occurring on daily, weekly, monthly or annual bases.</Text>
            </Box>
            <Box>
                <Text color={"rgb(105, 76, 92)"} fontWeight={700} fontSize={"16px"} lineHeight={"28px"}><strong>From the 15th of Asadhsukla to the 5th of Shravana (in July), the ashram observes Guru Purnima and Nirvana Mahotsava of His Holiness, the late Shri Swami Shukdevanandji Maharaj</strong> with much gaiety and religious fervor. During these five days, uninterrupted Ramayana Patha is sung by several hundred devotees, accompanied by musical melodies. Guru Puja and a tribute ceremony take place on the final day, followed by a community lunch. Nirvana Mahotsava is also celebrated, with traditional festivities, for:</Text>
            </Box>
            <Box>
                <List color={"rgb(105, 76, 92)"} fontWeight={400} fontSize={"16px"} lineHeight={"28px"}>
                    <ListItem>
                        <ListIcon as={GoDot} />
                        His Holiness, the late Swami Dharmanandji Maharaj on February 25th
                    </ListItem>

                    <ListItem>
                        <ListIcon as={GoDot} />
                        His Holiness, the late Swami Sadanandji Maharaj on May 15th
                    </ListItem>

                    <ListItem>
                        <ListIcon as={GoDot} />
                        His Holiness, the late Swami Bhajananandaji Maharaj on the 13th of Kartika Shukla
                    </ListItem>
                </List>
            </Box>
            <Box>
                <Text color={"rgb(105, 76, 92)"} fontWeight={400} fontSize={"16px"} lineHeight={"28px"}><strong>Sadhana Week:</strong> This is organized every year from the 9th of Kartika Sukla to the full moon day of Kartika (in October). During this special session, yoga, pranayama and meditation are taught by several qualified experts, under the patronage of M.M. H.H. Swami Asanganand Saraswatiji and H.H. Swami Chidanand Saraswatiji (Muniji).</Text>
            </Box>
            <Box>
                <AnnualEventGallery/>
            </Box>
        </Box>
    </div>
  )
}

export default AnnualEvents