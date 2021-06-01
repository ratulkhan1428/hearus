import { Box, Center, Link, Text } from "@chakra-ui/react";
import {
  FaInstagram,
  FaWhatsapp,
  FaCopyright,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <Box
      w="100vw"
      h="20vh"
      bg="blue.50"
      d="flex"
      flexDir="column"
      alignItems="center"
      pt={4}
    >
      <Box w="10vw" d="flex" alignItems="center" justifyContent="space-between">
        <Center
          as="a"
          href="https://www.instagram.com/hearus.me/"
          w="35px"
          h="35px"
          border="1px"
          borderColor="gray.500"
          borderRadius="full"
          ml={4}
        >
          <FaInstagram style={{ width: "25px", height: "25px" }} />
        </Center>
        <Center
          as="a"
          href="https://wa.me/message/N7VDQFACNUKGD1"
          w="35px"
          h="35px"
          border="1px"
          borderColor="gray.500"
          borderRadius="full"
        >
          <FaWhatsapp style={{ width: "25px", height: "25px" }} />
        </Center>
        <Center
          as="a"
          href="https://in.linkedin.com/company/hearus"
          w="35px"
          h="35px"
          border="1px"
          borderColor="gray.500"
          borderRadius="full"
        >
          <FaLinkedin style={{ width: "25px", height: "25px" }} />
        </Center>
      </Box>
      <Box d="flex" alignItems="center" mt={3}>
        <Box ml={2}>Home</Box>
        <Box ml={2}>Privacy</Box>
        <Box ml={2}>Terms and Service</Box>
        <Box ml={2}>About</Box>
      </Box>
      <Box d="flex" alignItems="center" mt={2}>
        <Text mr={2}> HearUs</Text>
        <FaCopyright style={{ width: "20px", height: "15px" }} />
        <Text ml={1}>2021</Text>
      </Box>
    </Box>
  );
}

export default Footer;
