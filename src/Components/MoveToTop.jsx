import React, { useEffect, useState } from 'react';
import { Box, Button, Circle, Square } from '@chakra-ui/react';
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

function MoveToTop() {

    const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
    {isVisible && (
        <div>
        <Box
          onClick={scrollToTop}
          position='fixed'
          bottom='120px'
          right={['56px', '32px']}
          zIndex={3}>
          
          <Square cursor={"pointer"} bg={"#fdc566"} _hover={{bg:"#74a84a"}} color={"white"} p={"10px"} transition={"0.2s"}>
            <MdKeyboardDoubleArrowUp style={{fontSize:"25px",fontWeight:"bold"}}/>
          </Square>
        </Box>
        </div>
      )}
    </>
  )
}

export default MoveToTop