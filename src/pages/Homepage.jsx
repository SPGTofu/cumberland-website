import PageWrapper from './PageWrapper';
import { Box, Text } from '@chakra-ui/react';
import GoogleMapSection from "../components/maps/GoogleMapSection";
import ImageRotator from '../components/Image/ImageRotator';
import { translate } from '../components/languages/translations';

const Homepage = () => {
  document.title = translate('nav.home')

  const position = {lat: 37.13683574512634, lng: -93.26230885169069}

  const images = [
    "/photo1.jpg",
    "/photo2.jpg", 
    "/group.JPEG"
  ];

  return (
    <PageWrapper>
      <Box position="relative">
        <Box w="100%" h="100%">
          <ImageRotator images={images} />
        </Box>
        <Box
          bg='#FBEFEF'
          w="100%"
          py={{ base: '3rem', md: '5rem' }}
          px="20px"
          mb={{ base: '2rem', md: '50px' }}
        >
          <Text textStyle='h0' textAlign="center">
            {translate('home.heroTitle')}
          </Text>
          {/* <Text fontSize="clamp(1.25rem, 3vw, 2rem)" color="black" textAlign="center">
            {translate('home.heroSubtitle')}
          </Text>        */}
        </Box>
        

        <Box
          display="flex"
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          px="2%"
          mb={{ base: '2rem', md: '40px' }}
          gap={{ base: '2rem', md: '0' }}
        >
          <Box
            w={{ base: '100%', md: '59%' }}
            h={{ base: '300px', md: '400px' }}
            background="#FBEFEF"
            p="20px"
          >
            <Text textStyle="h1" textAlign="left">
              {translate('home.aboutServicesTitle')}
            </Text>
            <Text textStyle="h3" fontWeight='normal' color="black" textAlign="left">
              {translate('home.aboutServicesBody')}
            </Text>
          </Box>
          <Box
            w={{ base: '100%', md: '39%' }}
            h={{ base: '300px', md: '400px' }}
            display='flex'
            justifyContent='center'
          >
            <GoogleMapSection center={position} />
          </Box>
        </Box>
      </Box>
    </PageWrapper>
  );
}

export default Homepage;