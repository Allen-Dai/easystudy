import { Flex, Box, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Card = ({ children, state }) => {
  const [display, setDisplay] = useState("none");
  useEffect(() => {
    setDisplay("none");
  }, [state]);

  function show() {
    setDisplay("block");
  }
  return (
    <Flex
      width="180px"
      height="200px"
      bg="white"
      color="black"
      alignItems="center"
      justifyContent="center"
      borderRadius={15}
      onClick={show}
    >
      <Box display={display}>
        <Text fontSize="2xl">{children}</Text>
      </Box>
    </Flex>
  );
};

export default Card;
