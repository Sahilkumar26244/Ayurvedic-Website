import { Box, List, ListIcon, ListItem } from "@chakra-ui/react";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

function YogaListItems() {
  return (
    <div>
      <List display={"flex"} flexDirection={"column"} gap={"10px"} color={"rgb(136, 10, 31)"} fontSize={"16px"} fontWeight={400}>
        <ListItem display={"flex"} alignItems={{base:"flex-start",lg:"center"}}>
          <ListIcon as={IoIosArrowForward} mt={{base:"5px",lg:"0px"}} />
          <Box>
          Accommodation in Beautiful Parmarth Niketan Ashram
          </Box>
        </ListItem>
        <ListItem display={"flex"} alignItems={{base:"flex-start",lg:"center"}}>
          <ListIcon as={IoIosArrowForward} mt={{base:"5px",lg:"0px"}} />
          Freshly Prepared Vegetarian Sattvic Meals
        </ListItem>
        <ListItem display={"flex"} alignItems={{base:"flex-start",lg:"center"}}>
          <ListIcon as={IoIosArrowForward} mt={{base:"5px",lg:"0px"}} />
          Daily Homa - Ancient Fire Ritual (participation optional)
        </ListItem>
        <ListItem display={"flex"} alignItems={{base:"flex-start",lg:"center"}}>
          <ListIcon as={IoIosArrowForward} mt={{base:"5px",lg:"0px"}} />
          Filtered Water
        </ListItem>
        <ListItem display={"flex"} alignItems={{base:"flex-start",lg:"center"}}>
          <ListIcon as={IoIosArrowForward} mt={{base:"5px",lg:"0px"}} />
          Learn to Chant Vedic Mantras
        </ListItem>
        <ListItem display={"flex"} alignItems={{base:"flex-start",lg:"center"}}>
          <ListIcon as={IoIosArrowForward} mt={{base:"5px",lg:"0px"}} />
          Daily Satsang adressing spiritual and lifestyle questions
        </ListItem>
        <ListItem display={"flex"} alignItems={{base:"flex-start",lg:"center"}}>
          <ListIcon as={IoIosArrowForward} mt={{base:"5px",lg:"0px"}} />
          Ganga Aarti lights celebration directly at Ganges every sunset
        </ListItem>
        <ListItem display={"flex"} alignItems={{base:"flex-start",lg:"center"}}>
          <ListIcon as={IoIosArrowForward} mt={{base:"5px",lg:"0px"}} />
          All Yoga props, mats and study materials
        </ListItem>
        <ListItem display={"flex"} alignItems={{base:"flex-start",lg:"center"}}>
          <ListIcon as={IoIosArrowForward} mt={{base:"5px",lg:"0px"}} />
          and much more
        </ListItem>
      </List>
    </div>
  );
}

export default YogaListItems;
