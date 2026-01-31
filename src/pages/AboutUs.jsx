import PageWrapper from './PageWrapper';
import { translate } from '../components/languages/translations';
import { Box, Text, Divider, Image, Flex } from '@chakra-ui/react';
import { BubbleText } from '../components/BubbleTextOverlay';

const AboutUs = () => {
  document.title = translate('nav.aboutItems.whoWeAre')
  const images = [
    "/photo1.jpg",
    "/photo2.jpg",
    "/group.JPEG",
  ];

  return (  
    <PageWrapper>
      <Box w="100%" position="relative" h={{ base: "280px", md: "380px", lg: "520px" }} overflow="hidden">
        <Image src={images[1]} w="100%" h="100%" objectFit="cover" objectPosition="center" filter="saturate(0.95)" />
        <Box position="absolute" inset="0" bg="rgba(255,255,255,0.35)" />
        <Box position="absolute" inset="0" bgGradient="linear(to-b, rgba(255,255,255,0.05), rgba(247,245,242,0.85))" />

        <Flex fill='1' position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
          <Flex direction='column' alignItems='center'>
            <Text textStyle="h0" color="white" textAlign="left" lineHeight="1.1" textOverflow="ellipsis">
              {translate('nav.aboutItems.whoWeAre')}
            </Text>
          </Flex>
        </Flex>
      </Box>
      
      <Flex px='clamp(1%, 20%, 50%)' justify='center' my='clamp(1rem, 3rem, 5rem)'>
        <BubbleText
          text={translate('whoWeAre.whoCumberland')}
          textStyle='h4'
          textAlign='left'
          width={{ base : '100%', md: '100%' }}
        />
      </Flex>


      <Box maxW="1200px" mx="auto" px="2rem" mb="5rem" display="flex" gap="2.5rem" flexWrap={{ base: "wrap", md: "nowrap" }} alignItems="stretch">
        
        <Box w={{ base: "100%", md: "48%" }} borderRadius="2xl" overflow="hidden" bg="#f7f5f2">
          <Image
            src={images[0]}
            alt=""
            w="100%"
            h={{ base: "240px", md: "100%" }}
            objectFit="cover"
            objectPosition="center"
          />
        </Box>

        <Box w={{ base: "100%", md: "52%" }} bg="#f7f5f2" borderRadius="2xl" p={{ base: "1.5rem", md: "2.5rem" }}>
          <Text fontSize={{ base: "1.8rem", md: "2.2rem" }} fontWeight="700" color="black" textAlign="left">
            {translate('whoWeAre.whatTitle')}
          </Text>
          <Text fontSize="1.15rem" color="gray.700" lineHeight="1.8" textAlign="left" mt="1rem">
            {translate('whoWeAre.whatCumberland')}
          </Text>

          <Box h="1px" bg="#aedeea" w="100%" my="1.5rem" opacity="0.9" />

          <Text fontSize="1.05rem" color="gray.600" lineHeight="1.8" textAlign="left">
            {translate('whoWeAre.whyCumberland')}
          </Text>
        </Box>
      </Box>

      <Box display="flex" alignItems="center" w="90%" my="3rem" mx="auto">
        <Divider flex="1" borderColor="#aedeea" />
        <Text mx="1.5rem" fontSize="1.05rem" fontWeight="600" letterSpacing="0.18em" color="#6b4f3a" whiteSpace="nowrap">
          CUMBERLAND CHURCH
        </Text>
        <Divider flex="1" borderColor="#aedeea" />
      </Box>

      <Box maxW="1200px" mx="auto" px="2rem" mb="5rem" display="flex" gap="2rem" flexWrap={{ base: "wrap", md: "nowrap" }}>
        
        <Box flex="1" minW={{ base: "100%", md: "0" }} bg="#ffffff" borderRadius="2xl" p="2.2rem" boxShadow="sm" border="1px solid rgba(174,222,234,0.35)">
          <Text fontSize="1.5rem" fontWeight="700" color="black" textAlign="left">
            {translate('whoWeAre.whatTitle')}
          </Text>
          <Text fontSize="1.05rem" color="gray.700" lineHeight="1.75" textAlign="left" mt="0.8rem">
            {translate('whoWeAre.whatCumberland')}
          </Text>
        </Box>

        <Box flex="1" minW={{ base: "100%", md: "0" }} bg="#ffffff" borderRadius="2xl" p="2.2rem" boxShadow="sm" border="1px solid rgba(174,222,234,0.35)">
          <Text fontSize="1.5rem" fontWeight="700" color="black" textAlign="left">
            {translate('whoWeAre.whyTitle')}
          </Text>
          <Text fontSize="1.05rem" color="gray.700" lineHeight="1.75" textAlign="left" mt="0.8rem">
            {translate('whoWeAre.whyCumberland')}
          </Text>
        </Box>

        <Box flex="1" minW={{ base: "100%", md: "0" }} bg="#ffffff" borderRadius="2xl" p="2.2rem" boxShadow="sm" border="1px solid rgba(174,222,234,0.35)">
          <Text fontSize="1.5rem" fontWeight="700" color="black" textAlign="left">
            {translate('whoWeAre.giveTitle')}
          </Text>
          <Text fontSize="1.05rem" color="gray.700" lineHeight="1.75" textAlign="left" mt="0.8rem">
            {translate('whoWeAre.giveCumberland')}
          </Text>
        </Box>
      </Box>
    </PageWrapper>
  );
}
 
export default AboutUs;
