import PageWrapper from './PageWrapper';
import { translate } from '../components/languages/translations';
import { Box, Text, Divider, Image, Flex } from '@chakra-ui/react';
import { boxShadow, BubbleText } from '../components/BubbleTextOverlay';

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
        <Box position="absolute" inset="0" bgGradient="linear(to-b, rgba(255, 255, 255, 0.27), rgba(247, 245, 242, 0.96))" />

        <Flex h='100%' w='100%' fill='1' position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textAlign='left' justify='center' align='center'>
          <Flex
            fill='1'
            direction='column'
            alignItems='flex-start'
            w={{ base: '80%', sm: '70%', md: '60%', lg: '50%' }}
          >
            <Text textStyle="h1" color="black">
              {translate('nav.aboutItems.whoWeAre')}
            </Text>
            <Text textStyle='h3' fontWeight='500' color="gray.700">
              {translate('whoWeAre.whoCumberland')}
            </Text>
          </Flex>
        </Flex>
      </Box>

      <Box display="flex" alignItems="center" w="100%" my="3rem" mx="auto">
        <Divider flex="1" borderColor="#aedeea" />
      </Box>

      <Flex
        mb="5rem"
        gap="2.5rem"
        flexWrap={{ base: "wrap", md: "nowrap" }}
        alignItems="stretch"
        mx={{ base: '0', md: '0rem' }}
        w={{ base: '100%' }}
        justify='center'
      > 
        <Box w={{ base: "100%", md: "48%" }} borderRadius={{ base: 0, md: "xl"}} overflow="hidden" boxshadow={{ base: '', md: boxShadow }}>
          <Image
            src={images[0]}
            alt=""
            w="100%"
            h={{ base: "340px", md: "100%" }}
            objectFit="cover"
            objectPosition="center"
          />
        </Box>

        <BubbleText
          textAlign='left'
          w={{ base: "100%", md: "52%" }}
          bg='accent2'
          px={{ base: "2rem", md: "3.5rem", lg: '5rem' }}
          py={{ base: "1.5rem", md: "2.5rem", lg: '3.5rem' }}
          boxshadow={{ base: '', md: boxShadow }}
        >
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
        </BubbleText>
      </Flex>

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
