import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import Background from "../../assets/bg.png";

function Hero() {
  return (
    <Box
      w="100vw"
      h="100vh"
      backgroundImage={`url(${Background})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      d="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Heading size="3xl" color="blue.800">
        Welcome To Hear Us
      </Heading>
      <Heading size="3xl" color="#F6FFF8" mt={10}>
        Here To Hear You
      </Heading>
    </Box>
  );
}

export default Hero;
