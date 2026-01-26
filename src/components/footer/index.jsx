import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex justify='center' py='1rem' borderTopWidth='1px'>
      <Text textStyle="caption" color="black" textAlign="center">
        © 2026. Korean Cumberland Presbyterian Church. All Rights Reserved <br/>
        4216 S Charleston Ave | Springfield, MO 65804 <br/>
      </Text>
    </Flex>
  )
}

export default Footer;