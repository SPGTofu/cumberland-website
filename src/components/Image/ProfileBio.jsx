import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function ProfileBio({ name, position, photoSrc, children, reverse = false }) {
  return (
    <Flex
  		direction={{ base: "column", md: reverse ? "row-reverse" : "row" }}
  		align="center"
  		gap={8}
  		py={10}
  		borderBottomWidth="1px"
  		borderColor="gray.200"
		>
      <Box minW={{ base: "100%", md: "280px" }} textAlign="center">
        <Image
          src={photoSrc}
          alt={name}
          w="260px"
          h="260px"
          objectFit="cover"
          borderRadius="full"
          mx="auto"
          mb={4}
          fallbackSrc="/placeholder-profile.jpg"
        />
        <Text fontSize="xl" fontWeight="bold">
          {name}
        </Text>
        <Text fontSize="md" color="gray.600">
          {position}
        </Text>
      </Box>
      <Box flex="1" fontSize="md" lineHeight="1.8" textAlign="left" >
        {children}
      </Box>
    </Flex>
  );
}
