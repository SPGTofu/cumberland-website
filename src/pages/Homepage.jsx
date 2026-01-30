import PageWrapper from './PageWrapper';
import { Box, Text, Divider } from '@chakra-ui/react';
import GoogleMapSection from "../components/maps/GoogleMapSection";
import ImageRotator from '../components/Image/ImageRotator';
import { translate } from '../components/languages/translations';

const Homepage = () => {
  const position = {lat: 37.13683574512634, lng: -93.26230885169069}

  const images = [
    "/photo1.jpg",
    "/photo2.jpg", 
    "/group.JPEG"
  ];

  return (
    <PageWrapper>
      <Box position="relative">
        <Box w="100%" h={{ base: "260px", md: "360px", lg: "45rem" }} overflow="hidden">
          <ImageRotator images={images} />
        </Box>
        
        <Box display="flex" alignItems="center" w="100%" my="1rem" mx="auto">
          <Divider flex="1" borderColor="#aedeea" />
        </Box>

        <Box w="70%" h="500px" background="#ffffff" p="20px" mb="50px" alignItems="center" mx="auto">
          <Text fontSize="3rem" fontWeight="bold" color="black" textAlign="left">
            {translate('home.heroTitle')}
          </Text>
          <Text fontSize="2rem" color="black" textAlign="left">
            {translate('home.heroSubtitle')}
          </Text>       
        </Box>

        <Box display="flex" alignItems="center" w="90%" my="3rem" mx="auto">
          <Divider flex="1" borderColor="#aedeea" />
            <Text mx="1.5rem" fontSize="1.25rem" fontWeight="500" letterSpacing="0.15em" whiteSpace="nowrap">
              CUMBERLAND CHURCH
            </Text>
          <Divider flex="1" borderColor="#aedeea" />
        </Box>

        <Box display="flex" justifyContent="space-between" alignItems="flex-start" p="0 2%" mb="40px">
          <Box w="59%" h="400px" background="#f7f5f2" p="20px" mb="50px" borderRadius="2xl">
            <Text fontSize="3rem" fontWeight="bold" color="black" textAlign="left">
              {translate('home.aboutServicesTitle')}
            </Text>
            <Text fontSize="1.5rem" color="black" textAlign="left">
              {translate('home.aboutServicesBody')}
            </Text>
          </Box>
        <Box w="39%" h="400px">
          <GoogleMapSection center={position} />
        </Box>
        </Box>
      </Box>
    </PageWrapper>
  );
}

export default Homepage;