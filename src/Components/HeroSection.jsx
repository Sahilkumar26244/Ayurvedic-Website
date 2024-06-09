import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Box } from "@chakra-ui/react";

import "../index.css";
import { FaPlus } from "react-icons/fa6";

function HeroSection() {
  // const [isDesktop] = useMediaQuery("(min-width: 768px)"); // Chakra UI useMediaQuery hook

  // const [currentImages, setCurrentImages] = useState([]);

  // useEffect(() => {
  //   // Set the appropriate image data based on the viewport width
  //   setCurrentImages(isDesktop ? imageDataDesktop : imageDataMobile);
  // }, [isDesktop]);

  const [card, setCard] = useState([]);

  const cards = [
    {
      image:
        "https://courses.parmarth.org/wp-content/uploads/2023/09/y-pn-yttc-certificate-1.jpg",
    },
    {
        image:
          "https://courses.parmarth.org/wp-content/uploads/2023/09/y-pn-yttc-certificate-1.jpg",
      },
      {
        image:
          "https://courses.parmarth.org/wp-content/uploads/2023/09/y-pn-yttc-certificate-1.jpg",
      },
      {
        image:
          "https://courses.parmarth.org/wp-content/uploads/2023/09/y-pn-yttc-certificate-1.jpg",
      },
  ];

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://dark-plum-monkey-tie.cyclic.app/heroSection/getAll"
      );
      const result = await res.json();

      console.log(result[0].image);
      setCard(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderSlides = cards.map((image) => (
    <div className="parent" key={image.alt}>
      <img  className="sliderImg" src={image.image} alt={image.alt} />
      <Box
        className="box text1"
        color="#d52121"
        fontSize={{ base: "16px", lg: "24px" }}
        fontWeight={{ base: "500", lg: "600" }}
        textTransform={"capitalize"}
      >
        {image.title}
      </Box>
      <Box
        className="box text2"
        color="#333333"
        fontSize={{ base: "26px", lg: "66px", xl: "70px" }}
        fontWeight={{ base: "500", lg: "500" }}
      >
        {image.heading}
      </Box>
      <Box
        className="box text3"
        w={"50%"}
        textAlign={"left"}
        display={"flex"}
        justifyContent={"left"}
        lineHeight={{ sm: "15px", lg: "34px" }}
        fontSize={{ base: "14px", lg: "20px" }}
        fontWeight={{ base: "500", lg: "400" }}
      >
        {image.description}
      </Box>
      {image.title == "" ? (
        <></>
      ) : (
        <>
          
        </>
      )}
    </div>
  ));

  const [currentIndex, setCurrentIndex] = useState();

  function handleChange(index) {
    setCurrentIndex(index);
  }

  return (
    
    <Box bg={"linear-gradient(180deg, rgba(255,248,165,1) 0%, rgba(253,146,30,1) 100%)"} h={{base:"200px",lg:"500px"}}>
    <Box pt={{base:"10px",lg:"10px"}} w={"90%"} m={"auto"}>
      {cards.length > 0 ? (
        <div  data-aos="fade-down">
        
        <Carousel
          showThumbs={false}
          showArrows={true}
          autoPlay={false}
          infiniteLoop={true}
          dynamicHeight={true}
          onChange={handleChange}
          className="carousel-container"
          renderIndicator={false}
          showStatus={false}
        >
          {renderSlides}
        </Carousel>
        </div>
      ) : (
        <Box
          mt={"250px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <div>Loading...</div>
        </Box>
      )}
    </Box>
    </Box>
    
  );
}

export default HeroSection;
