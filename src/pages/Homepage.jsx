import PageWrapper from './PageWrapper';
import { Box, Text } from '@chakra-ui/react';
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import ImageRotator from '../components/ImageRotator';
import { translate } from '../components/languages/translations';

const Homepage = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_KEY;
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
        
        <Box w="100%" h="500px" background="#d3c0b0" p="20px" mb="50px">
          <Text fontSize="3rem" fontWeight="bold" color="black" textAlign="center">
            {translate('home.heroTitle')}
          </Text>
          <Text fontSize="2rem" color="black" textAlign="center">
            {translate('home.heroSubtitle')}
          </Text>       
        </Box>

        <Box display="flex" justifyContent="space-between" alignItems="flex-start" p="0 2%" mb="40px">
          <Box w="59%" h="400px" background="#f6eae1" p="20px" mb="50px">
            <Text fontSize="3rem" fontWeight="bold" color="black" textAlign="left">
              {translate('home.aboutServicesTitle')}
            </Text>
            <Text fontSize="1.5rem" color="black" textAlign="left">
              {translate('home.aboutServicesBody')}
            </Text>
          </Box>
        <Box w="39%" h="400px">
          <LoadScript googleMapsApiKey={apiKey} libraries={['places']}>
            <GoogleMap mapContainerStyle={{ width: "90%", height: "100%" }} center={position} zoom={15}>
              <MarkerF position={position}/>
            </GoogleMap>
          </LoadScript>
        </Box>
        </Box>
      </Box>
    </PageWrapper>
  );
}

export default Homepage;