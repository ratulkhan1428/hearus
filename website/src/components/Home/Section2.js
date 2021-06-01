import { Box, Heading, Text, Image, Button } from "@chakra-ui/react";
import app from "../../assets/app.png";

function Section2() {
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
      <Box w="50vw" h="100vh" mt={20}>
        <Image src={app} alt="HearUs Application" />
      </Box>
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
            Talk To Trained
          </Heading>
          <Heading size="2xl" color="blue.800" mt={4} fontFamily="serif">
            Empathetic Listeners
          </Heading>
          <Text color="gray.500" mt={5} w="40vw" letterSpacing="wider">
            Hear Us is a group of trained empathetic listeners who decided to
            use their skills for a good cause. No matter who you are or where do
            you live or what you’re going through, we are here to listen to you
            and care for you. We might be strangers on the surface, but
            underneath we're just the friends you haven't met yet. Hear Us
            provides you free of cost sessions with empathetic listeners.
          </Text>
          <Button
            as="a"
            href="https://play.google.com/store/apps/details?id=me.hearus.app"
            size="lg"
            bg="#254547"
            color="white"
            mt={8}
            _hover={{ bg: "#0B5351", color: "#f8feff" }}
          >
            Download the App Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Section2;
