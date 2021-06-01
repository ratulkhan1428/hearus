import { useState } from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ ques, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <Box p={4} border="1px" borderColor="orange.900" borderRadius="lg" mb={2}>
      <Box d="flex" w="95vw" alignItems="center" justifyContent="space-between">
        <Heading size="lg" color="blue.800">
          {ques}
        </Heading>
        <Button onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </Button>
      </Box>
      {showInfo && (
        <Text color="blue.700" fontSize="md" textAlign="left" mt={2}>
          {info}
        </Text>
      )}
    </Box>
  );
};

function FAQ() {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <Box
      pt={5}
      px={2}
      d="flex"
      alignItems="center"
      flexDirection="column"
      bg="blue.50"
    >
      <Heading fontWeight="bold" size="2xl" mb={10} color="blue.900">
        FAQ
      </Heading>
      <Box mb={4}>
        <Question
          ques=" What is Hear Us ?"
          info=" HearUS is an online emotional support system which provides trained
          listeners so that you can share your problems and issues without being
          judged.You can also get consultation from licensed psychologists."
        />
        <Question
          ques=" Who are the listeners?"
          info=" Listeners are trained volunteers under the supervision of Psychologists , majorly someone who belongs to this field."
        />
        <Question
          ques="Can I become a listener?"
          info=" Yes, anyone who wants to help others can volunteer as a listener by just filling out a form."
        />
        <Question
          ques=" How do I book a session?"
          info=" (i) Click on the ‘Book Now’ button.
(ii) Fill out the form
(iii) Choose the duration for the session
(iv) Click on ‘Pay Now’."
        />
        <Question
          ques=" Is there any other way of booking a session or to connect to a listener?"
          info=" Yes, you can book a session or connect to a listener using WhatsApp by clicking on the Whatsapp button."
        />
        <Question
          ques="What are the charges ?"
          info="Its totally free of cost if you want to connect to a listener. Online counselling sessions with licensed psychologists are paid."
        />
      </Box>
    </Box>
  );
}

export default FAQ;
