import { Box, Text } from "@chakra-ui/react";
import React from "react";

function Donate() {
  return (
    <div>
      <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
        <Text
          textAlign={"center"}
          fontWeight={600}
          color={"rgb(84, 0, 0)"}
          fontSize={{base:"26px",lg:"30px"}}
          lineHeight={"30px"}
        >
          Donate
        </Text>
        <Text color={"rgb(105, 76, 92)"}
        fontWeight={400}
        fontSize={{base:"12px",lg:"16px"}}
        lineHeight={"28px"}
        textAlign={"center"}>
          All donations to any service of this ashram are greatly appreciated.
          It is only through the generosity of our guests/pilgrims/visitors that
          we can continue to feed the hungry, heal the sick, house the homeless
          and uplift the downtrodden.
        </Text>
        <Text color={"rgb(105, 76, 92)"}
        fontWeight={700}
        fontSize={{base:"12px",lg:"16px"}}
        lineHeight={"28px"}
        textAlign={"center"}>
          All contributions are tax-exempt under Section 80G of the Income Tax
          Act. Please obtain receipts of all donations.
        </Text>
        <Text color={"rgb(105, 76, 92)"}
        fontWeight={400}
        fontSize={{base:"12px",lg:"16px"}}
        lineHeight={"28px"}
        textAlign={"center"}>
          All donors are requested to remit donations directly into the Swami
          Shukdevanand Trust or to personally deliver the donation (as a cheque
          or draft payable to the Swami Shukdevanand Trust) to the reception
          area of the ashram.
        </Text>
        <Text color={"rgb(105, 76, 92)"}
        fontWeight={400}
        fontSize={{base:"12px",lg:"16px"}}
        lineHeight={"28px"}
        textAlign={"center"}>
          Donors should obtain receipts for their donations in the reception
          area. You may donate by mail by sending a cheque or bank draft made
          payable to Swami Shukdevanand Trust.
        </Text>
        <Text color={"rgb(105, 76, 92)"}
        fontWeight={400}
        fontSize={{base:"12px",lg:"16px"}}
        lineHeight={"28px"}
        textAlign={"center"}>
          Please mail to Swami Shudevanand Trust, Parmarth Niketan, Rishikesh
          (Himalayas), India 249 304 and request a receipt. There are also
          several, special ways in which devotees frequently choose to donate.
          For more information regarding donations or any other aspect of the
          Trust, please contact the office at the following address.
        </Text>
        <Text color={"rgb(105, 76, 92)"}
        fontWeight={700}
        fontSize={{base:"12px",lg:"16px"}}
        lineHeight={"28px"}
        textAlign={"center"}>
          Parmarth Niketan Ashram, P.O. Swargashram, Rishikesh Himalayas –
          249304 INDIA Telephone: +91-135-2434301, 2434302, Fax: +91-135-2440066
          E-mail: parmarth@parmarth.com
        </Text>
      </Box>
    </div>
  );
}

export default Donate;
