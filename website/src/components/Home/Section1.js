import { Box, Heading, Text } from "@chakra-ui/react";
import { ReactComponent as SVGImage } from "../../assets/section1.svg";

function Section1() {
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
            Feeling Low?
          </Heading>
          <Heading size="2xl" color="blue.800" mt={4} fontFamily="serif">
            Need someone to hear you?
          </Heading>
          <Text color="gray.500" mt={5} w="40vw" letterSpacing="wider">
            Often there arise some thoughts in the human mind that tend to
            impact our day to day lives negatively. Poorly-managed negative
            thoughts are not good for mental as well as physical health.
            Negative attitudes and feelings of helplessness can create chronic
            stress, which upsets the body's hormone balance depleting the brain
            chemicals required for happiness. It is rightly said that "Misery
            loves Company" but in many cases, people are not comfortable in
            sharing their miseries with known ones.
          </Text>
        </Box>
      </Box>
      <Box w="50vw" h="100vh" mt={20}>
        <SVGImage />
      </Box>
    </Box>
  );
}

export default Section1;
