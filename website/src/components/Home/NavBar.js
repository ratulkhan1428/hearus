import {
  Box,
  Flex,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import { Link as RouterLink } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

function NavBar() {
  return (
    <Flex w="100vw" h="13vh" align="center" pos="fixed">
      <Image
        src={logo}
        objectFit="cover"
        alt="HearUs"
        boxSize="70px"
        ml={5}
        mt={2}
      />
      <Box ml={60} mr={10}>
        <Text color="blue.700" fontWeight="bold" fontSize="lg">
          <Link as={RouterLink} to="/">
            Home
          </Link>
        </Text>
      </Box>
      <Box mr={10}>
        <Text color="blue.700" fontWeight="bold" fontSize="lg">
          <Link as={RouterLink} to="/">
            About
          </Link>
        </Text>
      </Box>
      <Box mr={10}>
        <Text color="blue.700" fontWeight="bold" fontSize="lg">
          <Link as={RouterLink} to="/">
            Blog
          </Link>
        </Text>
      </Box>
      <Box mr={10}>
        <Text color="blue.700" fontWeight="bold" fontSize="lg">
          <Link as={RouterLink} to="/">
            Contact
          </Link>
        </Text>
      </Box>
      <Box mr={10}>
        <Text color="blue.700" fontWeight="bold" fontSize="lg">
          <Link as={RouterLink} to="/">
            FAQ
          </Link>
        </Text>
      </Box>
      <Box mr={10}>
        <Text
          color="blue.700"
          fontWeight="bold"
          fontSize="lg"
          border="1px"
          borderColor="gray.500"
          p={2}
          borderRadius="xl"
        >
          <Link
            as="a"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfMnvB0eVuRvI63OGZvOCH8oiuY6UgQp4mHit0HnNkw8s4X8w/viewform"
            textDecoration="none"
          >
            <Box d="flex" alignItems="center">
              Volunteer as Listener
              <Box ml={2}>
                <FaHeart />
              </Box>
            </Box>
          </Link>
        </Text>
      </Box>
      <Box mr={10}>
        <Link as={RouterLink} to="/addBooking">
          <button style={{height: '60px', width: '180px', backgroundColor: 'aqua', borderRadius: '10px'}}>
            <Text color="blue.700" fontWeight="bold" fontSize="lg">
              Book Appointment 
            </Text>
          </button>
        </Link>
      </Box>
      <Box mr={10}>
        <Link as={RouterLink} to="/login">
          <button style={{height: '60px', width: '120px', backgroundColor: 'lightgray', borderRadius: '10px'}}>
            <Text color="blue.700" fontWeight="bold" fontSize="lg">
              Login
            </Text>
          </button>
        </Link>
      </Box>
      {/* <Box
        mr={10}
        d="flex"
        alignItems="center"
        color="red.500"
        fontWeight="bold"
        fontSize="lg"
        border="1px"
        borderColor="gray.500"
        p={2}
        borderRadius="xl"
      >
        <Text>Call Listener</Text>
        <Box ml={2}>
          <FaPhone />
        </Box>
      </Box> */}
    </Flex>
  );
}

export default NavBar;
