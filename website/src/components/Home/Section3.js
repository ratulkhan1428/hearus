import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ReactComponent as Psy } from "../../assets/psy.svg";

function Section3() {
  return (
    <Box
      w="100vw"
      h="100vh"
      color="white"
      d="flex"
      alignItems="center"
      justifyContent="center"
      flexDir="row"
      bg="gray.200"
    >
      <Box
        w="50vw"
        h="100vh"
        d="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box ml={5}>
          <Heading size="2xl" color="blue.800" fontFamily="serif">
            Book A Session with
          </Heading>
          <Heading size="2xl" color="blue.800" mt={3} fontFamily="serif">
            Licensed Psychologists
          </Heading>
          <Text color="gray.500" mt={5} w="40vw" letterSpacing="wider">
            Need more help? Book sessions anonymously with professional
            psychologists 24*7 by sitting at your home at the most affordable
            price
          </Text>
          <Link to="/addBooking">
            <Button
              mt={8}
              size="lg"
              color="white"
              bg="#254547"
              _hover={{ bg: "#0B5351", color: "#f8feff" }}
            >
              Book Now
            </Button>
          </Link>
        </Box>
      </Box>
      <Box w="50vw" h="100vh" mt={20}>
        <Psy />
      </Box>
    </Box>
  );
}

export default Section3;
