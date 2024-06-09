import {
    Box,
    Button,
    Circle,
    Collapse,
    Flex,
    Icon,
    IconButton,
    Image,
    Stack,
    Text,
    useColorModeValue,
    useDisclosure,
  } from "@chakra-ui/react";
  import React from "react";
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from "@chakra-ui/icons";
  import { FaFacebookF } from "react-icons/fa";
  import { FaInstagram } from "react-icons/fa";
  import { FaTwitter } from "react-icons/fa";
  import { FaYoutube } from "react-icons/fa6";

  
  
  import { Link } from "react-router-dom";
  import logo from "../assets/logo2.png"
  
  //#f76113
  
  function Navbar({ scrollToSection, HomeSec, ServicesSec, ContactSec }) {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box>
        <Flex
          bg={"#fff8a5 !important"}
          color={"white"}
          minH={"35px"}
          px={{ base: 5, md: 10, lg: "70px" }}
          py={{ base: "10px", md: "24px", lg: "15px" }}
          borderBottom={1}
          align={"center"}
          position={{base:"fixed",lg:"unset"}} // Add sticky positioning
          top={"0"} // Stick to the top of the viewport
          zIndex="1000"
          as="nav"
          w={"100%"}
          boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
        >
          <Flex
            w={{ sm: "1300px" }}
            m={"auto"}
            py={{ base: 2, lg: 0 }}
            justify={{ base: "center", md: "start" }}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
  
          <Box w={{base:"20%",lg:"10%"}} >
            <Link to='/'>
              <Image w={"100%"} h={"100%"} src={logo} objectFit={"contain"} />
            </Link>
          </Box>
  
  
            <Flex
              
              w={"65%"}
              justifyContent={"flex-start"}
              display={{ base: "none", md: "none", lg: "flex", xl: "flex" }}
            >
              <Box display={"flex"} alignItems={"center"}>
                <DesktopNav
                  scrollToSection={scrollToSection}
                  HomeSec={HomeSec}
                  ServicesSec={ServicesSec}
                  ContactSec={ContactSec}
                />
              </Box>
            </Flex>

            <Flex w={"20%"} justifyContent={"space-between"} color={"#e7284a"} display={{ base: "none", md: "none", lg: "flex", xl: "flex" }}>
                <Box>
                    <Circle p={"15px"} bg={"#fdc566"} >
                        <FaFacebookF style={{fontSize:"20px"}}/>
                    </Circle>
                </Box>
                <Box>
                    <Circle p={"15px"} bg={"#fdc566"}>
                        <FaInstagram style={{fontSize:"20px"}}/>
                    </Circle>
                </Box>
                <Box>
                    <Circle p={"15px"} bg={"#fdc566"}>
                        <FaTwitter style={{fontSize:"20px"}}/>
                    </Circle>
                </Box>
                <Box>
                    <Circle p={"15px"} bg={"#fdc566"}>
                        <FaYoutube style={{fontSize:"20px"}}/>
                    </Circle>
                </Box>
            </Flex>
  
            {/* yha pe lgana */}
  
            {/* yha pe lgana */}
          </Flex>
          <Flex
            alignItems={"center"}
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "flex", lg: "none", xl: "none" }}
          >
            <IconButton
              color={"black"}
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={{ base: 4, lg: 6 }} h={{ base: 5, lg: 6 }} />
                ) : (
                  <HamburgerIcon
                    w={{ base: 5, lg: 10 }}
                    h={{ base: 5, lg: 10 }}
                  />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav
            y={"10px"}
            opacity={""}
            scrollToSection={scrollToSection}
            HomeSec={HomeSec}
            ServicesSec={ServicesSec}
            ContactSec={ContactSec}
          />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = ({ scrollToSection, HomeSec, ServicesSec, ContactSec }) => {
    return (
      <Flex
        gap={"5px"}
        fontWeight={600}
        color={"#fd921e"}
        letterSpacing={"1px"}
        justifyContent={"space-between"}
        alignItems={"center"}
        fontSize={{ base: "", lg: "15px" }}
      >
        <Box
          _hover={{
            cursor: "pointer",
            transition: "0.5s",
            color: "#e7284a",
          }}
          p={"10px 20px 10px 20px"}
          borderRadius={"10px"}
        >
          <div class="hvr-wobble-horizontal">
            <Text cursor={"pointer"} >
              <Link to="/about">About</Link>
            </Text>
          </div>
        </Box>
        <Box
          _hover={{
            cursor: "pointer",
            transition: "0.5s",
            color: "#e7284a",
          }}
          p={"10px 20px 10px 20px"}
          borderRadius={"10px"}
        >
          <div class="hvr-wobble-horizontal">
            <Text cursor={"pointer"}>
              <Link to='/yoga'>
              Yoga
              </Link>
            </Text>
          </div>
        </Box>
        <Box
          _hover={{
            cursor: "pointer",
            transition: "0.5s",
            color: "#e7284a",
          }}
          p={"10px 20px 10px 20px"}
          borderRadius={"10px"}
        >
          <div class="hvr-wobble-horizontal">
            <Text cursor={"pointer"}>
              <Link to='/lifeAsPrayer'>
              Life As Prayer
              </Link>
            </Text>
          </div>
        </Box>
        <Box
          _hover={{
            cursor: "pointer",
            transition: "0.5s",
            color: "#e7284a",
          }}
          p={"10px 20px 10px 20px"}
          borderRadius={"10px"}
        >
          <div class="hvr-wobble-horizontal">
            <Text cursor={"pointer"} >
              <Link to='/news'>
              News
              </Link>
            </Text>
          </div>
        </Box>

        <Box
          _hover={{
            cursor: "pointer",
            transition: "0.5s",
            color: "#e7284a",
          }}
          p={"10px 20px 10px 20px"}
          borderRadius={"10px"}
        >
          <div class="hvr-wobble-horizontal">
            <Text cursor={"pointer"} >
              <Link to='/reservations'>
              Reservations
              </Link>
            </Text>
          </div>
        </Box>

        <Box
          _hover={{
            cursor: "pointer",
            transition: "0.5s",
            color: "#e7284a",
          }}
          p={"10px 20px 10px 20px"}
          borderRadius={"10px"}
        >
          <div class="hvr-wobble-horizontal">
            <Text cursor={"pointer"}>
              <Link to='/howYouCanHelp'>
              How You Can Help
              </Link>
            </Text>
          </div>
        </Box>
        
      </Flex>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Box
        as="a"
        href={href}
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        _hover={{ bg: useColorModeValue("#8bc53f", "gray.900") }}
      >
        <Stack
          direction={"row"}
          align={"center"}
          _hover={{
            textDecoration: "none",
            color: "white",
          }}
        >
          <Box>
            <Text transition={"all .3s ease"} fontWeight={500}>
              {label}
            </Text>
  
            <Text fontSize={"sm"}>{subLabel}</Text>
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"white"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Box>
    );
  };
  
  const MobileNav = ({
    y,
    opacity,
    scrollToSection,
    HomeSec,
    ServicesSec,
    ContactSec,
  }) => {
    return (
      <Stack
        boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
        bg={"#fff8a5"}
        p={4}
        display={{ md: "flex", xl: "none" }}
        mt={{ base: "80px", md: "70px", lg: "76px" }}
        position="fixed" // Add sticky positioning
        top={y} // Stick to the top of the viewport
        zIndex="1000"
        as="nav"
        w={"100%"}
        opacity={opacity}
      >
        <Stack spacing={0}>
          <Box
            pl={{ lg: 10 }}
            py={2}
            as="a"
            justifyContent="space-between"
            alignItems="center"
            _hover={{
              textDecoration: "none",
            }}
          >
            <Flex gap={"10px"} alignItems={"center"}>
              <Text
                fontSize={{ lg: "30px" }}
                fontWeight={600}
                color={useColorModeValue("gray.600", "gray.200")}
                onClick={() => scrollToSection(HomeSec)}
              >
                {"Home"}
              </Text>
            </Flex>
          </Box>
        </Stack>
  
        <Stack spacing={0}>
          <Box
            pl={{ lg: 10 }}
            py={2}
            as="a"
            justifyContent="space-between"
            alignItems="center"
            _hover={{
              textDecoration: "none",
            }}
          >
            <Flex gap={"10px"} alignItems={"center"}>
              <Text
                fontSize={{ lg: "30px" }}
                fontWeight={600}
                color={useColorModeValue("gray.600", "gray.200")}
                onClick={() => scrollToSection(ServicesSec)}
              >
                {"Services"}
              </Text>
            </Flex>
          </Box>
        </Stack>
  
        <Stack spacing={0}>
          <Box
            pl={{ lg: 10 }}
            py={2}
            as="a"
            justifyContent="space-between"
            alignItems="center"
            _hover={{
              textDecoration: "none",
            }}
          >
            <Flex gap={"10px"} alignItems={"center"}>
              <Text
                fontSize={{ lg: "30px" }}
                fontWeight={600}
                color={useColorModeValue("gray.600", "gray.200")}
                onClick={() => scrollToSection(ContactSec)}
              >
                {"Contact"}
              </Text>
            </Flex>
          </Box>
        </Stack>
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={0} onClick={children && onToggle}>
        <Box
          pl={{ lg: 10 }}
          py={2}
          as="a"
          justifyContent="space-between"
          alignItems="center"
          _hover={{
            textDecoration: "none",
          }}
        >
          <Flex gap={"10px"} alignItems={"center"}>
            <Text
              fontSize={{ lg: "30px" }}
              fontWeight={600}
              color={useColorModeValue("gray.600", "gray.200")}
            >
              {label}
            </Text>
  
            {children && (
              <Icon
                as={ChevronDownIcon}
                transition={"all .25s ease-in-out"}
                transform={isOpen ? "rotate(180deg)" : ""}
                w={6}
                h={6}
              />
            )}
          </Flex>
        </Box>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
          <Stack
            mt={0}
            ml={{ lg: 10 }}
            mr={{ lg: 10 }}
            borderTop={"1px solid lightgrey"}
            align={"start"}
          >
            {children &&
              children.map((child, index) => (
                <Box
                  fontSize={{ lg: "25px" }}
                  fontWeight={600}
                  pl={5}
                  w={"100%"}
                  as="a"
                  key={index}
                  py={2}
                  borderBottom={"1px solid lightgrey"}
                >
                  {child.label}
                </Box>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  const NAV_ITEMS = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Services",
      href: "/productPractices",
    },
    {
      label: "Contact",
      href: "/contactUs",
    },
  ];
  
  export default Navbar;
  
  {
    /*<Image w="140px" maxW={"100%"} objectFit={"contain"} src={logo1} h={"100%"} /> */
  }
  {
    /*<Box w={{base:"20%",lg:"10%"}}>
                <Image w={"100%"} h={"100%"} src={logo1} />
              </Box> */
  }
  
  {
    /*<Box w={{base:"20%",lg:"10%"}}>
            <Image w={"100%"} h={"100%"} src={logo1} />
            </Box> */
  }
  