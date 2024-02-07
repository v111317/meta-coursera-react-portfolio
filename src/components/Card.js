import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  //return null;
  return (
    <>
      
        <Box  borderRadius="10px" bg="white">
          <Image boxSize="cover" borderRadius="lg" src={imageSrc} alt="project image"/>
          <Box color="black" bg="white" borderRadius="lg">
            <VStack p="2" spacing="1px" align="left">
            <Heading colorScheme="black" as="h3" size="md">{title}</Heading>
            <Text fontSize="xs" color="slategray">{description}</Text>
            <Text pt="2" fontSize="xs">See More <FontAwesomeIcon icon={faArrowRight} size="1x"/></Text>
            </VStack>
          </Box>
        </Box>
      
    </>
  );
};

export default Card;
