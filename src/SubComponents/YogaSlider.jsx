import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import Carousel from "react-elastic-carousel";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function YogaSlider() {

  const cources = [{
    image:"https://res.cloudinary.com/dmzzzl5jj/image/upload/v1718166634/pexels-ortal-6070517_oeebkk.jpg"
  },
  {
    image:"https://res.cloudinary.com/dmzzzl5jj/image/upload/v1718166634/pexels-cliff-booth-4056722_xalw1x.jpg"
  },
  {
    image:"https://res.cloudinary.com/dmzzzl5jj/image/upload/v1718166635/pexels-olia-danilevich-9004298_xxclip.jpg"
  },
  {
    image:"https://res.cloudinary.com/dmzzzl5jj/image/upload/v1718166635/pexels-elly-fairytale-3822166_v5uysl.jpg"
  },
  {
    image:"https://res.cloudinary.com/dmzzzl5jj/image/upload/v1718166636/pexels-rui-dias-469842-1472887_cmqett.jpg"
  },
  {
    image:"https://res.cloudinary.com/dmzzzl5jj/image/upload/v1718166780/pexels-olia-danilevich-9004309_afllgq.jpg"
  }]

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 420, itemsToShow: 1 },
        { width: 768, itemsToShow: 1 },
        { width: 1200, itemsToShow: 1 },
      ];
    
      const carouselArrowStyles = {
        position: "absolute",
        top: "48%",
        width: "30px",
        height: "30px",
        fontSize: "33px",
        fontWeight: "700",
        zIndex: "1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    
        color: "white",
        cursor: "pointer",
        userSelect: "none",
        transition: "all 0.2s ease-in-out",
        _hover: {
          backgroundColor: "gray.200",
        },
        display: "flex",
        visibility: "visible",
      };


  return (
    <div>
        <Box borderWidth="0px"
        
        overflow="hidden"
        position="relative"
        bg="white"
        pt={"0px"}>
            <Carousel style={{bg:"black"}} pagination={true} verticalMode={false}
            breakPoints={breakPoints}
            renderArrow={({ type, onClick }) => (
              <div
                onClick={onClick}
                style={{
                  ...carouselArrowStyles,
                  left: type === "PREV" ? "10px" : "auto",
                  right: type === "NEXT" ? "10px" : "auto",
                }}
              >
                {type === "PREV" ? <IoIosArrowBack style={{fontSize:"40px"}} /> : <IoIosArrowForward/>}
              </div>
            )}>

              {cources.map((e,i) => (
                <>
                <Box w={"100%"} h={"400px"}>
                    <Image w={"100%"}
                    h={"100%"}
                    objectFit={"cover"} src={e.image} />
                </Box>
                </>
              ))}
                

                
            </Carousel>
        </Box>
    </div>
  )
}

export default YogaSlider